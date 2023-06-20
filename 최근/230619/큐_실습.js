class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  const queue = new Queue();

  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  // 처음 실행되는게 1번째로 실행되는 것이므로 0번째 인덱스를 채워놓음
  let arr = [""];

  while (arr.length < priorities.length) {
    let ex = queue.dequeue();

    let max = ex[0];
    for (let i = queue.front; i < queue.rear; i++) {
      if (queue.queue[i][0] > max) {
        max = queue.queue[i][0];
      }
    }

    if (max > ex[0]) {
      queue.enqueue(ex);
    } else {
      arr.push(ex[1]);
    }
  }

  return arr.indexOf(location);
}

solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);
