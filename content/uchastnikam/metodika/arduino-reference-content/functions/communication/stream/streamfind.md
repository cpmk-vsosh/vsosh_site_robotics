---
title: "Stream.find()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "streamfind"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/stream/streamfind/"
type: "arduino-reference"
translationKey: "streamfind"
---
**Description**

`find()` reads data from the stream until the target is found. The function returns true if target is found, false if timed out (see [Stream.setTimeout()](../streamsettimeout)).

This function is part of the Stream class, and can be called by any class that inherits from it (Wire, Serial, etc). See the [stream class](../../stream) main page for more information.

**Syntax**

`stream.find(target)`\
`stream.find(target, length)`

**Parameters**

`stream`: an instance of a class that inherits from Stream.\
`target`: the string to search for. Allowed data types: `char`.\
`length`: length of the target. Allowed data types: `size_t`.

**Returns**

Data type: `bool`.
