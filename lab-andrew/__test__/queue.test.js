'use strict';

const Queue = require('../model/queue');

describe('queue.js', () => {
  test('Queue should have FIFO behavior', () => {
    const queue = new Queue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(undefined);
    expect(queue.dequeue()).toEqual(undefined);
  });
});
