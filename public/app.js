import { create } from './functions/create.js';
let type = document.querySelector('#type');
let toFrom = document.querySelector('#tofrom');
let details = document.querySelector('#details');
let amount = document.querySelector('#amount');
let btn = document.querySelector('#btn');
let ul = document.querySelector('ul');
let form = document.querySelector('form');
form.addEventListener('submit', create);
export { type, toFrom, details, amount, ul };