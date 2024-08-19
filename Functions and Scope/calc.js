// Create a function that performs basic 
// arithmetic operations.
// Problem Statement:
// Write a function named calculate that takes three 
// parameters: two numbers and an operator (+, -, *, or /).
// Based on the operator, the function should perform 
// the corresponding arithmetic operation and return the
// result.

function calculate(num1,num2,op){
    num1=parseFloat(num1)
    num2=parseFloat(num2)

    if (op=="add"){
        return num1+num2
    }
    else if(op=="sub"){
        return num1-num2
    }
    else if (op=="pro"){
        return num1*num2
    }
    else if(op=="div"){
        return num1/num2
    }
    else{
        console.log("Invalid Input,Please Try Again")
    }
}

n1=prompt("Enter the first number:")
n2=prompt("Enter an second number:")
op=prompt("Enter operator(add,sub,pro,div):")
// result=
console.log(calculate(n1,n2,op))