// Explicit Types
var character;
var age;
var isLoggedIn;
// Errors
// age = 'test';
age = 30;
// Errors
// isLoggedIn = 21;
isLoggedIn = false;
// arrays
var ninjas = [];
// ninjas = [1, 4];
ninjas.push('nani');
// Union types
var mixed = [];
mixed.push('nani');
mixed.push(12);
mixed.push(false);
console.log(mixed);
// More than one types for variable
var uid;
uid = '123';
uid = 123;
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 45 };
var ninjaTwo;
// Errors
// ninjaTwo = {}
ninjaTwo = {
    name: "Toni",
    age: 44,
    belt: 'Red'
};
