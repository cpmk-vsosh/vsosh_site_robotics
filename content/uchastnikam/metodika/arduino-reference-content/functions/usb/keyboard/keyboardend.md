---
title: "Keyboard.end()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "keyboardend"
url: "/uchastnikam/metodika/arduino-reference/functions/usb/keyboard/keyboardend/"
type: "arduino-reference"
translationKey: "keyboardend"
---
**Description**

Stops the keyboard emulation to a connected computer. To start keyboard emulation, use [Keyboard.begin()](../keyboardbegin).

**Syntax**

`Keyboard.end()`

**Parameters**

None

**Returns**

Nothing

**Example Code**

``` arduino
#include <Keyboard.h>

void setup() {
  //start keyboard communication
  Keyboard.begin();
  //send a keystroke
  Keyboard.print("Hello!");
  //end keyboard communication
  Keyboard.end();
}

void loop() {
  //do nothing
}
```
