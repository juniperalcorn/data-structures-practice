//udemy example

//for any parent node at index n
//left child stored at 2n + 1
//right child stored at 2n+2

//for any child node at index n ...
//parent is stored at (n-1)/2 [floored, no decimals]

class MaxBinaryHeap{
    constructor(){
        this.values = []
    }

    insert(val){
        this.values.push(val)
        let index = this.values.length - 1
        let parentIndex = Math.floor((index - 1) / 2)

        while (this.values[parentIndex] < this.values[index]){
            this.values[parentIndex] = val
            this.values[index] = this.values[parentIndex]

            index = parentIndex
        }
    }
}