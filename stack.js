class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.count = 0
    this.top = null
  }
  push(data) {
    const node = new Node(data)
    node.next = this.top
    this.top = node
    this.count++
    return data
  }
  pop() {
    if (this.top === null) throw Error('can\'t pop')
    const data = this.top.data
    this.top = this.top.next
    this.count--
    return data
  }
  get stackTop() {
    return this.top.data
  }
}

const stack = new Stack()
const a = stack.push(1)
const b = stack.push(2)
stack.pop()
console.log(stack.stackTop)