---
title: "short"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Variables" ]
subCategories: [ "Data Types" ]
slug: "short"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/short/"
type: "arduino-reference"
translationKey: "short"
---
**Description**

A short is a 16-bit data-type.

On all Arduinos (ATMega and ARM based) a short stores a 16-bit (2-byte) value. This yields a range of -32,768 to 32,767 (minimum value of -2^15 and a maximum value of (2^15) - 1).

**Syntax**

`short var = val;`

**Parameters**

`var`: variable name.\
`val`: the value you assign to that variable.

**Example Code**

``` arduino
short ledPin = 13
```

**See also**

- *LANGUAGE* [Integer Constants](../../constants/integerconstants)
