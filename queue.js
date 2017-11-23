class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class Queue {
  constructor() {
    this.count = 0
    this.head = null
    this.rear = null
  }
  enqueue(data) {
    const node = new Node(data)
    if (!this.head) {
      this.head = node
    } else {

      // this.rear.next = node 참조를 할당하는 것은
      // this.head.next = node 로 이어지고
      //
      // 또 다시 이후 this.rear = node를 할당하는것은
      // this.head.next === this.rear true로 이어진다.
      this.rear.next = node
    }
    // head와 rear에 동일한 참조 node를 주어서
    // head === rear : true 인 상황을 만든다
    this.rear = node
    return ++this.count
  }
  dequeue() {
    if (!this.head) throw Error('this head is null')
    const data = this.head.data
    this.head = this.head.next
    --this.count
    return data
  }
  get front() {
    return this.head && this.head.data
  }
}

const queue = new Queue();
queue.enqueue(1);
queue
queue.enqueue(2);
queue
queue.enqueue(3);
queue
queue.dequeue();
queue
queue.dequeue();
queue.front