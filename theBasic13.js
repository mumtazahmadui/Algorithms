// Coding Dojo's "Basic 13" algorithm challenges
// Can you finish each of these challenges in two minutes or less?

// 1. print all integers from 1-255
// 2. print all odd integers from 1-255
// 3. print all integers and the sum of all integers from 0-255
// 4. print all values of an array
// 5. print the max value of a given array
// 6. print the average of the values of a given array
// 7. create and return an array with all odd integers from 1-255
// 8. square each value of a given array then return that array with the new values
// 9. return a count of all values of a given array that are greater than a given value
// 10. return the given array after setting any negative values to zero
// 11. print the min, max, and average values of a given array
// 12. shift all values of a given array to the left, dropping the first value and leaving a 0 at the end of the array then return that array
// 13. replace any negative values of a given array with the string "Dojo" then return that array

// ~~~ 1 ~~~
const print1to255 = () => {
    for(let i = 1; i < 256; i++){
        console.log(i);
    }
}

// ~~~ 2 ~~~
const printOdds1to255 = () => {
    for(let i = 1; i < 256; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

// ~~~ 3 ~~~
const printSum0to255 = () => {
    let sum = 0;
    for(let i = 0; i < 256; i++){
        sum = sum + i;
        console.log(i);
        console.log(sum);
    }
}

// ~~~ 4 ~~~
const printArrayValues = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

// ~~~ 5 ~~~
const printMaxOfArray = (arr) => {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}

// ~~~ 6 ~~~
const printAvgOfArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum / arr.length);
}

// ~~~ 7 ~~~
const returnOddsArray = () => {
    let result = [];
    for(let i = 1; i < 256; i++){
        if(i % 2 != 0){
            result.push(i);
        }
    }
    return result;
}

// ~~~ 8 ~~~
const squareArrayValues = (arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

// ~~~ 9 ~~~
const returnCountGreaterThanY = (arr, y) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count++;
        }
    }
    return count;
}

// ~~~ 10 ~~~
const zeroNegativeValues = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

// ~~~ 11 ~~~
const minMaxAvgArray = (arr) => {
    let min = arr[0];
    let max = min;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
        sum = sum + arr[i];
    }
    console.log(min);
    console.log(max);
    console.log(sum / arr.length);
}

// ~~~ 12 ~~~
const shiftArrayValues = (arr) => {
    for(let i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    return arr;
}

// ~~~ 13 ~~~
const replaceNegativesArray = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}