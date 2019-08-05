//udemy example

//for any parent node at index n
//left child stored at 2n + 1
//right child stored at 2n+2

//for any child node at index n ...
//parent is stored at (n-1)/2 [floored, no decimals]

class MaxBinaryHeap{
    constructor(){
        this.values = [41, 39, 33, 18, 27, 12]
    }

    insert(val){
        this.values.push(val)
        let index = this.values.length - 1
        const element = this.values[index]

        while (index > 0){
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]
            if(element <= parent) break
            this.values[parentIndex] = element
            this.values[index] = parent

            index = parentIndex
        }
    }
    extractMax(){
        let first = this.values[0]
        let last = this.values.pop()

        if (this.values.length > 0){
            this.values[0] = last
            this.sinkDown()
        }
        
        return first;
    }
    sinkDown(){
        let parentIndex = 0
        let length = this.values.length
        let element = this.values[0]

        while (true){
            let leftChildIndex = 2 * parentIndex + 1
            let rightChildIndex = 2 * parentIndex + 2

            let leftChild, rightChild
            let swap = null

            if(leftChildIndex < length){
                leftChild = this.values[leftChildIndex]
                if(leftChild > element){
                    swap = leftChildIndex
                }
            }

            if(rightChildIndex < length){
                rightChild = this.values[rightChildIndex]
                if (
                    (swap === null && rightChild > element) || 
                    (swap!== null && rightChild > leftChild)
                    ){
                        swap = rightChildIndex
                }
            }

            if(swap === null) break
            this.values[parentIndex] = this.values[swap]
            this.values[swap] = element

            parentIndex = swap
        }
    }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)