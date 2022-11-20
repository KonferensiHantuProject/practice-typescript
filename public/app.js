"use strict";
// Classes
class Invoice {
    // readonly client: string;
    // private detail: string;
    // public amount: number;
    // Constructor for the data
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.client} Berhutang sebesar £${this.amount} untuk ${this.detail}`;
    }
}
const invOne = new Invoice('mario', 'bekerja untuk web bone', 250);
const invTwo = new Invoice('luigi', 'bekerja untuk web bone', 350);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // inv.client = 'sesuatu';
    console.log(inv.client, inv.amount, inv.format());
});
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
