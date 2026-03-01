---
title: "Stream.readString()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "streamreadstring"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/stream/streamreadstring/"
type: "arduino-reference"
translationKey: "streamreadstring"
---
**Description**

`readString()` reads characters from a stream into a String. The function terminates if it times out (see [setTimeout()](../streamsettimeout)).

This function is part of the Stream class, and can be called by any class that inherits from it (Wire, Serial, etc). See the [Stream class](../../stream) main page for more information.

**Syntax**

`stream.readString()`

**Parameters**

`stream`: an instance of a class that inherits from Stream.

**Returns**

A String read from a stream.
