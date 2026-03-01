---
title: "isAscii()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Characters" ]
slug: "isascii"
url: "/uchastnikam/metodika/arduino-reference/functions/characters/isascii/"
type: "arduino-reference"
translationKey: "isascii"
---
**Description**

Analyse if a char is Ascii. Returns true if thisChar contains an Ascii character.

**Syntax**

`isAscii(thisChar)`

**Parameters**

`thisChar`: variable. Allowed data types: `char`.

**Returns**

`true`: if thisChar is Ascii.

**Example Code**

``` arduino
if (isAscii(myChar)) {  // tests if myChar is an Ascii character
  Serial.println("The character is Ascii");
}
else {
  Serial.println("The character is not Ascii");
}
```

**See also**

- *LANGUAGE* [char](../../../variables/data-types/char)

- *LANGUAGE* [if (conditional operators)](../../../structure/control-structure/if)

- *LANGUAGE* [while (conditional operators)](../../../structure/control-structure/while)

- *LANGUAGE* [read()](../../communication/serial/read)
