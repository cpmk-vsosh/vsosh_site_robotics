---
title: "SPI.setClockDivider()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "spisetclockdivider"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/spi/spisetclockdivider/"
type: "arduino-reference"
translationKey: "spisetclockdivider"
---
**Description**

This function should not be used in new projects. Use [SPISettings](../spisettings). with [SPI.beginTransaction()](../begintransaction). to configure SPI parameters.

Sets the SPI clock divider relative to the system clock. On AVR based boards, the dividers available are 2, 4, 8, 16, 32, 64 or 128. The default setting is SPI_CLOCK_DIV4, which sets the SPI clock to one-quarter the frequency of the system clock (4 Mhz for the boards at 16 MHz).

**For Arduino Due:** On the Due, the system clock can be divided by values from 1 to 255. The default value is 21, which sets the clock to 4 MHz like other Arduino boards.

**Syntax**

`SPI.setClockDivider(divider)`

**Parameters**

divider (only AVR boards):

- SPI_CLOCK_DIV2

- SPI_CLOCK_DIV4

- SPI_CLOCK_DIV8

- SPI_CLOCK_DIV16

- SPI_CLOCK_DIV32

- SPI_CLOCK_DIV64

- SPI_CLOCK_DIV128

**chipSelectPin**: peripheral device CS pin (Arduino Due only) **divider**: a number from 1 to 255 (Arduino Due only)

**Returns**

None.
