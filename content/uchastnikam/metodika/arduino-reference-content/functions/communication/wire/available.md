---
title: "available()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "available"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/wire/available/"
type: "arduino-reference"
translationKey: "available"
---
**Description**

This function returns the number of bytes available for retrieval with `read()`. This function should be called on a controller device after a call to `requestFrom()` or on a peripheral inside the `onReceive()` handler. `available()` inherits from the Stream utility class.

**Syntax**

`Wire.available()`

**Parameters**

None.

**Returns**

The number of bytes available for reading.
