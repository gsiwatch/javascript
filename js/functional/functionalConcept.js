/** Functional Concept */

/**
 * 1. Immutability
 */

 /**
  * In functional programming data is immutable. It never changes.
  * 
  * Immutability works by making the copy of the data that user
  * want to change and then make the change but by keeping the original 
  * same
  */

  // for example: 
let color_lawn = {
    title: 'lawn',
    color: '#00FF00',
    rating: 0
};

// one way of changing the data -- which is mutable
// using the following way will change the original object
const changeRating = (color, rating) => {
    color.rating = rating;
    return color;
}
console.log(changeRating(color_lawn, 5).rating);
console.log(color_lawn.rating)// original object property changed

// another way of doing the same
// using this approach will not change the original data
const changeRatingSecondWay = (color, rating) => {
    return Object.assign({}, color, {rating: rating});
}

// another way of achieving the same
const changeRatingThirdWay = (color, rating) => ({...color, rating});

/**
 * Immutability on array
 */
let list = [
    {title: 'First'}, {title: 'second'}
];
const addTitle = (array, title) => {
    array.push({title});
    return array;
}
console.log(addTitle(list, 'third'));

// another way of doing the same buy being immutable
const addTitleSecondWay = (array, title) => array.concat({title});
const newTitleArray = addTitleSecondWay(list, 'different');
console.log('newTitleArray', newTitleArray);
console.log('list Array', list);

// third way to do the same
const addTitleThirdWay = (array, title) => [...array, { title }];

/**
 * Object Literals
 */
// short hand notation of returning an object literal in one line
const setBirthday = (name, age) => ({
    name: name,
    age: age,
});
console.log('one way: ', setBirthday('charlie', 26));

// instead of
const setBirthdaySecondWay = (name, age) => {
    return {
        name: name,
        age: age,
    };
};
console.log('second way: ', setBirthdaySecondWay('manu', 25));

/**
 * Array manipulation
 */
// using arrow function to manipulate Javascript array
const persons = [
    {name: 'John', age: 30},
    {name: 'Jim', age: 20},
    {name: 'Gill', age: 40},
];

/**
 * using .map() build in function to operate on all the element 
 * and then return the matching collection of an array
 */
// here names will be collection of all person name
 const names = persons.map((person) => person.name);
