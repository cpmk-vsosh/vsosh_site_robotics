---
title: "Пример движения по линии, с подсчетом перекрестков"
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

// пример движения по линии, с подсчетом перекрестков

// Пины подключениия моторов
const int PIN_SPEED_L = 5, PIN_DIR_L = 4;
const int PIN_SPEED_R = 6, PIN_DIR_R = 7;

// Параметры регулятора
float Kp = 0.5;
int baseSpeed = 150;  // Начальная скорость
int threshold = 600;  // Порог для определения черного (настройте под свои датчики)

// Переменные для подсчета
int intersectionCount = 0;    // число перекрестков, которые увидел пробот
bool onIntersection = false;  // Флаг: находимся ли мы сейчас на перекрестке


void setup() {
  // настраиваем пины управления моторами как выход
  pinMode(PIN_SPEED_L, OUTPUT);
  pinMode(PIN_DIR_L, OUTPUT);
  pinMode(PIN_SPEED_R, OUTPUT);
  pinMode(PIN_DIR_R, OUTPUT);
  // настраиваем направление вращения моторов для езды вперед, зависит от полярности подключения
  digitalWrite(PIN_DIR_L, HIGH);
  digitalWrite(PIN_DIR_R, LOW);
  delay(1000);  // небольшая пауза, перед началом движения
}

void loop() {
  int sensorL = analogRead(A0);
  int sensorR = analogRead(A1);

  // Логика подсчета перекрестков
  // Если оба датчика видят черное (значение > порога)
  if (sensorL > threshold && sensorR > threshold) {
    if (!onIntersection) {  // Если это новый перекресток, а не тот же самый
      intersectionCount++;
      onIntersection = true;
    }
  } else {
    // Если хотя бы один датчик съехал с перекрестка, сбрасываем флаг
    onIntersection = false;
  }

  //  П-регулятор (езда по линии)
  int error = sensorL - sensorR;
  int adjustment = error * Kp;

  int speedL = constrain(baseSpeed + adjustment, 0, 255);  // обрезка
  int speedR = constrain(baseSpeed - adjustment, 0, 255);

  analogWrite(PIN_SPEED_L, speedL);
  analogWrite(PIN_SPEED_R, speedR);
  if (intersectionCount >= 3) {  // остановимся после 3 перекрестка
    analogWrite(PIN_SPEED_L, 0);
    analogWrite(PIN_SPEED_R, 0);
    while (1)
      ;
  }
  delay(10);
}

````
