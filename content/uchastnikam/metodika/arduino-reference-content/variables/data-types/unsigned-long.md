---
title: "unsigned long"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Variables" ]
subCategories: [ "Data Types" ]
slug: "unsigned-long"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/unsigned-long/"
type: "arduino-reference"
translationKey: "unsigned-long"
---
**Description**

Unsigned long variables are extended size variables for number storage, and store 32 bits (4 bytes). Unlike standard longs unsigned longs won’t store negative numbers, making their range from 0 to 4,294,967,295 (2^32 - 1).

**Syntax**

`unsigned long var = val;`

**Parameters**

`var`: variable name.\
`val`: the value you assign to that variable.

**Example Code**

``` arduino
unsigned long time;

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("Time: ");
  time = millis();
  //prints time since program started
  Serial.println(time);
  // wait a second so as not to send massive amounts of data
  delay(1000);
}
```

**See also**

- *LANGUAGE* [Integer Constants](../../constants/integerconstants)
