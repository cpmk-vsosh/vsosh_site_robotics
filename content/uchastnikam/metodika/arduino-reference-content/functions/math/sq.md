---
title: "sq()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Math" ]
slug: "sq"
url: "/uchastnikam/metodika/arduino-reference/functions/math/sq/"
type: "arduino-reference"
translationKey: "sq"
---
**Description**

Calculates the square of a number: the number multiplied by itself.

**Syntax**

`sq(x)`

**Parameters**

`x`: the number. Allowed data types: any data type.

**Returns**

The square of the number. Data type: `double`.

**Notes and Warnings**

Because of the way the `sq()` function is implemented, avoid using other functions inside the brackets, it may lead to incorrect results.

This code will yield incorrect results:

``` arduino
int inputSquared = sq(Serial.parseInt()); // avoid this
```

Use this instead:

``` arduino
int input = Serial.parseInt();  // keep other operations outside the sq function
int inputSquared = sq(input);
```

**See also**

- *LANGUAGE* [abs()](../abs)

- *LANGUAGE* [constrain()](../constrain)

- *LANGUAGE* [map()](../map)

- *LANGUAGE* [max()](../max)

- *LANGUAGE* [min()](../min)

- *LANGUAGE* [pow()](../pow)

- *LANGUAGE* [sqrt()](../sqrt)
