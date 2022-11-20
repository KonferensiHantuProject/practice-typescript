export class ListTepmlate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        // Defining li
        const li = document.createElement('li');
        // Dfining H4
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        // Appending h4
        li.append(h4);
        // Defining P
        const p = document.createElement('p');
        p.innerText = item.format();
        // Appending p
        li.append(p);
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
