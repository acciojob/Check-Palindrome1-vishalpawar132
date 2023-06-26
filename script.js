
function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare characters from both ends of the string
  let start = 0;
  let end = cleanStr.length - 1;
  
  while (start < end) {
    if (cleanStr[start] !== cleanStr[end]) {
      return false;
    }
    start++;
    end--;
  }
  
  return true;
}

module.exports = palindrome;

