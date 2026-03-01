---
title: "isAlpha()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Characters" ]
slug: "isalpha"
url: "/uchastnikam/metodika/arduino-reference/functions/characters/isalpha/"
type: "arduino-reference"
translationKey: "isalpha"
---
**Description**

Analyse if a char is alpha (that is a letter). Returns true if thisChar contains a letter.

**Syntax**

`isAlpha(thisChar)`

**Parameters**

`thisChar`: variable. Allowed data types: `char`.

**Returns**

`true`: if thisChar is alpha.

**Example Code**

``` arduino
if (isAlpha(myChar)) {  // tests if myChar is a letter
  Serial.println("The character is a letter");
}
else {
  Serial.println("The character is not a letter");
}
```

**See also**

- *LANGUAGE* [char](../../../variables/data-types/char)

- *LANGUAGE* [if (conditional operators)](../../../structure/control-structure/if)

- *LANGUAGE* [while (conditional operators)](../../../structure/control-structure/while)

- *LANGUAGE* [read()](../../communication/serial/read)
