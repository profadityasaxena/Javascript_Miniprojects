/**
 * Depth First Search (DFS)
 * Purpose: Traverse a graph by exploring as far as possible along each branch before backtracking.
 * Sample Input: graph = { A: ['B', 'C'], B: ['D'], C: ['E'], D: [], E: [] }, startNode = 'A'
 * Sample Output: ['A', 'B', 'D', 'C', 'E']
 * Use Cases: Used in solving puzzles, pathfinding, and topological sorting.
 * Efficiency: Time Complexity - O(V + E), Space Complexity - O(V) (where V is vertices, E is edges)
 */
function depthFirstSearch(graph, startNode) {
    const visited = new Set(); // Set to track visited nodes
    const result = []; // Array to store the traversal order

    function dfs(node) {
        if (visited.has(node)) return; // If node is already visited, return
        visited.add(node); // Mark the node as visited
        result.push(node); // Add the node to the result

        for (const neighbor of graph[node]) { // Iterate over neighbors of the node
            dfs(neighbor); // Recursively call DFS on each neighbor
        }
    }

    dfs(startNode); // Start DFS from the startNode
    return result; // Return the traversal order
}

/**
 * Breadth First Search (BFS)
 * Purpose: Traverse a graph level by level, exploring all neighbors at the current depth before moving deeper.
 * Sample Input: graph = { A: ['B', 'C'], B: ['D'], C: ['E'], D: [], E: [] }, startNode = 'A'
 * Sample Output: ['A', 'B', 'C', 'D', 'E']
 * Use Cases: Used in shortest path algorithms, social networking, and web crawling.
 * Efficiency: Time Complexity - O(V + E), Space Complexity - O(V) (where V is vertices, E is edges)
 */
function breadthFirstSearch(graph, startNode) {
    const visited = new Set(); // Set to track visited nodes
    const queue = [startNode]; // Queue to manage nodes to visit
    const result = []; // Array to store the traversal order

    while (queue.length > 0) { // Continue until the queue is empty
        const node = queue.shift(); // Dequeue the first node
        if (visited.has(node)) continue; // Skip if the node is already visited

        visited.add(node); // Mark the node as visited
        result.push(node); // Add the node to the result

        for (const neighbor of graph[node]) { // Iterate over neighbors of the node
            if (!visited.has(neighbor)) { // If neighbor is not visited
                queue.push(neighbor); // Enqueue the neighbor
            }
        }
    }

    return result; // Return the traversal order
}

/**
 * Dijkstra's Algorithm
 * Purpose: Find the shortest path from a starting node to all other nodes in a weighted graph.
 * Sample Input: graph = { A: { B: 1, C: 4 }, B: { C: 2, D: 6 }, C: { D: 3 }, D: {} }, startNode = 'A'
 * Sample Output: { A: 0, B: 1, C: 3, D: 6 }
 * Use Cases: Used in GPS navigation, network routing, and robotics.
 * Efficiency: Time Complexity - O((V + E) log V), Space Complexity - O(V) (using a priority queue)
 */
function dijkstra(graph, startNode) {
    const distances = {}; // Object to store the shortest distance to each node
    const visited = new Set(); // Set to track visited nodes
    const priorityQueue = [[startNode, 0]]; // Priority queue to manage nodes to visit

    for (const node in graph) { // Initialize distances to all nodes as Infinity
        distances[node] = Infinity;
    }
    distances[startNode] = 0; // Distance to the startNode is 0

    while (priorityQueue.length > 0) { // Continue until the priority queue is empty
        priorityQueue.sort((a, b) => a[1] - b[1]); // Sort the queue by distance
        const [currentNode, currentDistance] = priorityQueue.shift(); // Dequeue the node with the smallest distance

        if (visited.has(currentNode)) continue; // Skip if the node is already visited
        visited.add(currentNode); // Mark the node as visited

        for (const [neighbor, weight] of Object.entries(graph[currentNode])) { // Iterate over neighbors and their weights
            const distance = currentDistance + weight; // Calculate the new distance
            if (distance < distances[neighbor]) { // If the new distance is shorter
                distances[neighbor] = distance; // Update the shortest distance
                priorityQueue.push([neighbor, distance]); // Enqueue the neighbor with the new distance
            }
        }
    }

    return distances; // Return the shortest distances to all nodes
}

module.exports = {
    depthFirstSearch,
    breadthFirstSearch,
    dijkstra
};