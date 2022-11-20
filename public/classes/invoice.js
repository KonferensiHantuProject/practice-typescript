// Classes
export class Invoice {
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
