---
title: "Serial.readString()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialreadstring"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialreadstring/"
type: "arduino-reference"
translationKey: "serialreadstring"
---
**Description**

`Serial.readString()` reads characters from the serial buffer into a String. The function terminates if it times out (see [setTimeout()](../settimeout)).

`Serial.readString()` inherits from the [Stream](../../stream) utility class.

**Syntax**

`Serial.readString()`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).

**Returns**

A `String` read from the serial buffer

**Example Code**

Demonstrate Serial.readString()

``` arduino
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Enter data:");
  while (Serial.available() == 0) {}     //wait for data available
  String teststr = Serial.readString();  //read until timeout
  teststr.trim();                        // remove any \r \n whitespace at the end of the String
  if (teststr == "red") {
    Serial.println("A primary color");
  } else {
    Serial.println("Something else");
  }
}
```

**Notes and Warnings**

The function does not terminate early if the data contains end of line characters. The returned `String` may contain carriage return and/or line feed characters if they were received.

**See also**

- *LANGUAGE* [Serial](https://www.arduino.cc/en/Reference/serial)

- *LANGUAGE* [begin()](../begin)

- *LANGUAGE* [end()](../end)

- *LANGUAGE* [available()](../available)

- *LANGUAGE* [read()](../read)

- *LANGUAGE* [peek()](../peek)

- *LANGUAGE* [flush()](../flush)

- *LANGUAGE* [print()](../print)

- *LANGUAGE* [println()](../println)

- *LANGUAGE* [write()](../write)

- *LANGUAGE* [SerialEvent()](../serialevent)

- *LANGUAGE* [parseFloat()](../parsefloat)
