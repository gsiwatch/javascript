// object literal ``
/**
 * two ways to access javascript object values
 *    person.name
 *    person['name']
 *  for example:
 */

 const person = {
   name: 'gaurish',
   familyName: 'siwatch',
 }
 console.log('firstWay:', person.name);
 console.log('secondWay:', person['name']);


 // looping over the object
 const personArray = [
   {name: 'firstElement'},
   {name: 'secondElement'}
 ];

// one way to loop over
 for(let i=0; i < personArray.length; i++) { // time complexity will be O(n) as operation will increase with input length
   console.log(personArray[i].name);
 }

/**
 * Pure function: 
 *    Pure function is a function that returns a value that is
 *    computed based on its arguments.
 *    Rule: 
 *    1. pure function always take at least one argument
 *          and always return a value or another function
 *    2. they do not cause side effects, set global variables
 *          or change anything about application state
 *    3. they treat their arguments as immutable data 
 *  
 */ 

const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
}
const selfEducate = person => ({
  ...person,
  canRead: true,
  canWrite: true,
});

console.log('using function: ', selfEducate(frederick));
console.log('original object', frederick);


/**
 * Data Transformations:
 */
// Array.filter: filter will return an array of similar or smaller size than original
// Array.map : whatever it will return will be added to a new array
//              this will always return the array of original size

// reduce and reduceRight functions can be used to transform
//    an array into any value, including a number, string, boolean
//    or even a function

// reduce takes two arguments
//    1. callback function
//    2. original value

const ages = [21, 18, 42, 40, 64, 63, 34, 101, 110];

// find the maximum number
// so here we can use reduce as we are transforming 
//    array to number
const callBack = (max, age) => {
  if (age > max) return age;
  return max;
}
const maxNumber = ages.reduce(callBack, 0);
// the above implementation has O(n) complexity

console.log('finding maxNumber', maxNumber);

// shortHand notation of the same 
const maxAge = ages.reduce((max, value) => (value > max ? value : max), 0);
console.log('maxAge: ', maxAge);

/**
 * High Order functions:
 *    They are functions that can manipulate other functions
 *    They can take functions in as arguments, or return funcions or both
 */


// recursion:
// recursion is a function that recall themselves

const countdown = (value, fn) => {
  fn(value); // here it will print the value from line 103
  return value > 0 ? countdown(value - 1, fn) : value;
};
countdown(10, value => console.log(value));
