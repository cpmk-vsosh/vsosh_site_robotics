---
title: "Mouse.end()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "mouseend"
url: "/uchastnikam/metodika/arduino-reference/functions/usb/mouse/mouseend/"
type: "arduino-reference"
translationKey: "mouseend"
---
**Description**

Stops emulating the mouse connected to a computer. To start control, use [Mouse.begin()](../mousebegin).

**Syntax**

`Mouse.end()`

**Parameters**

None

**Returns**

Nothing

**Example Code**

``` arduino
#include <Mouse.h>

void setup() {
  pinMode(2, INPUT);
  //initiate the Mouse library
  Mouse.begin();
}

void loop() {
  //if the button is pressed, send a left mouse click
  //then end the Mouse emulation
  if (digitalRead(2) == HIGH) {
    Mouse.click();
    Mouse.end();
  }
}
```

**See also**

- *LANGUAGE* [Mouse.click()](../mouseclick)

- *LANGUAGE* [Mouse.move()](../mousemove)

- *LANGUAGE* [Mouse.press()](../mousepress)

- *LANGUAGE* [Mouse.release()](../mouserelease)

- *LANGUAGE* [Mouse.isPressed()](../mouseispressed)
