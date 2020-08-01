import Node from './node-with-next';

test("initialises", () => {
  const node = new Node<string>("something");
  expect(node.val).toEqual("something");
  expect(node.next).toBeUndefined();
});

test("next", () => {
  const node = new Node<number>(1);
  expect(node.val).toEqual(1);
  expect(node.next).toBeUndefined();
  node.next = new Node<number>(3);
  expect(node.next.val).toEqual(3);
});

