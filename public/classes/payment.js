// Classes
export class Payment {
    // Constructor for the data
    constructor(recipient, detail, amount) {
        this.recipient = recipient;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} Berhutang sebesar £${this.amount} untuk ${this.detail}`;
    }
}
