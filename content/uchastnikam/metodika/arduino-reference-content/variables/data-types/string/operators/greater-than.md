---
title: ">"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: greater than
categories: [ "Data Types" ]
subCategories: [ "StringObject Operator" ]
slug: "greater-than"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/string/operators/greater-than/"
type: "arduino-reference"
translationKey: "greater-than"
---
**Description**

Tests if the String on the left is greater than the String on the right. This operator evaluates Strings in alphabetical order, on the first character where the two differ. So, for example "b" \> "a" and "2" \> "1", but "999" \> "1000" because 9 comes after 1.

Caution: String comparison operators can be confusing when you’re comparing numeric Strings, because the numbers are treated as Strings and not as numbers. If you need to compare numbers numerically, compare them as ints, floats, or longs, and not as Strings.

**Syntax**

`myString1 > myString2`

**Parameters**

`myString1`: a String variable.\
`myString2`: a String variable.

**Returns**

`true`: if myString1 is greater than myString2.\
`false`: otherwise.

**See also**

- *EXAMPLE* [String Tutorials](https://www.arduino.cc/en/Tutorial/BuiltInExamples#strings)
