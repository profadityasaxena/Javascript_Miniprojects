/**
 * Stack Implementation
 * 
 * Purpose:
 * A stack is a linear data structure that follows the Last In, First Out (LIFO) principle.
 * It allows adding and removing elements only from the top of the stack.
 * 
 * Sample Input and Output:
 * - Input: stack.push(10), stack.push(20), stack.pop()
 * - Output: 20 (last pushed element is removed first)
 * 
 * Where is it used:
 * - Function call stack in programming
 * - Undo/Redo functionality in text editors
 * - Backtracking algorithms (e.g., maze solving, DFS)
 * 
 * Efficiency and Performance:
 * - Push: O(1)
 * - Pop: O(1)
 * - Peek: O(1)
 * - Space Complexity: O(n), where n is the number of elements in the stack
 */
class Stack {
    constructor() {
        // Initialize an empty array to store stack elements
        this.items = [];
    }

    push(element) {
        // Add an element to the top of the stack
        this.items.push(element);
    }

    pop() {
        // Remove and return the top element of the stack
        if (this.isEmpty()) return "Underflow"; // Return "Underflow" if stack is empty
        return this.items.pop();
    }

    peek() {
        // Return the top element without removing it
        if (this.isEmpty()) return "No elements in Stack"; // Return message if stack is empty
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        // Check if the stack is empty
        return this.items.length === 0;
    }
}

/**
 * Queue Implementation
 * 
 * Purpose:
 * A queue is a linear data structure that follows the First In, First Out (FIFO) principle.
 * It allows adding elements at the rear and removing elements from the front.
 * 
 * Sample Input and Output:
 * - Input: queue.enqueue(10), queue.enqueue(20), queue.dequeue()
 * - Output: 10 (first enqueued element is removed first)
 * 
 * Where is it used:
 * - Task scheduling (e.g., CPU scheduling, print queue)
 * - Breadth-First Search (BFS) in graphs
 * - Handling requests in web servers
 * 
 * Efficiency and Performance:
 * - Enqueue: O(1)
 * - Dequeue: O(1)
 * - Front: O(1)
 * - Space Complexity: O(n), where n is the number of elements in the queue
 */
class Queue {
    constructor() {
        // Initialize an empty array to store queue elements
        this.items = [];
    }

    enqueue(element) {
        // Add an element to the rear of the queue
        this.items.push(element);
    }

    dequeue() {
        // Remove and return the front element of the queue
        if (this.isEmpty()) return "Underflow"; // Return "Underflow" if queue is empty
        return this.items.shift();
    }

    front() {
        // Return the front element without removing it
        if (this.isEmpty()) return "No elements in Queue"; // Return message if queue is empty
        return this.items[0];
    }

    isEmpty() {
        // Check if the queue is empty
        return this.items.length === 0;
    }
}

/**
 * Linked List Operations
 * 
 * Purpose:
 * A linked list is a linear data structure where each element (node) contains data and a reference to the next node.
 * It allows dynamic memory allocation and efficient insertion/deletion operations.
 * 
 * Sample Input and Output:
 * - Input: linkedList.append(10), linkedList.append(20), linkedList.delete(10), linkedList.display()
 * - Output: [20] (10 is removed, and 20 remains in the list)
 * 
 * Where is it used:
 * - Implementation of stacks, queues, and hash tables
 * - Dynamic memory allocation
 * - Graph adjacency lists
 * 
 * Efficiency and Performance:
 * - Append: O(n)
 * - Delete: O(n)
 * - Display: O(n)
 * - Space Complexity: O(n), where n is the number of nodes in the linked list
 */
class Node {
    constructor(data) {
        // Initialize a node with data and a null reference to the next node
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        // Initialize an empty linked list with a null head
        this.head = null;
    }

    append(data) {
        // Add a new node with the given data to the end of the list
        const newNode = new Node(data);
        if (!this.head) {
            // If the list is empty, set the new node as the head
            this.head = newNode;
            return;
        }
        let current = this.head;
        // Traverse to the end of the list
        while (current.next) {
            current = current.next;
        }
        // Set the new node as the next of the last node
        current.next = newNode;
    }

    delete(data) {
        // Remove the first node with the specified data
        if (!this.head) return; // Return if the list is empty
        if (this.head.data === data) {
            // If the head contains the data, update the head to the next node
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        // Traverse the list to find the node to delete
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        if (current.next) {
            // Update the next reference to skip the node to be deleted
            current.next = current.next.next;
        }
    }

    display() {
        // Return an array representation of the linked list
        let current = this.head;
        const result = [];
        while (current) {
            // Add each node's data to the result array
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

/**
 * Binary Search Tree (BST) Operations
 * 
 * Purpose:
 * A binary search tree is a hierarchical data structure where each node has at most two children.
 * The left child contains values less than the parent, and the right child contains values greater than the parent.
 * 
 * Sample Input and Output:
 * - Input: bst.insert(10), bst.insert(20), bst.insert(5), bst.search(20), bst.inorder()
 * - Output: true (20 is found), [5, 10, 20] (inorder traversal)
 * 
 * Where is it used:
 * - Searching and sorting operations
 * - Implementation of sets and maps
 * - Range queries and dynamic data storage
 * 
 * Efficiency and Performance:
 * - Insert: O(h), where h is the height of the tree
 * - Search: O(h)
 * - Inorder Traversal: O(n)
 * - Space Complexity: O(n), where n is the number of nodes in the tree
 */
class BSTNode {
    constructor(data) {
        // Initialize a BST node with data and null references to left and right children
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        // Initialize an empty BST with a null root
        this.root = null;
    }

    insert(data) {
        // Add a new node with the given data to the BST
        const newNode = new BSTNode(data);
        if (!this.root) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
            return;
        }
        // Recursively insert the new node in the correct position
        this._insertNode(this.root, newNode);
    }

    _insertNode(node, newNode) {
        // Helper function to insert a node in the BST
        if (newNode.data < node.data) {
            // If the new node's data is less, go to the left subtree
            if (!node.left) {
                node.left = newNode; // Insert as the left child if empty
            } else {
                this._insertNode(node.left, newNode); // Recur for the left subtree
            }
        } else {
            // If the new node's data is greater, go to the right subtree
            if (!node.right) {
                node.right = newNode; // Insert as the right child if empty
            } else {
                this._insertNode(node.right, newNode); // Recur for the right subtree
            }
        }
    }

    search(data) {
        // Check if a node with the specified data exists in the BST
        return this._searchNode(this.root, data);
    }

    _searchNode(node, data) {
        // Helper function to search for a node in the BST
        if (!node) return false; // Return false if the node is null
        if (data < node.data) return this._searchNode(node.left, data); // Search in the left subtree
        if (data > node.data) return this._searchNode(node.right, data); // Search in the right subtree
        return true; // Return true if the data matches the node's data
    }

    inorder() {
        // Return an array of elements in sorted order (inorder traversal)
        const result = [];
        this._inorderTraversal(this.root, result);
        return result;
    }

    _inorderTraversal(node, result) {
        // Helper function for inorder traversal
        if (node) {
            this._inorderTraversal(node.left, result); // Traverse the left subtree
            result.push(node.data); // Add the node's data to the result
            this._inorderTraversal(node.right, result); // Traverse the right subtree
        }
    }
}

module.exports = {
    Stack,
    Queue,
    LinkedList,
    BinarySearchTree
};