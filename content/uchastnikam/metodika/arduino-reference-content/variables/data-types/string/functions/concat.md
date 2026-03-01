---
title: "concat()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Data Types" ]
subCategories: [ "StringObject Function" ]
slug: "concat"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/string/functions/concat/"
type: "arduino-reference"
translationKey: "concat"
---
**Description**

Appends the parameter to a String.

**Syntax**

`myString.concat(parameter)`

**Parameters**

`myString`: a variable of type `String`.\
`parameter`: Allowed data types: `String`, `string`, `char`, `byte`, `int`, `unsigned int`, `long`, `unsigned long`, `float`, `double`, `__FlashStringHelper`(`F()` macro).

**Returns**

`true`: success.\
`false`: failure (in which case the String is left unchanged).

**See also**

- *EXAMPLE* [String Tutorials](https://www.arduino.cc/en/Tutorial/BuiltInExamples#strings)
