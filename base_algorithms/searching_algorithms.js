/**
 * Linear Search Algorithm
 * Purpose: To find the index of a target element in an array by checking each element sequentially.
 * Sample Input: [1, 2, 3, 4, 5], target = 3
 * Sample Output: 2 (index of the target element)
 * Use Case: Useful for unsorted arrays or small datasets.
 * Efficiency: O(n) time complexity, where n is the size of the array.
 * Performance: Inefficient for large datasets as it checks each element one by one.
 */
function linearSearch(arr, target) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element matches the target
        if (arr[i] === target) {
            return i; // Return the index of the target
        }
    }
    return -1; // Return -1 if the target is not found
}

/**
 * Binary Search Algorithm
 * Purpose: To find the index of a target element in a sorted array by repeatedly dividing the search interval in half.
 * Sample Input: [1, 2, 3, 4, 5], target = 3
 * Sample Output: 2 (index of the target element)
 * Use Case: Useful for sorted arrays and large datasets.
 * Efficiency: O(log n) time complexity, where n is the size of the array.
 * Performance: Highly efficient for large datasets but requires the array to be sorted.
 */
function binarySearch(arr, target) {
    let left = 0; // Initialize the left pointer to the start of the array
    let right = arr.length - 1; // Initialize the right pointer to the end of the array

    // Continue searching while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Calculate the middle index

        // Check if the middle element matches the target
        if (arr[mid] === target) {
            return mid; // Return the index of the target
        } else if (arr[mid] < target) {
            left = mid + 1; // Move the left pointer to the right half
        } else {
            right = mid - 1; // Move the right pointer to the left half
        }
    }
    return -1; // Return -1 if the target is not found
}

// Exporting the algorithms
module.exports = {
    linearSearch,
    binarySearch
};