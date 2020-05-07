// example of defining things as obj property and then accessing it as a object function property
const obj = {
  message: ['hi', 'this', 'is', 'gaurish'],
  print: function() {
    console.log(this.message.join(','));
  }
}
obj.print();

/**
 * spread operator example 
 *    we can also use spread operator to collect function arguments as an array
 */
 // we can also use reverse() function to reverse the array elements
 const direction = (...args) => {
   const [first, ...remaining] = args;
   console.log(first);
   console.log(remaining);
 }
direction('north', 'south', 'east', 'west');

// how react do in declaritive fashion:
// const { render } = ReachDOM; 

// const welcome = () => (
//   <div id="welcome">
//     <h1>Hello World</h1>
//   </div>
// );

// render(<Welcome />, document.getElementById("target"));
