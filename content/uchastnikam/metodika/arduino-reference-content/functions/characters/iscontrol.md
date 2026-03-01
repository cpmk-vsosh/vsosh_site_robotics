---
title: "isControl()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Characters" ]
slug: "iscontrol"
url: "/uchastnikam/metodika/arduino-reference/functions/characters/iscontrol/"
type: "arduino-reference"
translationKey: "iscontrol"
---
**Description**

Analyse if a char is a control character. Returns true if thisChar is a control character.

**Syntax**

`isControl(thisChar)`

**Parameters**

`thisChar`: variable. Allowed data types: `char`.

**Returns**

`true`: if thisChar is a control character.

**Example Code**

``` arduino
if (isControl(myChar)) {  // tests if myChar is a control character
  Serial.println("The character is a control character");
}
else {
  Serial.println("The character is not a control character");
}
```

**See also**

- *LANGUAGE* [char](../../../variables/data-types/char)

- *LANGUAGE* [if (conditional operators)](../../../structure/control-structure/if)

- *LANGUAGE* [while (conditional operators)](../../../structure/control-structure/while)

- *LANGUAGE* [read()](../../communication/serial/read)
