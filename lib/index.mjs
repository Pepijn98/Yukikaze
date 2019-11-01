class Interval {
    /**
     * @since 0.1.0
     *
     * Start and run the interval
     *
     * @param fn The function to run
     * @param duration The duration between each function run
     *
     * @returns {NodeJS.Timeout}
     */
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
    /**
     * @since 0.1.0
     *
     * Stop the interval
     */
    stop() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
}

export default Interval;
export { Interval };
