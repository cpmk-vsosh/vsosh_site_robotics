---
title: "bitSet()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Bits and Bytes" ]
slug: "bitset"
url: "/uchastnikam/metodika/arduino-reference/functions/bits-and-bytes/bitset/"
type: "arduino-reference"
translationKey: "bitset"
---
**Description**

Sets (writes a 1 to) a bit of a numeric variable.

**Syntax**

`bitSet(x, n)`

**Parameters**

`x`: the numeric variable whose bit to set.\
`n`: which bit to set, starting at 0 for the least-significant (rightmost) bit.

**Returns**

`x`: the value of the numeric variable after the bit at position `n` is set.

**Example Code**

Prints the output of `bitSet(x,n)` on two given integers. The binary representation of 4 is 0100, so when `n=1`, the second bit from the right is set to 1. After this we are left with 0110 in binary, so 6 is returned.

``` arduino
void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  int x = 4;
  int n = 1;
  Serial.print(bitSet(x, n)); // print the output of bitSet(x,n)
}

void loop() {
}
```

**See also**

- *LANGUAGE* [bitClear()](../bitclear)
