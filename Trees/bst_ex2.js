//https://www.youtube.com/watch?v=6JeuJRqKJrI

class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(val){
        this.root = new Node(val)
        this.count = 1
    }

    size(){
        return this.count
    }

    insert(val){
        this.count ++
        let newNode = new Node(val)

        const searchTree = node =>{
            if (val < node.val){
                if (!node.left){
                    node.left = newNode
                } else {
                    searchTree(node.left)
                }
            } else if (val > node.val) {
                if (!node.right) {
                    node.right = newNode
                } else {
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }
    
    min(){
        let current = this.root
        while (current.left){
            current = current.left
        }
        return current.val
    }

    max(){
        let current = this.root
        while (current.right){
            current = current.right
        }
        return current.val
    }

    contains(val){
        let current = this.root

        while (current){
            if (val === current.val){
                return true
            }
            if (val < current.val){
                current = current.left
            } else {
                current = current.right
            }
        }

        return false
    }

    //DFS
    //branch by branch
    //in order
    //left, root, right
    dfsInOrder(){
        let result = []

        const traverse = node =>{
            if (node.left) traverse(node.left)
            result.push(node.val)
            if (node.right) traverse(node.right)
        }

        traverse(this.root)
        return result
    }
    //pre order
    //root, left, right
    dfsPreOrder(){
        let result = []
        const traverse = node =>{
            result.push(node.val)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }

        traverse(this.root)
        return result
    }
    //post order
    //left, right, root
    dfsPostOrder(){
        let result = []
        const traverse = node =>{
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            result.push(node.val)
        }

        traverse(this.root)
        return result
    }

    //BFS
    //level by level
    bfs(){
        let result = []
        let q = []

        q.push(this.root)

        while(q.length){
            let currentNode = q.shift()
            result.push(currentNode.val)

            if (currentNode.left){
                q.push(currentNode.left)
            }

            if(currentNode.right){
                q.push(currentNode.right)
            }
        }
        return result
    }
}

const bst = new BST(15)
bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

console.log(bst.size())
console.log(bst.min())
console.log(bst.max())

console.log(bst.contains(2))
console.log(bst.contains(9))

console.log(bst.dfsInOrder())
console.log(bst.dfsPreOrder())
console.log(bst.dfsPostOrder())
console.log(bst.bfs())