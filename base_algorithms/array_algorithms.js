/**
 * Two Sum Problem
 * Purpose: Find two numbers in an array that add up to a specific target.
 * Sample Input: nums = [2, 7, 11, 15], target = 9
 * Sample Output: [0, 1] (indices of the numbers 2 and 7)
 * Use Case: Commonly used in financial applications, gaming, and problem-solving.
 * Efficiency: Time Complexity - O(n), Space Complexity - O(n)
 */
function twoSum(nums, target) {
    const map = new Map(); // Create a map to store numbers and their indices.
    for (let i = 0; i < nums.length; i++) { // Iterate through the array.
        const complement = target - nums[i]; // Calculate the complement of the current number.
        if (map.has(complement)) { // Check if the complement exists in the map.
            return [map.get(complement), i]; // Return the indices of the two numbers.
        }
        map.set(nums[i], i); // Add the current number and its index to the map.
    }
    return []; // Return an empty array if no solution is found.
}

/**
 * Maximum Subarray (Kadane's Algorithm)
 * Purpose: Find the contiguous subarray with the largest sum in an array.
 * Sample Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Sample Output: 6 (subarray [4, -1, 2, 1])
 * Use Case: Used in stock market analysis, dynamic programming problems, and optimization tasks.
 * Efficiency: Time Complexity - O(n), Space Complexity - O(1)
 */
function maxSubArray(nums) {
    let maxSoFar = nums[0]; // Initialize the maximum sum so far with the first element.
    let maxEndingHere = nums[0]; // Initialize the current subarray sum with the first element.
    for (let i = 1; i < nums.length; i++) { // Iterate through the array starting from the second element.
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]); // Update the current subarray sum.
        maxSoFar = Math.max(maxSoFar, maxEndingHere); // Update the maximum sum so far.
    }
    return maxSoFar; // Return the maximum sum.
}

/**
 * Array Flattening
 * Purpose: Flatten a nested array into a single-level array.
 * Sample Input: arr = [1, [2, [3, 4], 5], 6]
 * Sample Output: [1, 2, 3, 4, 5, 6]
 * Use Case: Used in data processing, JSON parsing, and simplifying nested structures.
 * Efficiency: Time Complexity - O(n), Space Complexity - O(n) (n is the total number of elements in the array)
 */
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => { // Use reduce to iterate through the array.
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten); // Recursively flatten nested arrays.
    }, []); // Start with an empty array as the accumulator.
}

// Exporting the functions
module.exports = {
    twoSum,
    maxSubArray,
    flattenArray
};