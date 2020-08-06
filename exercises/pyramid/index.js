// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    if(n===1){
        console.log('#');
        return;
    }

    let largestStep = n + (n-1);
    let midpoint = Math.floor((n + (n-1))/2);

    let step = [];

    for(let i=0; i<largestStep; i++){
        step.push(" ")
    }

    for(let i=0; i<n; i++){
        step[midpoint-i] = "#";
        step[midpoint+i] = "#";
        console.log(step.join(''))
    }
}

function pyramidRecursive(n, row=0, level=""){
    if(row === n){
        return;
    }

    //the level string is at the full length
    if(level.length === 2 * n-1){
        console.log(level);
        return pyramid(n, row+1)
    }

    const midpoint = Math.floor((2*n-1)/2);
    let add;
    console.log('mid-row', midpoint-row)
    console.log('level length', level.length)
    //checks for bounds of "level"
    if(midpoint - row <= level.length && midpoint + row >= level.length){
        add = "#";
    } else{
        add = ' ';
    }
    pyramid(n, row, level + add);

}




module.exports = pyramid;
