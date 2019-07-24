//udemy example

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = null
    }
    push(val){
        let newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1
        return this
    }
    // traverse(){
    //     let current = this.head
    //     while(current){
    //         console.log(current.val)
    //         current = current.next
    //     }
    // }
    pop(){
        if(!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length --

        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    shift(){
        if(!this.head) return undefined
        let removeHead = this.head
        this.head = removeHead.next
        this.length --
        if(this.length === 0){
            this.tail = null
        }
        return removeHead
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode, this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
        return this
    }
    get(index){
        if (index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            counter ++
        }
        return current
    }
    set(index, val){
        let changeNode = this.get(index)
        if (changeNode){
        changeNode.val = val
        console.log('new val', changeNode)
        return true
        }
        return false
    }
    insert(index, val){
        if (index < 0 || index > this.length) return false
        if (index === this.length) !!this.push(val)
        if (index === 0) !!this.unshift(val)
        
        let newNode = new Node(val)
        let position = this.get(index-1)
        let temp = position.next
        position.next = newNode
        newNode.next = temp
        this.length ++
        return true
    }
    remove(index){
        if (index < 0 || index > this.length) return false
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()

        let temp = this.get(index-1)
        let remove = temp.next
        temp.next = remove.next
        this.length --
        return remove
    }

    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        
        let next = null
        let prev = null

        for (let i = 0; i<this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

let firstList = new SinglyLinkedList()
firstList.push(12)
firstList.push(7)
firstList.push(29)
console.log('firstList', firstList)

firstList.shift()
firstList.unshift(99)
firstList.set(1, 100)
firstList.insert(2, 33)
console.log('firstList', firstList)

firstList.reverse()
console.log('firstList', firstList)