---
title: "--"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: decrement
categories: [ "Structure" ]
subCategories: [ "Compound Operators" ]
slug: "decrement"
url: "/uchastnikam/metodika/arduino-reference/structure/compound-operators/decrement/"
type: "arduino-reference"
translationKey: "decrement"
---
**Description**

Decrements the value of a variable by 1.

**Syntax**

`x--; // decrement x by one and returns the old value of x`\
`--x; // decrement x by one and returns the new value of x`

**Parameters**

`x`: variable. Allowed data types: `int`, `long` (possibly unsigned).

**Returns**

The original or newly decremented value of the variable.

**Example Code**

``` arduino
x = 2;
y = --x;  // x now contains 1, y contains 1
y = x--;  // x contains 0, but y still contains 1
```

**See also**
