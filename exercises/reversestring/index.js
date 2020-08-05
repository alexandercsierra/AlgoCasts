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

//using the reduce method, it starts with an empty string, then that gets passed in the callback as "reversed", with every subsequent loop we are adding the current character to the beginning of the string, effectively reversing it.
function reverse(str){
    str.split('').reduce((reversed, character)=> {
        return character + reversed;
    }, '')
}

module.exports = reverse;
