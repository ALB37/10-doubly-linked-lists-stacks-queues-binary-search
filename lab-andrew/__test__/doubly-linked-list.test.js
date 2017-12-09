'use strict';

const DoublyLinkedList = require('../model/doubly-linked-list');

describe('doubly-linked-list.js',() => {
  test('A list with a single node, should have a value and no next or prev', () => {
    let result = new DoublyLinkedList(1);
    console.log(result);
    expect(result.value).toEqual(1);
    expect(result.next).toEqual(null);
    expect(result.prev).toEqual(null);
  });

  test('insertion should properly modify the next property and new node\'s prev should point to previous node\'s value', () => {
    let result = new DoublyLinkedList(1);
    result.append(new DoublyLinkedList(2));
    result.append(new DoublyLinkedList(3));
    console.log(result);

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

    first.append(second);
    first.append(third);

    first.delete(second);

    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(30);
    expect(first.next.prev.value).toEqual(10);
    expect(first.next.next).toEqual(null);

  });

  test('delete should be able to erase the first element of a DoublyLinkedList', () => {
    let first = new DoublyLinkedList(10);
    let second = new DoublyLinkedList(20);
    let third = new DoublyLinkedList(30);

    first.append(second);
    first.append(third);

    first.delete(first);

    expect(first.value).toEqual(20);
    expect(first.prev).toEqual(null);
    expect(first.next.value).toEqual(30);
    expect(first.next.prev.value).toEqual(20);
    expect(first.next.next).toEqual(null);
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
    let second = new DoublyLinkedList(20);
    let third = new DoublyLinkedList(30);

    first.append(second);
    first.append(third);

    first.delete(third);
    first.delete(second);
    first.delete(first);

    expect(first.value).toEqual(undefined);
    expect(first.prev).toEqual(undefined);
    expect(first.next).toEqual(undefined);
    expect(first).toEqual({});
  });

});
