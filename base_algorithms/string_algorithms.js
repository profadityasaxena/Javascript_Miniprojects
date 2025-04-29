/**
 * Palindrome Checker
 * Purpose: To check if a given string is a palindrome (reads the same backward as forward).
 * Sample Input: "A man, a plan, a canal, Panama"
 * Sample Output: true
 * Use Case: Useful in text processing, validation, and certain algorithmic problems.
 * Efficiency: O(n), where n is the length of the string. The algorithm processes the string once.
 */
function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

/**
 * Anagram Checker
 * Purpose: To check if two strings are anagrams (contain the same characters in a different order).
 * Sample Input: "listen", "silent"
 * Sample Output: true
 * Use Case: Useful in text comparison, cryptography, and word games.
 * Efficiency: O(n log n), where n is the length of the strings. Sorting dominates the complexity.
 */
function areAnagrams(str1, str2) {
    // Helper function to clean, sort, and format the string
    const formatStr = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
    // Compare the formatted versions of both strings
    return formatStr(str1) === formatStr(str2);
}

/**
 * Longest Substring Without Repeating Characters
 * Purpose: To find the length of the longest substring in a string without repeating characters.
 * Sample Input: "abcabcbb"
 * Sample Output: 3 (substring: "abc")
 * Use Case: Useful in string manipulation, sliding window problems, and optimization tasks.
 * Efficiency: O(n), where n is the length of the string. The algorithm uses a sliding window approach.
 */
function longestUniqueSubstring(s) {
    // Initialize variables to track the maximum length, start of the window, and seen characters
    let maxLength = 0;
    let start = 0;
    const seen = new Map();

    // Iterate through the string
    for (let end = 0; end < s.length; end++) {
        // If the character is already seen, update the start of the window
        if (seen.has(s[end])) {
            start = Math.max(seen.get(s[end]) + 1, start);
        }
        // Update the last seen index of the current character
        seen.set(s[end], end);
        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Return the maximum length found
    return maxLength;
}

module.exports = {
    isPalindrome,
    areAnagrams,
    longestUniqueSubstring
};