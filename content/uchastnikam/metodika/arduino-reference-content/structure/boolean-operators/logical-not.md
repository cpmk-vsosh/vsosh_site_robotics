---
title: "!"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: logical not
categories: [ "Structure" ]
subCategories: [ "Boolean Operators" ]
slug: "logical-not"
url: "/uchastnikam/metodika/arduino-reference/structure/boolean-operators/logical-not/"
type: "arduino-reference"
translationKey: "logical-not"
---
**Description**

**Logical NOT** results in a `true` if the operand is `false` and vice versa.

**Example Code**

This operator can be used inside the condition of an [if](../../control-structure/if) statement.

``` arduino
if (!x) { // if x is not true
  // statements
}
```

It can be used to invert the boolean value.

``` arduino
x = !y; // the inverted value of y is stored in x
```

**Notes and Warnings**

The bitwise not ~ (tilde) looks much different than the boolean not ! (exclamation point or "bang" as the programmers say) but you still have to be sure which one you want where.

**See also**

- *LANGUAGE* [~ Bitwise NOT](../../bitwise-operators/bitwisenot)
