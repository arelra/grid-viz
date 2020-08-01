import Node from './node-with-next-prev';

test("initialises", () => {
  const node = new Node<string>("something");
  expect(node.val).toEqual("something");
  expect(node.prev).toBeUndefined();
  expect(node.next).toBeUndefined();
});
test("next", () => {
  const node = new Node<number>(1);
  expect(node.val).toEqual(1);
  expect(node.next).toBeUndefined();
  node.next = new Node<number>(3);
  expect(node.next.val).toEqual(3);
});

test("prev", () => {
  const node = new Node<number>(1);
  expect(node.val).toEqual(1);
  expect(node.prev).toBeUndefined();
  node.prev = new Node<number>(3);
  expect(node.prev.val).toEqual(3);
});

