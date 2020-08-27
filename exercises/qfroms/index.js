// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.stackOne = new Stack;
        this.stackTwo = new Stack;
    }

    add(item){
        this.stackOne.push(item)
    }

    remove(){
        while(this.stackOne.peek()){
            let removed = this.stackOne.pop();
            this.stackTwo.push(removed)
        }

        let dequeued = this.stackTwo.pop();
        while(this.stackTwo.peek()){
            let removed = this.stackTwo.pop()
            this.stackOne.push(removed)
        }
        return dequeued
    }

    peek(){
        let peeked;
        while(this.stackOne.peek()){
            let removed = this.stackOne.pop();
            this.stackTwo.push(removed)
            peeked = removed;
        }
        
        while(this.stackTwo.peek()){
            let removed = this.stackTwo.pop()
            this.stackOne.push(removed)
        }

        return peeked;
    }
}

module.exports = Queue;



/*
stack
top 1 2 3 btm
top       btm

in a queue to dequeue would mean getting out the three


*/
