---
title: ">>"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: bitshift right
categories: [ "Structure" ]
subCategories: [ "Bitwise Operators" ]
slug: "bitshift-right"
url: "/uchastnikam/metodika/arduino-reference/structure/bitwise-operators/bitshift-right/"
type: "arduino-reference"
translationKey: "bitshift-right"
---
**Description**

The right shift operator `>>` causes the bits of the left operand to be shifted **right** by the number of positions specified by the right operand.

**Syntax**

`variable >> number_of_bits;`

**Parameters**

`variable`: Allowed data types: any integer type (`byte`, `short`, `int`, `long`, `unsigned short`…​).\
`number_of_bits`: a positive number smaller than the bit-width of `variable`. Allowed data types: `int`.

**Example Code**

``` arduino
int a = 40;     // binary: 0000000000101000
int b = a >> 3; // binary: 0000000000000101, decimal: 5
```

**Notes and Warnings**

When you shift `x` right by `y` bits (`x >> y`), the `y` rightmost bits of `x` “fall off” and are discarded. If `x` has an unsigned type (e.g. `unsigned int`), the `y` leftmost bits of the result are filled with zeroes. If `x` has a signed type (e.g. `int`), its leftmost bit is the sign bit, which determines whether it is positive or negative. In this case, the `y` leftmost bits of the result are filled with copies of the sign bit. This behavior, called “sign extension”, ensures the result has the same sign as `x`.

``` arduino
int x = -16;          // binary: 1111111111110000
int y = 3;
int result = x >> y;  // binary: 1111111111111110, decimal: -2
```

This may not be the behavior you want. If you instead want zeros to be shifted in from the left, you can use a typecast to suppress sign extension:

``` arduino
int x = -16;                        // binary: 1111111111110000
int y = 3;
int result = (unsigned int)x >> y;  // binary: 0001111111111110, decimal: 8190
```

Sign extension causes the right-shift operator `>>` to perform a division by powers of 2, even with negative numbers. For example:

``` arduino
int x = -1000;
int y = x >> 3; // integer division of -1000 by 8, causing y = -125.
```

But be aware of the rounding with negative numbers:

``` arduino
int x = -1001;
int y = x >> 3; // division by shifting always rounds down, causing y = -126
int z = x / 8;  // division operator rounds towards zero, causing z = -125
```

**See also**

- *EXAMPLE* [BitMath Tutorial](http://www.arduino.cc/playground/Code/BitMath)
