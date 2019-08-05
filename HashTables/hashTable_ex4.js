//udemy

const hash = function(string, length){
    let toHash = string.toLowerCase()
    let total = 0
    for (let i = 0; i<toHash.length; i++){
        total += toHash.charCodeAt(i)
    }
    return total % length
}

// console.log(hash("JUNIPER", 55))

function betterHash(key, length){
    let total = 0;
    let prime = 11
    for (let i = 0; i<Math.min(key.length, 40); i++){
        let char = key[i]
        let value = char.charCodeAt(0)
        total = (total * prime + value) % length
    }

    return total
}

// console.log(betterHash("Juniper", 17))

class HashTable {
    constructor(size = 17){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0;
        let prime = 11
        for (let i = 0; i<Math.min(key.length, 40); i++){
            let char = key[i]
            let value = char.charCodeAt(0)
            total = (total * prime + value) % this.keyMap.length
        }
    
        return total
    }

    set(key, val){
        let hashed = this._hash(key)
        if (!this.keyMap[hashed]){
            this.keyMap[hashed] = []
        }
        this.keyMap[hashed].push([key, val])
        return this
    }

    get(key){
        let hashed = this._hash(key)
        if(this.keyMap[hashed]){
            for (let i = 0; i<this.keyMap[hashed].length; i++){
                if(this.keyMap[hashed][i][0] === key){
                    return this.keyMap[hashed][i][1]
                }
            }
        } 
        return undefined
    }
}

let ht = new HashTable
ht.set('hello world', 'goodbye')
ht.set('why me', 'its okay')
ht.set('almost', 'paradise')
ht.set('knocking on', 'heavens door')
console.log(ht)
console.log(ht.get('almost'))