//2.2 (p 54)
//Return Kth to Last
//implement an algorithm to find the kth to 
//last element of a singly linked list.


//pseudo code
// class node 
//needs a constructor method that takes a value
//set the given value to the node's value
//set the next pointer to null

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

//class list
//constructor to set the head of the list to null (this.head)
//tail of list to null
//this.length (w/ interview caveat)
//class methods
//create appending a node
//removing a node (maybe)
//searching for a node

//appending a node:
//take in a val for the node
//make a new node with our node class
//access the tail of the list, set its next val to the node
//set the new node to the tail
//add 1 to length
//return the list

//searching for a node:
//would take the kth number
//evaluate (length - k ) -1 and store as a variable
//evaluate edge cases: make sure k is within length of list
//if k is equal to head or tail, return head or tail
//check against our kth variable^^^
//set variable current = this.head
//for loop starting at head of list, ending at k variable
//inside the loop, current = current.next
//when we reach the end of the loop according to our i value
//exit the loop
//return current


class SingleList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(val){
        let newNode = new Node(val)
        if(!this.head) this.head = this.tail = newNode
        this.tail.next = newNode
        this.tail = newNode
        this.length ++
        return this
    }

    search(k){
        if(k < 0 || k > this.length) return undefined
        if(k === 0) return this.tail
        let position = (this.length - k) - 1
        if (position === 0) return this.head
        let current = this.head
        for (let i = 0; i<position; i++){
            current = current.next
        }
        return current 
    }
}

let practice = new SingleList()

practice.append(1)
practice.append(2)
practice.append(3)
practice.append(4)
practice.append(5)

console.log(practice)

console.log(practice.search(3))