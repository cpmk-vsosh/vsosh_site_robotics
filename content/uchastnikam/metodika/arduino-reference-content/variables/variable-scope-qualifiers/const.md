---
title: "const"
date: 2026-02-28
publishDate: 2026-02-28T10:00:00+03:00
draft: false
author: "Admin"
categories: [ "Variables" ]
subCategories: [ "Variable Scope & Qualifiers" ]
slug: "const"
url: "/uchastnikam/metodika/arduino-reference/variables/variable-scope-qualifiers/const/"
type: "arduino-reference"
translationKey: "const"
---
**Description**

The `const` keyword stands for constant. It is a variable *qualifier* that modifies the behavior of the variable, making a variable "*read-only*". This means that the variable can be used just as any other variable of its type, but its value cannot be changed. You will get a compiler error if you try to assign a value to a `const` variable.

Constants defined with the `const` keyword obey the rules of [variable scoping](../scope) that govern other variables. This, and the pitfalls of using `#define`, makes the `const` keyword a superior method for defining constants and is preferred over using [`#define`](../../../structure/further-syntax/define).

**Example Code**

``` arduino
const float pi = 3.14;
float x;
// ....
x = pi * 2; // it's fine to use consts in math
pi = 7;     // illegal - you can't write to (modify) a constant
```

**Notes and Warnings**

**[`#define`](../../../structure/further-syntax/define) or `const`**

You can use either `const` or [`#define`](../../../structure/further-syntax/define) for creating numeric or string constants. For [arrays](../../data-types/array), you will need to use `const`. In general `const` is preferred over [`#define`](../../../structure/further-syntax/define) for defining constants.

**See also**

- *LANGUAGE* [\#define](../../../structure/further-syntax/define)
