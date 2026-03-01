---
title: "Floating Point Constants"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Variables" ]
subCategories: [ "Constants" ]
slug: "floating-point-constants"
url: "/uchastnikam/metodika/arduino-reference/variables/constants/floating-point-constants/"
type: "arduino-reference"
translationKey: "floating-point-constants"
---
**Description**

Similar to integer constants, floating point constants are used to make code more readable. Floating point constants are swapped at compile time for the value to which the expression evaluates.

**Example Code**

``` arduino
float n = 0.005;  // 0.005 is a floating point constant
```

**Notes and Warnings**

Floating point constants can also be expressed in a variety of scientific notation. 'E' and 'e' are both accepted as valid exponent indicators.

| floating-point constant | evaluates to:  | also evaluates to: |
|-------------------------|----------------|--------------------|
| 10.0                    | 10             |                    |
| 2.34E5                  | 2.34 \* 10^5   | 234000             |
| 67e-12                  | 67.0 \* 10^-12 | 0.000000000067     |

**See also**
