---
title: "indexOf()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Data Types" ]
subCategories: [ "StringObject Function" ]
slug: "indexof"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/string/functions/indexof/"
type: "arduino-reference"
translationKey: "indexof"
---
**Description**

Locates a character or String within another String. By default, searches from the beginning of the String, but can also start from a given index, allowing for the locating of all instances of the character or String.

**Syntax**

`myString.indexOf(val)`\
`myString.indexOf(val, from)`

**Parameters**

`myString`: a variable of type `String`.\
`val`: the value to search for. Allowed data types: `char`, `String`.\
`from`: the index to start the search from.

**Returns**

The index of val within the String, or -1 if not found.

**See also**

- *EXAMPLE* [String Tutorials](https://www.arduino.cc/en/Tutorial/BuiltInExamples#strings)
