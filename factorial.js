// //factorial program BY  Group B8

// function factProg(input) {
//   var fact = 1;
//   for (var index = 1; index <= input; index++) {
//     fact = fact * index; // fact= 1*2
    
//   }
//   console.log(`Factorial of ${input}:=`, fact);
 
// }

// factProg(5);
// factProg(7);
// factProg(8);
// factProg(12);

//JavaScript Program to Print the Fibonacci Sequence
//1   2 3 4 5 6 7 8 9
//0  1   1 2 3 5 8 13

var f=7;
  let n1=0;n2=1;
  
  
  
     for (let index = 0; index <=f ; index++) {
      console.log(n1);
      nextNum=n1+n2;

      n1=n2;
      n2=nextNum;
     
     }
    

