'use strict';

const DoublyLinkedList = require('../model/doubly-linked-list');

describe('doubly-linked-list.js',() => {
  test('A list with a single node, should have a value and no next or prev', () => {
    let result = new DoublyLinkedList(1);
    
    expect(result.value).toEqual(1);
    expect(result.next).toEqual(null);
    expect(result.prev).toEqual(null);
  });

  test('insertion should properly modify the next property and new node\'s prev should point to previous node\'s value', () => {
    let result = new DoublyLinkedList(1);

    result.append(new DoublyLinkedList(2));
    result.append(new DoublyLinkedList(3));

    expect(result.value).toEqual(1);
    expect(result.prev).toEqual(null);

    expect(result.next.value).toEqual(2);
    expect(result.next.prev.value).toEqual(1);

    expect(result.next.next.value).toEqual(3);
    expect(result.next.next.prev.value).toEqual(2);

    expect(result.next.next.next).toEqual(null);
  });

  test('deletion should properly modify the next property and new node\'s prev should point to previous node\'s value', () => {
    let first = new DoublyLinkedList(10);
    let second = new DoublyLinkedList(20);
    let third = new DoublyLinkedList(30);
    let fourth = new DoublyLinkedList(40);

    first.append(second);
    first.append(third);
    first.append(fourth);

    first.delete(second);

    expect(first.value).toEqual(10);

    expect(first.next.value).toEqual(30);
    expect(first.next.prev.value).toEqual(10);

    expect(first.next.next.value).toEqual(40);
    expect(first.next.next.prev.value).toEqual(30);

    expect(first.next.next.next).toEqual(null);

  });

  test('delete should be able to erase the first element of a DoublyLinkedList', () => {
    let first = new DoublyLinkedList(10);
    let second = new DoublyLinkedList(20);
    let third = new DoublyLinkedList(30);
    let fourth = new DoublyLinkedList(40);

    first.append(second);
    first.append(third);
    first.append(fourth);

    first = first.delete(first);

    expect(first.value).toEqual(20);
    expect(first.prev).toEqual(null);

    expect(first.next.value).toEqual(30);
    expect(first.next.prev.value).toEqual(20);

    expect(first.next.next.value).toEqual(40);
    expect(first.next.next.prev.value).toEqual(30);

    expect(first.next.next.prev.prev.value).toEqual(20);
    expect(first.next.next.prev.prev.prev).toEqual(null);

    expect(first.next.next.next).toEqual(null);
  });

  test('delete should be able to erase the last element of a DoublyLinkedList', () => {
    let first = new DoublyLinkedList(10);
    let second = new DoublyLinkedList(20);
    let third = new DoublyLinkedList(30);

    first.append(second);
    first.append(third);

    first.delete(third);

    expect(first.value).toEqual(10);
    expect(first.prev).toEqual(null);
    expect(first.next.value).toEqual(20);
    expect(first.next.prev.value).toEqual(10);
    expect(first.next.next).toEqual(null);
  });

  test('delete should be able to erase the only element of a DoublyLinkedList', () => {
    let first = new DoublyLinkedList(10);

    first = first.delete(first);

    expect(first).toEqual(null);
  });

  test('DoublyLinkedList methods should throw errors if argument passed is not a node', () => {
    let dll = new DoublyLinkedList(10);

    expect(() => dll.append('not a node')).toThrow();
    expect(() => dll.delete('not a node')).toThrow();
    expect(() => dll.listLength('not a node')).toThrow();
  });

  test('linked list should remain unchanged if a node is not a member of that linked list', () => {
    let one = new DoublyLinkedList(1);
    let two = new DoublyLinkedList(2);

    expect(one.delete(two)).toEqual(one);
  });

  test('length should return the length of the DoublyLinkedList', () => {
    let long = new DoublyLinkedList(1);

    long.append(new DoublyLinkedList(2));
    long.append(new DoublyLinkedList(3));

    let shortLength = long.listLength(long);

    long.append(new DoublyLinkedList(4));
    long.append(new DoublyLinkedList(5));

    let longLength = long.listLength(long);

    expect(shortLength).toEqual(3);
    expect(longLength).toEqual(5);
  });

  test('length should return 1 if DoublyLinkedList only has one node', () => {
    let one = new DoublyLinkedList(1);

    let oneLong = one.listLength(one);

    expect(oneLong).toEqual(1);
  });

  test('length should throw error if DoublyLinkedList was a linked list that had all nodes removed', () => {
    let weird = new DoublyLinkedList('weird');

    weird = weird.delete(weird);

    expect(() => weird.listLength(weird)).toThrow();
  });
});
