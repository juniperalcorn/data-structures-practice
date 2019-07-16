//freeCodeCamp.org example
//hashing function
const hash = (string, max) => {
    let hash = 0 
    for (i=0; i<string.length; i++){
        hash +=string.charCodeAt(i)
    }
    console.log(`${string}`, hash%max)
    return hash % max 
}

//hash table constructor
let HashTable = function(){
    let storage = []
    const storageLimit = 10
    
    this.print = function(){
        console.log('storage', storage)
    }

    this.add = function(key, value){
        let index = hash(key, storageLimit)
        if(storage[index]===undefined){
            storage[index]=[
                [key, value]
            ]
        } else {
            let inserted = false
            for (i=0; i<storage[index].length; i++){
                if (storage[index][i][0]===key){
                    storage[index][i][1]=value
                    inserted = true
                }
            }
            if (inserted === false){
                storage[index].push([key, value])
            }
        }
    }
    this.remove = function(key){
        let index = hash(key, storageLimit)
        if(storage[index].length === 1 && storage[index][0][0] === key){
            delete storage[index]
        } else {
            for (i=0; i<storage[index]; i++){
                if (storage[index][i][0] === key){
                    delete storage[index][i]
                }
            }
        }
    }
    this.lookup = function(key){
        let index = hash(key, storageLimit)
        if(storage[index] === undefined){
            return undefined
        } else {
            for (i=0; i<storage[index].length; i++){
                if(storage[index][i][0] === key){
                    return storage[index[[i][1]]]
                }
            }
        }
    }
}
//create new
let ht = new HashTable()
ht.add('Quavo', 'cat')
ht.add('Seven', 'cat')
ht.add('Ripley', 'cat')
ht.add('Misery', 'cat')
ht.add('Maggie', 'dog')
ht.add('Pamplemousse', 'cat')
ht.add('Aubergine', 'cat')
ht.add('Boots', 'cat')
ht.print()