---
title: "clearWireTimeoutFlag()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "clearwiretimeoutflag"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/wire/clearwiretimeoutflag/"
type: "arduino-reference"
translationKey: "clearwiretimeoutflag"
---
**Description**

Clears the timeout flag.

Timeouts might not be enabled by default. See the documentation for `Wire.setWireTimeout()` for more information on how to configure timeouts and how they work.

**Syntax**

`Wire.clearTimeout()`

**Parameters**

None.

**Returns**

None.

**Portability Notes**

This function was not available in the original version of the Wire library and might still not be available on all platforms. Code that needs to be portable across platforms and versions can use the `WIRE_HAS_TIMEOUT` macro, which is only defined when `Wire.setWireTimeout()`, `Wire.getWireTimeoutFlag()` and `Wire.clearWireTimeout()` are all available.
