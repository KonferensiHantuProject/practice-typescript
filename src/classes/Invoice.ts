import { HasFormatter } from '../interfaces/HasFormatter.js';

// Classes
export class Invoice implements HasFormatter{
    // Constructor for the data
    constructor(
        readonly client: string,
        private detail: string,
        public amount: number
    ){}

    format() {
        return `${this.client} Berhutang sebesar £${this.amount} untuk ${this.detail}`
    }
}