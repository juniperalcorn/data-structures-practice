# Independent Learning: Data Structures

This repository contains practice code from tutorial code-alongs and exercises. The appropriate folder will contain labeled examples/practice. I will update this README with high-level notes on the data structures I consider.

#### notes
To view, clone this repository and cd into the appropriate folder. Run ```node filename.js```

## Hash Tables
Hash tables create associative arrays: they store data in key/value pairs for efficient lookup. The overall hash table is an array with a set length, and the key/value pairs are stored as single arrays or objects at set indices in the array, also called "buckets".

Hash tables can be created as a class with a constructor, and then contain create/delete/read functions for data manipulation.

To determine which bucket the data (key/value pair) gets stored in, you need a hash function: this takes the key and turns it into a numerical value (for example, by calculating the sum of the values of the characters in the string, and dividing by the length of the hash table). That value will be the index of the data in the hash table. This facilitates easy lookup, because to find data you just need to run the key through the hash function, and then return that index of the hash table--rather than iterate through a large array.

It is possible for multiple keys to calculate to the same value and be stored in the same hash table bucket. This is called a "collision." In that case, the bucket becomes its own longer list through "separate chaining" (creating a larger array, or a linked list), and lookup becomes slightly more involved: first you hash the given key and return the bucket at that index, and then iterate through the bucket to find the particular match.

To avoid or minimize collisions, you would want a sufficiently large hash table to hold the data, and a sufficiently complex hash function to generate unique hashes for keys.

### Hash table PROS
In general, the big 0 notation for hash table lookup/runtime is 0(1) (constant time), because you are able to go directly to correct index thanks to the hash function. It is possible for runtime to become 0(N) (linear time) in the case of a bucket containing multiple entries, where you first lookup the correct bucket and then have to iterate through its contents.

### Hash table CONS
