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


// Enums

enum ResourceType { BUKU, PENULIS, FILM, DIREKTUR, ORANG}

interface Resiurce <T> {
    uid: number;
    resourceType: number;
    data: T;
}

const docOne: Resiurce<object> = {
    uid: 1,
    resourceType: ResourceType.BUKU,
    data: { title: 'nama' }
}

const docTwo: Resiurce<object> = {
    uid: 10,
    resourceType: ResourceType.DIREKTUR,
    data: { title: 'angin' }
}

console.log(docOne);
console.log(docTwo);

// const docOne: Resiurce<object> = {
//     uid: 1,
//     resourceType: 3,
//     data: { title: 'nama' }
// }