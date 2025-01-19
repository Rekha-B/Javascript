// Given the root node of a binary tree, flip the tree by swapping each node's left and right children, then return the root of the flipped tree.

// The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes.

// A TreeNode has the following interface:

// interface TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
// }
// Input
// root: TreeNode: Root node of the tree. Examples display a level-order traversal of the tree
// Examples
// Input: root = [2,1,3]
// Output: [2,3,1]
// Explanation: The left and right children are swapped.
// Input: root = [43,null,-55]
// Output: [43,-55]
// Explanation: The right child becomes the left child after inversion.
// Input: root = [12,8,18,6,null,null,20]
// Output: [12,18,8,20,null,null,6]
// Explanation: The tree is inverted, with left and right children of each node being swapped.
// Constraints
// 1 <= Number of nodes <= 100
// -100 <= TreeNode.val <= 100



/**
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
export default function binaryTreeFlip(root) {
    if(root === null) return null;
    const queue = [];
    queue.push(root);
  
    while(queue.length > 0){
       const current = queue.shift();
  
       if(current !== undefined && current !== null){
  
          const temp = current.left;
          current.left = current.right;
          current.right = temp;
          
          if(current.left !== null){
            queue.push(current.left);
          }
  
            if(current.right !== null){
            queue.push(current.right);
          }
      }
    }
  
    return root;
  }