'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let storeTable = document.getElementById('store-table');
let stores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
let 


// replace all object literals w/ a SINGLE CONSTRUCTOR FUNCTION

function Store (name, minHourlyCustomer, maxHourlyCustomer, avgCookiesSoldPerCustomer) {
  this.name = name;
  this.minHourlyCustomer = minHourlyCustomer;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.avgCookiesSoldPerCustomer = avgCookiesSoldPerCustomer;
}

Store.prototype.randomCustomersHourly = function () {
  return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
};

Store.prototype.calcCookiesSoldEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let currentHourCustomers = this.randomCustomersHourly();
    let cookiesSoldCurrentHour = Math.ceil(currentHourCustomers * this.avgCookiesSoldPerCustomer);
    this.cookiesSoldHourlyArray.push(cookiesSoldCurrentHour);
    this.dailyStoreTotal += cookiesSoldCurrentHour;
    // console.log(`Customers this hour = ${currentHourCustomers}, total cookies this hour = ${cookiesSoldCurrentHour}`);
    // console.log(this.dailyStoreTotal);
  }
};

// create table row and append to DOM all of the contents below
Store.prototype.render = function () {
  this.calcCookiesSoldEachHour();
  // creates the table row element
  let tr = document.createElement('tr');
  // appends the table row to the DOM
  storeTable.appendChild(tr);

  // create table header, give content, and append to the DOM
  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  // create multiple table datas, give content, append to DOM
  for (let i=0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]} cookies`;
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = `Total: ${this.dailyStoreTotal} cookies`;
  tr.appendChild(td);
};

let seattleStore = new Store ('Seattle', 23, 65, 6.3);
console.log(`here is my ${seattleStore}`);
let tokyoStore = new Store ('Tokyo', 3, 25, 1.2);
console.log(`here is my ${tokyoStore}`);
let dubaiStore = new Store ('Dubai', 11, 38, 3.7);
console.log(`here is my ${dubaiStore}`);
let parisStore = new Store ('Paris', 20, 38, 2.3);
console.log(`here is my ${parisStore}`);
let limaStore = new Store ('Lima', 2, 16, 4.6);
console.log(`here is my ${limaStore}`);

seattleStore.render();
