/* eslint-disable no-useless-rename */
const {
  sum: sum,
  summationOf: summationOf,
} = require('./math');

describe('The function sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 5.1 + 6.55 to equal 11.65', () => {
    // Dá uma espiadinha neste matcher aqui! 🙃
    // Experimente substituir por .toBe() para ver o que acontece. 😉
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
  });

  it('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('adds -5 + (-39) to equal -44', () => {
    expect(sum(-5, -39)).toBe(-44);
  });

  it('adds 0 + (-10) to equal -10', () => {
    expect(sum(-0, -10)).toBe(-10);
  });
});

// eslint-disable-next-line max-lines-per-function
describe('The function summationOf', () => {
  it('exists', () => {
    expect(typeof summationOf).toBe('function');
  });

  it('returns 1 when the input is 1', () => {
    expect(summationOf(1)).toBe(1);
  });

  test('returns 6 when the input is 3', () => {
    expect(summationOf(3)).toBe(6);
  });

  test('returns 15 when the input is 5', () => {
    expect(summationOf(5)).toBe(15);
  });

  test('throws an error when the input is an empty string', () => {
    expect(() => {
      summationOf('');
    }).toThrow();
  });

  test('throws an error when the input is undefined', () => {
    expect(() => { summationOf(); }).toThrow();
  });
});
