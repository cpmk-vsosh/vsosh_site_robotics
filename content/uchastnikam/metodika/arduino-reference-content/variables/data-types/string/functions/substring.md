---
title: "substring()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Data Types" ]
subCategories: [ "StringObject Function" ]
slug: "substring"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/string/functions/substring/"
type: "arduino-reference"
translationKey: "substring"
---
**Description**

Get a substring of a String. The starting index is inclusive (the corresponding character is included in the substring), but the optional ending index is exclusive (the corresponding character is not included in the substring). If the ending index is omitted, the substring continues to the end of the String.

**Syntax**

`myString.substring(from)`\
`myString.substring(from, to)`

**Parameters**

`myString`: a variable of type `String`.\
`from`: the index to start the substring at.\
`to` (optional): the index to end the substring before.

**Returns**

The substring.

**See also**

- *EXAMPLE* [String Tutorials](https://www.arduino.cc/en/Tutorial/BuiltInExamples#strings)
