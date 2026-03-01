---
title: "SPI"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Communication" ]
slug: "spi"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/spi/"
type: "arduino-reference"
translationKey: "spi"
---
**Description**

This library allows you to communicate with SPI devices, with the Arduino as the controller device. This library is bundled with every Arduino platform (avr, megaavr, mbed, samd, sam, arc32), so **you do not need to install** the library separately.

To use this library

`#include <SPI.h>`

To read more about Arduino and SPI, you can visit the [Arduino & Serial Peripheral Interface (SPI)](https://docs.arduino.cc/learn/communication/spi) guide.

|  |  |  |  |
|----|----|----|----|
| Boards | Default SPI Pins | Additional SPI Pins | Notes |
| UNO R3, UNO R3 SMD, UNO WiFi Rev2, UNO Mini Ltd | 10(CS), 11(COPI), 12(CIPO), 13(SCK) |  | SPI pins available on ICSP header |
| UNO R4 Minima, UNO R4 WiFi | 10(CS), 11(COPI), 12(CIPO), 13(SCK) |  | SPI pins available on ICSP header |
| Leonardo, Yún Rev2, Zero | 10(CS), 11(COPI), 12(CIPO), 13(SCK) |  | SPI pins available on ICSP header |
| Micro | 14(CIPO), 15(SCK), 16(COPI) |  |  |
| Nano boards | 11(COPI), 12(CIPO), 13(SCK) |  |  |
| MKR boards | 8(COPI), 9(SCK), 10(CIPO) |  |  |
| Due | 74(CIPO), 75(MOSI), 76(SCK) | SPI pins available on dedicated SPI header |  |
| GIGA R1 WiFi | 89(CIPO), 90(COPI), 91(SCK) | 12(CIPO), 11(COPI), 13(SCK), 10(CS) | Note that pin 89,90,91 are located on the SPI header |
| Mega 2560 Rev3 | 50(CIPO), 51(COPI), 52(SCK), 53(CS) |  | SPI pins available on ICSP header |

**Functions**

[SPISettings](../spi/spisettings)\
[begin()](../spi/begin)\
[beginTransaction()](../spi/begintransaction)\
[endTransaction()](../spi/endtransaction)\
[end()](../spi/end)\
[setBitOrder()](../spi/setbitorder)\
[setClockDivider()](../spi/setclockdivider)\
[setDataMode()](../spi/setdatamode)\
[transfer()](../spi/transfer)\
[usingInterrupt()](../spi/usinginterrupt)
