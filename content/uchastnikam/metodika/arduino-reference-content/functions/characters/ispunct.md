---
title: "isPunct()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "Characters" ]
slug: "ispunct"
url: "/uchastnikam/metodika/arduino-reference/functions/characters/ispunct/"
type: "arduino-reference"
translationKey: "ispunct"
---
**Description**

Analyse if a char is punctuation (that is a comma, a semicolon, an exclamation mark and so on). Returns true if thisChar is punctuation.

**Syntax**

`isPunct(thisChar)`

**Parameters**

`thisChar`: variable. Allowed data types: `char`.

**Returns**

`true`: if thisChar is a punctuation.

**Example Code**

``` arduino
if (isPunct(myChar)) {  // tests if myChar is a punctuation character
  Serial.println("The character is a punctuation");
}
else {
  Serial.println("The character is not a punctuation");
}
```

**See also**

- *LANGUAGE* [char](../../../variables/data-types/char)

- *LANGUAGE* [if (conditional operators)](../../../structure/control-structure/if)

- *LANGUAGE* [while (conditional operators)](../../../structure/control-structure/while)

- *LANGUAGE* [read()](../../communication/serial/read)
