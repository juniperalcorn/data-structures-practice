class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(val){
        let newNode = new Node(val)
        if (!this.root){
            this.root = newNode
            return this
        } else {
            let current = this.root
            while (true){
                if (val === current.val) return undefined
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (val > current.val){
                    if (current.right === null){
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    find(val){
        if (!this.root) return false
        let current = this.root
        let found = false
        while (current && !found){
            if (val <current.val){
                current = current.left
            } else if (val > current.val){
                current = current.right
            } else {
                return true
            }
        } 
        return false
    }
}

let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.left = new Node(4)
tree.root.left.right = new Node(9)
tree.insert(2)
tree.insert(29)
tree.insert(42)
tree.insert(17)
tree.insert(19)
tree.insert(22)
tree.insert(72)
console.log(tree)
console.log(tree.find(19))
