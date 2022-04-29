/*
    Author: Ethan Wilson
    Last updated: 4/28
    Descriptiion: we are learning Javascript!
*/


// this is a single line comment

//console.log('Hello world');


import {x, myFunc} from './module.js';
console.log(x);
myFunc();

let string = "fldsjafldsa";
let trueOrFalse = true;
//let num = 45454545;
let floatingPointNumber = 4343.34343;
//let x;
const SYMBOLPROPERTY = Symbol('This is a symbol description!');
let y = null;


function greet() {
    let a = 'hello';
    var c = 'hello';
    {
        let b = 'world';
        var d = 'world';
        console.log(a + ' ' + b);
        console.log(c + ' ' + d);
    }
    //console.log(a + ' ' + b); // error
    console.log(c + ' ' + d);
}

greet();

let obj = {
    myProperty: 'This is my property',
    thisIsMyOtherProperty: 5,
    myMethod: () => {
        console.log('this is a method from my object!');
    }
}

let obj2 = {
    myProperty: 'This is my property x2',
    thisIsMyOtherProperty: 5,
    myMethod: () => {
        console.log('this is a method from my other object!');
    }
}

console.log(obj.myMethod());
console.log(obj2.myMethod());

/*
class Car {
    constructor(name, year, miles){
      this.name = name;
      this._year = year;
      this.miles = miles;
    }
  
    get age() {
      const n = new Date();
      return `The car is ${n.getFullYear() - this._year} year(s) old!`;
    }
  
    set year(year) {
      this._year = year;
    }
  
    odometerAdd(distance) {
      this.miles += distance;
    }
  }

 let c = new Car('Honda Accord', 2013, 124000);
 let d = new Car('Nissan Skyline', 2033, 124000);


 d.year = 2021;
 console.log(d.age);

function ageCheck(age) {

    if(age >= 21){
        console.log('You have a license to drink my friend!');
    } else if (age < 9) {
        console.log('You are too young!');
    } else if (age < 21) {
        console.log('you can\'t drink');
    }
}

*/

//ageCheck(10);

// let num = 'a';
// switch(num){
//     case 'a':
//         console.log('your number was 1');
//         break;
//     case 2:
//         console.log('your number was 2');
//         break;
//     case 4:
//         console.log('your number was 4');
// }

// for(let i = 5; i > 0; i--) {
//     console.log('this is from my for loop!');
// }

// let n = 1;

// do {
//     console.log(n);
//     n++;
// } while(n < 5)


let elements = document.querySelectorAll('.navItem');

for(let element of elements) {
    console.log(element.innerHTML);
}

let header = document.querySelector('#aboutMeHeader');
let container = document.querySelector('#container');
header.addEventListener('click', myEventFunction);
container.addEventListener('click', myEventFunction, false);


function myEventFunction() {
    console.log('this is my event!');
}

const date = new Date();
console.log(date);
console.log('Year : ' + date.getFullYear());
console.log('Month (from 0-11) : ' + date.getMonth());
console.log('Date (from 1-31) : ' + date.getDate());
console.log('Day of week (from 0-6) : ' + date.getDay());
console.log('Hour (from 0-23) : ' + date.getHours());
console.log('Minutes (from 0-59) : ' + date.getMinutes());
console.log('Seconds (from 0-59) : ' + date.getSeconds());
console.log('Milliseconds (from 0-999) : ' + date.getMilliseconds());

// we also have UTC equivalents for universal time

console.log('UTC minutes : ' + date.getUTCMinutes());


let ul = document.querySelector('ul');
let li = document.createElement('li');
li.innerHTML = "dom manipulation example";
li.id = "myListItem";
ul.appendChild(li);



let li2 = document.createElement('li');
li2.innerHTML = "dom manipulation example 2";
//ul.removeChild(li);
ul.replaceChild(li2, li);




let text = 'This is my string!';
console.log(text.length);
// 18

// extracts part of a string and returns the extracted part in a new string
console.log(text.slice(5,7));
// 'is'

// if the parameters are negative, the position will start from the end of the string. Notice how you can omit the second parameter and it will simply include the rest of the string. 
console.log(text.slice(-7));
// 'string!'

// similar to slice but can not accept negative indexes
console.log(text.substring(5,7))
// 'is'

// Another example of replace
console.log(text.replace('string', 'super cool string'));
// 'This is my super cool string!'

//uppercase and lower case
console.log(text.toUpperCase());
// 'THIS IS MY STRING!'
console.log(text.toLowerCase());
// 'this is my string!'

//remove white space from both sides of a string
let str = '     whoa     ';
console.log(str);
// '     whoa     '
console.log(str.trim());
// 'whoa'

setTimeout(() => {
    console.log('hi');
}, 3000);

console.log('hi from under the setTimeout');

let res = document.querySelector('#splash');
console.log(res);

let searchBtn = document.querySelector('#pokemonSearchBtn');
searchBtn.addEventListener('click', fetchResults);
let searchResults = document.querySelector('#searchResults');

async function fetchResults() {
    let query = document.querySelector('#pokemonSearch').value;

    let results = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    let parsedResults = await results.json();
    let searchResults = document.querySelector('#searchResults');
    searchResults.innerHTML = '';
    let img = document.createElement('img');
    console.log(parsedResults);
    img.src = parsedResults.sprites.front_default;
    searchResults.appendChild(img);
}