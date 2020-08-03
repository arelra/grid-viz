import Stack from "./Stack";

test("push and pop", () => {
  const stack: Stack<String> = new Stack();
  stack.push('A')
  expect(stack.pop()).toEqual('A');
  expect(stack.pop()).toBeUndefined();
  stack.push('B')
  stack.push('C')
  expect(stack.pop()).toEqual('C');
  expect(stack.pop()).toEqual('B');
  expect(stack.pop()).toBeUndefined();
});

test("empty stack pop", () => {
  const stack: Stack<String> = new Stack();
  expect(stack.pop()).toBeUndefined();
});

test("isEmpty", () => {
  const stack: Stack<String> = new Stack();
  expect(stack.isEmpty()).toBe(true);
  stack.push('A')
  expect(stack.isEmpty()).toBe(false);
  stack.pop();
  expect(stack.isEmpty()).toBe(true);
});

test("clear", () => {
  const stack: Stack<String> = new Stack();
  stack.push('A')
  stack.clear();
  expect(stack.isEmpty()).toBe(true);
});
