---
title: "Sharp GP2Y0A41SK0F"
date: 2026-02-26T10:00:00+03:00
publishDate: 2026-02-26T10:00:00+03:00
draft: false
author: "Команда ЦПМК"
---
````cpp
/*
  Пример кода для датчика Sharp GP2Y0A41SK0F (4-30 см)
*/

const int sensorPin = A0; // Аналоговый пин, к которому подключен Vo
const int numReadings = 10; // Количество считываний для усреднения
int readings[numReadings]; 
int readIndex = 0; 
int total = 0; 
int average = 0;

void setup() {
  Serial.begin(9600);
  // Инициализация массива считываний
  for (int i = 0; i < numReadings; i++) {
    readings[i] = 0;
  }
}

void loop() {
  // --- Усреднение показаний (для стабильности) ---
  total = total - readings[readIndex];
  readings[readIndex] = analogRead(sensorPin);
  total = total + readings[readIndex];
  readIndex = readIndex + 1;

  if (readIndex >= numReadings) {
    readIndex = 0;
  }
  average = total / numReadings;

  // --- Преобразование в напряжение (0-5В -> 0-1023) ---
  float voltage = average * (5.0 / 1023.0);

  // --- Преобразование напряжения в расстояние (см) ---
  // Формула основана на аппроксимации кривой датчика
  // Для GP2Y0A41SK0F (4-30 см) часто используют: distance = 12.0 / (voltage - 0.1) 
  // или калибровочные формулы [1]
  float distance = 13.0 * pow(voltage, -1); // Упрощенная формула

  // Вывод данных
  Serial.print("Voltage: ");
  Serial.print(voltage);
  Serial.print("V, Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  delay(50); // Небольшая пауза
}

````
