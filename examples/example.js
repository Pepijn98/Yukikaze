const { Interval } = require("../");

let i = 0;

const interval = new Interval();
interval.run(() => {
    console.log(i++);
}, 2000);