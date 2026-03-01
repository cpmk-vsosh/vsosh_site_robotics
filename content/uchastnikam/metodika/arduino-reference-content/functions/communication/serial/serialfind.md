---
title: "Serial.find()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialfind"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialfind/"
type: "arduino-reference"
translationKey: "serialfind"
---
**Description**

`Serial.find()` reads data from the serial buffer until the target is found. The function returns `true` if target is found, `false` if it times out.

`Serial.find()` inherits from the [stream](../../stream) utility class.

**Syntax**

`Serial.find(target)`\
`Serial.find(target, length)`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).\
`target`: the string to search for. Allowed data types: `char`.\
`length`: length of the target. Allowed data types: `size_t`.

**Returns**

Data type: `bool`.

**See also**

- *LANGUAGE* [stream](../../stream)\

- *LANGUAGE* [stream.find()](../../stream/streamfind)
