import { Payment } from "../classes/payment.js";
import { Invoice } from "../classes/invoice.js";
import { HasFormatter } from "../interfaces/hasFormatter.js";
import { ListTemplate } from "../classes/Template.js";

let type = document.querySelector('#type') as HTMLSelectElement;
let toFrom = document.querySelector('#tofrom') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;

let ul = document.querySelector('ul')!;
let list = new ListTemplate(ul);

export let create = function (e: Event) {

  e.preventDefault();

  let doc:HasFormatter;

  if (type.value === "Invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value)

};
