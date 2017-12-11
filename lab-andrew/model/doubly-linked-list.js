'use strict';

class DoublyLinkedList{

  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  append(node){
    if(!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');

    if(!this.next){
      this.next = node;
      node.prev = this;
    }
    else
      this.next.append(node);

    return this;
  }

  delete(node){
    if(!(node instanceof DoublyLinkedList)){
      throw new TypeError('<node> should be an instance of DoublyLinkedList');
    }

    if(node.value === this.value){
      if (!this.next){
        // delete this.next;
        // delete this.prev;
        // delete this.value;
        return null;
      }
    }

    if(this.prev === node){
      this.prev = null;
      return this;
    }

    if(!this.next){
      return this;
    } else {
      if (this.next !== node){
        return this.next.delete(node);
      }
      else {
        if(this.next.next){
          this.next.next.prev = this;
          this.next = this.next.next;
        } else {
          this.next = null;
        }
      }
    }

    return this;
  }

  listLength(node, counter){
    if(!(node instanceof DoublyLinkedList)){
      throw new TypeError('<node> should be an instance of DoublyLinkedList');
    }
    // if(node === null){
    //   throw new TypeError('<node> must have (a) node(s)');
    // }

    if (!counter) {
      if (this.next){
        return this.next.listLength(this.next, 1);
      } else {
        return 1;
      }
    } else {
      if (this.next){
        return this.next.listLength(this.next, counter + 1);
      } else {
        return counter + 1;
      }
    }
  }
}

module.exports = DoublyLinkedList;
