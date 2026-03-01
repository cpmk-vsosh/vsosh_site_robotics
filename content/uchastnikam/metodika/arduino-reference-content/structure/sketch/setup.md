---
title: "setup()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Sketch" ]
slug: "setup"
url: "/uchastnikam/metodika/arduino-reference/structure/sketch/setup/"
type: "arduino-reference"
translationKey: "setup"
---
**Description**

The `setup()` function is called when a sketch starts. Use it to initialize variables, pin modes, start using libraries, etc. The `setup()` function will only run once, after each powerup or reset of the Arduino board.

**Example Code**

``` arduino
int buttonPin = 3;

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT);
}

void loop() {
  // ...
}
```

**See also**
