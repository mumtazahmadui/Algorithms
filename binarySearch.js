// create an algorithm to run a binary search of an array and return true if the given value is present in the array or return false if it is not. Do this iteratively and recursively.

// iterative
function binSearch(arr, val){
    let low = 0;
    let high = arr.length -1;
    let found = false;
    // while value has not been found
    while(!found){
        // establish mid point of given range
        let mid = Math.floor((low + high) / 2);
        // check if value is present at any variable index
        if(arr[low] == val || arr[high] == val || arr[mid] == val){
            found = true;
            return found;
        }
        // prevent infinite loop
        else if(mid == low || mid == high){
            return found;
        }
        // check high
        if(arr[mid] < val){
            low = mid + 1;
            high = high -1;
        }
        // check low
        else{
            low = low + 1
            high = mid - 1;
        }
    }
}

// recursive
// momoise high and low index
function rBinSearch(arr, val, low = 0, high = arr.length - 1){
    // establish mid point of given range
    let mid = Math.floor((low + high) / 2);
    // check if value is present at any variable index
    if(arr[low] == val || arr[high] == val || arr[mid] == val){
        return true;
    }
    // prevent infinite loop
    else if(mid == low || mid == high){
        return false;
    }
    // check high
    if(arr[mid] < val){
        // establish progress and recurse
        return rBinSearch(arr, val, mid + 1, high - 1);
    }
    // check low
    else{
        // establish progress and recurse
        return rBinSearch(arr, val, low + 1, mid - 1);
    }
}

let myArr = [6,10,14,16,19,21,31,35,38,41,44,45,52,60];

console.log(binSearch(myArr, 16));
console.log(rBinSearch(myArr, 14));