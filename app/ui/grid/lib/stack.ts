class Stack<T> {
  /**
   * Stacks are LIFO i.e. last in first out
   */
  items: Array<T>;
  constructor() {
    this.items = [];
  }
  pop(): T {
    const [head, ...rest] = this.items;
    this.items = rest;
    return head;
  }
  push(item: T): void {
    this.items = [item, ...this.items]
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  clear(): void {
    this.items = [];
  }
}

export default Stack;