const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  // Basic cases
  it('should return true for "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it('should return false for "car"', () => {
    expect(isPalindrome("car")).toBe(false);
  });

  // Edge cases
  it('should return true for words with mixed case', () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it('should return false for empty string', () => {
    expect(isPalindrome("")).toBe(false);
  });

  // Bonus cases
  it('should throw error for non-alphabetic characters', () => {
    expect(() => isPalindrome("racecar!")).toThrow();
  });

  it('should throw error for non-string input', () => {
    expect(() => isPalindrome(123)).toThrow();
  });
});
