// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let freq = {}
    let greatestNum = 0;
    let greatestChar = "";

    for(let char of str){
        if(freq[char]){
            freq[char] +=1;
        } else{
            freq[char] = 1;
        }

        if (freq[char] > greatestNum){
            greatestNum = freq[char];
            greatestChar = char;
        }
    }

    return greatestChar;


}

module.exports = maxChar;
