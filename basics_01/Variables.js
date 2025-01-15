// console.log("Vansh");

const account_id = 74286
var account_holder = "Vansh"         // cannot be use because due to the issue of block scope and functional scope
let account_bank = "Axis Bank"
account_branch = "NIT 1"         // can be posssible but not a good practice



let account_mobile ;        // if this gonna be print thisshows undefined

console.log(account_mobile);
console.log(account_id)


// account_id = 5675    // this throws error because const can not be change once decclared

account_branch = "faridabad"   // this can change 

account_holder ="Sahil"

account_bank = "HDFC"


console.table([account_id , account_holder , account_bank, account_branch])
