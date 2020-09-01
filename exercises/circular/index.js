// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    if(!list.head){
        return false;
    }
    else if(!list.head.next){
        return false
    }

    let cache = [list.head]
    let current = list.head;

    while(current.next && !cache.includes(current.next)){
        cache.push(current.next);
        current = current.next
    }

    if(current.next === null){
        return false
    } else{
        return true
    }




}

module.exports = circular;
