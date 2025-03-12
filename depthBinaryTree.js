/**
 * @param {TreeNode | null} root
 * @return {number}
 */
export default function binaryTreeMaximumDepth(root) {
    if(root === null) return 0;
     let stack = [];
     stack.push([root,1]);
     let depth = 0;
     while(stack.length !== 0){
       let [node, current_depth] = stack.pop();
       if(node !== null){
         depth = Math.max(depth, current_depth);
         stack.push([node.left, current_depth + 1]);
         stack.push([node.right, current_depth + 1]);
       }
     }
     return depth;
 }