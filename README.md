# POWER AUDIO NODE

> enhance the connecting interface of AudioNode for custom AudioNode

## Installation

Node.js

```sh
npm install @mohayonao/power-audio-node
```

Browser

- [power-audio-node.js](https://raw.githubusercontent.com/mohayonao/envelope/master/build/power-audio-node.js)

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
