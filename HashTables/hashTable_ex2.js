//example from:
//https://www.youtube.com/watch?v=QuFPIZj55hU
//hashing function
const hash = (string, max) => {
    let hash = 0 
    for (i=0; i<string.length; i++){
        hash +=string.charCodeAt(i)
    }
    console.log(`${string}`, hash%max)
    return hash % max 
}

//class constructor 
class HashTable{
    constructor(){
        this.size = 10
        this.buckets = Array(this.size)
        
        for (let i=0;i<this.buckets.length; i++){
            this.buckets[i] = new Map()
        }
    }

    insert(key, value){
        let idx = hash(key, this.size)
        this.buckets[idx].set(key, value)
    }

    remove(key){
        let idx = hash(key, this.size)
        let deleted = this.buckets[idx].get(key)
        this.buckets[idx].delete(key)
        return deleted
    }

    search(key){
        let idx = hash(key, this.size)
        return this.buckets[idx].get(key)
    }
}

const hashTable = new HashTable()

hashTable.insert('Joel', 'Virginia')
hashTable.insert('Julia', 'New York')
hashTable.insert('Juniper', 'Maryland')
hashTable.insert('Sean', 'New Jersey')
hashTable.insert('Imani', 'Yonkers')
hashTable.insert('Kirsten', 'Georgia')

hashTable.remove('Sean')

hashTable