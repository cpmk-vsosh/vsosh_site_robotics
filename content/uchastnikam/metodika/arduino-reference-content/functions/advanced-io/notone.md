---
title: "noTone()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
title_expanded: ""
categories: [ "Functions" ]
subCategories: [ "Advanced I/O" ]
aliases: [ /language/functions/advanced-io/noTone/ ]
slug: "notone"
url: "/uchastnikam/metodika/arduino-reference/functions/advanced-io/notone/"
type: "arduino-reference"
translationKey: "notone"
---
**Description**

Stops the generation of a square wave triggered by `tone()`. Has no effect if no tone is being generated.

**Syntax**

`noTone(pin)`

**Parameters**

`pin`: the Arduino pin on which to stop generating the tone

**Returns**

Nothing

**Notes and Warnings**

If you want to play different pitches on multiple pins, you need to call `noTone()` on one pin before calling `tone()` on the next pin.

**See also**
