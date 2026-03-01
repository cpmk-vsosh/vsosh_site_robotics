---
title: "Mouse.click()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "mouseclick"
url: "/uchastnikam/metodika/arduino-reference/functions/usb/mouse/mouseclick/"
type: "arduino-reference"
translationKey: "mouseclick"
---
**Description**

Sends a momentary click to the computer at the location of the cursor. This is the same as pressing and immediately releasing the mouse button.

`Mouse.click()` defaults to the left mouse button.

**Syntax**

`Mouse.click()`\
`Mouse.click(button)`

**Parameters**

`button`: which mouse button to press. Allowed data types: `char`.

- `MOUSE_LEFT` (default)

- `MOUSE_RIGHT`

- `MOUSE_MIDDLE`

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
  if (digitalRead(2) == HIGH) {
    Mouse.click();
  }
}
```

**Notes and Warnings**

When you use the `Mouse.click()` command, the Arduino takes over your mouse! Make sure you have control before you use the command. A pushbutton to toggle the mouse control state is effective.

**See also**

- *LANGUAGE* [Mouse.end()](../mouseend)

- *LANGUAGE* [Mouse.move()](../mousemove)

- *LANGUAGE* [Mouse.press()](../mousepress)

- *LANGUAGE* [Mouse.release()](../mouserelease)

- *LANGUAGE* [Mouse.isPressed()](../mouseispressed)
