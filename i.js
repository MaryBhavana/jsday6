// // Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times. 

// //function definition from lines 6-8
// //we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed
// function multiply(parameter1, parameter2){
//     console.log("Inside multiply function");
//     //the function body can have more than one line of code.
// }

// //function calling on line 11
// multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
// //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.

// //Arrow function---

// const addition = (parameter1,parameter2) =>{
//      console.log("Iam addition function");
// }
// addition(arg1,arg2);

// //function expression
// const subtraction = function(parameter1,parameter2){
//     console.log("Iam in subtraction function");
// }
// subtraction(arg1,arg2);

function sayHi(){
    console.log("hi");
    let a=3;
    let b=3;
    let result = a+b;
    console.log(result)
}
sayHi();

function add(num1,num2){
    let result =num1+num2;
    console.log(result);
}
add(4,5);

function mul(num1,num2){
    let result = num1*num2;
    return result;
}
//  let returnedResult= mul(5,7);
//  console.log(returnedResult);
console.log(mul(2,4));//inside the console.log we can call a function
//if our function which is called returns sme value,then that required value will also

//The Lexical Environment and scope chain
function one(){
    two ();
    function two(){
        let i = 5;
        console.log(i);
        console.log(z);
    }
}
one();
console.log(i);

let f = 2;
const g = 2;
var h = 2;
console.log(f);//2
console.log(g);//2
console.log(h);//2
//let and const are block scoped but not var( globally scoped )
{
    let f = 3;
    const g = 3;
    var h = 3;
    console.log(f);//3
    console.log(g);//3
    console.log(h);//3
}

console.log(f);//2
console.log(g);//2
console.log(h);///3


// let m = 4;
// console.log(m);//4
// {
//     let m= 5
//     console.log(m);//5

// }
// console.log(m);//4

// const n = 4;
// console.log(n);//4
// {
//     const n= 5
//     console.log(n);//5

// }
// console.log(n);//4




