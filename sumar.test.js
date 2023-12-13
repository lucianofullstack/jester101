const sumar = require('./sumar');

test('1 + 2 es igual a 3', () => {
  expect(sumar(1, 2)).toBe(3);
});

test('2 + 2 es igual a 4', () => {
    expect(sumar(2, 2)).toBe(4);
  });
  

  describe('Decimal numbers', () => {
    it('should return 8.33 if adding 3.32 and 5.01', () => {
      expect(sumar(3.32, 5.01)).toBe(8.33);
    });
    
    it('should return 15.82 if adding 7.72 and 8.1', () => {
      expect(sumar(7.72, 8.1)).toBe(15.82);
    });
  });
  