---
title: "return"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Structure" ]
subCategories: [ "Control Structure" ]
slug: "return"
url: "/uchastnikam/metodika/arduino-reference/structure/control-structure/return/"
type: "arduino-reference"
translationKey: "return"
---
**Description**

Terminate a function and return a value from a function to the calling function, if desired.

**Syntax**

`return;`\
`return value;`

**Parameters**

`value`: Allowed data types: any variable or constant type.

**Example Code**

A function to compare a sensor input to a threshold

``` arduino
int checkSensor() {
  if (analogRead(0) > 400) {
    return 1;
  }
  else {
    return 0;
  }
}
```

The return keyword is handy to test a section of code without having to "comment out" large sections of possibly buggy code.

``` arduino
void loop() {
  // brilliant code idea to test here

  return;

  // the rest of a dysfunctional sketch here
  // this code will never be executed
}
```

**See also**
