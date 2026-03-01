---
title: "isUpperCase()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Characters" ]
slug: "isuppercase"
url: "/uchastnikam/metodika/arduino-reference/functions/characters/isuppercase/"
type: "arduino-reference"
translationKey: "isuppercase"
---
**Description**

Analyse if a char is upper case (that is, a letter in upper case). Returns true if thisChar is upper case.

**Syntax**

`isUpperCase(thisChar)`

**Parameters**

`thisChar`: variable. Allowed data types: `char`.

**Returns**

`true`: if thisChar is upper case.

**Example Code**

``` arduino
if (isUpperCase(myChar)) {  // tests if myChar is an upper case letter
  Serial.println("The character is upper case");
}
else {
  Serial.println("The character is not upper case");
}
```

**See also**

- *LANGUAGE* [char](../../../variables/data-types/char)

- *LANGUAGE* [if (conditional operators)](../../../structure/control-structure/if)

- *LANGUAGE* [while (conditional operators)](../../../structure/control-structure/while)

- *LANGUAGE* [read()](../../communication/serial/read)
