---
title: "toFloat()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Data Types" ]
subCategories: [ "StringObject Function" ]
slug: "tofloat"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/string/functions/tofloat/"
type: "arduino-reference"
translationKey: "tofloat"
---
**Description**

Converts a valid String to a float. The input String should start with a digit. If the String contains non-digit characters, the function will stop performing the conversion. For example, the Strings "123.45", "123", and "123fish" are converted to 123.45, 123.00, and 123.00 respectively. Note that "123.456" is approximated with 123.46. Note too that floats have only 6-7 decimal digits of precision and that longer Strings might be truncated.

**Syntax**

`myString.toFloat()`

**Parameters**

`myString`: a variable of type `String`.

**Returns**

If no valid conversion could be performed because the String doesn’t start with a digit, a zero is returned. Data type: `float`.

**See also**

- *EXAMPLE* [String Tutorials](https://www.arduino.cc/en/Tutorial/BuiltInExamples#strings)
