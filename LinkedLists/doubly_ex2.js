//udemy notes

class Node{
    constructor(val){
        this.val = val
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if (!this.head) this.head = this.tail = newNode   
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail=newNode
        
        this.length ++
        return this
    }

    pop(){
        if (!this.head) return undefined
        if (this.length === 1) this.head = this.tail = null
        let temp = this.tail
        this.tail = temp.prev
        this.tail.next = null
        temp.prev = null

        this.length --
        return temp
    }
    shift(){
        if(this.length === 0) return undefined
        let oldHead = this.head
        if (this.length === 1) this.head = this.tail = null
        this.head = oldHead.next
        this.head.prev = null
        oldHead.next = null

        this.length --
        return oldHead
    }

    unshift(val){
        let newNode = new Node(val)
        if (this.length === 0) this.head = this.tail = newNode
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode

        this.length ++
        return this
    }

    get(index){
        if (index < 0 || index >= this.length) return null
        if (index <= this.length/2){
            let current = this.head
            let count = 0
            while (count !== index){
                current = current.next
                count ++
            }
            return current
        } else {
            let current = this.tail
            let count = (this.length - 1)
            while (count !== index){
                current = current.prev
                count --
            }
            return current
        }
    }

    set(index, val){
        let update = this.get(index)
        if(update){
            return !!(update.val = val) 
        } else return false
    }

    insert(index, val){
        if (index < 0 || index >= this.length) return false
        if (index === 0){
            this.unshift(val)
        } else if (index === this.length){
            this.push(val)
        } else {
            let temp = this.get(index-1)
            let after = temp.next
            let newNode = new Node(val)

            temp.next = newNode
            newNode.prev = temp
            after.prev = newNode
            newNode.next = after
        }
        this.length ++
        return true
    }

    remove(index){
        if (index < 0 || index >= this.length) return false
        if (index === 0) this.shift()
        if (index === this.length-1) this.pop()

        let found = this.get(index)
        let before = found.prev
        let after = found.next

        found.prev = found.next = null

        before.next = after
        after.prev = before

        this.length --
        return found
    }
}

let dub = new DoublyLinkedList()
dub.push(7)
dub.push(8)
dub.push(9)
dub.push(10)
dub.unshift(5)
dub.unshift(4)
dub.unshift(3)

console.log(dub.remove(3))
console.log(dub)