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
            console.log('no head')
            return null;
        }
        //remove the head
        else if(index === 0){
            console.log('index is 0')
            let oldHead = this.head
            this.head = oldHead.next
            return oldHead
        //remove some other node
        } else{
            console.log('index is not 0')
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


}

module.exports = { Node, LinkedList };
