"use strict";
// Classes
class Invoice {
    // Constructor for the data
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    format() {
        return `${this.client} Berhutang sebesar £${this.amount} untuk ${this.detail}`;
    }
}
const invOne = new Invoice('mario', 'bekerja untuk web bone', 250);
const invTwo = new Invoice('luigi', 'bekerja untuk web bone', 350);
// console.log(invOne);
// console.log(invTwo);
let invoices = [];
// Error
// invoices.push('string')
// Work
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.client = 'Anto';
invTwo.amount = 400;
console.log(invOne);
console.log(invTwo);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
