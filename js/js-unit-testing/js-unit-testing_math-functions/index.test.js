import { add, divide, multiply, subtract } from ".";

// add

test("returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("returns a negative value if the greater argument is negative", () => {
  const result1 = add(-5, 3);
  expect(result1).toBeLessThan(0);

  const result2 = add(-7, 4);
  expect(result2).toBeLessThan(0);

  const result3 = add(4, -9);
  expect(result3).toBeLessThan(0);
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// subtract

test("returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
  const result1 = subtract(2, 7);
  expect(result1).toBeLessThan(0);

  const result2 = subtract(9, 10);
  expect(result2).toBeLessThan(0);
});

// multiply

test("returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
  const result1 = multiply(-4, 5);
  expect(result1).toBeLessThan(0);

  const result2 = multiply(-9, 2);
  expect(result2).toBeLessThan(0);

  const result3 = multiply(-2, 5);
  expect(result3).toBeLessThan(0);
});

test("returns a negative value if only the second argument is negative", () => {
  const result1 = multiply(4, -5);
  expect(result1).toBeLessThan(0);

  const result2 = multiply(9, -2);
  expect(result2).toBeLessThan(0);

  const result3 = multiply(2, -5);
  expect(result3).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  const result1 = multiply(-4, -5);
  expect(result1).toBeGreaterThan(0);

  const result2 = multiply(-9, -2);
  expect(result2).toBeGreaterThan(0);

  const result3 = multiply(-2, -5);
  expect(result3).toBeGreaterThan(0);
});

// divide

test("returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test('returns "You should not do this!" if called with 0 as second argument', () => {
  const result1 = divide(5, 0);
  expect(result1).toBe("You should not do this!");

  const result2 = divide(2, 0);
  expect(result2).toBe("You should not do this!");

  const result3 = divide(12, 0);
  expect(result3).toBe("You should not do this!");
});
