// create an algorithm that allows you to enter arbitrary start and end points and returns the sum of all values in that range that are evenly divisable by 3 or 5 but not both

function threesAndFives(start, end){
    let sum = 0;
    // set iteration start and endpoints (inclusive)
    for(let i = start; i <= end; i++){
        // check if i value is divisible by both 3 and 5
        if(i % 3 == 0 && i % 5 == 0){
            continue;
        }
        else{
            // add to sum if divisible by 3
            if(i % 3 == 0){
                sum += i;
            }
            // add to sum if divisible by 5
            if(i % 5 == 0){
                sum += i;
            }
        }
    }
    return sum;
}

let myStart = 6;
let myEnd = 36;
console.log(threesAndFives(myStart,myEnd));