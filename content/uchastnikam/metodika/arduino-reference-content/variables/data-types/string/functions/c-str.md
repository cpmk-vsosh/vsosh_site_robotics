---
title: "c_str()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Data Types" ]
subCategories: [ "StringObject Function" ]
slug: "c-str"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/string/functions/c-str/"
type: "arduino-reference"
translationKey: "c-str"
---
**Description**

Converts the contents of a String as a C-style, null-terminated string. Note that this gives direct access to the internal String buffer and should be used with care. In particular, you should never modify the string through the pointer returned. When you modify the String object, or when it is destroyed, any pointer previously returned by c_str() becomes invalid and should not be used any longer.

**Syntax**

`myString.c_str()`

**Parameters**

`myString`: a variable of type `String`.

**Returns**

A pointer to the C-style version of the invoking String.

**See also**

- *EXAMPLE* [String Tutorials](https://www.arduino.cc/en/Tutorial/BuiltInExamples#strings)
