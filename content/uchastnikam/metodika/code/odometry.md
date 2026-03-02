---
title: "Пример вычисления одометрии с помощью энкодеров"
date: 2026-02-27T10:00:00+03:00
publishDate: 2026-02-27T10:00:00+03:00
draft: false
author: "Команда ЦПМК"
---

![jga25-370b](/img/jga25-370b.png)

````cpp

// Copyright (c) 2026 ЦПМК по информатике
// Licensed under the MIT License.
// https://robot.mipt.ru/

/*Пример подключения
Синий: Питание энкодера (+3.3...5 В).
Чёрный: Питание энкодера (GND).
Зелёный: Сигнал 1 (датчик Холла A).
Жёлтый: Сигнал 2 (датчик Холла B).
Красный и Белый - Питание двигателя на шилд мотора
*/
#include <math.h>

// Константы пинов энкодеров
const int ENC_L_A = 2; // Прерывание левого мотора по фазе A
const int ENC_L_B = 8; // Фаза B левого мотора
const int ENC_R_A = 3; // Прерывание правого мотора по фазе A
const int ENC_R_B = 9; // Фаза B правого мотора

// Параметры нужно уточнить для вашего робота 
const float WHEEL_DIAMETER = 0.065; // Диаметр колеса в метрах (65мм)
const float WHEEL_BASE = 0.2;    // Расстояние между колесами в метрах (200мм)  
float TICKS_PER_REV = 858.0; // Импульсов на 1 полный оборот колеса
                             // возьмите из описания мотора или проверьте экспериментально 

// Переменные одометрии (volatile, так как меняются в прерываниях)
volatile long left_ticks = 0;
volatile long right_ticks = 0;

// Глобальные координаты
float x = 0.0, y = 0.0, theta = 0.0;
long last_left_ticks = 0;
long last_right_ticks = 0;

void setup() {
  Serial.begin(115200);

  // чтобы избежать неопределенного состояния переводим пины энкодера в состояние входа с подтяжкой
  pinMode(ENC_L_A, INPUT_PULLUP);
  pinMode(ENC_L_B, INPUT_PULLUP);
  pinMode(ENC_R_A, INPUT_PULLUP);
  pinMode(ENC_R_B, INPUT_PULLUP);

  // Используем CHANGE для отслеживания каждого фронта (рост и падение)
  attachInterrupt(digitalPinToInterrupt(ENC_L_A), doEncoderL, CHANGE);
  attachInterrupt(digitalPinToInterrupt(ENC_R_A), doEncoderR, CHANGE);
}

void loop() {
  // Обновление данных раз в 50мс для плавности
  static uint32_t timer = millis();
  if (millis() - timer > 50) {
    updateOdometry();
    Serial.print("X:"); Serial.print(x, 2);
    Serial.print(" Y:"); Serial.print(y, 2);
    Serial.print(" Ang:"); Serial.println(theta * 180 / M_PI);
    timer = millis();
  }
}

// --- ОБРАБОТЧИКИ ПРЕРЫВАНИЙ (Логика фаз) ---

void doEncoderL() {
  // Если фаза А совпадает с фазой B — едем в одну сторону, если нет — в другую
  if (digitalRead(ENC_L_A) == digitalRead(ENC_L_B)) {
    left_ticks++;
  } else {
    left_ticks--;
  }
}

void doEncoderR() {
  // Для правого колеса логика может быть инвертирована в зависимости от сборки
  if (digitalRead(ENC_R_A) == digitalRead(ENC_R_B)) {
    right_ticks--; 
  } else {
    right_ticks++;
  }
}

void updateOdometry() {
  // Фиксируем текущие значения энкодеров, чтобы избежать ошибок при прерываниях
  noInterrupts();
  long current_left = left_ticks;
  long current_right = right_ticks;
  interrupts();

  // Вычисляем изменение количества тиков с момента последнего вызова
  long delta_left = current_left - last_left_ticks;
  long delta_right = current_right - last_right_ticks;

  // Сохраняем текущие значения для следующего шага
  last_left_ticks = current_left;
  last_right_ticks = current_right;

  // Переводим тики в пройденное расстояние (в метрах) для каждого колеса
  // Формула: Расстояние = (PI * D * дельта_тиков) / TICKS_PER_REV
  float dist_left = (M_PI * WHEEL_DIAMETER * delta_left) / TICKS_PER_REV;
  float dist_right = (M_PI * WHEEL_DIAMETER * delta_right) / TICKS_PER_REV;

  // Вычисляем общее перемещение центра робота и изменение угла
  float delta_s = (dist_left + dist_right) / 2.0; // Линейное движение: Среднее арифметическое пути двух колес — это то, насколько продвинулся центр робота.
  float delta_theta = (dist_right - dist_left) / WHEEL_BASE;  // Вращение: Разница в пути колес, деленная на ширину колесной базы, дает изменение угла ориентации в радианах.

  // Обновляем глобальные координаты робота
  // Используем средний угол за шаг для повышения точности
  // Тригонометрия: С помощью cos и sin мы проецируем пройденный путь delta_s на оси X и Y глобальной системы координат. 
  // Использование theta + delta_theta / 2.0 (метод Рунге-Кутты 2-го порядка) делает расчет траектории дуги более точным, чем если бы мы брали просто старый угол.
  x += delta_s * cos(theta + delta_theta / 2.0); 
  y += delta_s * sin(theta + delta_theta / 2.0);
  theta += delta_theta;

  // Нормализуем угол в диапазоне [-PI, PI]
  while (theta > M_PI) theta -= 2.0 * M_PI;
  while (theta < -M_PI) theta += 2.0 * M_PI;
}
```
