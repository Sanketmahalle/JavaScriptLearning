class Bank{

 constructor(bank_Name,location,account_no,ifsc,interest_rate){
this.bank_Name=bank_Name;
this.location=location;
this.account_no=account_no;
this.ifsc=ifsc;
this.interest_rate=interest_rate;

 }

}
console.log(`A> Data Member is Created as "bank_Name , location , account_no , ifsc , interest_rate"\n`);

console.log(`--------------------------------------------------------------------------------------------------------------------------------------`);



const axis_bank=new Bank("Axis Bank","Mumbai","ADFG47981316","AXIS00045","3.50%");
const sbi_bank=new Bank("SBI Bank","Pune","HSJI47985616","SBIS000045","7.25%");
const icici_bank=new Bank("ICICI Bank","Bangalore","NKUS47981316","ICICS00045","5.50%");
const kotak_bank=new Bank("KOTAK Bank","Hyderabad","YUIH47981316","HYDBS00045","4.10%");
const hdfc_bank=new Bank("HDFC Bank","Mumbai","ADHG47981316","HDF00045","3%");
const panjab_bank=new Bank("PANJAB Bank","Chandigarh","MNCV47981316","CNDG00045","3.50%");

const onjArray=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank];

console.log(`B> Object  is Created as "axis_bank , sbi_bank , icici_bank , kotak_bank , hdfc_bank , panjab_bank"\n`);
for (const iterator of onjArray) {
    console.log(iterator);
}

console.log(`--------------------------------------------------------------------------------------------------------------------------------------`);
console.log(`C> Add object element in array and Traverse array using for of loop `);

console.log(``);
for (const iterator of onjArray) {
    console.log(iterator.bank_Name,`:=`,`  `,iterator.location);
}

console.log(`--------------------------------------------------------------------------------------------------------------------------------------`);

console.log(`D> Find Kotak Bank  using for of loop `);
let result={};
for (let index = 0; index < onjArray.length; index++) {
   
    if (onjArray[index]==kotak_bank) {
       result={...onjArray[index]}
    }
    
}
console.log(result);

console.log(`E> Loged Details using for loop `);

for (let index = 0; index < onjArray.length; index++) {
    const element = onjArray[index];

console.log(element);    
}
