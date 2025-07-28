function isPalindrome(word) {
  // Check for non-string input
  if (typeof word !== 'string') {
    throw new Error('Input must be a string');
  }
  
  // Check for empty string
  if (word === '') {
    return false;
  }
  
  // Check for non-alphabetic characters
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error('Input must contain only alphabetic characters');
  }
  
  // Convert to lowercase and compare with reversed version
  const lowerWord = word.toLowerCase();
  const reversedWord = lowerWord.split('').reverse().join('');
  
  return lowerWord === reversedWord;
}

module.exports = {
  isPalindrome
};
