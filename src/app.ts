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

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
})


// Tuples
let arr  = ['nono', 43, true];
arr[0] = false;
arr[1] = 'mario';
arr[2] = 12;

let tup: [string, number, boolean] = ['naga', 21, true];
// let tup: [string, number, boolean] = [1, 21, true];
// tup[0] = false;
tup[0] = 'bonar';

let student: [string, number];
student = ['john', 2121]