//IS UNIQUE
//impliment an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures?

string1 = 'onomotopeia'
string2 = 'juniper'
string3 = 'infinite'

let hash = (string, max)=>{
    let hashCode = 0
    for (i=0;i<string.length; i++){
        hashCode += string.charCodeAt(i)
    }
    
    return hashCode % max
}

let HashTable = function(){
    let storage = []
    let storageLimit = 27

    this.print = function(){
        console.log(storage)
    }

    this.add = function(key, value){
        let index = hash(key, storageLimit)
        if (storage[index] === undefined){
            storage[index] = [[key, value]]
        }
        else {
            storage[index].push([key, value])
        }
    } 

    this.lookup = function(key){
        let index = hash(key, storageLimit)
        if (storage[index] === undefined){
            return undefined
        } else {
            for (i=0; i<storage[index].length; i++){
                if (storage[index][i][0]===key){
                    return storage[index[[i][1]]]
                }
            }
        }
    }
}

let checkRepeats = (arr) =>{
    let repeat = 'no repeat'
    for(i=0; i<arr.length; i++){
        if (arr[i] === undefined) {
            next
        } else if (arr[i].length > 1){
            repeat = 'repeated'
        }
    }
    console.log(repeat)
    return repeat
}

let isUnique = (str) => {
    const ht = new HashTable()
    for (let i=0; i<str.length; i++){
        ht.add(str[i], i)
    }
    // ht.print()

    checkRepeats(ht)
}

isUnique(string1)
isUnique(string2)
isUnique(string3)