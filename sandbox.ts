// Explicit Types
let character: string;
let age: number;
let isLoggedIn: boolean;

// Errors
// age = 'test';
age = 30;

// Errors
// isLoggedIn = 21;
isLoggedIn = false;


// arrays
let ninjas: string[] = [];

// ninjas = [1, 4];
ninjas.push('nani');


// Union types
let mixed: (string|number|boolean)[] = [];
mixed.push('nani');
mixed.push(12);
mixed.push(false);
console.log(mixed);

// More than one types for variable
let uid: string|number;
uid = '123';
uid = 123;

// objects
let ninjaOne: Object;
ninjaOne = { name: 'yoshi', age: 45 }

let ninjaTwo: {
    name: string,
    age: number,
    belt: string
};

// Errors
// ninjaTwo = {}
ninjaTwo = {
    name: "Toni",
    age: 44,
    belt: 'Red'
}