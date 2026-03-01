---
title: "max()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Math" ]
slug: "max"
url: "/uchastnikam/metodika/arduino-reference/functions/math/max/"
type: "arduino-reference"
translationKey: "max"
---
**Description**

Calculates the maximum of two numbers.

**Syntax**

`max(x, y)`

**Parameters**

`x`: the first number. Allowed data types: any data type.\
`y`: the second number. Allowed data types: any data type.

**Returns**

The larger of the two parameter values.

**Example Code**

The code ensures that sensVal is at least 20.

``` arduino
sensVal = max(sensVal, 20); // assigns sensVal to the larger of sensVal or 20
                            // (effectively ensuring that it is at least 20)
```

**Notes and Warnings**

Perhaps counter-intuitively, `max()` is often used to constrain the lower end of a variable’s range, while `min()` is used to constrain the upper end of the range.

Because of the way the `max()` function is implemented, avoid using other functions inside the brackets, it may lead to incorrect results

``` arduino
max(a--, 0);  // avoid this - yields incorrect results

// use this instead:
max(a, 0);
a--;  // keep other math outside the function
```

**See also**

- *LANGUAGE* [abs()](../abs)

- *LANGUAGE* [constrain()](../constrain)

- *LANGUAGE* [map()](../map)

- *LANGUAGE* [min()](../min)

- *LANGUAGE* [pow()](../pow)

- *LANGUAGE* [sq()](../sq)

- *LANGUAGE* [sqrt()](../sqrt)
