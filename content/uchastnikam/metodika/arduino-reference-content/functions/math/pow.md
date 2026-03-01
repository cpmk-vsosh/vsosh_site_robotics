---
title: "pow()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Math" ]
slug: "pow"
url: "/uchastnikam/metodika/arduino-reference/functions/math/pow/"
type: "arduino-reference"
translationKey: "pow"
---
**Description**

Calculates the value of a number raised to a power. `pow()` can be used to raise a number to a fractional power. This is useful for generating exponential mapping of values or curves.

**Syntax**

`pow(base, exponent)`

**Parameters**

`base`: the number. Allowed data types: `float`.\
`exponent`: the power to which the base is raised. Allowed data types: `float`.

**Returns**

The result of the exponentiation. Data type: `double`.

**Example Code**

Calculate the value of x raised to the power of y:

``` arduino
z = pow(x, y);
```

See the ([fscale](http://arduino.cc/playground/Main/Fscale)) sketch for a more complex example of the use of `pow()`.

**See also**

- *LANGUAGE* [abs()](../abs)

- *LANGUAGE* [constrain()](../constrain)

- *LANGUAGE* [map()](../map)

- *LANGUAGE* [max()](../max)

- *LANGUAGE* [min()](../min)

- *LANGUAGE* [sq()](../sq)

- *LANGUAGE* [sqrt()](../sqrt)
