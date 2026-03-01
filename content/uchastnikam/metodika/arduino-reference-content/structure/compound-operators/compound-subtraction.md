---
title: "-="
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: compound subtraction
categories: [ "Structure" ]
subCategories: [ "Compound Operators" ]
slug: "compound-subtraction"
url: "/uchastnikam/metodika/arduino-reference/structure/compound-operators/compound-subtraction/"
type: "arduino-reference"
translationKey: "compound-subtraction"
---
**Description**

This is a convenient shorthand to perform subtraction of a constant or a variable from a variable.

**Syntax**

`x -= y; // equivalent to the expression x = x - y;`

**Parameters**

`x`: variable. Allowed data types: `int`, `float`, `double`, `byte`, `short`, `long`.\
`y`: variable or constant. Allowed data types: `int`, `float`, `double`, `byte`, `short`, `long`.

**Example Code**

``` arduino
x = 20;
x -= 2; // x now contains 18
```

**See also**

- *LANGUAGE* [Normal Subtraction](../../arithmetic-operators/subtraction)
