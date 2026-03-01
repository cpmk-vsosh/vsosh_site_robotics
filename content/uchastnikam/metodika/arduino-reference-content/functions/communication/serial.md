---
title: "Serial"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Communication" ]
slug: "serial"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/serial/"
type: "arduino-reference"
translationKey: "serial"
---
**Description**

Used for communication between the Arduino board and a computer or other devices. All Arduino boards have at least one serial port (also known as a UART or USART), and some have several.

| Board | Serial pins | Serial1 pins | Serial2 pins | Serial3 pins | Serial4 pins |
|----|----|----|----|----|----|
| UNO R3, UNO R3 SMD Mini | 0(RX), 1(TX) |  |  |  |  |
| Nano (classic) | 0(RX), 1(TX) |  |  |  |  |
| UNO R4 Minima, UNO R4 WiFi |  | 0(RX0), 1(TX0) |  |  |  |
| Leonardo, Micro, Yún Rev2 |  | 0(RX), 1(TX) |  |  |  |
| Uno WiFi Rev.2 |  | 0(RX), 1(TX) |  |  |  |
| MKR boards |  | 13(RX), 14(TX) |  |  |  |
| Zero |  | 0(RX), 1(TX) |  |  |  |
| GIGA R1 WiFi |  | 0(RX), 1(TX) | 19(RX1), 18(TX1) | 17(RX2), 16(TX2) | 15(RX3), 14(TX3) |
| Due | 0(RX), 1(TX) | 19(RX1), 18(TX1) | 17(RX2), 16(TX2) | 15(RX3), 14(TX3) |  |
| Mega 2560 Rev3 | 0(RX), 1(TX) | 19(RX1), 18(TX1) | 17(RX2), 16(TX2) | 15(RX3), 14(TX3) |  |
| Nano 33 IoT |  | 0(RX0), 1(TX0) |  |  |  |
| Nano RP2040 Connect |  | 0(RX0), 1(TX0) |  |  |  |
| Nano BLE / BLE Sense |  | 0(RX0), 1(TX0) |  |  |  |

The Nano ESP32 board is an exception due to being based on the ESP32 core. Here, `Serial0` refers to `RX0` and `TX0`, while `Serial1` and `Serial2` are additional ports that can be assigned to any free GPIO.

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| Board | Serial0 pins | Serial1 pins | Serial2 pins | Serial3 pins | Serial4 pins |
| Nano ESP32 | 0(RX0), 1(TX0) | Any free GPIO | Any free GPIO |  |  |

You can read more about configuring the Nano ESP32’s additional serial ports in [this article](https://docs.arduino.cc/tutorials/nano-esp32/cheat-sheet/#uart).

On older boards (Uno, Nano, Mini, and Mega), pins 0 and 1 are used for communication with the computer. Connecting anything to these pins can interfere with that communication, including causing failed uploads to the board.

You can use the Arduino environment’s built-in serial monitor to communicate with an Arduino board. Click the serial monitor button in the toolbar and select the same baud rate used in the call to `begin()`.

Serial communication on pins TX/RX uses TTL logic levels (5V or 3.3V depending on the board). Don’t connect these pins directly to an RS232 serial port; they operate at +/- 12V and can damage your Arduino board.

To use these extra serial ports to communicate with your personal computer, you will need an additional USB-to-serial adaptor, as they are not connected to the Mega’s USB-to-serial adaptor. To use them to communicate with an external TTL serial device, connect the TX pin to your device’s RX pin, the RX to your device’s TX pin, and the ground of your Mega to your device’s ground.

**Functions**

[if(Serial)](../serial/ifserial)\
[available()](../serial/available)\
[availableForWrite()](../serial/availableforwrite)\
[begin()](../serial/begin)\
[end()](../serial/end)\
[find()](../serial/find)\
[findUntil()](../serial/finduntil)\
[flush()](../serial/flush)\
[parseFloat()](../serial/parsefloat)\
[parseInt()](../serial/parseint)\
[peek()](../serial/peek)\
[print()](../serial/print)\
[println()](../serial/println)\
[read()](../serial/read)\
[readBytes()](../serial/readbytes)\
[readBytesUntil()](../serial/readbytesuntil)\
[readString()](../serial/readstring)\
[readStringUntil()](../serial/readstringuntil)\
[setTimeout()](../serial/settimeout)\
[write()](../serial/write)\
[serialEvent()](../serial/serialevent)

**See also**

- *EXAMPLE* [ReadASCIIString](https://www.arduino.cc/en/Tutorial/ReadASCIIString)

- *EXAMPLE* [ASCII TAble](https://www.arduino.cc/en/Tutorial/ASCIITable)

- *EXAMPLE* [Dimmer](https://www.arduino.cc/en/Tutorial/Dimmer)

- *EXAMPLE* [Graph](https://www.arduino.cc/en/Tutorial/Graph)

- *EXAMPLE* [Physical Pixel](https://www.arduino.cc/en/Tutorial/PhysicalPixel)

- *EXAMPLE* [Serial Call Response](https://www.arduino.cc/en/Tutorial/SerialCallResponse)

- *EXAMPLE* [Serial Call Response ASCII](https://www.arduino.cc/en/Tutorial/SerialCallResponseASCII)
