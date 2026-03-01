---
title: "bool"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Variables" ]
subCategories: [ "Data Types" ]
slug: "bool"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/bool/"
type: "arduino-reference"
translationKey: "bool"
---
**Description**

A `bool` holds one of two values, `true` or `false`. (Each `bool` variable occupies one byte of memory.)

**Syntax**

`bool var = val;`

**Parameters**

`var`: variable name.\
`val`: the value to assign to that variable.

**Example Code**

This code shows how to use the `bool` datatype.

``` arduino
int LEDpin = 5;     // LED on pin 5
int switchPin = 13; // momentary switch on 13, other side connected to ground

bool running = false;

void setup() {
  pinMode(LEDpin, OUTPUT);
  pinMode(switchPin, INPUT);
  digitalWrite(switchPin, HIGH);  // turn on pullup resistor
}

void loop() {
  if (digitalRead(switchPin) == LOW) {
    // switch is pressed - pullup keeps pin high normally
    delay(100);                     // delay to debounce switch
    running = !running;             // toggle running variable
    digitalWrite(LEDpin, running);  // indicate via LED
  }
}
```

**See also**
