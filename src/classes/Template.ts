import { HasFormatter } from "../interfaces/hasFormatter";

export class ListTemplate {

    constructor(private container:HTMLUListElement){}

    render(item:HasFormatter, heading:string){
        let li = document.createElement('li');

        let h2 = document.createElement('h2');
        h2.innerText = heading;

        let p = document.createElement('p');
        p.innerText = item.format();

        li.append(h2);
        li.append(p);
        

        this.container.append(li);
        
    }
}