import { Invoice } from './classes/Invoice.js'
import { ListTepmlate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List Template instance
const ul = document.querySelector('ul')!;
const list = new ListTepmlate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
})


// Generics
// const addUID = <T extends object>(obj: T) => {

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'anton', age: 31});

// Error
// let docTwo = addUID('hai');
// let docThree = addUID({age: 3});

console.log(docOne.age);

// Generic with interface
interface Resource <T>{
    uid:number;
    resourceName: string;
    data: T
}

const docFour: Resource<string> = {
    uid: 12,
    resourceName: 'orang',
    data: 'as'
}

const docFive: Resource<string[]> = {
    uid: 32,
    resourceName: 'orang lain',
    data: ['as', 'da']
}

console.log(docFour)
console.log(docFive)