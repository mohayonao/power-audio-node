# POWER AUDIO NODE
[![Build Status](http://img.shields.io/travis/mohayonao/power-audio-node.svg?style=flat-square)](https://travis-ci.org/mohayonao/power-audio-node)
[![NPM Version](http://img.shields.io/npm/v/@mohayonao/power-audio-node.svg?style=flat-square)](https://www.npmjs.org/package/@mohayonao/power-audio-node)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> enhance the connecting interface of AudioNode for custom AudioNode

## Installation

Node.js

```sh
npm install @mohayonao/power-audio-node
```

Browser

- [power-audio-node.js](https://raw.githubusercontent.com/mohayonao/power-audio-node/master/build/power-audio-node.js)

## Interface for CustomAudioNode
```js
interface CustomAudioNode {
  __connectFrom(source, output = 0, input = 0): void;
  __disconnectFrom(source, output = 0, input = 0): void;
}
```

## API

#### Module methods
- `use(): void`
- `unuse(): void`

## License
MIT
