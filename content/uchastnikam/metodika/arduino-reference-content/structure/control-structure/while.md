---
title: "while"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Structure" ]
subCategories: [ "Control Structure" ]
slug: "while"
url: "/uchastnikam/metodika/arduino-reference/structure/control-structure/while/"
type: "arduino-reference"
translationKey: "while"
---
**Description**

A `while` loop will loop continuously, and infinitely, until the expression inside the parenthesis, () becomes false. Something must change the tested variable, or the while loop will never exit. This could be in your code, such as an incremented variable, or an external condition, such as testing a sensor.

**Syntax**

``` arduino
while (condition) {
  // statement(s)
}
```

**Parameters**

`condition`: a boolean expression that evaluates to `true` or `false`.

**Example Code**

``` arduino
var = 0;
while (var < 200) {
  // do something repetitive 200 times
  var++;
}
```

**See also**

- *EXAMPLE* [While Loop](https://www.arduino.cc/en/Tutorial/BuiltInExamples/WhileStatementConditional)
