---
title: "Сенсор линии YW Robot"
date: 2026-02-26T10:00:00+03:00
publishDate: 2026-02-26T10:00:00+03:00
draft: false
author: "Команда ЦПМК"
---
![line_sens](/img/line_sens.png)
````cpp
// Пины датчиков
const int SENSOR_PINS[] = {A0, A1, A2}; 
const int SENSOR_COUNT = 3;

// Массивы для калибровки
int sensorMin[SENSOR_COUNT];
int sensorMax[SENSOR_COUNT];
int threshold[SENSOR_COUNT];

void setup() {
  Serial.begin(9600);
  
  // Инициализация калибровки
  for (int i = 0; i < SENSOR_COUNT; i++) {
    sensorMin[i] = 1023;
    sensorMax[i] = 0;
  }

  Serial.println("Калибровка: проведите датчиками над линией и фоном...");
  
  // Калибровка в течение 5 секунд
  unsigned long startTime = millis();
  while (millis() - startTime < 5000) { // калибровка длится 5 секунд
    for (int i = 0; i < SENSOR_COUNT; i++) {
      int val = analogRead(SENSOR_PINS[i]);
      if (val < sensorMin[i]) sensorMin[i] = val;
      if (val > sensorMax[i]) sensorMax[i] = val;
    }
    digitalWrite(13, (millis() / 100) % 2); // Мигаем светодиодом на 13 ножке в течении калибровки с частотой 5 Hz
  }

  // Расчет порога, как середина между черным и белым
  for (int i = 0; i < SENSOR_COUNT; i++) {
    threshold[i] = (sensorMin[i] + sensorMax[i]) / 2;
  }
  
  Serial.println("Калибровка завершена!");
}

void loop() {
  for (int i = 0; i < SENSOR_COUNT; i++) {
    int rawValue = analogRead(SENSOR_PINS[i]);

    // Нормализация: приводим значение к диапазону 0 - 1000
    int normalized = map(rawValue, sensorMin[i], sensorMax[i], 0, 1000);
    normalized = constrain(normalized, 0, 1000); // Ограничиваем выбросы

    // Определение цвета (бинарный порог)
    bool isBlack = rawValue > threshold[i]; 

    Serial.print("S"); Serial.print(i);
    Serial.print(": [Norm: "); Serial.print(normalized);
    Serial.print(isBlack ? "] BLACK | " : "] WHITE | ");
  }
  Serial.println();
  delay(100);
}


````
