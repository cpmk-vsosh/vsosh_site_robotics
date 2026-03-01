---
title: "isHexadecimalDigit()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Characters" ]
slug: "ishexadecimaldigit"
url: "/uchastnikam/metodika/arduino-reference/functions/characters/ishexadecimaldigit/"
type: "arduino-reference"
translationKey: "ishexadecimaldigit"
---
**Description**

Analyse if a char is an hexadecimal digit (A-F, 0-9). Returns true if thisChar contains an hexadecimal digit.

**Syntax**

`isHexadecimalDigit(thisChar)`

**Parameters**

`thisChar`: variable. Allowed data types: `char`.

**Returns**

`true`: if thisChar is an hexadecimal digit.

**Example Code**

``` arduino
if (isHexadecimalDigit(myChar)) { // tests if myChar is an hexadecimal digit
  Serial.println("The character is an hexadecimal digit");
}
else {
  Serial.println("The character is not an hexadecimal digit");
}
```

**See also**

- *LANGUAGE* [char](../../../variables/data-types/char)

- *LANGUAGE* [if (conditional operators)](../../../structure/control-structure/if)

- *LANGUAGE* [while (conditional operators)](../../../structure/control-structure/while)

- *LANGUAGE* [read()](../../communication/serial/read)
