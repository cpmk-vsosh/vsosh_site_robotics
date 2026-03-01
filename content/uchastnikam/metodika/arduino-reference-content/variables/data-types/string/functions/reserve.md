---
title: "reserve()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Data Types" ]
subCategories: [ "StringObject Function" ]
slug: "reserve"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/string/functions/reserve/"
type: "arduino-reference"
translationKey: "reserve"
---
**Description**

The String reserve() function allows you to allocate a buffer in memory for manipulating Strings.

**Syntax**

`myString.reserve(size)`

**Parameters**

`myString`: a variable of type `String`.\
`size`: the number of bytes in memory to save for String manipulation. Allowed data types: `unsigned int`.

**Returns**

`1` on success, `0` on failure.

**Example Code**

``` arduino
String myString;

void setup() {
  // initialize serial and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB
  }

  myString.reserve(26);
  myString = "i=";
  myString += "1234";
  myString += ", is that ok?";

  // print the String:
  Serial.println(myString);
}

void loop() {
  // nothing to do here
}
```

**See also**

- *EXAMPLE* [String Tutorials](https://www.arduino.cc/en/Tutorial/BuiltInExamples#strings)
