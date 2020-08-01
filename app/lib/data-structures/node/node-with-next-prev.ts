class NodeWithNextPrev<T> {
  val: T;
  next: NodeWithNextPrev<T> | undefined;
  prev: NodeWithNextPrev<T> | undefined;
  constructor(val: T) {
    this.val = val;
  }
}

export default NodeWithNextPrev;