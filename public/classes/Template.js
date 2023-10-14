export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading) {
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
