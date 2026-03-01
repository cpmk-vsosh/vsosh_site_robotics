---
title: "long"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Variables" ]
subCategories: [ "Data Types" ]
slug: "long"
url: "/uchastnikam/metodika/arduino-reference/variables/data-types/long/"
type: "arduino-reference"
translationKey: "long"
---
**Description**

Long variables are extended size variables for number storage, and store 32 bits (4 bytes), from -2,147,483,648 to 2,147,483,647.

If doing math with integers at least one of the values must be of type long, either an integer constant followed by an L or a variable of type long, forcing it to be a long. See the [Integer Constants](../../constants/integerconstants) page for details.

**Syntax**

`long var = val;`

**Parameters**

`var`: variable name.\
`val`: the value assigned to the variable.

**Example Code**

``` arduino
long speedOfLight_km_s = 300000L;  // see the Integer Constants page for explanation of the 'L'
```

**See also**

- *LANGUAGE* [Integer Constants](../../constants/integerconstants)
