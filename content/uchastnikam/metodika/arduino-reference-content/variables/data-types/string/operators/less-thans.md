---
title: "<"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: less thans
categories: [ "Data Types" ]
subCategories: [ "StringObject Operator" ]
slug: "less-thans"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/string/operators/less-thans/"
type: "arduino-reference"
translationKey: "less-thans"
---
**Description**

Tests if the String on the left is less than the String on the right. This operator evaluate Strings in alphabetical order, on the first character where the two differ. So, for example "a" \< "b" and "1" \< "2", but "999" \> "1000" because 9 comes after 1.

Caution: String comparison operators can be confusing when you’re comparing numeric Strings, because the numbers are treated as Strings and not as numbers. If you need to compare numbers numerically, compare them as ints, floats, or longs, and not as Strings.

**Syntax**

`myString1 < myString2`

**Parameters**

`myString1`: variable of type String.\
`myString2`: variable of type String.

**Returns**

`true`: if myString1 is less than myString2.\
`false`: otherwise.

**See also**

- *EXAMPLE* [String Tutorials](https://www.arduino.cc/en/Tutorial/BuiltInExamples#strings)
