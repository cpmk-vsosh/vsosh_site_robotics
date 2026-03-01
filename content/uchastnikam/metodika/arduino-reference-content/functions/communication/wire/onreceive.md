---
title: "onReceive()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "onreceive"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/wire/onreceive/"
type: "arduino-reference"
translationKey: "onreceive"
---
**Description**

This function registers a function to be called when a peripheral device receives a transmission from a controller device.

**Syntax**

`Wire.onReceive(handler)`

**Parameters**

- *handler*: the function to be called when the peripheral device receives data; this should take a single int parameter (the number of bytes read from the controller device) and return nothing.

**Returns**

None.
