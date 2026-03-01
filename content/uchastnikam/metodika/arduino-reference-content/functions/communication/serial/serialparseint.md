---
title: "Serial.parseInt()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "serialparseint"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/serialparseint/"
type: "arduino-reference"
translationKey: "serialparseint"
---
**Description**

Looks for the next valid integer in the incoming serial. The function terminates if it times out (see [Serial.setTimeout()](../settimeout)).

`Serial.parseInt()` inherits from the [Stream](../../stream) utility class.

In particular:

- Parsing stops when no characters have been read for a configurable time-out value, or a non-digit is read;\

- If no valid digits were read when the time-out (see Serial.setTimeout()) occurs, 0 is returned;

**Syntax**

`Serial.parseInt()`\
`Serial.parseInt(lookahead)`\
`Serial.parseInt(lookahead, ignore)`

**Parameters**

`Serial`: serial port object. See the list of available serial ports for each board on the [Serial main page](https://www.arduino.cc/en/Reference/serial).\
`lookahead`: the mode used to look ahead in the stream for an integer. Allowed data types: `LookaheadMode`. Allowed `lookahead` values:

- `SKIP_ALL`: all characters other than digits or a minus sign are ignored when scanning the stream for an integer. This is the default mode.

- `SKIP_NONE`: Nothing is skipped, and the stream is not touched unless the first waiting character is valid.

- `SKIP_WHITESPACE`: Only tabs, spaces, line feeds, and carriage returns are skipped.

`ignore`: used to skip the indicated char in the search. Used for example to skip thousands divider. Allowed data types: `char`

**Returns**

The next valid integer. Data type: `long`.

**See also**

- *LANGUAGE* [begin()](../begin)\

- *LANGUAGE* [end()](../end)\

- *LANGUAGE* [available()](../available)\

- *LANGUAGE* [read()](../read)\

- *LANGUAGE* [peek()](../peek)\

- *LANGUAGE* [flush()](../flush)\

- *LANGUAGE* [print()](../print)\

- *LANGUAGE* [println()](../println)\

- *LANGUAGE* [write()](../write)\

- *LANGUAGE* [SerialEvent()](../serialevent)\

- *LANGUAGE* [Stream.parseFloat()](../../stream/streamparsefloat)
