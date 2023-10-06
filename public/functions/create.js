import { type, toFrom, details, amount, ul } from "../app.js";
export let create = function (e) {
    e.preventDefault();
    if (type.value === "Invoice") {
        ul.innerHTML +=
            `<li>
            <h2>${type.value}</h2>
            <p>${toFrom.value} owes ${amount.value} for ${details.value}</p>
        </li>`;
    }
    else if (type.value === "Payment") {
        ul.innerHTML +=
            `<li>
        <h2>${type.value}</h2>
        <p>${toFrom.value} is owed ${amount.value} for ${details.value}</p>
    </li>`;
    }
};
