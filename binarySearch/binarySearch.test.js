const binarySearch = require('./binarySearch');

describe('binarySearch', () => {
    it('should return -1 for an empty array', () => {
      expect(binarySearch([], 1)).toBe(-1);
    });
  
    it('should return -1 for a value not in the array', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    });
  
    it('should return the index of a value in the array', () => {
      expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
      expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
      expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    });
  
    it('should return the index of the first occurrence of a value', () => {
      expect(binarySearch([1, 2, 2, 3, 4, 5], 2)).toBe(2);
    });
  });
  