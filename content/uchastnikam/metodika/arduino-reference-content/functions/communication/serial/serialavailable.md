---
title: "Serial.available()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialavailable"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialavailable/"
type: "arduino-reference"
translationKey: "serialavailable"
---
**Description**

Get the number of bytes (characters) available for reading from the serial port. This is data that’s already arrived and stored in the serial receive buffer (which holds 64 bytes).

`Serial.available()` inherits from the [Stream](../../stream) utility class.

**Syntax**

`Serial.available()`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).

**Returns**

The number of bytes available to read.

**Example Code**

The following code returns a character received through the serial port.

``` arduino
int incomingByte = 0; // for incoming serial data

void setup() {
  Serial.begin(9600); // opens serial port, sets data rate to 9600 bps
}

void loop() {
  // reply only when you receive data:
  if (Serial.available() > 0) {
    // read the incoming byte:
    incomingByte = Serial.read();

    // say what you got:
    Serial.print("I received: ");
    Serial.println(incomingByte, DEC);
  }
}
```

**Arduino Mega example:**\
This code sends data received in one serial port of the Arduino Mega to another. This can be used, for example, to connect a serial device to the computer through the Arduino board.

``` arduino
void setup() {
  Serial.begin(9600);
  Serial1.begin(9600);
}

void loop() {
  // read from port 0, send to port 1:
  if (Serial.available()) {
    int inByte = Serial.read();
    Serial1.print(inByte, DEC);
  }
  // read from port 1, send to port 0:
  if (Serial1.available()) {
    int inByte = Serial1.read();
    Serial.print(inByte, DEC);
  }
}
```

**See also**

- *LANGUAGE* [begin()](../begin)\

- *LANGUAGE* [end()](../end)\

- *LANGUAGE* [read()](../read)\

- *LANGUAGE* [peek()](../peek)\

- *LANGUAGE* [flush()](../flush)\

- *LANGUAGE* [print()](../print)\

- *LANGUAGE* [println()](../println)\

- *LANGUAGE* [write()](../write)\

- *LANGUAGE* [SerialEvent()](../serialevent)\

- *LANGUAGE* [Stream.available()](../../stream/streamavailable)
