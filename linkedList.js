class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);
    let currentNode = this.head;
    if (!currentNode) {
      this.head = node;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;

    return node;
  }

  search(position) {
    let currentNode = this.head;
    let cnt = 0;
    while (cnt < position) {
      if (currentNode === null) throw Error('조회할 수 없는 index입니다');
      currentNode = currentNode.next;
      cnt++;
    }

    return currentNode.data;
  }
  delete(position) {
    let currentNode = this.head;
    let cnt = 0;
    let prevNode = currentNode;
    let removedNode = currentNode.next;
    if (position === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      while (cnt < position) {
        if (currentNode === null) throw Error('존재하지 않는 index입니다.');
        prevNode = currentNode;
        removedNode = currentNode.next;
        currentNode = currentNode.next;
        cnt++;
      }
      prevNode.next = removedNode.next;
    }
    this.length--;
    return removedNode;
  }
}

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(5);
linkedList.add(7);
console.log(linkedList);
console.log(linkedList.search(1));
linkedList.delete(1);
console.log(linkedList);
console.log(linkedList.search(0));
