---
title: "Mouse.begin()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "mousebegin"
url: "/uchastnikam/metodika/arduino-reference/functions/usb/mouse/mousebegin/"
type: "arduino-reference"
translationKey: "mousebegin"
---
**Description**

Begins emulating the mouse connected to a computer. `begin()` must be called before controlling the computer. To end control, use [Mouse.end()](../mouseend).

**Syntax**

`Mouse.begin()`

**Parameters**

None

**Returns**

Nothing

**Example Code**

``` arduino
#include <Mouse.h>

void setup() {
  pinMode(2, INPUT);
}

void loop() {
  //initiate the Mouse library when button is pressed
  if (digitalRead(2) == HIGH) {
    Mouse.begin();
  }
}
```

**See also**

- *LANGUAGE* [Mouse.click()](../mouseclick)

- *LANGUAGE* [Mouse.end()](../mouseend)

- *LANGUAGE* [Mouse.move()](../mousemove)

- *LANGUAGE* [Mouse.press()](../mousepress)

- *LANGUAGE* [Mouse.release()](../mouserelease)

- *LANGUAGE* [Mouse.isPressed()](../mouseispressed)
