---
title: "Ультразвуковой сенсор"
date: 2026-02-26T10:00:00+03:00
publishDate: 2026-02-26T10:00:00+03:00
draft: false
author: "Команда ЦПМК"
---
````cpp
// Определяем пины подключения HC-SR04
const int TRIG_PIN = 9;
const int ECHO_PIN = 10;

void setup() {
  Serial.begin(9600);
  
  pinMode(TRIG_PIN, OUTPUT); // Trig посылает сигнал
  pinMode(ECHO_PIN, INPUT);  // Echo принимает сигнал
}

void loop() {
  //  для уверенности, опускаем Trig перед отправкой
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);

  //  Генерируем импульс 10 микросекунд
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  //  Замеряем время ответа в микросекундах
  // pulseIn ждет, пока пин станет HIGH, и возвращает время в мкс
  long duration = pulseIn(ECHO_PIN, HIGH);

  //  Вычисляем расстояние
  // Скорость звука = 340 м/с или 0.034 см/мкс.
  // Делим на 2, так как звук идет до объекта и обратно.
  float distance = duration * 0.034 / 2;

  // Вывод данных
  if (distance > 400 || distance < 2) {
    Serial.println("Out of range (2-400cm)");
  } else {
    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.println(" cm");
  }

  delay(100); // Небольшая пауза между замерами
}


````
