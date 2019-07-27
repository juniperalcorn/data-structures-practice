//udemy stack array example

let stack = []
stack.push('google'), stack.push('instagram'), stack.push('youtube')
console.log(stack.pop()), console.log(stack)

//linkedlist stack example

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    //unshift
    push(val){
        let newNode = new Node(val)
        if (!this.head) this.head = this.tail = newNode
        newNode.next = this.head
        this.head = newNode

        this.length ++
    }
    //shift
    pop(){
        if (!this.head) return null
        if (this.head === this.tail) this.tail = null
        
        let temp = this.head
        this.head= this.head.next

        temp.next = null
        this.length--
        return temp
    }
}

let st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.pop()
console.log(st)