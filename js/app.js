'use strict';


let storeTable = document.getElementById('store-table');
let tfoot = document.createElement('tfoot');

let myForm = document.querySelector('form');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];
let footerTotals = [];
let grandTotal = 0;

// replace all object literals w/ a SINGLE CONSTRUCTOR FUNCTION
function Store (name, minHourlyCustomer, maxHourlyCustomer, avgCookiesSoldPerCustomer) {
  this.name = name;
  this.minHourlyCustomer = minHourlyCustomer;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.avgCookiesSoldPerCustomer = avgCookiesSoldPerCustomer;
  this.cookiesSoldHourlyArray = [];
  this.dailyStoreTotal = 0;
  allStores.push(this);
}

// let seattleStore = new Store ('Seattle', 23, 65, 6.3);
// let tokyoStore = new Store ('Tokyo', 3, 25, 1.2);
// let dubaiStore = new Store ('Dubai', 11, 38, 3.7);
// let parisStore = new Store ('Paris', 20, 38, 2.3);
// let limaStore = new Store ('Lima', 2, 16, 4.6);

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

  let tbody = document.createElement('tbody');
  storeTable.appendChild(tbody);

  let tr = document.createElement('tr');
  tbody.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i=0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldHourlyArray[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.dailyStoreTotal;
  tr.appendChild(td);
};

let renderStores = function() {
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
};

let renderTableHeader = function() {
  let thead = document.createElement('thead');
  storeTable.appendChild(thead);

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = 'Store Hours';
  tr.appendChild(th);

  for (let i=0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Daily Store Total';
  tr.appendChild(th);
};

let renderTableFooter = function() {
  calcFooterTotals();

  storeTable.appendChild(tfoot);

  let tr = document.createElement('tr');
  tfoot.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = 'Hourly Grand Totals';
  tr.appendChild(th);

  for (let i=0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = footerTotals[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);
};

function calcFooterTotals() {
  footerTotals = [];
  grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < allStores.length; j++) {
      hourTotal += allStores[j].cookiesSoldHourlyArray[i];
    }
    footerTotals.push(hourTotal);
    grandTotal += hourTotal;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  let locationName = event.target.location.value;
  let minCust = +event.target.mincust.value;
  let maxCust = +event.target.maxcust.value;
  let avgCookies = +event.target.avgcookies.value;

  let newStore = new Store(locationName, minCust, maxCust, avgCookies);
  allStores.push(newStore);
  newStore.render();
  renderTableFooter(); 
  // <-- this works! it makes a new row! it just doesn't delete the old row...
}

new Store ('Seattle', 23, 65, 6.3);
new Store ('Tokyo', 3, 25, 1.2);
new Store ('Dubai', 11, 38, 3.7);
new Store ('Paris', 20, 38, 2.3);
new Store ('Lima', 2, 16, 4.6);

renderTableHeader();
renderStores();
renderTableFooter();

myForm.addEventListener('submit', handleSubmit);
