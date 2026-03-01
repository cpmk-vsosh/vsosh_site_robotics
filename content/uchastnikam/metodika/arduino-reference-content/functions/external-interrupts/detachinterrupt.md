---
title: "detachInterrupt()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Functions" ]
subCategories: [ "External Interrupts" ]
slug: "detachinterrupt"
url: "/uchastnikam/metodika/arduino-reference/functions/external-interrupts/detachinterrupt/"
type: "arduino-reference"
translationKey: "detachinterrupt"
---
**Description**

Turns off the given interrupt.

**Syntax**

- `detachInterrupt(digitalPinToInterrupt(pin))` (recommended)\

- `detachInterrupt(interrupt)` (not recommended)\

- `detachInterrupt(pin)` (Not recommended. Additionally, this only works on a specific set of boards.)

**Parameters**

`interrupt`: the number of the interrupt to disable (see [attachInterrupt()](../attachinterrupt) for more details).\
`pin`: the Arduino pin number of the interrupt to disable

**Returns**

Nothing

**See also**
