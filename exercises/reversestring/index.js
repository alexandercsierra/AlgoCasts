// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
    let reversed = str.split("").reverse().join("");
    return reversed;
}

function reverse(str) {
    newStr = "";
    for (let i=str.length-1; i>=0; i--){
        newStr+=str[i]
    }
    return newStr
}

module.exports = reverse;
