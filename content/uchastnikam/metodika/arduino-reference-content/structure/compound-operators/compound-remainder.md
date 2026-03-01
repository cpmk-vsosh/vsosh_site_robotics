---
title: "%="
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: compound remainder
categories: [ "Structure" ]
subCategories: [ "Compound Operators" ]
slug: "compound-remainder"
url: "/uchastnikam/metodika/arduino-reference/structure/compound-operators/compound-remainder/"
type: "arduino-reference"
translationKey: "compound-remainder"
---
**Description**

This is a convenient shorthand to calculate the remainder when one integer is divided by another and assign it back to the variable the calculation was done on.

**Syntax**

`x %= divisor; // equivalent to the expression x = x % divisor;`

**Parameters**

`x`: variable. Allowed data types: `int`.\
`divisor`: **non zero** variable or constant. Allowed data types: `int`.

**Example Code**

``` arduino
int x = 7;
x %= 5;    // x now contains 2
```

**Notes and Warnings**

1.  The compound remainder operator does not work on floats.

2.  If the **first** operand is negative, the result is negative (or zero). Therefore, the result of `x %= 10` will not always be between 0 and 9 if `x` can be negative.

**See also**

- *LANGUAGE* [Remainder](../../arithmetic-operators/remainder)
