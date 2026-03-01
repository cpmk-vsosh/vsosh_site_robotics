---
title: "beginTransmission()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "begintransmission"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/wire/begintransmission/"
type: "arduino-reference"
translationKey: "begintransmission"
---
**Description**

This function begins a transmission to the I2C peripheral device with the given address. Subsequently, queue bytes for transmission with the `write()` function and transmit them by calling `endTransmission()`.

**Syntax**

`Wire.beginTransmission(address)`

**Parameters**

- *address*: the 7-bit address of the device to transmit to.

**Returns**

None.
