/**
 * Tower of Hanoi
 * Purpose: Solve the Tower of Hanoi problem, which involves moving a stack of disks from one rod to another.
 * Sample Input: towerOfHanoi(3, 'A', 'C', 'B')
 * Sample Output:
 *   Move disk 1 from A to C
 *   Move disk 2 from A to B
 *   Move disk 1 from C to B
 *   Move disk 3 from A to C
 *   Move disk 1 from B to A
 *   Move disk 2 from B to C
 *   Move disk 1 from A to C
 * Use Case: Demonstrates recursion and is often used in teaching recursion concepts.
 * Efficiency: O(2^n) time complexity, where n is the number of disks.
 */
function towerOfHanoi(n, source, target, auxiliary) {
    if (n === 1) {
        // Base case: If there's only one disk, move it directly from source to target.
        console.log(`Move disk 1 from ${source} to ${target}`);
        return;
    }
    // Move n-1 disks from source to auxiliary using target as a helper.
    towerOfHanoi(n - 1, source, auxiliary, target);
    // Move the nth disk from source to target.
    console.log(`Move disk ${n} from ${source} to ${target}`);
    // Move the n-1 disks from auxiliary to target using source as a helper.
    towerOfHanoi(n - 1, auxiliary, target, source);
}

/**
 * Permutations of a String
 * Purpose: Generate all permutations of a given string.
 * Sample Input: permutations(['A', 'B', 'C'])
 * Sample Output:
 *   ABC
 *   ACB
 *   BAC
 *   BCA
 *   CAB
 *   CBA
 * Use Case: Useful in problems involving arrangements, such as anagrams or combinatorial problems.
 * Efficiency: O(n!) time complexity, where n is the length of the string.
 */
function permutations(string, step = 0) {
    if (step === string.length) {
        // Base case: If the step index reaches the string length, print the permutation.
        console.log(string.join(''));
        return;
    }
    for (let i = step; i < string.length; i++) {
        // Create a copy of the string to avoid modifying the original array.
        const stringCopy = [...string];
        // Swap the current step character with the i-th character.
        [stringCopy[step], stringCopy[i]] = [stringCopy[i], stringCopy[step]];
        // Recursively generate permutations for the next step.
        permutations(stringCopy, step + 1);
    }
}

/**
 * N-Queens Problem
 * Purpose: Solve the N-Queens problem, which involves placing N queens on an N×N chessboard such that no two queens threaten each other.
 * Sample Input: solveNQueens(4)
 * Sample Output:
 *   . Q . .
 *   . . . Q
 *   Q . . .
 *   . . Q .
 * Use Case: Demonstrates backtracking and is used in constraint satisfaction problems.
 * Efficiency: O(N!) in the worst case, where N is the size of the board.
 */
function printSolution(board) {
    // Print the board configuration with 'Q' for queens and '.' for empty spaces.
    board.forEach(row => {
        console.log(row.map(col => (col ? 'Q' : '.')).join(' '));
    });
    console.log();
}

function isSafe(board, row, col, n) {
    // Check if there's a queen in the same row to the left.
    for (let i = 0; i < col; i++) {
        if (board[row][i]) return false;
    }
    // Check the upper diagonal on the left.
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) return false;
    }
    // Check the lower diagonal on the left.
    for (let i = row, j = col; i < n && j >= 0; i++, j--) {
        if (board[i][j]) return false;
    }
    // If no conflicts, the position is safe.
    return true;
}

function solveNQueensUtil(board, col, n) {
    if (col >= n) {
        // Base case: If all queens are placed, print the solution.
        printSolution(board);
        return true;
    }
    let res = false;
    for (let i = 0; i < n; i++) {
        // Check if placing a queen at (i, col) is safe.
        if (isSafe(board, i, col, n)) {
            // Place the queen at (i, col).
            board[i][col] = 1;
            // Recursively place queens in the next column.
            res = solveNQueensUtil(board, col + 1, n) || res;
            // Backtrack: Remove the queen from (i, col).
            board[i][col] = 0;
        }
    }
    return res;
}

function solveNQueens(n) {
    // Initialize the chessboard with all zeros.
    const board = Array.from({ length: n }, () => Array(n).fill(0));
    // Start solving the N-Queens problem from the first column.
    if (!solveNQueensUtil(board, 0, n)) {
        // If no solution exists, print a message.
        console.log("No solution exists");
    }
}

module.exports = {
    towerOfHanoi,
    permutations,
    solveNQueens
};