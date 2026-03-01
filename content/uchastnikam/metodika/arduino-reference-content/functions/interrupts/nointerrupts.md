---
title: "noInterrupts()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Interrupts" ]
slug: "nointerrupts"
url: "/uchastnikam/metodika/arduino-reference/functions/interrupts/nointerrupts/"
type: "arduino-reference"
translationKey: "nointerrupts"
---
**Description**

Disables interrupts (you can re-enable them with [`interrupts()`](../interrupts)). Interrupts allow certain important tasks to happen in the background and are enabled by default. Some functions will not work while interrupts are disabled, and incoming communication may be ignored. Interrupts can slightly disrupt the timing of code, however, and may be disabled for particularly critical sections of code.

**Syntax**

`noInterrupts()`

**Parameters**

None

**Returns**

Nothing

**Example Code**

The code shows how to enable interrupts.

``` arduino
void setup() {}

void loop() {
  noInterrupts();
  // critical, time-sensitive code here
  interrupts();
  // other code here
}
```

**Notes and Warnings**

Note that disabling interrupts on the Arduino boards with native USB capabilities (e.g., [Leonardo](https://docs.arduino.cc/hardware/leonardo)) will make the board not appear in the Port menu, since this disables its USB capability.

**See also**
