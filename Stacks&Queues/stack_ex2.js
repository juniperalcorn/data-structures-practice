class Stack{
    constructor(){
        this.storage = {}
        this.size = 0
    }

    push(el){
        this.size++
        this.storage[this.size]= el
    }

    pop(){
        let temp = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return temp
    }

    peek(){
        return this.storage[this.size]
    }
}

const stack = new Stack()

stack.push('seven')
stack.push('quavo')
stack.push('trappy')

console.log(stack)

stack.pop()

console.log(stack)

console.log(stack.peek())