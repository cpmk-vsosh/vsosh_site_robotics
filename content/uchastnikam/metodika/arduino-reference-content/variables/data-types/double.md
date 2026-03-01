---
title: "double"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Variables" ]
subCategories: [ "Data Types" ]
slug: "double"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/double/"
type: "arduino-reference"
translationKey: "double"
---
**Description**

Double precision floating point number. On the Uno and other ATMEGA based boards, this occupies 4 bytes. That is, the double implementation is exactly the same as the float, with no gain in precision.

On the Arduino Due, doubles have 8-byte (64 bit) precision.

**Syntax**

`double var = val;`

**Parameters**

`var`: variable name.\
`val`: the value to assign to that variable.

**Notes and Warnings**

Users who borrow code from other sources that includes double variables may wish to examine the code to see if the implied precision is different from that actually achieved on ATMEGA based Arduinos.

**See also**
