---
title: "++"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: increment
categories: [ "Structure" ]
subCategories: [ "Compound Operators" ]
slug: "increment"
url: "/uchastnikam/metodika/arduino-reference/structure/compound-operators/increment/"
type: "arduino-reference"
translationKey: "increment"
---
**Description**

Increments the value of a variable by 1.

**Syntax**

`x++; // increment x by one and returns the old value of x`\
`++x; // increment x by one and returns the new value of x`

**Parameters**

`x`: variable. Allowed data types: `int`, `long` (possibly unsigned).

**Returns**

The original or newly incremented value of the variable.

**Example Code**

``` arduino
x = 2;
y = ++x;  // x now contains 3, y contains 3
y = x++;  // x contains 4, but y still contains 3
```

**See also**
