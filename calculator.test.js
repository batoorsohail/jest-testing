const Calculator = require('./calculator')

describe ('myCalculator', () => {
  const cal = new Calculator();
  test ('add 1+1 to be 2', () => {
    expect(cal.add(1,1)).toBe(2);
  })
  test ('substract 2 - 1 to be 1', () => {
    expect(cal.subtract(2,1)).toBe(1);
  })
  test ('divide 4/2 to be 2', () => {
    expect(cal.divide(4,2)).toBe(2);
  })
  test ('multiply 4 * 2 to be 8', () => {
    expect(cal.multiply(4,2)).toBe(8);
  })
})