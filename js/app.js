'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// let storeTable = document.getElementById('store-table');
// let tableHeader = document.getElementById('store-hours');
let tableBody = document.getElementById('store-sales');
// let tableFooter =document.getElementById('store-totals');


// replace all object literals w/ a SINGLE CONSTRUCTOR FUNCTION
function Store (name, minHourlyCustomer, maxHourlyCustomer, avgCookiesSoldPerCustomer) {
  this.name = name;
  this.minHourlyCustomer = minHourlyCustomer;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.avgCookiesSoldPerCustomer = avgCookiesSoldPerCustomer;
  this.cookiesSoldHourlyArray = [];
  this.dailyStoreTotal = 0;
}

let seattleStore = new Store ('Seattle', 23, 65, 6.3);
let tokyoStore = new Store ('Tokyo', 3, 25, 1.2);
let dubaiStore = new Store ('Dubai', 11, 38, 3.7);
let parisStore = new Store ('Paris', 20, 38, 2.3);
let limaStore = new Store ('Lima', 2, 16, 4.6);

Store.prototype.randomCustomersHourly = function () {
  return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
};

Store.prototype.calcCookiesSoldEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let currentHourCustomers = this.randomCustomersHourly();
    let cookiesSoldCurrentHour = Math.ceil(currentHourCustomers * this.avgCookiesSoldPerCustomer);
    this.cookiesSoldHourlyArray.push(cookiesSoldCurrentHour);
    this.dailyStoreTotal += cookiesSoldCurrentHour;
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldEachHour();

  // creates a table row and append to DOM all of the contents below
  let tr = document.createElement('tr');
  // appends the table row to the DOM
  tableBody.appendChild(tr);

  // creates the table row header (store name)
  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  // creates multiple table datas (each cell in the row), gives content, append to DOM
  for (let i=0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldHourlyArray[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.dailyStoreTotal;
  tr.appendChild(td);
};



seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();

