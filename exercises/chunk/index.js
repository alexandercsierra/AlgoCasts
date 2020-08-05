// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    if(size >= array.length){
        return [[...array]];
    }

    let result = [];
    let start = 0;
    let end = size;
    let multiplier = 2;
    let loops = 0;
    
    do {
        let current = array.slice(start, end);
        if (current.length > 0){
            result.push(current)
        }
        start = end
        end = size * multiplier
        multiplier++
        loops++
    } while(loops <= Math.ceil(array.length/size))

    return result;

}

//my solution but way more concise
function chunk2(array, size){
    const chunked = [];
    let index = 0;

    while(index < array.length){
        chunked.push(array.slice(index, index + size));
        index+=size;
    }

    return chunked;
}





function chunk3(array, size){
    const result = [];

    for(element of array){
        //the most recently added subarray
        const last = result[result.length-1];

        //if result is empty, or the most recently added subarray is full (the desired length), but we still have elements to be added, create a new array containing the current element
        if (!last || last.length === size){
            result.push([element]);
        //otherwise there exists a subarray that is not yet full, so push in the current element
        } else{
            last.push(element);
        }
    }

    return result;
}


module.exports = chunk;
