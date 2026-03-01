---
title: "/="
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: compound division
categories: [ "Structure" ]
subCategories: [ "Compound Operators" ]
slug: "compound-division"
url: "/uchastnikam/metodika/arduino-reference/structure/compound-operators/compound-division/"
type: "arduino-reference"
translationKey: "compound-division"
---
**Description**

This is a convenient shorthand to perform division of a variable with another constant or variable.

**Syntax**

`x /= y; // equivalent to the expression x = x / y;`

**Parameters**

`x`: variable. Allowed data types: `int`, `float`, `double`, `byte`, `short`, `long`.\
`y`: **non zero** variable or constant. Allowed data types: `int`, `float`, `double`, `byte`, `short`, `long`.

**Example Code**

``` arduino
x = 2;
x /= 2; // x now contains 1
```

**See also**

- *LANGUAGE* [Normal Division](../../arithmetic-operators/division)
