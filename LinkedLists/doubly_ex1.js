//doubly linked list
//https://www.youtube.com/watch?v=ChWWEncl76Y

class LinkedList{
    constructor(){
        this.head = this.tail = null
    }

    append(val){
        if (!this.tail){
            this.head = this.tail = new Node(val)
        } else {
            let oldTail = this.tail
            this.tail = new Node(val)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }

    prepend(val){
        if (!this.tail){
            this.head = this.tail = new Node(val)
        } else {
            let oldHead = this.head
            this.head = new Node(val)
            oldHead.prev = this.head
            this.head.next = oldHead
        }

    }

    deleteHead(){
        if (!this.head){
            return null
        } else {
            let removedHead = this.head
            if (this.head === this.tail){
                this.head = this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
            return removedHead.val
        }
    }

    deleteTail(){
        if (!this.tail){
            return null
        } else {
            let removedTail = this.tail

            if (this.head === this.tail){
                this.head = this.tail = null
            } else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return removedTail.val
        }
    }

    search(val){
        let currentNode = this.head

        while(currentNode){
            if (currentNode.val === val)return currentNode
            currentNode = currentNode.next
        }
        return null
    }
}

class Node{
    constructor(val, prev, next){
        this.val = val;
        this.prev = prev || null
        this.next = next || null
    }
}

let list = new LinkedList

list.append(1)
list.append(2)
list.append(3)
list.prepend(12)
list.prepend(14)

console.log(list)

console.log(list.search(12))