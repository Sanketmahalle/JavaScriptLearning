const map = new Map();


map.set("password","123");

map.set("NAme","sunny");
map.set("Surname","M");


// console.log(map.get("password"));
// console.log(map.keys());

// console.log(map.values());

// console.log(map.entries());
// console.log(map.has("sunny"));

console.log(map.delete("NAme"));
console.log(map);

// console.log(map.keys());
// console.log(map.get("NAme"));//get value using key
// console.log(map.values());
// console.log(map.entries);
// console.log(map);


// //How to Convert an Object into a Map in JavaScript

// const address = {
//     'Tapas': 'Bangalore',
//     'James': 'Huston',
//     'Selva': 'Srilanka'
//   };
  
//   const addressMap = new Map(Object.entries(address));
//   console.log(addressMap);