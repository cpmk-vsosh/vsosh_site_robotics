---
title: "do...while"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Structure" ]
subCategories: [ "Control Structure" ]
slug: "dowhile"
url: "/uchastnikam/metodika/arduino-reference/structure/control-structure/dowhile/"
type: "arduino-reference"
translationKey: "dowhile"
---
**Description**

The `do…​while` loop works in the same manner as the `while` loop, with the exception that the condition is tested at the end of the loop, so the do loop will always run at least once.

**Syntax**

``` arduino
do {
  // statement block
} while (condition);
```

**Parameters**

`condition`: a boolean expression that evaluates to `true` or `false`.

**Example Code**

``` arduino
// initialize x and i with a value of 0
int x = 0;
int i = 0;

do {
  delay(50);          // wait for sensors to stabilize
  x = readSensors();  // check the sensors
  i++;                // increase i by 1
} while (i < 100);    // repeat 100 times
```

**See also**
