<div align="center">
    <br />
    <p>
        <a href="https://discord.gg/p895czC">
            <img src="https://discordapp.com/api/guilds/240059867744698368/embed.png" alt="Discord server" />
        </a>
        <a href="https://www.npmjs.com/package/yukikaze">
            <img src="https://img.shields.io/npm/v/yukikaze.svg?maxAge=3600" alt="NPM version" />
        </a>
        <a href="https://www.npmjs.com/package/yukikaze">
            <img src="https://img.shields.io/npm/dt/yukikaze.svg?maxAge=3600" alt="NPM downloads" />
        </a>
        <a href="https://david-dm.org/KurozeroPB/yukikaze">
            <img src="https://img.shields.io/david/kurozeropb/yukikaze.svg?maxAge=3600" alt="Dependencies" />
        </a>
        <a href="https://www.patreon.com/Kurozero">
            <img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" />
        </a>
    </p>
    <p>
        <a href="https://nodei.co/npm/yukikaze/">
            <img src="https://nodei.co/npm/yukikaze.png?downloads=true&stars=true" alt="NPM info" />
        </a>
    </p>
</div>

# Yukikaze
A modern Interval implementation in TypeScript

## Browser
https://unpkg.com/yukikaze@{VERSION}/lib/index.min.js
```html
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Timer">
        <meta name="keywords" content="HTML,JavaScript,Timer">
        <meta name="author" content="KurozeroPB">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Timer</title>
    </head>
    <body>
        <script src="https://unpkg.com/yukikaze@{VERSION}/lib/index.min.js"></script>
        <script lang="javascript">
            let i = 0;

            const interval = new Yukikaze();
            interval.run(() => console.log(i++), 2000);
        </script>
    </body>
</html>
```
<br/><br/>

## Node
`yarn add yukikaze` or `npm i --save yukikaze`
```js
const Yukikaze = require("yukikaze");

let i = 0;

const interval = new Yukikaze();
interval.run(() => console.log(i++), 2000);
```

# Docs
https://kurozeropb.github.io/Yukikaze/