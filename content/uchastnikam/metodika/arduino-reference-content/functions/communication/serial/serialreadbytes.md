---
title: "Serial.readBytes()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialreadbytes"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialreadbytes/"
type: "arduino-reference"
translationKey: "serialreadbytes"
---
**Description**

`Serial.readBytes()` reads characters from the serial port into a buffer. The function terminates if the determined length has been read, or it times out (see [Serial.setTimeout()](../settimeout)).

`Serial.readBytes()` returns the number of characters placed in the buffer. A 0 means no valid data was found.

`Serial.readBytes()` inherits from the [Stream](../../stream) utility class.

**Syntax**

`Serial.readBytes(buffer, length)`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).\
`buffer`: the buffer to store the bytes in. Allowed data types: array of `char` or `byte`.\
`length`: the number of bytes to read. Allowed data types: `int`.

**Returns**

The number of bytes placed in the buffer. Data type: `size_t`.

**See also**

- *LANGUAGE* [stream](../../stream)

- *LANGUAGE* [stream.readBytes()](../../stream/streamreadbytes)
