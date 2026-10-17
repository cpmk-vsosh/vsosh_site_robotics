---
title: "Serial.readStringUntil()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialreadstringuntil"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialreadstringuntil/"
type: "arduino-reference"
translationKey: "serialreadstringuntil"
---
**Description**

`readStringUntil()` reads characters from the serial buffer into a String. The function terminates if it times out (see [setTimeout()](../serialsettimeout/)).

`Serial.readStringUntil()` inherits from the [Stream](/uchastnikam/metodika/arduino-reference-content/functions/communication/stream/) utility class.

**Syntax**

`Serial.readStringUntil(terminator)`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).\
`terminator`: the character to search for. Allowed data types: `char`.

**Returns**

The entire `String` read from the serial buffer, up to the terminator character. If the terminator character can’t be found, or if there is no data before the terminator character, it will return `NULL`.

**Notes and Warnings**

The terminator character is discarded from the serial buffer. If the terminator character can’t be found, all read characters will be discarded.

**See also**

- *LANGUAGE* [Serial](https://www.arduino.cc/en/Reference/serial)

- *LANGUAGE* [begin()](../serialbegin/)

- *LANGUAGE* [end()](../serialend/)

- *LANGUAGE* [available()](../serialavailable/)

- *LANGUAGE* [read()](../serialread/)

- *LANGUAGE* [peek()](../serialpeek/)

- *LANGUAGE* [flush()](../serialflush/)

- *LANGUAGE* [print()](../serialprint/)

- *LANGUAGE* [println()](../serialprintln/)

- *LANGUAGE* [write()](../serialwrite/)

- *LANGUAGE* [SerialEvent()](../serialevent)

- *LANGUAGE* [stream.parseFloat()](../../stream/streamparsefloat)
