---
title: "toInt()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Data Types" ]
subCategories: [ "StringObject Function" ]
slug: "toint"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/string/functions/toint/"
type: "arduino-reference"
translationKey: "toint"
---
**Description**

Converts a valid String to an integer. The input String should start with an integer number. If the String contains non-integer numbers, the function will stop performing the conversion.

**Syntax**

`myString.toInt()`

**Parameters**

`myString`: a variable of type `String`.

**Returns**

If no valid conversion could be performed because the String doesn’t start with a integer number, a zero is returned. Data type: `long`.

**See also**

- *EXAMPLE* [String Tutorials](https://www.arduino.cc/en/Tutorial/BuiltInExamples#strings)
