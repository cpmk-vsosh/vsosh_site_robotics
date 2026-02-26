## Sharp GP2Y0A41SK0F
````cpp
// Определяем пин, к которому подключен датчик
#define sensorPin A1

void setup() {
  // Запускаем последовательный порт для вывода данных в монитор
  Serial.begin(9600);
}

void loop() {
  // Считываем значение с аналогового пина (0-1023)
  uint16_t analogValue = analogRead(sensorPin);

  // Преобразуем значение в расстояние (в сантиметрах)
  // Формула взята из примера DFRobot [citation:1]
  double distanceCm = getDistance(analogValue);

  // Выводим результаты в Serial Monitor
  Serial.print("Analog Value: ");
  Serial.print(analogValue);
  Serial.print(" | Distance: ");
  Serial.print(distanceCm);
  Serial.println(" cm");

  // Небольшая задержка для стабильности
  delay(200);
}

// Функция для преобразования аналогового значения в расстояние
double getDistance(uint16_t analogValue) {
  if (analogValue < 16) {
    analogValue = 16; // Минимальное значение для корректной работы формулы
  }
  // Эта эмпирическая формула получена из даташита [citation:1]
  return 2076.0 / (analogValue - 11.0);
}

````
