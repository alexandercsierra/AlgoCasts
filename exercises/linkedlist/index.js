// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(value, next=null){
        this.data = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
        } else{
            let oldHead = this.head;
            this.head = newNode;
            newNode.next = oldHead;
        }
    }

    size(){
        let length = 0;
        let currentNode = this.head;
        while(currentNode){
            length++;
            currentNode = currentNode.next;
        }
        return length;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if (!this.head) {
      return null;
    }
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next
        }
        return currentNode;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        let newHead = this.head.next;
        this.head = newHead;
    }

    removeLast(){
        if(!this.head){
            return null;
        }
        else if(!this.head.next){
            this.head = null;
        }
        else{
            let prevNode = null;
            let currentNode = this.head;
            while(currentNode.next){
                prevNode = currentNode;
                currentNode = currentNode.next
            }
            prevNode.next = null;

        }
    }

    insertLast(value){
        if(!this.head){
            this.head = new Node(value)
        }
        else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next
            }
            let newNode = new Node(value);
            currentNode.next = newNode;
        }
    }   
    
    getAt(index){
        if(!this.head){
            return null
        } else{
            let counter = 0;
            let currentNode = this.head
            while(currentNode){
                if(index === counter){
                    return currentNode;
                }
                counter++;
                currentNode = currentNode.next
            }
            return null
        }
    }

    removeAt(index){
        //list is empty
        if(!this.head){
            return null;
        }
        //remove the head
        else if(index === 0){
            let oldHead = this.head
            this.head = oldHead.next
            return oldHead
        //remove some other node
        } else{
            let nodeToRemove = this.getAt(index);
            if(nodeToRemove){
                //node at that index is not the tail
                let prevNode = this.getAt(index-1);
                if(nodeToRemove.next){
                    let nextNode = nodeToRemove.next;
                    prevNode.next = nextNode;
                //node at that index is the tail
                } else{
                    prevNode.next = null;
                }
            }
        }


    }

    insertAt(data, index){
        let size = this.size()
        let node = new Node(data)
        // console.log(this.head)
        //ll is empty
        if(size === 0){
            this.head = node;
        //insert as the head
        } else if(index === 0){
            let head = this.head;
            node.next = head
            this.head = node
        //insert somewhere in the middle
        } else if(index > 0 && index < size){
            let prev = this.getAt(index-1);
            let next = this.getAt(index);

            prev.next = node;
            node.next = next;
        //index is out of bounds
        } else {
            let tail = this.getLast()
            tail.next = node
        } 
    }

    forEach(fn){
        let current = this.head;
        while(current){
            let next = current.next;
            fn(current);
            current = next;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }



}

module.exports = { Node, LinkedList };
