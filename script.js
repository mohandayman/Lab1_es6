//console.log(Number1) // Can't Access  Before Initialization 
//console.log(Number2) // Can't Access Before Initialization 
console.log(Number3)    // Undefiend   
//console.log(Number4)    // Number4 is not defined
// Define 3 vars 
let Number1 = 1
const Number2 = 2
var Number3 = 3 
Number4 = 4
// Change it's Values on Console
Number1=10;
//Number2=15; // Error Assignment to constant variable.
Number3=20;
Number4=30;

// Task 2
function GetData(UserID , UserName ){
    let args = [...arguments]
    return args;
}
//console.log(UserID , UserName)

console.log(GetData(11 , "mohand"))
console.log(GetData(11 , "mohand" , "hassan"))