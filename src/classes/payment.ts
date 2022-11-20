import { HasFormatter } from '../interfaces/HasFormatter.js';

// Classes
export class Payment implements HasFormatter{
    // Constructor for the data
    constructor(
        readonly recipient: string,
        private detail: string,
        public amount: number
    ){}

    format() {
        return `${this.recipient} Berhutang sebesar £${this.amount} untuk ${this.detail}`
    }
}