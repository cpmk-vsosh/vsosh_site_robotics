---
title: ">"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: greater than
categories: [ "Structure" ]
subCategories: [ "Comparison Operators" ]
slug: "greater-than"
url: "/uchastnikam/metodika/arduino-reference/structure/comparison-operators/greater-than/"
type: "arduino-reference"
translationKey: "greater-than"
---
**Description**

Compares the variable on the left with the value or variable on the right of the operator. Returns true when the operand on the left is greater (bigger) than the operand on the right. Please note that you may compare variables of different data types, but that could generate unpredictable results, it is therefore recommended to compare variables of the same data type including the signed/unsigned type.

**Syntax**

`x > y; // is true if x is bigger than y and it is false if x is equal or smaller than y`

**Parameters**

`x`: variable. Allowed data types: `int`, `float`, `double`, `byte`, `short`, `long`.\
`y`: variable or constant. Allowed data types: `int`, `float`, `double`, `byte`, `short`, `long`.

**Example Code**

``` arduino
if (x > y) {  // tests if x is greater (bigger) than y
  // do something only if the comparison result is true
}
```

**Notes and Warnings**

Positive numbers are greater than negative numbers.

**See also**
