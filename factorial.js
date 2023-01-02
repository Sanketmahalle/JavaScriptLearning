//factorial program BY  Group B8

function factProg(input) {
  var fact = 1;
  for (var index = 1; index <= input; index++) {
    fact = fact * index; // fact= 1*2
  }
  console.log(`Factorial of ${input}:=`, fact);
}

factProg(5);
factProg(7);
factProg(8);
factProg(12);
