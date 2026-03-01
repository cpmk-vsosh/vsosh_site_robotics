---
title: "unsigned char"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Variables" ]
subCategories: [ "Data Types" ]
slug: "unsigned-char"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/unsigned-char/"
type: "arduino-reference"
translationKey: "unsigned-char"
---
**Description**

An unsigned data type that occupies 1 byte of memory. Same as the `byte` datatype.

The unsigned char datatype encodes numbers from 0 to 255.

For consistency of Arduino programming style, the [`byte`](../byte) data type is to be preferred.

**Syntax**

`unsigned char var = val;`

**Parameters**

`var`: variable name.\
`val`: the value to assign to that variable.

**Example Code**

``` arduino
unsigned char myChar = 240;
```

**See also**

- *LANGUAGE* [Serial.println](../../../functions/communication/serial/println)
