"use strict";
// let greet: Function;
// Example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} bilang ${greeting}`);
};
// Example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// Example 3 
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} berusia ${ninja.name} tahun`);
};
