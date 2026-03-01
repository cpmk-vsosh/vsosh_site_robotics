---
title: "&&"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: logical and
categories: [ "Structure" ]
subCategories: [ "Boolean Operators" ]
slug: "logical-and"
url: "/uchastnikam/metodika/arduino-reference/structure/boolean-operators/logical-and/"
type: "arduino-reference"
translationKey: "logical-and"
---
**Description**

**Logical AND** results in `true` **only** if both operands are `true`.

**Example Code**

This operator can be used inside the condition of an [if](../../control-structure/if) statement.

``` arduino
if (digitalRead(2) == HIGH && digitalRead(3) == HIGH) { // if BOTH the switches read HIGH
  // statements
}
```

**Notes and Warnings**

Make sure you don’t mistake the boolean AND operator, && (double ampersand) for the bitwise AND operator & (single ampersand). They are entirely different beasts.

**See also**

- *LANGUAGE* [& (Bitwise AND)](../../bitwise-operators/bitwiseand)
