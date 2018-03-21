// given 4 parameters print the multiples of param1, starting at param2 and extending to param3. must also exclude the value of param4.

function finalCountdown(p1, p2, p3, p4){
    // check for valid inputs
    if(typeof p1 != 'number' || 
    typeof p2 != 'number' || 
    typeof p3 != 'number' || 
    typeof p4 != 'number' ||
    p2 > p3){
        return console.log("invalid input");
    }
    // iterate through valid range
    for(let i = p2; i <= p3; i++){
        if(i % p1 === 0 && i != p4){
            console.log(i);
        }
    }
}

let param1 = 3;
let param2 = 5;
let param3 = 17;
let param4 = 9;

finalCountdown(param1,param2,param3,param4);