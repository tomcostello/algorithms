import QueueS from '../QueueUsingStack';

describe('QueueA', () => {
  it('should create empty queue', () => {
    const queue = new QueueS();
    expect(queue).not.toBeNull();
    expect(queue.store).not.toBeNull();
  });

  it('should enqueue data to queue', () => {
    const queue = new QueueS();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.toString()).toBe('2,1');
  });

  it('should be possible to enqueue/dequeue in order', () => {
    const queue = new QueueS();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  it('should peek data from queue', () => {
    const queue = new QueueS();

    expect(queue.peek()).toBeNull();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });

  it('should check if queue is empty', () => {
    const queue = new QueueS();

    expect(queue.isEmpty()).toBeTruthy();

    queue.enqueue(1);

    expect(queue.isEmpty()).toBeFalsy();
  });

  it('should dequeue from queue in FIFO order', () => {
    const queue = new QueueS();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBeNull();
    expect(queue.isEmpty()).toBeTruthy();
  });
});
