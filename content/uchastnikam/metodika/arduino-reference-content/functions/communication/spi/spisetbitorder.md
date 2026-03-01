---
title: "SPI.setBitOrder()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "spisetbitorder"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/spi/spisetbitorder/"
type: "arduino-reference"
translationKey: "spisetbitorder"
---
**Description**

This function should not be used in new projects. Use [SPISettings](../spisettings). with [SPI.beginTransaction()](../begintransaction). to configure SPI parameters.

Sets the order of the bits shifted out of and into the SPI bus, either LSBFIRST (least-significant bit first) or MSBFIRST (most-significant bit first).

**Syntax**

`SPI.setBitOrder(order)`

**Parameters**

order: either LSBFIRST or MSBFIRST

**Returns**

None.
