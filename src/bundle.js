class Interval {
    run(fn, duration) {
        if (this.baseline === undefined) {
            this.baseline = new Date().getTime();
        }
        fn();
        const end = new Date().getTime();
        this.baseline += duration;
        let nextTick = duration - (end - this.baseline);
        if (nextTick < 0) {
            nextTick = 0;
        }
        this.timer = setTimeout(() => this.run(fn, duration), nextTick);
        return this.timer;
    }
    stop() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
}
