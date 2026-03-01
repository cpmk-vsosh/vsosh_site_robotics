---
title: "setClock()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "setclock"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/wire/setclock/"
type: "arduino-reference"
translationKey: "setclock"
---
**Description**

This function modifies the clock frequency for I2C communication. I2C peripheral devices have no minimum working clock frequency, however 100KHz is usually the baseline.

**Syntax**

`Wire.setClock(clockFrequency)`

**Parameters**

- *clockFrequency*: the value (in Hertz) of the desired communication clock. Accepted values are 100000 (standard mode) and 400000 (fast mode). Some processors also support 10000 (low speed mode), 1000000 (fast mode plus) and 3400000 (high speed mode). Please refer to the specific processor documentation to make sure the desired mode is supported.

**Returns**

None.
