//FIFO: First in First Out, the first element added to the queue will be the first one to be removed.
class Queue<T> {
  private data: T[] =[];
  enqueue(item: T) {
    this.data.push(item);
  }
  dequeue(item:T) {
    this.data.shift();
  }
}
//LIFO: Last in First Out, the last element added to the stack will be the first one to be removed.
class Stack<T> {
    private data: T[] =[];
    push(item: T) {
        this.data.push(item);
    }
    pop(item: T) {
        this.data.pop();
    }
}