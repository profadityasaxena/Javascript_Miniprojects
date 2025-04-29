// Longest Common Subsequence
/**
 * Longest Common Subsequence Algorithm
 * 
 * Purpose:
 * The algorithm finds the length of the longest subsequence that is common to two strings.
 * A subsequence is a sequence derived from another sequence by deleting some or no elements
 * without changing the order of the remaining elements.
 * 
 * Sample Input:
 *   str1 = "abcde"
 *   str2 = "ace"
 * 
 * Sample Output:
 *   3 (The longest common subsequence is "ace")
 * 
 * Where is it used:
 * - DNA sequence analysis
 * - File comparison tools (e.g., diff)
 * - Data compression
 * - Spell checking and correction
 * 
 * Efficiency and Performance:
 * - Time Complexity: O(m * n), where `m` and `n` are the lengths of the two strings.
 * - Space Complexity: O(m * n), due to the use of a 2D dynamic programming table.
 */
function longestCommonSubsequence(str1, str2) {
    // Create a 2D array to store the lengths of subsequences
    const dp = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(0));

    // Iterate through both strings
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            // If characters match, increment the length of the subsequence
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // Otherwise, take the maximum length from previous subsequences
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Return the length of the longest common subsequence
    return dp[str1.length][str2.length];
}

// Knapsack Problem
/**
 * Knapsack Algorithm (0/1 Knapsack Problem)
 * 
 * Purpose:
 * The knapsack algorithm solves the 0/1 knapsack problem, where the goal is to maximize the total value of items
 * that can be placed in a knapsack of limited capacity. Each item can either be included or excluded (hence 0/1).
 * 
 * Sample Input:
 *   values = [60, 100, 120]
 *   weights = [10, 20, 30]
 *   capacity = 50
 * 
 * Sample Output:
 *   220 (The maximum value that can be obtained is by including items with values 100 and 120)
 * 
 * Where is it used:
 * - Resource allocation problems
 * - Financial portfolio optimization
 * - Project selection
 * - Packing problems
 * 
 * Efficiency and Performance:
 * - Time Complexity: O(n * capacity), where `n` is the number of items and `capacity` is the maximum weight the knapsack can hold.
 * - Space Complexity: O(n * capacity), due to the use of a 2D dynamic programming table.
 */
function knapsack(values, weights, capacity) {
    // Number of items
    const n = values.length;

    // Create a 2D array to store the maximum value for each capacity
    const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));

    // Iterate through each item
    for (let i = 1; i <= n; i++) {
        // Iterate through each capacity
        for (let w = 1; w <= capacity; w++) {
            // If the item's weight is less than or equal to the current capacity
            if (weights[i - 1] <= w) {
                // Take the maximum of including or excluding the item
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                // Otherwise, exclude the item
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // Return the maximum value for the given capacity
    return dp[n][capacity];
}

// Coin Change Problem
/**
 * Coin Change Algorithm
 * 
 * Purpose:
 * The algorithm finds the minimum number of coins needed to make up a given amount using a set of coin denominations.
 * If the amount cannot be made up, it returns -1.
 * 
 * Sample Input:
 *   coins = [1, 2, 5]
 *   amount = 11
 * 
 * Sample Output:
 *   3 (The minimum number of coins is 3: 5 + 5 + 1)
 * 
 * Where is it used:
 * - Currency exchange systems
 * - Vending machines
 * - Financial systems
 * 
 * Efficiency and Performance:
 * - Time Complexity: O(n * amount), where `n` is the number of coin denominations.
 * - Space Complexity: O(amount), due to the use of a 1D dynamic programming array.
 */
function coinChange(coins, amount) {
    // Create an array to store the minimum coins needed for each amount
    const dp = Array(amount + 1).fill(Infinity);

    // Base case: 0 coins are needed to make up amount 0
    dp[0] = 0;

    // Iterate through each coin
    for (let coin of coins) {
        // Update the dp array for each amount that can be made with the current coin
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    // Return the result for the given amount, or -1 if it's not possible
    return dp[amount] === Infinity ? -1 : dp[amount];
}

module.exports = {
    longestCommonSubsequence,
    knapsack,
    coinChange
};