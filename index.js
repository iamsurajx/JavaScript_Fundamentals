/*Trust issues with setTimeout*/

console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
}, 5000);

console.log("End");

//Millions of Code 

let startDate = new Date().getDate();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While Expires")













// //2 ways to create a function
// //1. Using the Function Statement
// //2. Function Expression

// //Function Statement aka function Declaration
// function a(){
//     console.log("A called") 
// }
// a();


// //function expression
// var b = function () {
//     console.log("b called");
// }
// b();
//  //Understated the differet between ?
//  //  a. the major difference is the Hoisting
//  // if we use the Hoisting and call functions
//  // a() will run but b() will throw the error
//  // 
// //Function Decleration

