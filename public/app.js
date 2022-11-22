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
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// Generics
// const addUID = <T extends object>(obj: T) => {
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'anton', age: 31 });
// Error
// let docTwo = addUID('hai');
// let docThree = addUID({age: 3});
console.log(docOne.age);
const docFour = {
    uid: 12,
    resourceName: 'orang',
    data: 'as'
};
const docFive = {
    uid: 32,
    resourceName: 'orang lain',
    data: ['as', 'da']
};
console.log(docFour);
console.log(docFive);
