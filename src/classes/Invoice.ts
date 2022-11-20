// Classes
export class Invoice {
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