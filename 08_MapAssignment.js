class Bank{

    constructor(bank_Name,location,account_no,ifsc,interest_rate){
   this.bank_Name=bank_Name;
   this.location=location;
   this.account_no=account_no;
   this.ifsc=ifsc;
   this.interest_rate=interest_rate;
   
    }
   
   }
   

const axis_bank=new Bank("Axis Bank","Mumbai","ADFG47981316","AXIS00045","3.50%");
const sbi_bank=new Bank("SBI Bank","Pune","HSJI47985616","SBIS000045","7.25%");
const icici_bank=new Bank("ICICI Bank","Bangalore","NKUS47981316","ICICS00045","5.50%");
const kotak_bank=new Bank("KOTAK Bank","Hyderabad","YUIH47981316","HYDBS00045","4.10%");
const hdfc_bank=new Bank("HDFC Bank","Mumbai","ADHG47981316","HDF00045","3%");
const panjab_bank=new Bank("PANJAB Bank","Chandigarh","MNCV47981316","CNDG00045","3.50%");

             let mapOfBank = new Map();

             mapOfBank.set("ADFG47981316",axis_bank);
             mapOfBank.set("HSJI47985616",sbi_bank);
             mapOfBank.set("NKUS47981316",icici_bank);
             mapOfBank.set("YUIH47981316",kotak_bank);
             mapOfBank.set("ADFG47981316",hdfc_bank);
             mapOfBank.set('MNCV47981316',panjab_bank);
             

             console.log(`# Data Member is Created as "bank_Name , location , account_no , ifsc , interest_rate"\n`);
             const onjArray=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank];

console.log(` #Object  is Created as "axis_bank , sbi_bank , icici_bank , kotak_bank , hdfc_bank , panjab_bank"\n`);
for (const iterator of onjArray) {
    console.log(iterator);
}
console.log("");
console.log(` #Traverse the map and Log BankName,AccountNumber and .\n`);

             let keysOFmapOfBank=mapOfBank.keys();

             console.log("BankName  AccountNumber  interestRate");

             for (const key of keysOFmapOfBank) {
                let bankData=mapOfBank.get(key);
               // console.table(bankData);
                console.log(bankData.bank_Name,` `,bankData.account_no,` `,bankData.interest_rate,`\n`);
                
             }
             
