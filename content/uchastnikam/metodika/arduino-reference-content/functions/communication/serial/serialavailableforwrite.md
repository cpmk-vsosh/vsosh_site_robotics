---
title: "Serial.availableForWrite()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialavailableforwrite"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialavailableforwrite/"
type: "arduino-reference"
translationKey: "serialavailableforwrite"
---
**Description**

Get the number of bytes (characters) available for writing in the serial buffer without blocking the write operation.

**Syntax**

`Serial.availableForWrite()`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).

**Returns**

The number of bytes available to write.

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
