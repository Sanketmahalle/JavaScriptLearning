function ss(params) {
  return 100;  
}
let val=ss()
// javascript closure example

// outer function
function greet() {

  // variable defined outside the inner function
  let name = 'John';

  // inner function
  function displayName() {

      // accessing name variable
      return 'Hi' + ' ' + name;
    
  }

  return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value