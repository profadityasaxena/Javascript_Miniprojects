/**
 * Debouncing
 * Purpose: Debouncing is a technique to limit the rate at which a function is executed. 
 *          It ensures that the function is called only after a specified delay has passed 
 *          since the last time it was invoked.
 * Sample Input: debounce(() => console.log('Hello'), 300)
 * Sample Output: Logs "Hello" only after 300ms of no further calls.
 * Usage: Used in scenarios like search bar suggestions, window resize events, or button clicks.
 * Efficiency: Reduces the number of function calls, improving performance in high-frequency events.
 */
function debounce(func, delay) {
    let timer; // Timer to track the delay
    return function (...args) {
        clearTimeout(timer); // Clear any existing timer
        timer = setTimeout(() => func.apply(this, args), delay); // Set a new timer to call the function after the delay
    };
}

/**
 * Throttling
 * Purpose: Throttling is a technique to ensure that a function is executed at most once 
 *          in a specified time interval, regardless of how many times it is triggered.
 * Sample Input: throttle(() => console.log('Scroll'), 1000)
 * Sample Output: Logs "Scroll" at most once every 1000ms, even if triggered multiple times.
 * Usage: Used in scenarios like scroll events, mouse movement, or window resizing.
 * Efficiency: Limits the execution rate of a function, reducing resource usage in high-frequency events.
 */
function throttle(func, limit) {
    let lastFunc; // Timer for delayed execution
    let lastRan; // Timestamp of the last execution
    return function (...args) {
        const context = this; // Save the context
        if (!lastRan) {
            func.apply(context, args); // Execute the function if it hasn't run yet
            lastRan = Date.now(); // Update the last execution timestamp
        } else {
            clearTimeout(lastFunc); // Clear any pending execution
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) { // Check if the time limit has passed
                    func.apply(context, args); // Execute the function
                    lastRan = Date.now(); // Update the last execution timestamp
                }
            }, limit - (Date.now() - lastRan)); // Schedule the function to run after the remaining time
        }
    };
}

/**
 * Memoization
 * Purpose: Memoization is an optimization technique to cache the results of expensive function calls 
 *          and return the cached result when the same inputs occur again.
 * Sample Input: const memoizedAdd = memoize((a, b) => a + b); memoizedAdd(1, 2)
 * Sample Output: Returns 3 and caches the result for future calls with the same arguments.
 * Usage: Used in scenarios like recursive algorithms (e.g., Fibonacci), or expensive computations.
 * Efficiency: Improves performance by avoiding redundant computations, especially for repeated inputs.
 */
function memoize(fn) {
    const cache = new Map(); // Cache to store results
    return function (...args) {
        const key = JSON.stringify(args); // Serialize arguments to create a unique key
        if (cache.has(key)) { // Check if the result is already cached
            return cache.get(key); // Return the cached result
        }
        const result = fn.apply(this, args); // Call the function with the arguments
        cache.set(key, result); // Cache the result
        return result; // Return the result
    };
}

/**
 * Event Loop Demonstration
 * Purpose: This function demonstrates the behavior of the JavaScript event loop 
 *          by showing the order of execution of synchronous and asynchronous code.
 * Sample Input: eventLoopDemo()
 * Sample Output: Logs "Start", "End", "Promise", "Timeout" in that order.
 * Usage: Used to understand the execution order of synchronous, micro-tasks, and macro-tasks in JavaScript.
 * Efficiency: Not applicable (educational purpose).
 */
function eventLoopDemo() {
    console.log("Start"); // Log the start of the function

    setTimeout(() => {
        console.log("Timeout"); // Log after the timeout (macro-task)
    }, 0);

    Promise.resolve().then(() => {
        console.log("Promise"); // Log after the promise resolves (micro-task)
    });

    console.log("End"); // Log the end of the function
}

module.exports = {
    debounce,
    throttle,
    memoize,
    eventLoopDemo
};