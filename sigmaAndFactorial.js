// given an integer return the sum of all integers from 1 to that integer
// given an integer return the product of all integers from 1 to that integer

function rSigma(num, sum = 0){
    // break case
    if(num < 1){
        return sum;
    }
    // progress
    sum = sum + num;
    // recurse
    return rSigma(num - 1, sum);
}

function rFactorial(num, prod = 1){
    // break case
    if(num < 2){
        return prod;
    }
    // progress
    prod = prod * num;
    // recurse
    return rFactorial(num - 1, prod);
}

let myNum = 6;
console.log(rSigma(myNum));
console.log(rFactorial(myNum));