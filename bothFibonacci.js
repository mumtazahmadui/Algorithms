// create two functions to print the value of the given position of the Fibonacci sequence (one iterative, one recursive), where the next number in the sequence is the sum of the two previous numbers.

function fibonacci(num){
    // prevent invalid return
    if(num < 2){
        return num;
    }
    let f1 = 0;
    let f2 = 1;
    // iterate to num position in sequence
    while(num > 0){
        let temp = f1 + f2;
        f1 = f2;
        f2 = temp;
        num--;
    }
    // return the value of fib at sequence
    return f1;
}

function rFibonacci(num){
    // break case
    if(num < 2){
        return num;
    }
    // progress and recurse
    return rFibonacci(num-1) + rFibonacci(num-2);
}

console.log(fibonacci(6));
console.log(rFibonacci(6));