---
title: "isDigit()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Characters" ]
slug: "isdigit"
url: "/uchastnikam/metodika/arduino-reference/functions/characters/isdigit/"
type: "arduino-reference"
translationKey: "isdigit"
---
**Description**

Analyse if a char is a digit (that is a number). Returns true if thisChar is a number.

**Syntax**

`isDigit(thisChar)`

**Parameters**

`thisChar`: variable. Allowed data types: `char`.

**Returns**

`true`: if thisChar is a number.

**Example Code**

``` arduino
if (isDigit(myChar)) {  // tests if myChar is a digit
  Serial.println("The character is a number");
}
else {
  Serial.println("The character is not a number");
}
```

**See also**

- *LANGUAGE* [char](../../../variables/data-types/char)

- *LANGUAGE* [if (conditional operators)](../../../structure/control-structure/if)

- *LANGUAGE* [while (conditional operators)](../../../structure/control-structure/while)

- *LANGUAGE* [read()](../../communication/serial/read)
