import { Invoice } from './classes/Invoice.js';
import { ListTepmlate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List Template instance
const ul = document.querySelector('ul');
const list = new ListTepmlate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Tuples
let arr = ['nono', 43, true];
arr[0] = false;
arr[1] = 'mario';
arr[2] = 12;
let tup = ['naga', 21, true];
// let tup: [string, number, boolean] = [1, 21, true];
// tup[0] = false;
tup[0] = 'bonar';
let student;
student = ['john', 2121];
