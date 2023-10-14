import { Payment } from "../classes/payment.js";
import { Invoice } from "../classes/invoice.js";
import { ListTemplate } from "../classes/Template.js";
let type = document.querySelector('#type');
let toFrom = document.querySelector('#tofrom');
let details = document.querySelector('#details');
let amount = document.querySelector('#amount');
let ul = document.querySelector('ul');
let list = new ListTemplate(ul);
export let create = function (e) {
    e.preventDefault();
    let doc;
    if (type.value === "Invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value);
};
