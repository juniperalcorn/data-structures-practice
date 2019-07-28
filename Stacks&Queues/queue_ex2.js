///https://www.youtube.com/watch?v=1AJ4ldcH2t4&list=PLu_sD_1ixKmhufvEeg2cCq4Wah7t3f91d&index=2&t=0s

class Queue {
    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(el){
        this.storage[this.tai] = el
        this.tail ++
    }

    dequeue(){
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head ++
        
        return removed
    }
}

const q = new Queue()

q.enqueue('fork')
q.enqueue('spoon')
q.enqueue('knife')
console.log(q)
// q.dequeue()
console.log(q[2])
