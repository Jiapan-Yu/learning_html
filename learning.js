/*let currentTempC = 20.5;
const multiline = "line1\n\
line2";
//string concatenation
const multiline2 = "line1\n" + "line2\n" + "line3\n";

let heating = false;
let cooling = true;

const sam = {
	name: 'Sam',
	classification: {
		kingdom: 'Anamalia',
		phylum: 'Chordata',
		class: 'Mamalia',
		order: 'Carnivoria',
		family: 'Felidae',
		subfamily: 'Felinae',
		genus: 'Felis',
		species: 'catus',
	},
};

delete sam.classification;

const a = [
	{name: "Ruby", hardness: 9},
	{name: "Diamond", hardness: 10},
	{name: "Topaz", hardness: 8},
];

const halloweenParty = new Date(2018, 9, 31, 19, 0);

const numStr = "33.3";
const num = Number(numStr)

sam.speak = function(){
	return "Meow!";
}

if(heating){
	alert("currentTempC is undefined");
}else{
	const message = `The current temperature is ${currentTempC}\u00b0C`;
	//alert(num);
}

let funds = 50; // starting conditions


// returns a random integer in the range [m, n] (inclusive)
function rand(m, n){
	return m + Math.floor((n - m + 1)*Math.random());
}

// randomly returns a string representing one of the six Crown and Anchor faces
function randFace(){
	return ["crown", "anchor", "heart", "spade", "club", "diamond"] [rand(0, 5)];
}*/

/*while(funds > 1 && funds < 100){
	let totalBet = rand(1, funds);
	if(totalBet === 13 || totalBet === 1 || totalBet === 2 || totalBet === 3 || totalBet === 4 || totalBet === 5 || totalBet === 6 || totalBet === 7 || totalBet === 8 || totalBet === 9 || totalBet === 10 || totalBet === 11 || totalBet === 12){
		console.log("Unlucky! Skip this round...");
	}else{
		alert("Let's play");
	}
}*/

/*function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}*/

/*let bigArrayOfNumbers = [4, 6, 8, 10, 12, 14, 16, 17];
let i = 0;
for(; i < bigArrayOfNumbers.length; i++){
	if(isPrime(bigArrayOfNumbers[i])) break;
}
if(i === bigArrayOfNumbers.length) console.log('No prime numbers!');
else console.log(`First prime number found at position ${i}`);*/


/*const doIt = false;
const result = doIt ? "Did it" : "Didn't do it";


console.log(result);*/

/*// a normal object
const obj = {b: 2, c: 3, d: 4};

//object destructuring assignment
const {a, b, c} = obj;

console.log(a);
console.log(b);
console.log(c);
// console.log(d);*/


/*// a normal array
const arr = [1, 2, 3];

//array destructuring assignment
let [x, y] = arr;
console.log(x);
console.log(y);*/


/*// spread operator
const arr = [1, 2, 3, 4, 5];
let [x, y, ...rest] = arr;
console.log(x);
console.log(y);
console.log(rest);*/

/*// use expressions in template strings
const roomTempC = 21.5;
let currentTempC = 19.5;
const message = `The current temperature is ` + `${currentTempC-roomTempC}\u00b0C different than room temperature.`;
const fahrenheit = `The current temperature is ${currentTempC * 9/5 + 32}\u00b0F`;
console.log(message);
console.log(fahrenheit);*/


/*function getGreeting(){
	return "Hello world";
}

// console.log(getGreeting());

const arr = [1, 2, 3];
arr[1] = getGreeting;
console.log(whoops());*/

/*function avg(a, b){
	return (a + b)/2;
}

console.log(avg(2, 4));*/


/*function f(o){
	o.message = `set in f (previous value: '${o.message}')`;
}
let o = {
	message: "initial value"
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);*/


/*function f(x){
	console.log(`in f: x=${x}`);
}

f();*/

/*function getSentence([subject, verb, object]){
	return `${subject} ${verb} ${object}`;
}

const a = {
	subject: "I",
	verb: "love",
	object: "Javascript",
};

const o = ["I", "love", "Javascript"];  // destructuring an array or object

console.log(getSentence(o));*/


/*function addPrefix(prefix, ...words){
	const prefixedWords = [];
	for(let i = 0; i < words.length; i++){
		prefixedWords[i] = prefix + words[i];
	}
	return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex")); //["converse", "convex"]*/


/*function f(a, b = "default", c = 3){
	return `${a} - ${b} - ${c}`; // using template string
}

console.log(f(5, 6, 7));
console.log(f(5, 6));
console.log(f(5));
console.log(f());

const o = {
	name: "Wallace", // primitive property
	bark: function() {return "Woof!";}, // function property (method)
}

const m = {
	name: 'Wallace',
	bark() {return 'Woof!';},
}

console.log(m.bark());*/


/*const o = {
	name: 'Wallace',
	speak() {return `My name is ${this.name}!`;},
};

console.log(o.speak());*/

/*const f = function (a, b) {
	return a + b;
}

const f_ = (a, b) => a + b;

alert(f(1, 5));*/


/*const o = {
	name: 'Julie',
	greetBackwards: function () {
		const getReverseName = () => {
			let nameBackwards = '';
			for(let i = this.name.length - 1; i >= 0; i--){
				nameBackwards += this.name[i]; //accessing a string as an array is unsafe
			}
			return nameBackwards;
		};
		return `${getReverseName()} si eman ym ,olleH`;
    }
};

console.log(o.greetBackwards());*/


/*const bruce = {name: "Bruce"};
const yu = {name: "Joshua"};
const madeline = {name: "Madeline"};*/

// this function isn't associated with any object, yet
// it's using 'this'!
/*function greet() {
	return `Hello, I'm ${this.name}`;
}

function update(birthYear, occupation){
	this.birthYear = birthYear;
	this.occupation = occupation;
}*/

/*console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));*/

/*
update.call(bruce, 1955, 'Singer');
console.log(bruce);
*/

/*update.apply(yu, [1994, 'developer']);

console.log(yu);

const arr = [2, 3, -5, 15, 7];
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

const newBruce = [1975, "martial artist"];
update.call(bruce, ...newBruce); // accomplish the same result as apply
console.log(bruce);*/


/*function f(x) {
	return x + 3;
}

console.log(f(5));*/


/*const x = 5;

function f() {
	console.log(x);
	console.log(y);
}

const y = 4;
f();*/

/*let name = "Joshua";
let age = 25;

function greet() {
	console.log(`Hello, ${name}`);
}

function getBirthYear() {
	console.log(`birth year: ${new Date().getFullYear() - age}`);
}

greet();
getBirthYear();*/

/*let user = {
	name: "Joshua",
	age: 25,
}; // better to end an object with a semicolon

function greet(user) {
    console.log(`Hello, ${user.name}`);
}

function getBirthYear(user) {
    console.log(`birth year: ${new Date().getFullYear() - user.age}`);
}


greet(user);
getBirthYear(user);*/


/*let globalFunc;
{
	let blockVar = 'a';
	globalFunc = function () {
		console.log(blockVar);
    }
}
globalFunc();*/

/*let f;
{
	let o = {note: "safe"};
	f = function () {
		return o;
    }
} // called a closure

let oRef = f();
oRef.note = "Not so safe";
console.log(oRef.note);*/

/*const message = (function () {
	const secret = "I'm a secret!";
	return `The secret is ${secret.length} characters long`;
})(); // immediately invoked function expression (IIFE)
console.log(message);*/

/*const f = (function () {
	let count = 0;
	return function () {
		return `I have been called ${++count} times`;
    }
})();

console.log(f());
console.log(f());*/

/*if(x !== 3){
	console.log(y);
	var y = 5;
	if(y === 5){
		var x = 3;
	}
	console.log(y);
}
if(x === 3){
	console.log(y);
}*/


// function hoisting
/*f();
function f() {
	console.log("Function hoisting");
}*/

// var x = 5;

/*'use strict';
if(typeof x === "undefined"){
	console.log("x doesn't exist or is undefined");
}else {
	console.log("x is safe to use");
}*/

/*if(typeof x === "undefined"){
	console.log("x doesn't exist or is undefined");
}else {
    console.log("x is safe to use");
}
let x = 5;*/

/*var x = function () {
	console.log("I'm called from inside a function");
}

var y = function (callback) {
	console.log("Do something");
	callback();
}

y(x); // callback function*/


// arrays
/*const arr4 = [
	{name: "Fred", type: "object", luckyNumbers: [5, 7, 13]},
	[
		{name: "Susan", type: "object"},
		{name: "Anthony", type: "object"},
	],
	function () {
		return "arrays can contain functions too";
    },
    "three",
];

console.log(arr4[1][0]);*/


/*//array constructor
var arr1 = new Array(1, 2, 3);
console.log(arr1);*/

/*const arr = ["b", "c", "d"];

console.log(arr.push("e"));
console.log(arr.pop());
arr.unshift("a");
console.log(arr);
console.log(arr.shift());*/

/*const arr = [1, 5, 6];
console.log(arr.slice(1, 3));*/


/*const arr = [{name: "Suzanne"}, {name: "Jim"}, {name: "Trevor"}, {name: "Amanda"}];
arr.sort((a, b) => a.name > b.name);
console.log(arr);*/


/*const arr = [{id: 5, name: "Judith"}, {id: 7, name: "Francis"}];
console.log(arr.find(o => o.id === 7));*/


/*class Person {
	constructor(name){
		this.name = name;
		this.id = Person.nextId++;
	}
}
Person.nextId = 0;
const jamie = new Person("Jamie");
const juliet = new Person("Juliet");
const peter = new Person("Peter");
const jay = new Person("Jay");
const arr = [jamie, juliet, peter, jay];

// option 1: direct comparison of ID:
console.log(arr.find(p => p.id === juliet.id)); // returns juliet object

// option 2: using "this" arg:
console.log(arr.find(p => p.id === this.id, juliet)); // returns juliet object*/


/*const arr = [5, 7, 12, 15, 17];
console.log(arr.some(x => x%2 === 0));
console.log(arr.some(x => Number.isInteger(Math.sqrt(x))));*/

/*const cart = [{name: "Widget", price: 9.95}, {name: "Gadget", price: 22.95}];
const names = cart.map(x => x.name);
console.log(names);
const prices = cart.map(x => x.price);
console.log(prices);
const discountPrices = prices.map(x => x*0.8);
console.log(discountPrices);
const lcNames = names.map(x => x.toLowerCase());
console.log(lcNames);*/

/*const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x, i) => ({name: x, price: prices[i]}));
console.log(cart);*/


// create a deck of playing cards
/*const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])
	for(let value = 0; value <= 13; value++)
		cards.push({suit, value});*/

/*// get all cards with value 2
let value2 = cards.filter(c => c.value === 2);
console.log(value2);

// get all diamonds
let diamonds = cards.filter(c => c.suit === 'D');
console.log(diamonds);*/


/*function cardToString(c) {
	const suits = {'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
	const values = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'};
	// constructing values each time we call cardToString is not very
	// efficient; a better solution is a reader's exercise
	for(let i = 2; i <= 10; i++) values[i] = i;
	return values[c.value] + suits[c.suit];
}

// get all cards with value 2:
console.log(cards.filter(c => c.value = 2).map(cardToString));

//get all face cards that are hearts
console.log(cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString));*/


/*const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
console.log(arr.join());
console.log(arr.join(''));
console.log(arr.join(' -- '));*/


/*const attributes = ["Nimble", "Perceptive", "Generous"];
const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
console.log(html);*/


// const SYM = Symbol();

// const o = {a: 1, b: 2, c: 3, [SYM]: 4};

/*for (let propert in o){
    if(!o.hasOwnProperty(propert)) continue;
    console.log(`${propert}: ${o[propert]}`);
}*/

// Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));


/*const o = {apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5};
Object.keys(o).filter(prop => prop.match(/^x/)).forEach(prop => console.log(`${prop}: ${o[prop]}`));*/

//create a new class called Car
/*class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }
    shift(gear){
        if(this.userGears.indexOf(gear) < 0) // returns -1 if the item is not found
            throw new Error(`Invalid gear: ${gear}`);
        this.userGear = gear;
    }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
car1.shift('P');
car2.shift('R');

console.log(car1.userGear);
console.log(car2.userGear);*/


/*class Car{
    static getNextVin(){
        return Car.nextVin++;
    }

    constructor(make, model){
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }

    static areSimilar(car1, car2){
        return car1.make === car2.make && car.model === car2.model;
    }

    static areSame(car1, car2){
        return car1.vin===car2.vin;
    }
}

Car.nextVin = 0;

const car1 = new Car("Tesla", "S");
const car2 = new Car("Mazda", "3");
const car3 = new Car("Mazda", "3");

console.log(car1.vin);
console.log(car2.vin);
console.log(car3.vin);

if (Car.areSimilar(car1, car3)){
    console.log("car1 and car3 are similar");
}else{
    console.log("car1 and car3 are not similar");
}*/


/*class Vehicle{
    constructor(){
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p){
        this.passengers.push(p);
    }
}

class Car extends Vehicle{
    constructor(){
        super();
        console.log("Car created");
    }
    deployAirbags(){
        console.log("BWOOSH!");
    }
}

class Motorcycle extends Vehicle {}

const c = new Car();
const m = new Motorcycle();
console.log(c instanceof Car);
console.log(c instanceof Vehicle);*/


/*class InsurancePolicy(){
    function makeInsurable(o) {
        o.addInsurancePolicy = function (p) {
            this.insurancePolicy = p;
        }
        o.getInsurancePolicy = function () {
            return this.insurancePolicy;
        }
        o.isInsured = function () {
            return !!this.insurancePolicy;
        }
    }
}*/


/*class Super{
    constructor(){
        this.name = 'Super';
        this.isSuper = true;
    }
}

//this is valid, but not a good idea...
Super.prototype.sneaky = 'not recommended';

class Sub extends Super{
    constructor(){
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();

for(let p in obj){
    console.log(`${p}: ${obj[p]}`);
}*/

/*const u1 = {name: 'Cynthis'};
const u2 = {name: 'Jackson'};
const u3 = {name: 'Olive'};
const u4 = {name: 'James'};


const userRoles = new Map();

userRoles.set(u1, 'User').set(u2, 'User').set(u3, 'Admin');

// console.log(userRoles.entries());
for(let u of userRoles.keys())
    console.log(u.name);

for(let r of userRoles.values())
    console.log(r);

for(let ur of userRoles.entries())
    console.log(`${ur[0].name}: ${ur[1]}`);

// note that we can use destructuring to make this iteration even more natural
for(let [u, r] of userRoles.entries())
    console.log(`${u.name}: ${r}`);

userRoles.clear();
console.log(userRoles.size);*/

/*// Weak Maps
const SecretHolder = (function () {
    const secrets = new WeakMap();
    return class {
        setSecret(secret){
            secrets.set(this, secret);
        }
        getSecret(){
            return secrets.get(this);
        }
    }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');

console.log(a.getSecret());
console.log(b.getSecret());*/


/*const roles = new Set();

roles.add("User");
roles.add("Admin");

console.log(roles.entries());*/


/*const naughty = new WeakSet();

const children = [
    {name: 'Suzy'},
    {name: 'Derek'},
];

naughty.add(children[1]);

for(let child of children){
    if(naughty.has(child)){
        console.log(`Coal for ${child.name}!`);
    }else {
        console.log(`Presents for ${child.name}!`)
    }
}*/

// const err = new Error('invalid email');

/*function validateEmail(email) {
    return email.match(/@/) ? email : new Error(`invalid email: ${email}`);
}

const email = null;

try{
    const validatedEmail = validateEmail(email);

    if(validatedEmail instanceof Error){
        console.log(`Error: ${validatedEmail.message}`);
    }else{
        console.log(`Valid email: ${validatedEmail}`);
    }
}catch (err) {
    console.log(`Error: ${err.message}`);
}*/


/*function a() {
    console.log(`a: calling b`);
    b();
    console.log(`a: done`);
}

function b() {
    console.log(`b: calling c`);
    c();
    console.log(`b: done`);
}

function c() {
    console.log(`c: throwing error`);
    throw new Error(`c error`);
    console.log(`c: done`);
}

function d() {
    console.log(`d: calling c`);
    c();
    console.log(`d: done`);
}

try{
    a();
}catch(err){
    console.log(err.stack);
}

try{
    d();
}catch(err){
    console.log(err.stack);
}*/


/*try{
    console.log("this line is executed...");
    // throw new Error("whoops");
    console.log("this line is not...");
}catch (err) {
    console.log("there was an error...");
}finally {
    console.log("...always executed");
    console.log("perform cleanup here");
}*/


/*const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
    "Up above the world you fly,",
    "Like a tea tray in the sky.",
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
];

const it = book.values();

let current = it.next();

while (!current.done){
    console.log(current.value);
    current = it.next();
}*/


// iteration protocol
// class Log {
//     constructor(){
//         this.messages = [];
//     }
//     add(message){
//         this.messages.push({message, timestamp: Date.now()});
//     }
//     [Symbol.iterator](){
//         return this.messages.values();
//     }
// }
//
// const log = new Log();
// log.add("first day at sea");
// log.add("spotted whale");
// log.add("spotted another vessel");
//
// // iterate over log as if it were an array!
// for(let entry of log){
//     console.log(`${entry.message} @ ${entry.timestamp}`);
// }


/*function* rainbow() { // the asterisk marks this as a generator
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

const it = rainbow();

for(let color of it){
    console.log(color);
}*/

/*function* interrogate(){
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}

const it = interrogate();

console.log(it.next());
console.log(it.next("Joshua"));
console.log(it.next("Green"));*/


/*function isCurrentYearLeapYear() {
    const year = new Date().getFullYear();
    if(year % 4 !== 0)
        return false;
    else if(year % 100 != 0)
        return true;
    else if(year % 400 != 0)
        return false;
    else
        return true;
}

const dayInMonth = [31, isCurrentYearLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if(isCurrentYearLeapYear())
    console.log('It is a leap year.');

console.log(dayInMonth);*/


/*const getNextRainbowColor = (function () {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return function() {
        if(++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    };
})();*/

/*function getRainbowIterator(){
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return {
        next(){
            if(++colorIndex >= colors.length) colorIndex = 0;
            return {value: colors[colorIndex], done: false};
        }
    };
}

const rainbowIterator = getRainbowIterator();

setInterval(function () {
    document.querySelector('.rainbow').style['background-color'] = rainbowIterator.next().value;
    }, 500);*/

/*setTimeout(function () {
    console.log("hello");
}, 1500);*/


/*var i;
for(i=5; i>=0; i--){
    setTimeout(function () {
        console.log(i===0 ? "go!" : i);
    }, (5-i)*1000);
}*/


/*function loopBody(i) {
    setTimeout(function () {
        console.log(i===0?"go!":i);
    }, (5-i)*1000);
}
var i;
for(i=5; i>=0; i--){
    loopBody(i);
}*/

// var i;
// for(i=5; i>0; i--){
//     (function (i) {
//         setTimeout(function () {
//             console.log(i===0?"go!":i);
//         })
//     })(i);
// }

/*// function variables
function addThreeSquareAddFiveTakeSquareRoot(x) {
    // this is a very silly function, isn't it?
    return Math.sqrt(Math.pow(x+3, 2)+5);
}

// before
const answer = (addThreeSquareAddFiveTakeSquareRoot(5) + addThreeSquareAddFiveTakeSquareRoot(2))/addThreeSquareAddFiveTakeSquareRoot(7);
console.log(answer);

// after
const f = addThreeSquareAddFiveTakeSquareRoot; // no parenthesis at the end, otherwise we're invoking the function
const ans = (f(5) + f(2))/f(7);
console.log(ans);*/


/*const Money = require('math-money'); // require is a node function to import a library

const oneDollar = Money.Dollar(1);

const Dollar = Money.Dollar;
const twoDollars = Dollar(2);*/


/*const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI/4;
const zoom = 2;
const offset = [1, -3];

const pipeline = [
    function rotate(p) {
        return {
            x: p.x * cos(theta) - p.y * sin(theta),
            y: p.x * sin(theta) + p.y * cos(theta),
        };
    },
    function scale(p) {
        return {x: p.x * zoom, y: p.y * zoom};
    },
    function translate(p) {
        return {x: p.x + offset[0], y: p.y + offset[1]};
    },
];

const p = {x: 1, y: 1};
let p2 = p;
for(let i=0; i<pipeline.length; i++){
    p2 = pipeline[i](p2);
    console.log(p2);
}*/


/*function sum(arr, f) {
    if (typeof f != 'function') f = x => x;

    return arr.reduce((a, x) => a += f(x), 0);
}

console.log(sum([1,2,3]));
console.log(sum([1,2,3], x => x*x));
console.log(sum([1,2,3], x => Math.pow(x, 3)));*/


/*function fact(n) {
    if(n === 1) return 1;
    return n * fact(n-1);
}

console.log(fact(4));*/

/*console.log("Before timeout: " + new Date());

setTimeout(function () {
    console.log("After timeout: " + new Date());
}, 2000);
console.log("I happen after setTimeout!")
console.log("Me too!");*/


/*const start = new Date();
let i = 0;
const intervalId = setInterval(function () {
    let now = new Date();
    if(now.getMinutes() !== start.getMinutes() || ++i > 10)
        return clearInterval(intervalId);
    console.log(`${i}: ${now}`);
}, 5*1000);*/


/*function countdown() {
    console.log("Countdown:");
    for (let i=5; i>=0; i--){
        setTimeout(function () {
            console.log(i===0 ? "Go!" : i);
        }, (5-i)*1000);
    }
}

countdown();*/


/*function countdown(seconds) {
    return new Promise(function (resolve, reject) {
        for (let i = seconds; i >= 0; i--) {
            setTimeout(function () {
                if (seconds===5) return reject(new Error("number not accepted!"));
                if(i>0) console.log(i + '...');
                else resolve(console.log("GO!"));
            }, (seconds-i)*1000);
        }
    });
}

const p = countdown(6);

p.then(
    function () {
        console.log("countdown completed successfully");
    }
);

p.catch(function (err) {
    console.log("countdown experienced an error: " + err.message);
});*/


/*const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter{
    constructor(seconds, superstitious){
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go(){
        const countdown = this;
        return new Promise(function (resolve, reject) {
            for (let i = countdown.seconds; i >= 0; i--) {
                setTimeout(function () {
                    if (countdown.superstitious && i===13)
                        return reject(new Error("DEFINITELY NOT COUNTING THAT"));
                    countdown.emit('tick', i);
                    if (i === 0) resolve();
                }, (countdown.seconds-i)*1000);
            }
        });
    }
}

const c = new Countdown(14);

c.on('tick', function (i) {
    if(i>0) console.log(i + '...');
});

c.go().then(function () {
    console.log('GO!');
}).catch(function (err) {
    console.log(err.message);
})*/

/*const d = new Date();
console.log(d);
console.log(d.valueOf());*/

/*try {
    console.log(require.resolve("moment"));
} catch(e) {
    console.error("moment-timezone is not found");
    process.exit(e.code);
}

const moment = require('moment');

const d = new Date(Date.UTC(1930, 4, 10));

console.log(d.toLocaleDateString());
// console.log(d.toLocaleFormat());
console.log(d.toLocaleTimeString());
console.log(d.toTimeString());
console.log(d.toUTCString());

console.log(moment(d).format("YYYY-MM-DD"));
console.log(moment(d).format("YYYY-MM-DD HH:mm"));*/


/* const d = new Date(Date.UTC(1815, 9, 10));

console.log(d.getMonth()); */



// 面试题
let arr = [786, 347, 479, 915, 459, 36, 672, 636, 292, 871, 556, 680, 801, 867, 579, 608, 5, 383, 471, 935]

// for (let i = 0; i < 20; i++) {
//   arr.push(Math.ceil(Math.random() * 1000))
// }

// console.log(arr)

// 冒泡排序
/* for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let tmp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = tmp
    }
  }
}

console.log(arr)

function binarySearch(arr, min, max, searchValue) {
  // min和max是作为索引还是值
  // let middleValue = arr[Math.floor((min + max)/2)]
  let mid = Math.floor((min + max)/2)

  if (searchValue > arr[mid]) {
    return binarySearch(arr, mid, max, searchValue)
  } else if (searchValue < arr[mid]) {
    return binarySearch(arr, min, mid, searchValue)
  } else {
    return mid
  }
}

console.log(binarySearch(arr, 0, arr.length - 1, 871)) */


// binary search
/* function binarySearch(arr, l, r, searchValue) {
    let mid = l + Math.floor((r - l) / 2)

    if (arr[mid] == searchValue)
        return mid

    if (arr[mid] > searchValue) return binarySearch(arr, l, mid - 1, searchValue)

    return binarySearch(arr, mid + 1, r, searchValue)
}

let toSearchArr = [34, 64, 100, 172, 237, 262, 270, 300, 334, 367, 455, 490, 494, 673, 694, 726, 819, 843, 864, 965]
let n = toSearchArr.length // 20
let searchValue = 494

let result = binarySearch(toSearchArr, 0, n - 1, searchValue)
console.log(result) */


/* let arr = []

for (let i = 0; i < 20; i++) {
    arr.push(Math.ceil(Math.random() * 1000))
}

console.log(arr)

let dividedArr = []
for (let i = 0; i < arr.length - 1; i += 2) {
    // let j = i + 1
    dividedArr.push([arr[i], arr[i + 1]])

}

console.log(dividedArr) */


/* let x = 5
function fn(x) {
  return function (y) {
    console.log(y + (++x))
  }
}
let f = fn(6)
f(7)

console.log(x) */


// let x = '123456789.012'

/* let reg = /\d{3}/g
let xArr = x.split('.')
let res = xArr[0].match(reg).join(',') + '.' + xArr[1]
console.log(res) */

/* let res = parseFloat(x).toLocaleString()
console.log(res) */


/* 'use strict'

let firstInterval, secondInterval

function Timer() {
  this.s1 = 0
  this.s2 = 0

  firstInterval = setInterval(() => {
    console.log(this)
    this.s1++
  }, 1000)
  secondInterval = setInterval(function() {
    console.log(this.s2)
    this.s2++
  }, 1000)
}

let timer = new Timer()
setTimeout(() => {
  console.log('s1: ', timer.s1)
  clearInterval(firstInterval)
  clearInterval(secondInterval)
}, 3100)
setTimeout(() => {
  console.log('s2: ', timer.s2)
}, 3100)


let y = 1
setTimeout(() => console.log('y: ', y++), 4000) */



// 如何手动实现一个深度拷贝
let a1 = {b: {c: {d: 1}}}

function clone(source) {
  let target = {}
  for (let i in source) {
    if (source.hasOwnProperty(i)) {
      if (typeof source[i] === 'object') {
        target[i] = clone(source[i])
      } else {
        target[i] = source[i]
      }
    }
  }

  return target
}

let a1Clone =clone(a1)

// console.log(clone(a1))

a1.b.c.d = 2

console.log(a1)
console.log(a1Clone)
