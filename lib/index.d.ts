/// <reference types="node" />

export declare class Interval {
	baseline?: number;
	timer?: NodeJS.Timeout;
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
	run(fn: (...args: any[]) => void, duration: number): NodeJS.Timeout;
	/**
	 * @since 0.1.0
	 *
	 * Stop the interval
	 */
	stop(): void;
}
export default Interval;

export {};
