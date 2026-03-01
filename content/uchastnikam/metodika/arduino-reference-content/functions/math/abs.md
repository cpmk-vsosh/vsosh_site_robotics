---
title: "abs()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Math" ]
slug: "abs"
url: "/uchastnikam/metodika/arduino-reference/functions/math/abs/"
type: "arduino-reference"
translationKey: "abs"
---
**Description**

Calculates the absolute value of a number.

**Syntax**

`abs(x)`

**Parameters**

`x`: the number

**Returns**

`x`: if x is greater than or equal to 0.\
`-x`: if x is less than 0.

**Example Code**

Prints the absolute value of variable `x` to the Serial Monitor.

``` arduino
void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ;  // wait for serial port to connect. Needed for native USB port only
  }
  int x = 42;
  Serial.print("The absolute value of ");
  Serial.print(x);
  Serial.print(" is ");
  Serial.println(abs(x));
  x = -42;
  Serial.print("The absolute value of ");
  Serial.print(x);
  Serial.print(" is ");
  Serial.println(abs(x));
}

void loop() {
}
```

**Notes and Warnings**

Because of the way the abs() function is implemented, avoid using other functions inside the brackets, it may lead to incorrect results.

``` arduino
abs(a++); // avoid this - yields incorrect results

// use this instead:
abs(a);
a++;  // keep other math outside the function
```

**See also**

- *LANGUAGE* [constrain()](../constrain)

- *LANGUAGE* [map()](../map)

- *LANGUAGE* [max()](../max)

- *LANGUAGE* [min()](../min)

- *LANGUAGE* [pow()](../pow)

- *LANGUAGE* [sq()](../sq)

- *LANGUAGE* [sqrt()](../sqrt)
