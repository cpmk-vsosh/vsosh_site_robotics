---
title: "Stream.setTimeout()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "streamsettimeout"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/stream/streamsettimeout/"
type: "arduino-reference"
translationKey: "streamsettimeout"
---
**Description**

`setTimeout()` sets the maximum milliseconds to wait for stream data, it defaults to 1000 milliseconds. This function is part of the Stream class, and can be called by any class that inherits from it (Wire, Serial, etc). See the [Stream class](../../stream) main page for more information.

**Syntax**

`stream.setTimeout(time)`

**Parameters**

`stream`: an instance of a class that inherits from Stream.\
`time`: timeout duration in milliseconds. Allowed data types: `long`.

**Returns**

Nothing

**Notes and Warnings**

Stream functions that use the timeout value set via `setTimeout()`:

- `find()`

- `findUntil()`

- `parseInt()`

- `parseFloat()`

- `readBytes()`

- `readBytesUntil()`

- `readString()`

- `readStringUntil()`
