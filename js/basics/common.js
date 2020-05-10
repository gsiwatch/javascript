// date object
/**
 * read more about the date object in documentaion 
 * but by using this we can get the date 
 * getMonth() function will return the month, number starting from 0
 */
const date = new Date();

// if syntax:
/**
 * if (condition) {
 * } else {
 * }
 */

//  if (id) {
//     console.log('inside if block');
//  } else if (id === 4) {
//     console.log('inside else if block');
//  } else {
//     console.log('inside else block');
//  }


// short hand ways to do conditional
// Ternary operators
// const returnValue = a > b ? a : b;

// without braces for if
// if (id === 100)
    console.log('it worked');

// switches
const direction = 'north';
switch(direction) {
    case 'north': 
        console.log('north direction');
        break;
    case 'south':
        console.log('south direction');
        break;
    case 'east':
        console.log('east direction');
        break;
    case 'west': 
        console.log('west direction');
        break;
    default:
        console.log('unexpected direction value');
        break;
}

// passing default to a function

const  getDirection = (input = 'north') => {
    console.log('provided direction', input);
}

// Immediately invocatable functions (Iffs)
(function(){
    console.log('IIFE ran');
})()

// function method
/**
 * when we can put function inside an object its called a method
 */
const todo = {
    add: function(){
        console.log('Add todo ..');
    }
}
todo.add();

/**
 * loops
 *  foreach
 *  .map
 *  for in
 */

 for (let i=0; i < 10; i++) {
    if (i === 2) {
        console.log(i);
        // continue;
    }
    // break;
 }

 // while loop
//  while(<condition>){
//  }

// do while loop -- is going to run atleast once no matter what
// 
let i = 10;

do {
    console.log(i);
    i++;
} while(i<10);

// array 
// to iterate over array we can use 
//   1. for -> for (let i=0; i < array.length; i++)
//   2. forEach on array
//          it can take in 3 things: 1. first element, index, complete  array
//   3. .map: if a client want to return different array 
//              after looping over
// 

// forEach example:


// for in loop:
const user = {
    firstName: 'test',
    lastName: 'in',
    description: 'loop',
}
for (let x in user) {
    // here x will give the key
    console.log(`${x}: ${user[x]}`);
    if (x !== 'firstName') continue;
        console.log(user[x]); // print only test
        // break;  // will break out of the for loop
}
