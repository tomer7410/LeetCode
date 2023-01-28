export class Queue {
  private items: {[key:number]:number};
  private front: number;
  private rear: number;
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(item:number) {
    this.items[this.rear]= item;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  peek() {
    return this.items[this.front];
  }
  get size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.rear == 0;
  }
}