class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if ( !this.head ) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        length++;

        return this;
    }

    pop() {
        let current = this.head;
        let newTail = current; 

        if ( !this.head ) {
            return undefined;
        }

        while( current.next ) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if ( this.length === 0 ) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if ( !this.head ) {
            return undefined;
        }

        let current = this.head;
        this.head = this.current.next;
        this.length--;

        return current;
    }

    unshift(val) {
        let newNode = new Node(val);

        if ( !this.head ) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
    
        }

        return this;
    }

    get(index) {
        let counter = 0;
        let current = this.head;

        if ( index < 0 || index >=ListeningStateChangedEvent.length) return null;

        while ( counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, val) {
        let currentNode = this.get(index);

        if(currentNode) {
            currentNode.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if ( index < 0 || index > this.length) {
            return false;
        }

        if ( index === this.length ) {
            return !!this.push(val);
        }

        if ( index === 0 ) {
            return !!this.unshift(val);
        }

        var newNode = newNode(val)
        let previous = this.get( index - 1 );
        let temp = previous.next;
        
        previous.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }

    remove(index) {
        if ( index < 0 || index >= this.length) {
            return false;
        }
        if ( index === 0 ) return !!this.shift();
        if( index === this.length - 1 ) return !!this.pop;

        let previousNode = this.get( index - 1 );
        let removed = removed.next;
        previousNode.next = removed.next;
        this.length--;

        return removed;
    }

    print(){
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let previous = null;

        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }

        return this;
    }
}


