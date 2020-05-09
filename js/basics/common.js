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
