/**
 * Fibonacci Sequence
 * Purpose: To calculate the nth number in the Fibonacci sequence.
 * Sample Input: fibonacci(5)
 * Sample Output: 5 (Sequence: 0, 1, 1, 2, 3, 5)
 * Use Case: Used in mathematical computations, dynamic programming, and algorithm design.
 * Efficiency: O(n) time complexity, O(1) space complexity.
 */
function fibonacci(n) {
    // Base case: If n is 0 or 1, return n
    if (n <= 1) return n;
    let a = 0, b = 1, temp; // Initialize variables for the sequence
    for (let i = 2; i <= n; i++) { // Loop from 2 to n
        temp = a + b; // Calculate the next Fibonacci number
        a = b; // Update a to the previous b
        b = temp; // Update b to the new Fibonacci number
    }
    return b; // Return the nth Fibonacci number
}

/**
 * Prime Number Checker
 * Purpose: To determine if a given number is a prime number.
 * Sample Input: isPrime(7)
 * Sample Output: true
 * Use Case: Used in cryptography, number theory, and primality testing.
 * Efficiency: O(sqrt(n)) time complexity.
 */
function isPrime(num) {
    // Check if the number is less than or equal to 1
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) { // Loop from 2 to the square root of the number
        if (num % i === 0) return false; // If divisible, it's not a prime number
    }
    return true; // Return true if no divisors are found
}

/**
 * Factorial Calculation
 * Purpose: To calculate the factorial of a given non-negative integer.
 * Sample Input: factorial(5)
 * Sample Output: 120 (5 * 4 * 3 * 2 * 1)
 * Use Case: Used in combinatorics, probability, and mathematical analysis.
 * Efficiency: O(n) time complexity.
 */
function factorial(n) {
    // Return undefined for negative numbers
    if (n < 0) return undefined;
    let result = 1; // Initialize result to 1
    for (let i = 2; i <= n; i++) { // Loop from 2 to n
        result *= i; // Multiply result by the current number
    }
    return result; // Return the factorial
}

/**
 * Greatest Common Divisor (GCD)
 * Purpose: To find the greatest common divisor of two integers.
 * Sample Input: gcd(12, 18)
 * Sample Output: 6
 * Use Case: Used in fraction simplification, number theory, and cryptography.
 * Efficiency: O(log(min(a, b))) time complexity using the Euclidean algorithm.
 */
function gcd(a, b) {
    while (b !== 0) { // Continue until b becomes 0
        let temp = b; // Store b in a temporary variable
        b = a % b; // Update b to the remainder of a divided by b
        a = temp; // Update a to the previous value of b
    }
    return a; // Return the GCD
}

/**
 * Least Common Multiple (LCM)
 * Purpose: To find the least common multiple of two integers.
 * Sample Input: lcm(4, 6)
 * Sample Output: 12
 * Use Case: Used in scheduling problems, number theory, and algebra.
 * Efficiency: O(log(min(a, b))) time complexity (depends on GCD calculation).
 */
function lcm(a, b) {
    // If either number is 0, return 0
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b); // Calculate LCM using the formula: |a * b| / GCD(a, b)
}

// Exporting the functions
module.exports = {
    fibonacci,
    isPrime,
    factorial,
    gcd,
    lcm
};