// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibIterative(n) {
    let arr = [];
    for(let i=0; i<=n; i++){
        console.log('i', i)
        console.log('arr', arr)
        if(arr.length < 2){
            arr.push(i)
        }
        else{
            arr.push(arr[i-2] + arr[i-1])
        }
    }

    return arr[n]

}

function fibRecursive(n, arr=[], counter=0){
    if(arr[n]){
        return arr[n]
    }

    if(arr.length < 2){
        arr.push(counter)
        counter++
        return fib(n, arr, counter)
    }
    else {
        arr.push(arr[counter-2] + arr[counter-1])
        counter++
        return fib(n, arr, counter);
    }
}

//exponential runtime, since with each additional n, we will get an exponential increase in the amount of function calls
function slowFib(n){
    if(n<2){
        return n;
    }

    return fib(n-1) + fib(n-2);
}

function memoize(fn){
    const cache = {};
    return function(...args){
        //if args exist as a key in the cache, return it
        if(cache[args]){
            return cache[args];
        }
        //compute the value of calling the function with args, store it in cache, and return the result
        //apply is needed when using the args array
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

const fib = memoize(slowFib);


// console.log(fib(5))

module.exports = fib;
