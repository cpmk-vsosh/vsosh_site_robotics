---
title: "continue"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Structure" ]
subCategories: [ "Control Structure" ]
slug: "continue"
url: "/uchastnikam/metodika/arduino-reference/structure/control-structure/continue/"
type: "arduino-reference"
translationKey: "continue"
---
**Description**

The `continue` statement skips the rest of the current iteration of a loop (`for`, `while`, or `do…​while`). It continues by checking the conditional expression of the loop, and proceeding with any subsequent iterations.

**Example Code**

The following code writes the value of 0 to 255 to the `PWMpin`, but skips the values in the range of 41 to 119.

``` arduino
for (int x = 0; x <= 255; x ++) {
  if (x > 40 && x < 120) {  // create jump in values
    continue;
  }

  analogWrite(PWMpin, x);
  delay(50);
}
```

**See also**
