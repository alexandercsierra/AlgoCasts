// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrixMyAttempt(n) {

    let x = 0;
    let y = 0;

    let steps = [y+1, x+1, y-1, x-1]
    let stepCounter = 0;
    let grid = [];
    //create the matrix
    for(let i=0; i<n; i++){
        let row=[];
        for(j=0; j<n; j++){
            row.push(0);
        }
        grid.push(row)
    }

    console.log(grid)
    
    for(let i=0; i<n*n; i++){
        console.log('x', x, 'y',y, 'n', n)
 
        if(grid[x][y] === 0){
            grid[x][y] = i+1;
            // console.log('counter', stepCounter)
            if(stepCounter == 0){
                y+=1
                if(y === n){
                    stepCounter++;
                    y=n-1;
                    x+=1;
                }
            } else if(stepCounter == 1){
                x+=1
                if(x === n){
                    stepCounter++;
                    x=n-1;
                    y-=1;
                }
            } else if (stepCounter == 2){
                y-=1
                if(y<0){
                    stepCounter++;
                    y=0;
                    x-=1;
                }
            } else if (stepCounter == 3){
                console.log('here')
                // x-=1
                if(x<0){
                    console.log('in here')
                    stepCounter = 0;
                }
            }
        } else {
            console.log('in the else', stepCounter)
            // if(y >= n){
            //     y=0
            // }
            // if(x >= n){
            //     x=0
            // }
            if(stepCounter >= 3){
                console.log('in the if', x, y)
                stepCounter = 0;
                y+=1;
                // x+=1;
                console.log('in the if', x, y)
            } else{
                stepCounter++;
            }
        }

        
        
        
        


    }
    grid[x][y] = n*n;
    console.log(grid)
}

/*uses four pointers to the start/end of the row/column we are currently considering.

for ex in a 3x3 matrix
sr = start row
er = end row
sc = start column
ec = end column

    sc  --  ec
sr  -   -   - 
    -   -   - 
er  -   -   -  

first start at start row and iterate through columns
    sc  --  ec
sr  1   2   3 
    -   -   - 
er  -   -   - 

increment start row, then iterate through rows keeping your y coordinate at end column

    sc  --  ec
    1   2   3 
sr  -   -   4 
er  -   -   5 

decrement end column and iterate through columns backwards, keeping x coordinate at end row
    sc  ec  
    1   2   3 
sr  -   -   4 
er  7   6   5 

decrement end row (in this case now start and end row become the same) and iterate through the rows backwards, keeping y coordinate at start column
    sc  ec  
    1   2   3 
se  8   -   4 
    7   6   5 

increment start column and continue looping through these steps until complete (in this case after the first for loop runs again, since if start row is incremented again, it will be out of bounds)

        se  
    1   2   3 
se  8   9   4 
    7   6   5 





*/
function matrix(n) {
    const results = [];
  
    for (let i = 0; i < n; i++) {
      results.push([]);
    }
  
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
      // Top row
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
  
      // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
  
      // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
  
      // start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
  
    return results;
  }
module.exports = matrix;
