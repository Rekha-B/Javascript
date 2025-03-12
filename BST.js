// Write a function that implements the breadth-first search (BFS) algorithm on a directed graph (in adjacency list format), given a starting node.

// BFS is an algorithm used for traversing a graph or a tree, starting from the root node and exploring all the neighbors at the current depth before moving on to nodes at the next depth level. The output from BFS is an array of the graph's nodes in the order they were traversed. Visiting neighboring nodes in any order is a valid BFS, but for this question, please visit each node's neighbors from left to right.

// Examples

// const graph1 = {
//   A: ['B', 'C', 'D'],
//   B: ['E', 'F'],
//   C: ['G', 'H'],
//   D: ['I', 'J'],
//   E: ['D'],
//   F: [],
//   G: [],
//   H: [],
//   I: [],
//   J: [],
// };

// breadthFirstSearch(graph1, 'A'); // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

export default function breadthFirstSearch(graph, source) {
    if(Object.keys(graph).length === 0){
      return [];
    }

    const queue = new Queue();
    queue.enqueue(source);

    const visited = new Set();
    while(!queue.isEmpty()){
       const node = queue.dequeue();
       visited.add(node);

       graph[node].forEach(neighbour => {
        if(visited.has(neighbour)){
          return;
        }
        queue.enqueue(neighbour);
       })
    }
    return Array.from(visited);
}


class Node {
    constructor(value){
        this.val = value;
        this.next = null
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty(){
        return this.length === 0;
    }
    enqueue(item){
        const newNode = new Node(item);
        if (this.isEmpty()) {
            this.head = newNode;
        }
        else if(this.tail){
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
    }
    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        this.length--;
        return removedNode.val;
    }
}