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
