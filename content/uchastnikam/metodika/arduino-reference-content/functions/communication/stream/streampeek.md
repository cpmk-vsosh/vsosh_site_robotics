---
title: "Stream.peek()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "streampeek"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/stream/streampeek/"
type: "arduino-reference"
translationKey: "streampeek"
---
**Description**

Read a byte from the file without advancing to the next one. That is, successive calls to `peek()` will return the same value, as will the next call to `read()`.

This function is part of the Stream class, and can be called by any class that inherits from it (Wire, Serial, etc). See the [Stream class](../../stream) main page for more information.

**Syntax**

`stream.peek()`

**Parameters**

`stream`: an instance of a class that inherits from Stream.

**Returns**

The next byte (or character), or -1 if none is available.
