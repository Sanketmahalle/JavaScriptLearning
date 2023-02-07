const ReduceDAta = [0, 2, 5, 6, 8, 10];
const result = ReduceDAta.reduce((runnngTotal,value)=>{
return runnngTotal+value;
});
console.log(result);

const array = [20,11,40,25,37,49,9,90,60,2,19];
 //sum of all even num
 //even number sum
 const res=array.filter((val)=>{
     val%2==0;
 })
 console.log(res);
