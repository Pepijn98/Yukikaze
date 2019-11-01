# Yukikaze
A modern Interval implementation in TypeScript

`yarn add yukikaze` or `npm i yukikaze`

```js
const { Interval } = require("yukikaze");

let i = 0;

const interval = new Interval();
interval.run(() => {
    console.log(i++);
}, 2000);
```

# Docs
https://kurozeropb.github.io/Yukikaze/