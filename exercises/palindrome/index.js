// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome1(str) {
    return str === str.split("").reverse().join("");
}

function palindrome(str) {
    return str === str.split("").reduce((rev, char)=>char+rev,"")
}

//every executes the callback with every element of an array, returning a boolean - false if any one check is false, and true if all the checks returned true. Not ideal here, since you would only really need to check up until the midpoint of the string.
function palindrome2(str){
    return str.split('').every((char, i)=>{
        return char === str[str.length-i-1];
    })
}

module.exports = palindrome;
