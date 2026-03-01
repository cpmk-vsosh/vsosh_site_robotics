---
title: "isWhitespace()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Characters" ]
slug: "iswhitespace"
url: "/uchastnikam/metodika/arduino-reference/functions/characters/iswhitespace/"
type: "arduino-reference"
translationKey: "iswhitespace"
---
**Description**

Analyse if a char is a space character. Returns true if the argument is a space or horizontal tab (`'\t'`).

**Syntax**

`isWhitespace(thisChar)`

**Parameters**

`thisChar`: variable. Allowed data types: `char`.

**Returns**

`true`: if thisChar is a space character.

**Example Code**

``` arduino
if (isWhitespace(myChar)) { // tests if myChar is a space character
  Serial.println("The character is a space or tab");
}
else {
  Serial.println("The character is not a space or tab");
}
```

**See also**

- *LANGUAGE* [char](../../../variables/data-types/char)

- *LANGUAGE* [if (conditional operators)](../../../structure/control-structure/if)

- *LANGUAGE* [while (conditional operators)](../../../structure/control-structure/while)

- *LANGUAGE* [read()](../../communication/serial/read)
