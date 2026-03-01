---
title: "min()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Math" ]
slug: "min"
url: "/uchastnikam/metodika/arduino-reference/functions/math/min/"
type: "arduino-reference"
translationKey: "min"
---
**Description**

Calculates the minimum of two numbers.

**Syntax**

`min(x, y)`

**Parameters**

`x`: the first number. Allowed data types: any data type.\
`y`: the second number. Allowed data types: any data type.

**Returns**

The smaller of the two numbers.

**Example Code**

The code ensures that it never gets above 100.

``` arduino
sensVal = min(sensVal, 100);  // assigns sensVal to the smaller of sensVal or 100
                              // ensuring that it never gets above 100.
```

**Notes and Warnings**

Perhaps counter-intuitively, `max()` is often used to constrain the lower end of a variable’s range, while `min()` is used to constrain the upper end of the range.

Because of the way the `min()` function is implemented, avoid using other functions inside the brackets, it may lead to incorrect results

``` arduino
min(a++, 100);  // avoid this - yields incorrect results

min(a, 100);
a++;  // use this instead - keep other math outside the function
```

**See also**

- *LANGUAGE* [abs()](../abs)

- *LANGUAGE* [constrain()](../constrain)

- *LANGUAGE* [map()](../map)

- *LANGUAGE* [max()](../max)

- *LANGUAGE* [pow()](../pow)

- *LANGUAGE* [sq()](../sq)

- *LANGUAGE* [sqrt()](../sqrt)
