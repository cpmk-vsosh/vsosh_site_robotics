---
title: "remove()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Data Types" ]
subCategories: [ "StringObject Function" ]
slug: "remove"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/string/functions/remove/"
type: "arduino-reference"
translationKey: "remove"
---
**Description**

Modify in place a String removing chars from the provided index to the end of the String or from the provided index to index plus count.

**Syntax**

`myString.remove(index)`\
`myString.remove(index, count)`

**Parameters**

`myString`: a variable of type `String`.\
`index`: The position at which to start the remove process (zero indexed). Allowed data types: `unsigned int`.\
`count`: The number of characters to remove. Allowed data types: `unsigned int`.

**Returns**

Nothing

**Example Code**

``` arduino
String greeting = "hello";
greeting.remove(2, 2);  // greeting now contains "heo"
```

**See also**

- *EXAMPLE* [String Tutorials](https://www.arduino.cc/en/Tutorial/BuiltInExamples#strings)
