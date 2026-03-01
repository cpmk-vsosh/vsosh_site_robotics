---
title: "SPI.setDataMode()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "spisetdatamode"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/spi/spisetdatamode/"
type: "arduino-reference"
translationKey: "spisetdatamode"
---
**Description**

This function should not be used in new projects. Use [SPISettings](../spisettings). with [SPI.beginTransaction()](../begintransaction). to configure SPI parameters.

Sets the SPI data mode: that is, clock polarity and phase. See the Wikipedia article on [SPI](http://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus:) for details.

**Syntax**

`SPI.setDataMode(mode)`

**Parameters**

mode:

- SPI_MODE0

- SPI_MODE1

- SPI_MODE2

- SPI_MODE3

chipSelectPin - peripheral device CS pin (Arduino Due only)

**Returns**

None.
