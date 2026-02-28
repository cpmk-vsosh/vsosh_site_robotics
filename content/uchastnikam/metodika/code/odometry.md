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

// Пины управления моторами
const int PIN_SPEED_L = 5, PIN_DIR_L = 4;
const int PIN_SPEED_R = 6, PIN_DIR_R = 7;

// Константы пинов энкодеров
const int ENC_L_A = 2; // Прерывание
const int ENC_L_B = 8; // Фаза B
const int ENC_R_A = 3; // Прерывание
const int ENC_R_B = 9; // Фаза B

// Параметры (TICKS_PER_REV теперь в 2 или 4 раза больше, проверьте экспериментально)
const float WHEEL_DIAMETER = 0.065; // Диаметр колеса в метрах (65мм)
const float WHEEL_BASE = 0.2;    // Расстояние между колесами в метрах (200мм)  
float TICKS_PER_REV = 858.0; // Импульсов на 1 полный оборот колеса

// Переменные одометрии (volatile, так как меняются в прерываниях)
volatile long left_ticks = 0;
volatile long right_ticks = 0;

// Глобальные координаты
float x = 0.0, y = 0.0, theta = 0.0;
long last_left_ticks = 0;
long last_right_ticks = 0;

void setup() {
  Serial.begin(115200);

  pinMode(PIN_SPEED_L, OUTPUT); pinMode(PIN_DIR_L, OUTPUT);
  pinMode(PIN_SPEED_R, OUTPUT); pinMode(PIN_DIR_R, OUTPUT);

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
```
