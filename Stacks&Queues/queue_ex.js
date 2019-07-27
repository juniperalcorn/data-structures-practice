//udemy queue w/array
let q = []
q.push('first')
q.push('second')
q.push('third')
// console.log(q.shift())

//udemy queue w/class

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    //add to tail: enqueue
    enqueue(val){
        let newNode = new Node(val)
        if (!this.head) this.head = this.tail = newNode
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this.length
    }
    //remove from first: dequeue
    dequeue(){
        if (!this.head) return null
        let temp = this.head
        this.head = this.head.next
        this.length --
        return temp.val
    }
}

let newq = new Queue()
newq.enqueue(7)
newq.enqueue(8)
newq.enqueue(9)
console.log(newq.dequeue())
console.log(newq.dequeue())
console.log(newq.dequeue())
console.log(newq.dequeue())
