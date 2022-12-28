class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    const pop = this.items.pop();
    return pop;
  }
}

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push to the top', () => {
    stack.push('Avocado');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('Avocado');

    stack.push('Mango');
    expect(stack.top).toBe(1);
    expect(stack.peek).toBe('Mango');
  });

  it('can pop to the top', () => {
    const pop = stack.pop;
    expect(stack.pop).toBe(pop);
  });
});
