/// <reference types="node" />
export declare class Interval {
    #private;
    active: boolean;
    baseline?: number;
    timer?: NodeJS.Timeout;
    constructor();
    /**
     * @since 0.1.0 Created function
     * @since 0.3.0 Added `initial` param
     *
     * Start and run the interval
     *
     * @param fn The function to run
     * @param duration The duration between each function run
     * @param initial Whether to run the given function immediately or wait the x milliseconds before running it the first time
     *
     * @returns {NodeJS.Timeout}
     */
    run(fn: (...args: any[]) => void, duration: number, initial?: boolean): NodeJS.Timeout;
    /**
     * @since 0.1.0 Created function
     *
     * Stop the interval
     */
    stop(): void;
}
export default Interval;
