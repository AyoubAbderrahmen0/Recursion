


function isPalindrome(str) {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Helper function for recursion
    function checkPalindrome(start, end) {
        // Base case: If start index is greater than or equal to end index, it's a palindrome
        if (start >= end) {
            return true;
        }
        // If characters at start and end are not the same, it's not a palindrome
        if (cleanedStr[start] !== cleanedStr[end]) {
            return false;
        }
        // Recur with the next pair of characters
        return checkPalindrome(start + 1, end - 1);
    }

    // Start the recursion from the first and last characters
    return checkPalindrome(0, cleanedStr.length - 1);
}

let chaine = prompt("Enter the statement")
console.log(isPalindrome(chaine)?"palindrome":"not palindrome")