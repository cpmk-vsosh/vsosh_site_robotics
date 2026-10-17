---
title: "Serial.peek()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialpeek"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialpeek/"
type: "arduino-reference"
translationKey: "serialpeek"
---
**Description**

Returns the next byte (character) of incoming serial data without removing it from the internal serial buffer. That is, successive calls to `peek()` will return the same character, as will the next call to `read()`.

`Serial.peek()` inherits from the [Stream](/uchastnikam/metodika/arduino-reference-content/functions/communication/stream/) utility class.

**Syntax**

`Serial.peek()`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).

**Returns**

The first byte of incoming serial data available (or -1 if no data is available). Data type: `int`.

**See also**

- *LANGUAGE* [begin()](../serialbegin/)\

- *LANGUAGE* [end()](../serialend/)\

- *LANGUAGE* [available()](../serialavailable/)\

- *LANGUAGE* [read()](../serialread/)\

- *LANGUAGE* [peek()](../serialpeek/)\

- *LANGUAGE* [flush()](../serialflush/)\

- *LANGUAGE* [print()](../serialprint/)\

- *LANGUAGE* [println()](../serialprintln/)\

- *LANGUAGE* [write()](../serialwrite/)\

- *LANGUAGE* [SerialEvent()](../serialevent)\

- *LANGUAGE* [Stream.peek()](../../stream/streampeek)
