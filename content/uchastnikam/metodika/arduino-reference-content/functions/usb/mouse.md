---
title: "Mouse"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "USB" ]
slug: "mouse"
url: "/uchastnikam/metodika/arduino-reference/functions/usb/mouse/"
type: "arduino-reference"
translationKey: "mouse"
---
**Description**

The mouse functions enable 32u4 or SAMD micro based boards to control cursor movement on a connected computer through their micro’s native USB port. When updating the cursor position, it is always relative to the cursor’s previous location.

**Compatible Hardware**

HID is supported on the following boards:

| Board | Supported Pins |
|----|----|
| [Leonardo](https://docs.arduino.cc/hardware/leonardo) | All digital & analog pins |
| [Micro](https://docs.arduino.cc/hardware/micro) | All digital & analog pins |
| [Due](https://docs.arduino.cc/hardware/due) | All digital & analog pins |
| [Zero](https://docs.arduino.cc/hardware/zero) | All digital & analog pins |
| [UNO R4 Minima](https://docs.arduino.cc/hardware/uno-r4-minima) | All digital & analog pins |
| [UNO R4 WiFi](https://docs.arduino.cc/hardware/uno-r4-wifi) | All digital & analog pins |
| [Giga R1](https://docs.arduino.cc/hardware/giga-r1-wifi) | All digital & analog pins |
| [Nano ESP32](https://docs.arduino.cc/hardware/nano-esp32) | All digital & analog pins |
| [MKR Family](https://docs.arduino.cc/#mkr-family) | All digital & analog pins |

**Notes and Warnings**

These core libraries allow the 32u4 and SAMD based boards (Leonardo, Esplora, Zero, Due and MKR Family) to appear as a native Mouse and/or Keyboard to a connected computer.

**A word of caution on using the Mouse and Keyboard libraries**: if the Mouse or Keyboard library is constantly running, it will be difficult to program your board. Functions such as `Mouse.move()` and `Keyboard.print()` will move your cursor or send keystrokes to a connected computer and should only be called when you are ready to handle them. It is recommended to use a control system to turn this functionality on, like a physical switch or only responding to specific input you can control. Refer to the Mouse and Keyboard examples for some ways to handle this.

When using the Mouse or Keyboard library, it may be best to test your output first using [Serial.print()](../../communication/serial/print). This way, you can be sure you know what values are being reported.

**Functions**

[Mouse.begin()](../mouse/mousebegin)\
[Mouse.click()](../mouse/mouseclick)\
[Mouse.end()](../mouse/mouseend)\
[Mouse.move()](../mouse/mousemove)\
[Mouse.press()](../mouse/mousepress)\
[Mouse.release()](../mouse/mouserelease)\
[Mouse.isPressed()](../mouse/mouseispressed)

**See also**

- *EXAMPLE* [KeyboardAndMouseControl](http://www.arduino.cc/en/Tutorial/KeyboardAndMouseControl): Demonstrates the Mouse and Keyboard commands in one program.

- *EXAMPLE* [ButtonMouseControl](http://www.arduino.cc/en/Tutorial/ButtonMouseControl): Control cursor movement with 5 pushbuttons.

- *EXAMPLE* [JoystickMouseControl](http://www.arduino.cc/en/Tutorial/JoystickMouseControl): Controls a computer’s cursor movement with a Joystick when a button is pressed.
