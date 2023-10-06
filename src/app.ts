import { create } from './functions/create.js'

let type = document.querySelector('#type') as HTMLSelectElement;
let toFrom = document.querySelector('#tofrom') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;

let btn = document.querySelector('#btn') as HTMLButtonElement;

let ul = document.querySelector('ul')!;

let form = document.querySelector('form')!;

form.addEventListener('submit', create);


export {type, toFrom, details, amount, ul};