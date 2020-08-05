// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let numArr = n.toString().split("").reverse();
    
    if(n < 0){
        numArr.pop();
        return Number(numArr.join("")) * -1;
    } else {
        return Number(numArr.join(""));
    }

}

//Math.sign determines if the number is positive or negative and returns 1 or -1 accordingly
function reverseInt2(n) {
    let numArr = n.toString().split("").reverse().join("");
    
    return parseInt(numArr) * Math.sign(n)
}

module.exports = reverseInt;
