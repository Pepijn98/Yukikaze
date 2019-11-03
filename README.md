# Yukikaze
A modern Interval implementation in TypeScript

`yarn add yukikaze` or `npm i yukikaze`

browser: https://unpkg.com/yukikaze@0.1.5/lib/bundle.js

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