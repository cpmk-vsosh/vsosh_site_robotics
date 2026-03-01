---
title: "begin()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "begin"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/wire/begin/"
type: "arduino-reference"
translationKey: "begin"
---
**Description**

This function initializes the Wire library and join the I2C bus as a controller or a peripheral. This function should normally be called only once.

**Syntax**

`Wire.begin()`

`Wire.begin(address)`

**Parameters**

- *address*: the 7-bit slave address (optional); if not specified, join the bus as a controller device.

**Returns**

None.
