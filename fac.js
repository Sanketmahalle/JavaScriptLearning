

function factProg(params) {
   var fact=1;
   for (var index = 1; index <= params; index++) {
    fact=fact*index;
    console.log(`${index} *${index}`,fact);   // 5*4*3*2*1
   }
  // console.log(fact);  
}
factProg(5);

// function factProg(n) {
//     if (n==0) {
//         return 1;
//     } else{
//         return factProg(n-1)*n;
//     }
//  }
//  console.log(factProg(4));

