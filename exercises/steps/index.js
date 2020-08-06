// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//didn't work
function steps2(n) {


    let result = "";
    let length = n*n;

    for(let i=0; i<n; i++){
        let curr = addSpaces(n, i)
        if(i !== n-1){
            curr+="\n"
            // curr+="f"
        }
        console.log(curr)
    }


}

function addSpaces(num, hashes){
    let str = "";

    for(let i=0; i<num; i++){
        if (i <= hashes){
            str+="#"
        } else{
            str+=" ";
        }
    }

    return str;
}

// console.log(steps(2))

function stepsIterative(num){
    for (let i=0; i<num; i++){
      let stair = "";
      for (let j=0; j<num; j++){
        if(j<=i){
          stair+="#";
        } else {
          stair +=" ";
        }
      }
      console.log(stair);
    }
  }

//recursive solution
function steps(num, curr=0){
    if(curr === num){
        return;
    }
    let stair="";
    for (let i=0; i<num; i++){
        if (i<=curr){
            stair+="#";
        } else {
            stair+=" ";
        }
    }
    console.log(stair);
    steps(num, curr+1)
}

function steps3(n, row=0, stair=""){
    if(n === row){
        return;
    }
    if(n === stair.length){
        console.log(stair);
        return steps(n, row+1);
    }

    if(stair.length <= row){
        stair += "#";
    } else {
        stair += " ";
    }

    steps(n, row, stair);
}


module.exports = steps;
