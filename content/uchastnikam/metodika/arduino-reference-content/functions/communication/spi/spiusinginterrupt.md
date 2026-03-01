---
title: "SPI.usingInterrupt()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "spiusinginterrupt"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/spi/spiusinginterrupt/"
type: "arduino-reference"
translationKey: "spiusinginterrupt"
---
**Description**

If your program will perform SPI transactions within an interrupt, call this function to register the interrupt number or name with the SPI library. This allows `SPI.beginTransaction()` to prevent usage conflicts. Note that the interrupt specified in the call to usingInterrupt() will be disabled on a call to `beginTransaction()` and re-enabled in `endTransaction().`

**Syntax**

`SPI.usingInterrupt(interruptNumber)`

**Parameters**

interruptNumber: the associated interrupt number.

**Returns**

None.
