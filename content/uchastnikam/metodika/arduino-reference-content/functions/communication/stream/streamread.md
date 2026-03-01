---
title: "Stream.read()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "streamread"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/stream/streamread/"
type: "arduino-reference"
translationKey: "streamread"
---
**Description**

`read()` reads characters from an incoming stream to the buffer.

This function is part of the Stream class, and can be called by any class that inherits from it (Wire, Serial, etc). See the [stream class](../../stream) main page for more information.

**Syntax**

`stream.read()`

**Parameters**

`stream`: an instance of a class that inherits from Stream.

**Returns**

The first byte of incoming data available (or -1 if no data is available).
