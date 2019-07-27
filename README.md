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

#### Hash table PROS
In general, the big 0 notation for hash table lookup/runtime is 0(1) (constant time), because you are able to go directly to correct index thanks to the hash function. It is possible for runtime to become 0(N) (linear time) in the case of a bucket containing multiple entries, where you first lookup the correct bucket and then have to iterate through its contents.

#### Hash table CONS

## Linked Lists
sequential access versus direct access (array)
There can be singly linked lists, and doubly linked lists. Linked lists are a linear data structure where information is stored in nodes, and a pointer which points to either the next node in the list (singly linked list) or to the next node and the previous node (doubly linked list). The nodes on the list do not have indices, and in fact we keep track only of the first node (the header or vertex), the last node (the tail), and the overall length of the list. To get to a particular node in the list, you must traverse every element of the list to find what you're looking for.

### Singly Linked Lists

### Doubly Linked Lists
These take up more memory than singly linked lists given the additional pointer to the previous node, but offer more flexibility in searching. Searching is faster--O(2/n), but searching still simplifies to O(n).

Browser history is often represented by a doubly linked list.

#### Linked List PROS
Excel at insertion and deletion Big O times compared to arrays.

New nodes utilize memory efficiently, because elements are not stored in a contiguous block (array).

#### Linked List CONS
Random access/searches take O(n) time because there is no indexing and you must traverse the whole list in order (singly linked list) or use binary search to traverse half the list (doubly linked list).

## Stacks

LIFO data structure: last in, first out (like a stack of books, papers, plates, laundry) etc.

The call stack is an example of the stack data structure. Stacks manage function invocations. Undo/redo is a stack structure.

JavaScript does not come with its own built-in stack data type. You can use an array to create a stack, and use only push() and pop() to manipulate the end of the array (no insertion or shiftin!).

## Queues

FIFO data structure: first in, first out (like a ticket line!).