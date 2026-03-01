---
title: "Serial.parseFloat()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialparsefloat"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialparsefloat/"
type: "arduino-reference"
translationKey: "serialparsefloat"
---
**Description**

`Serial.parseFloat()` returns the first valid floating point number from the Serial buffer. `parseFloat()` is terminated by the first character that is not a floating point number. The function terminates if it times out (see [Serial.setTimeout()](../settimeout)).

`Serial.parseFloat()` inherits from the [Stream](../../stream) utility class.

**Syntax**

`Serial.parseFloat()`\
`Serial.parseFloat(lookahead)`\
`Serial.parseFloat(lookahead, ignore)`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).\
`lookahead`: the mode used to look ahead in the stream for a floating point number. Allowed data types: `LookaheadMode`. Allowed `lookahead` values:

- `SKIP_ALL`: all characters other than a minus sign, decimal point, or digits are ignored when scanning the stream for a floating point number. This is the default mode.

- `SKIP_NONE`: Nothing is skipped, and the stream is not touched unless the first waiting character is valid.

- `SKIP_WHITESPACE`: Only tabs, spaces, line feeds, and carriage returns are skipped.

`ignore`: used to skip the indicated char in the search. Used for example to skip thousands divider. Allowed data types: `char`

**Returns**

Data type: `float`.

**See also**

- *LANGUAGE* [stream()](../../stream)

- *LANGUAGE* [Stream.parseFloat()](../../stream/streamparsefloat)
