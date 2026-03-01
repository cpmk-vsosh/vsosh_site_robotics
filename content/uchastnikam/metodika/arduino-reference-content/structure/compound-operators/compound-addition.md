---
title: "+="
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: compound addition
categories: [ "Structure" ]
subCategories: [ "Compound Operators" ]
slug: "compound-addition"
url: "/uchastnikam/metodika/arduino-reference/structure/compound-operators/compound-addition/"
type: "arduino-reference"
translationKey: "compound-addition"
---
**Description**

This is a convenient shorthand to perform addition on a variable with another constant or variable.

**Syntax**

`x += y; // equivalent to the expression x = x + y;`

**Parameters**

`x`: variable. Allowed data types: `int`, `float`, `double`, `byte`, `short`, `long`.\
`y`: variable or constant. Allowed data types: `int`, `float`, `double`, `byte`, `short`, `long`.

**Example Code**

``` arduino
x = 2;
x += 4; // x now contains 6
```

**See also**

- *LANGUAGE* [Normal Addition](../../arithmetic-operators/addition)
