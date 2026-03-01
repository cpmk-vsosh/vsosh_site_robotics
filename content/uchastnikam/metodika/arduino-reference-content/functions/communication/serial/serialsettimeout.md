---
title: "Serial.setTimeout()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialsettimeout"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialsettimeout/"
type: "arduino-reference"
translationKey: "serialsettimeout"
---
**Description**

`Serial.setTimeout()` sets the maximum milliseconds to wait for serial data. It defaults to 1000 milliseconds.

`Serial.setTimeout()` inherits from the [Stream](../../stream) utility class.

**Syntax**

`Serial.setTimeout(time)`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).\
`time`: timeout duration in milliseconds. Allowed data types: `long`.

**Returns**

Nothing

**Notes and Warnings**

Serial functions that use the timeout value set via `Serial.setTimeout()`:

- `Serial.find()`

- `Serial.findUntil()`

- `Serial.parseInt()`

- `Serial.parseFloat()`

- `Serial.readBytes()`

- `Serial.readBytesUntil()`

- `Serial.readString()`

- `Serial.readStringUntil()`

**See also**

- *LANGUAGE* [stream](../../stream)

- *LANGUAGE* [stream.setTimeout()](../../stream/streamsettimeout)
