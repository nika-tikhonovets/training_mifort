import Node from './Node';

export default class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    get(position) {
        let resultNode = this.head;
        let currentPosition = 0;

        if (position > this.length){
            return null;
        }
        while(currentPosition < position) {
            resultNode = resultNode.next;
            currentPosition++;
        }

        return resultNode;
    }

    add(value) {
        if(!value) {
            return null;
        }
        const newNode = new Node(value);
        let currentNode = this.head;
        this.length++;

        if (!currentNode) {
            this.head = newNode;
            return newNode;
        }

        currentNode = this._getLast();

        currentNode.next = newNode;

        return newNode;
    }

    remove(position) {
        let deletedNode = null;

        if (position < 0 || position > this.length) {
            throw new Error('Non-existent node in this list');
        }

        this.length--;

        if (position === 0) {
            deletedNode = this._removeFromHead();
        } else {
            deletedNode = this._removeNode(position);
        }

        return deletedNode;
    }

    insert(position, value) {
        if(!value) {
            return null;
        }
        let newNode = new Node(value);

        if (position < 0 || position > this.length) {
            throw new Error('Non-existent node in this list');
        }
        this.length++;
        if (position === 0) {
            newNode = this._insertToHead(value);
        } else {
            newNode = this._insertNode(position, value);
        }

        return newNode;
    }

    _insertToHead(value) {
        let node = new Node(value);
        node.next = this.head;

        this.head = node;

        return node;
    }

    _insertNode(position, value) {
        let node = new Node(value);
        let beforeNode, afterNode;
        let currentNode = this.head;
        let currentPosition = 0;

        while (currentPosition < position) {
            beforeNode = currentNode;
            afterNode = currentNode.next;
            currentNode = currentNode.next;
            currentPosition++;
        }

        beforeNode.next = node;
        node.next = afterNode;

        return node;
    }

    _removeFromHead() {
        let deletedNode;
        let currentNode = this.head;

        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;

        return deletedNode;
    }

    _removeNode(position) {
        let nodeToDelete, beforeNodeToDelete, deletedNode;
        let currentNode = this.head;
        let currentPosition = 0;

        while (currentPosition < position) {
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next;
            currentPosition++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;

        return deletedNode;
    }

    _getLast() {
        let lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }

        return lastNode;
    }
}