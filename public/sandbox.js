"use strict";
let greet;
// greet = 'Hello';
greet = () => {
    console.log('Halo Lagi');
};
// Optional
// const add = (a: number, b: number, c?: number|string) => {
//     console.log(a + b);
//     console.log(c);
// }
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
// Return rype explicitly
// const minus = (a: number, b: number):number => {
//     return a + b;
// }
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// Errors
// result = 'something'
