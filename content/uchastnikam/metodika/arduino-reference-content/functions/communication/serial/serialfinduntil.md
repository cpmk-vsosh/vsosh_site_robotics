---
title: "Serial.findUntil()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialfinduntil"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialfinduntil/"
type: "arduino-reference"
translationKey: "serialfinduntil"
---
**Description**

`Serial.findUntil()` reads data from the serial buffer until a target string of given length or terminator string is found.

The function returns true if the target string is found, false if it times out.

`Serial.findUntil()` inherits from the [Stream](../../stream) utility class.

**Syntax**

`Serial.findUntil(target, terminal)`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).\
`target`: the string to search for. Allowed data types: `char`.\
`terminal`: the terminal string in the search. Allowed data types: `char`.

**Returns**

Data type: `bool`.

**See also**

- *LANGUAGE* [stream](../../stream)\

- *LANGUAGE* [stream.findUntil()](../../stream/streamfinduntil)
