---
title: "pinMode()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Digital I/O" ]
slug: "pinmode"
url: "/uchastnikam/metodika/arduino-reference/functions/digital-io/pinmode/"
type: "arduino-reference"
translationKey: "pinmode"
---
**Description**

Configures the specified pin to behave either as an input or an output. See the [Digital Pins](http://arduino.cc/en/Tutorial/DigitalPins) page for details on the functionality of the pins.

It is possible to enable the internal pullup resistors with the mode `INPUT_PULLUP`. Additionally, the `INPUT` mode explicitly disables the internal pullups.

**Syntax**

`pinMode(pin, mode)`

**Parameters**

`pin`: the Arduino pin number to set the mode of.\
`mode`: `INPUT`, `OUTPUT`, or `INPUT_PULLUP`. See the [Digital Pins](http://arduino.cc/en/Tutorial/DigitalPins) page for a more complete description of the functionality.

**Returns**

Nothing

**Example Code**

The code makes the digital pin 13 `OUTPUT` and Toggles it `HIGH` and `LOW`

``` arduino
void setup() {
  pinMode(13, OUTPUT);    // sets the digital pin 13 as output
}

void loop() {
  digitalWrite(13, HIGH); // sets the digital pin 13 on
  delay(1000);            // waits for a second
  digitalWrite(13, LOW);  // sets the digital pin 13 off
  delay(1000);            // waits for a second
}
```

**Notes and Warnings**

The analog input pins can be used as digital pins, referred to as A0, A1, etc.

**See also**

- *EXAMPLE* [Description of the digital pins](http://arduino.cc/en/Tutorial/DigitalPins)
