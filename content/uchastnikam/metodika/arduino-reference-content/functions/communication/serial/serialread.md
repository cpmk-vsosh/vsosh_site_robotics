---
title: "Serial.read()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialread"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialread/"
type: "arduino-reference"
translationKey: "serialread"
---
**Description**

Reads incoming serial data.

`Serial.read()` inherits from the [Stream](../../stream) utility class.

**Syntax**

`Serial.read()`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).

**Returns**

The first byte of incoming serial data available (or -1 if no data is available). Data type: `int`.

**Example Code**

``` arduino
int incomingByte = 0; // for incoming serial data

void setup() {
  Serial.begin(9600); // opens serial port, sets data rate to 9600 bps
}

void loop() {
  // send data only when you receive data:
  if (Serial.available() > 0) {
    // read the incoming byte:
    incomingByte = Serial.read();

    // say what you got:
    Serial.print("I received: ");
    Serial.println(incomingByte, DEC);
  }
}
```
