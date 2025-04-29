/**
 * Bubble Sort
 * Purpose: A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
 * Sample Input: [5, 3, 8, 4, 2]
 * Sample Output: [2, 3, 4, 5, 8]
 * Where Used: Suitable for small datasets or as an educational tool to understand sorting.
 * Efficiency: O(n^2) in the worst and average cases, O(n) in the best case (already sorted array).
 * Performance: Inefficient for large datasets.
 */
function bubbleSort(arr) {
    let n = arr.length; // Get the length of the array
    for (let i = 0; i < n - 1; i++) { // Outer loop for each pass
        for (let j = 0; j < n - i - 1; j++) { // Inner loop to compare adjacent elements
            if (arr[j] > arr[j + 1]) { // If the current element is greater than the next
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap the elements
            }
        }
    }
    return arr; // Return the sorted array
}

/**
 * Merge Sort
 * Purpose: A divide-and-conquer algorithm that splits the array into halves, sorts each half, and merges them back together.
 * Sample Input: [5, 3, 8, 4, 2]
 * Sample Output: [2, 3, 4, 5, 8]
 * Where Used: Suitable for large datasets and stable sorting.
 * Efficiency: O(n log n) in all cases.
 * Performance: Requires additional memory for merging.
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case: array with 1 or no elements is already sorted

    const mid = Math.floor(arr.length / 2); // Find the middle index
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
    const right = mergeSort(arr.slice(mid)); // Recursively sort the right half

    return merge(left, right); // Merge the sorted halves
}

function merge(left, right) {
    let result = []; // Array to store the merged result
    let i = 0, j = 0; // Pointers for left and right arrays

    while (i < left.length && j < right.length) { // While both arrays have elements
        if (left[i] < right[j]) { // If the current element in left is smaller
            result.push(left[i++]); // Add it to the result and move the pointer
        } else { // Otherwise, add the current element in right
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j)); // Add remaining elements from left and right
}

/**
 * Quick Sort
 * Purpose: A divide-and-conquer algorithm that selects a pivot and partitions the array into elements less than and greater than the pivot.
 * Sample Input: [5, 3, 8, 4, 2]
 * Sample Output: [2, 3, 4, 5, 8]
 * Where Used: Suitable for large datasets, but not stable.
 * Efficiency: O(n log n) on average, O(n^2) in the worst case (e.g., already sorted array with bad pivot selection).
 * Performance: In-place sorting, but requires stack space for recursion.
 */
function quickSort(arr) {
    if (arr.length <= 1) return arr; // Base case: array with 1 or no elements is already sorted

    const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    const left = arr.filter((el, idx) => el <= pivot && idx !== arr.length - 1); // Elements less than or equal to pivot
    const right = arr.filter(el => el > pivot); // Elements greater than pivot

    return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort left and right, then combine with pivot
}

/**
 * Insertion Sort
 * Purpose: A simple sorting algorithm that builds the sorted array one element at a time by inserting elements into their correct position.
 * Sample Input: [5, 3, 8, 4, 2]
 * Sample Output: [2, 3, 4, 5, 8]
 * Where Used: Suitable for small datasets or nearly sorted arrays.
 * Efficiency: O(n^2) in the worst and average cases, O(n) in the best case (already sorted array).
 * Performance: In-place sorting, minimal memory usage.
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) { // Start from the second element
        let key = arr[i]; // Store the current element
        let j = i - 1; // Initialize pointer for the sorted portion

        while (j >= 0 && arr[j] > key) { // Shift elements of the sorted portion that are greater than key
            arr[j + 1] = arr[j]; // Move the element one position to the right
            j--; // Move the pointer to the left
        }
        arr[j + 1] = key; // Insert the key into its correct position
    }
    return arr; // Return the sorted array
}

module.exports = {
    bubbleSort,
    mergeSort,
    quickSort,
    insertionSort
};