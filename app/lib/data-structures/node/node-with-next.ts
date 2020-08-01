class NodeWithNext<T> {
  val: T;
  next: NodeWithNext<T> | undefined;
  constructor(val: T) {
    this.val = val;
  }
}

export default NodeWithNext;