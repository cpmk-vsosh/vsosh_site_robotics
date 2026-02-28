---
title: "Пример управление скоростью двигателей с помощью энкодеров"
date: 2026-02-28T10:00:00+03:00
publishDate: 2028-02-28T10:00:00+03:00
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
// Пин подключения энкодеров (используем прерывания 0 и 1 на D2, D3)
const int encoderLeftPin = 2;   // Сигнал 1 левого мотора
const int encoderRightPin = 3;  // Сигнал 1 правого мотора

// Пины подключениия моторов
const int PIN_SPEED_L = 5, PIN_DIR_L = 4;
const int PIN_SPEED_R = 6, PIN_DIR_R = 7;

// Переменные для энкодеров
volatile long encoderLeftCount = 0;
volatile long encoderRightCount = 0;
long lastLeftCount = 0;
long lastRightCount = 0;

// Переменные скорости
unsigned long lastTime = 0;
const int interval = 100;  // Интервал расчета скорости (мс)

// П-регулятор параметры
double targetSpeed = 50.0;  // Целевая скорость (импульсов за интервал)
double kP = 0.5;            // Пропорциональный коэффициент

// PWM значения
int pwmLeft = 100;
int pwmRight = 100;

void setup() {
  Serial.begin(9600);

  pinMode(encoderLeftPin, INPUT_PULLUP);
  pinMode(encoderRightPin, INPUT_PULLUP);
  // Подключаем прерывания на каждый импульс
  attachInterrupt(digitalPinToInterrupt(encoderLeftPin), countLeft, RISING);
  attachInterrupt(digitalPinToInterrupt(encoderRightPin), countRight, RISING);

  // настраиваем пины управления моторами как выход
  pinMode(PIN_SPEED_L, OUTPUT);
  pinMode(PIN_DIR_L, OUTPUT);
  pinMode(PIN_SPEED_R, OUTPUT);
  pinMode(PIN_DIR_R, OUTPUT);

  delay(1000);  // небольшая пауза, перед началом движения

}

void loop() {
  unsigned long currentTime = millis();

  if (currentTime - lastTime >= interval) {
    //  Расчет текущей скорости
    long currentLeftCount = encoderLeftCount;
    long currentRightCount = encoderRightCount;

    int speedLeft = abs(currentLeftCount - lastLeftCount);
    int speedRight = abs(currentRightCount - lastRightCount);

    lastLeftCount = currentLeftCount;
    lastRightCount = currentRightCount;

    //  Регулирование (П-регулятор)
    int errorLeft = targetSpeed - speedLeft;
    int errorRight = targetSpeed - speedRight;

    pwmLeft = constrain(pwmLeft + errorLeft * kP, 0, 255);
    pwmRight = constrain(pwmRight + errorRight * kP, 0, 255);

    //  Управление моторами
    setMotors(1, pwmLeft, 1, pwmRight);

    lastTime = currentTime;

    // Отладка
    Serial.print("L: ");
    Serial.print(speedLeft);
    Serial.print(" R: ");
    Serial.print(speedRight);

  }
}

// Функции обработки прерываний
void countLeft() {
  encoderLeftCount++;
}
void countRight() {
  encoderRightCount++;
}

// Функция установки скорости и направления
// направление вращения моторов для езды вперед зависит от полярности подключения!

void setMotors(int dirL, int pwmL, int dirR, int pwmR) {
  digitalWrite(PIN_DIR_L, dirL > 0 ? HIGH : LOW);
  analogWrite(PIN_SPEED_L, pwmL);

  digitalWrite(PIN_DIR_R, !dirR > 0 ? HIGH : LOW);
  analogWrite(PIN_SPEED_R, pwmR);
}


````
