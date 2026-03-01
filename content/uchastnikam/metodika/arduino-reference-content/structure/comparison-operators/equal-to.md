---
title: "=="
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: equal to
categories: [ "Structure" ]
subCategories: [ "Comparison Operators" ]
slug: "equal-to"
url: "/uchastnikam/metodika/arduino-reference/structure/comparison-operators/equal-to/"
type: "arduino-reference"
translationKey: "equal-to"
---
**Description**

Compares the variable on the left with the value or variable on the right of the operator. Returns true when the two operands are equal. Please note that you may compare variables of different data types, but that could generate unpredictable results, it is therefore recommended to compare variables of the same data type including the signed/unsigned type.

**Syntax**

`x == y; // is true if x is equal to y and it is false if x is not equal to y`

**Parameters**

`x`: variable. Allowed data types: `int`, `float`, `double`, `byte`, `short`, `long`.\
`y`: variable or constant. Allowed data types: `int`, `float`, `double`, `byte`, `short`, `long`.

**Example Code**

``` arduino
if (x == y) { // tests if x is equal to y
  // do something only if the comparison result is true
}
```

**See also**
