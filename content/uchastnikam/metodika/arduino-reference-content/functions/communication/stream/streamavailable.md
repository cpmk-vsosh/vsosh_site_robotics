---
title: "Stream.available()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "streamavailable"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/stream/streamavailable/"
type: "arduino-reference"
translationKey: "streamavailable"
---
**Description**

`available()` gets the number of bytes available in the stream. This is only for bytes that have already arrived.

This function is part of the Stream class, and can be called by any class that inherits from it (Wire, Serial, etc). See the [Stream class](../../stream) main page for more information.

**Syntax**

`stream.available()`

**Parameters**

`stream`: an instance of a class that inherits from Stream.

**Returns**

The number of bytes available to read. Data type: `int`.
