//First Duplicate
// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. 
// In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. 
// If there are no such elements, return -1.

let a = [2, 1, 3, 5, 3, 2]

firstDuplicate = (arr) =>{
    let hash = {}
    
    for (const el of arr){
        if (hash[el] === undefined){
            hash[el] = 1
        } else if (hash[el]=== 1){
            console.log(el)
            return result = el
        } else {
            console.log(-1)
            return result = -1
        }
        
    }
}

firstDuplicate(a)