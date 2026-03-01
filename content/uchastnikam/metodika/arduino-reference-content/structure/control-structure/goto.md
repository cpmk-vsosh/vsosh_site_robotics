---
title: "goto"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Structure" ]
subCategories: [ "Control Structure" ]
slug: "goto"
url: "/uchastnikam/metodika/arduino-reference/structure/control-structure/goto/"
type: "arduino-reference"
translationKey: "goto"
---
**Description**

Transfers program flow to a labeled point in the program

**Syntax**

``` arduino
label:

goto label; // sends program flow to the label
```

**Example Code**

``` arduino
for (byte r = 0; r < 255; r++) {
  for (byte g = 255; g > 0; g--) {
    for (byte b = 0; b < 255; b++) {
      if (analogRead(0) > 250) {
        goto bailout;
      }
      // more statements ...
    }
  }
}

bailout:
// more statements ...
```

**Notes and Warnings**

The use of `goto` is discouraged in C programming, and some authors of C programming books claim that the `goto` statement is never necessary, but used judiciously, it can simplify certain programs. The reason that many programmers frown upon the use of goto is that with the unrestrained use of `goto` statements, it is easy to create a program with undefined program flow, which can never be debugged.

With that said, there are instances where a `goto` statement can come in handy, and simplify coding. One of these situations is to break out of deeply nested [for](../for) loops, or [if](../if) logic blocks, on a certain condition.

**See also**
