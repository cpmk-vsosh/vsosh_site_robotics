---
title: "Stream.getTimeout()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "streamgettimeout"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/stream/streamgettimeout/"
type: "arduino-reference"
translationKey: "streamgettimeout"
---
**Description**

`getTimeout()` returns the timeout value set by `setTimeout()`. This function is part of the Stream class, and can be called by any class that inherits from it (Wire, Serial, etc). See the [Stream class](../../stream) main page for more information.

**Syntax**

`stream.getTimeout()`

**Parameters**

None

**Returns**

The timeout value set by `stream.setTimeout()`. Data type: `unsigned long`.
