// Classes
class Invoice {
    client: string;
    detail: string;
    amount: number;

    // Constructor for the data
    constructor(c: string, d: string, a: number){
        this.client = c;
        this.detail = d;
        this.amount = a;
    }

    format() {
        return `${this.client} Berhutang sebesar £${this.amount} untuk ${this.detail}`
    }
}

const invOne = new Invoice('mario', 'bekerja untuk web bone', 250);
const invTwo = new Invoice('luigi', 'bekerja untuk web bone', 350);

// console.log(invOne);
// console.log(invTwo);

let invoices: Invoice[] = [];

// Error
// invoices.push('string')

// Work
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices);

invOne.client = 'Anto';
invTwo.amount = 400;
console.log(invOne);
console.log(invTwo);


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