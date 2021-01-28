'use strict';

// console.log('Hello World');

// get each store element by ID.

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minHourlyCustomer: 23,
  maxHourlyCustomer: 65,
  avgCookiesSoldPerCustomer: 6.3,
  cookiesSoldHourlyArray: [],
  dailyStoreTotal: 0,

  randomCustomersHourly: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
  },

  calcCookiesSoldEachHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let currentHourCustomers = this.randomCustomersHourly();
      let cookiesSoldCurrentHour = Math.ceil(currentHourCustomers * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldHourlyArray.push(cookiesSoldCurrentHour);
      this.dailyStoreTotal += cookiesSoldCurrentHour;
      // console.log(`Customers this hour = ${currentHourCustomers}, total cookies this hour = ${cookiesSoldCurrentHour}`);
      // console.log(this.dailyStoreTotal);
    }
  },

  render: function() {
    this.calcCookiesSoldEachHour();
    // console.log('I am in the render method');
    let seattleList = document.getElementById('seattle');
    // console.log(seattleList + 'proof of life');
    for (let i=0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]}`;
      seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    seattleList.appendChild(li);
  },
};

let tokyo = {
  name: 'Tokyo',
  minHourlyCustomer: 3,
  maxHourlyCustomer: 24,
  avgCookiesSoldPerCustomer: 1.2,
  cookiesSoldHourlyArray: [],
  dailyStoreTotal: 0,

  randomCustomersHourly: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
  },

  calcCookiesSoldEachHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let currentHourCustomers = this.randomCustomersHourly();
      let cookiesSoldCurrentHour = Math.ceil(currentHourCustomers * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldHourlyArray.push(cookiesSoldCurrentHour);
      this.dailyStoreTotal += cookiesSoldCurrentHour;
      // console.log(`Customers this hour = ${currentHourCustomers}, total cookies this hour = ${cookiesSoldCurrentHour}`);
      // console.log(this.dailyStoreTotal);
    }
  },

  render: function() {
    this.calcCookiesSoldEachHour();
    // console.log('I am in the render method');
    let tokyoList = document.getElementById('tokyo');
    // console.log(tokyoList + 'proof of life');
    for (let i=0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]}`;
      tokyoList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    tokyoList.appendChild(li);
  },
};

let dubai = {
  name: 'Dubai',
  minHourlyCustomer: 11,
  maxHourlyCustomer: 38,
  avgCookiesSoldPerCustomer: 3.7,
  cookiesSoldHourlyArray: [],
  dailyStoreTotal: 0,

  randomCustomersHourly: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
  },

  calcCookiesSoldEachHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let currentHourCustomers = this.randomCustomersHourly();
      let cookiesSoldCurrentHour = Math.ceil(currentHourCustomers * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldHourlyArray.push(cookiesSoldCurrentHour);
      this.dailyStoreTotal += cookiesSoldCurrentHour;
      // console.log(`Customers this hour = ${currentHourCustomers}, total cookies this hour = ${cookiesSoldCurrentHour}`);
      // console.log(this.dailyStoreTotal);
    }
  },

  render: function() {
    this.calcCookiesSoldEachHour();
    // console.log('I am in the render method');
    let dubaiList = document.getElementById('dubai');
    // console.log(dubaiList + 'proof of life');
    for (let i=0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]}`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    dubaiList.appendChild(li);
  },
};

let paris = {
  name: 'Paris',
  minHourlyCustomer: 20,
  maxHourlyCustomer: 38,
  avgCookiesSoldPerCustomer: 2.3,
  cookiesSoldHourlyArray: [],
  dailyStoreTotal: 0,

  randomCustomersHourly: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
  },

  calcCookiesSoldEachHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let currentHourCustomers = this.randomCustomersHourly();
      let cookiesSoldCurrentHour = Math.ceil(currentHourCustomers * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldHourlyArray.push(cookiesSoldCurrentHour);
      this.dailyStoreTotal += cookiesSoldCurrentHour;
      // console.log(`Customers this hour = ${currentHourCustomers}, total cookies this hour = ${cookiesSoldCurrentHour}`);
      // console.log(this.dailyStoreTotal);
    }
  },

  render: function() {
    this.calcCookiesSoldEachHour();
    // console.log('I am in the render method');
    let parisList = document.getElementById('paris');
    // console.log(parisList + 'proof of life');
    for (let i=0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]}`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    parisList.appendChild(li);
  },
};

let lima = {
  name: 'Lima',
  minHourlyCustomer: 2,
  maxHourlyCustomer: 16,
  avgCookiesSoldPerCustomer: 4.6,
  cookiesSoldHourlyArray: [],
  dailyStoreTotal: 0,

  randomCustomersHourly: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
  },

  calcCookiesSoldEachHour: function() {
    for (let i = 0; i < hours.length; i++) {
      let currentHourCustomers = this.randomCustomersHourly();
      let cookiesSoldCurrentHour = Math.ceil(currentHourCustomers * this.avgCookiesSoldPerCustomer);
      this.cookiesSoldHourlyArray.push(cookiesSoldCurrentHour);
      this.dailyStoreTotal += cookiesSoldCurrentHour;
      // console.log(`Customers this hour = ${currentHourCustomers}, total cookies this hour = ${cookiesSoldCurrentHour}`);
      // console.log(this.dailyStoreTotal);
    }
  },

  render: function() {
    this.calcCookiesSoldEachHour();
    // console.log('I am in the render method');
    let limaList = document.getElementById('lima');
    // console.log(limaList + 'proof of life');
    for (let i=0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldHourlyArray[i]}`;
      limaList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    limaList.appendChild(li);
  },
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
