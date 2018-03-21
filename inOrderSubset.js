// given a string return an array with all subset of that string in string order

function rInOrderSubset(str, sub, res) {
    // break case
    if (str.length < 1) {
        // prevent pushing empty substring case
        if (sub.length > 0) {
            res.push(sub);
        }
        return res;
    } else {
        // progress
        let newStr = str.slice(1, str.length);
        let newSub = sub + str[0];
        // recurse
        rInOrderSubset(newStr, newSub, res);
        rInOrderSubset(newStr, sub, res);
    }
    return res;
}

let string = "fun";
let substring = "";
let result = [];

console.log(rInOrderSubset(string, substring, result));