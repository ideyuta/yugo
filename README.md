# yugo

[![Build Status][circle-image]][circle-url]
[![License][license-image]][license-url]

## Description

🍥 yugo is simple JavaScript utility for conditionally joining objects.  
For example, Manage the StyleSheet of React Native.

Inspired by [classnames](https://github.com/JedWatson/classnames).

[What's yugo?](https://www.google.co.jp/search?q=%E8%9E%8D%E5%90%88+%E9%81%8A%E6%88%AF%E7%8E%8B&espv=2&biw=1353&bih=669&source=lnms&tbm=isch&sa=X&ved=0CAYQ_AUoAWoVChMIsrDigM_PyAIVA-SmCh0VkAmo)

## Installation

```
npm i yugo
```

## Usage

Use with node.js, browserify, webpack:

```js
var yugo = require(yugo);
```

Join Objects. Overwrite.  
**Caution : Do Not Use Nested Object. Destructive.**

```js
yugo({a: 'a'}, {b: 'b'}, {b: 'c'}); // => {a: 'a', b: 'c'}
```

Conditionaly Join Objects. Use Array.

```js
yugo({a: 'a'}, [{b: 'b'}, true], {c: 'c'}); // => {a: 'a', b: 'b', c: 'c'}

yugo({a: 'a'}, [{b: 'b'}, false], {c: 'c'}); // => {a: 'a', c: 'c'}
```


[circle-url]: https://circleci.com/gh/ideyuta/yugo
[circle-image]: https://circleci.com/gh/ideyuta/yugo.png?style=shield&circle-token=:circle-token
[license-url]: http://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
