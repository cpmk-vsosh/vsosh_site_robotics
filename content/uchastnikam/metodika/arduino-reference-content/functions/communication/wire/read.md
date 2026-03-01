---
title: "read()"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
slug: "read"
url: "/uchastnikam/metodika/arduino-reference/functions/communication/wire/read/"
type: "arduino-reference"
translationKey: "read"
---
**Description**

This function reads a byte that was transmitted from a peripheral device to a controller device after a call to `requestFrom()` or was transmitted from a controller device to a peripheral device. `read()` inherits from the Stream utility class.

**Syntax**

`Wire.read()`

**Parameters**

None.

**Returns**

The next byte received.

**Example**

    #include <Wire.h>

    void setup() {
      Wire.begin();             // Join I2C bus (address is optional for controller device)
      Serial.begin(9600);       // Start serial for output
    }

    void loop() {
        Wire.requestFrom(2, 6);    // Request 6 bytes from slave device number two

        // Slave may send less than requested
        while(Wire.available()) {
            char c = Wire.read();    // Receive a byte as character
            Serial.print(c);         // Print the character
        }

        delay(500);
    }
