// Interface
interface isPerson{
    name: string;
    age: number;
    speak(a: string,): void;
    spend(a: number): number;
}

// Example of Interface Use
const me: isPerson = {
    name: 'anto',
    age: 30,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log('I spent', amount);
        return amount;
    }
}

const greetPerson = (person: isPerson) => {
    console.log('hello', person.name)
}

greetPerson(me);

console.log(me);

import { Invoice } from './classes/Invoice.js'

const invOne = new Invoice('mario', 'bekerja untuk web bone', 250);
const invTwo = new Invoice('luigi', 'bekerja untuk web bone', 350);

let invoices: Invoice[] = [];

invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    // inv.client = 'sesuatu';
    console.log(inv.client, inv.amount, inv.format())
});

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    )
})