import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTepmlate{
    constructor(private container: HTMLUListElement){}

    render(item: HasFormatter, heading: string, position: 'start' | 'end'){
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

        if(position === 'start'){
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }
    }
}