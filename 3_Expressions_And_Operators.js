//* 3. *Expressions and Operators* - Write a program that demonstrates the use of arithmetic operators (+, -, *, /, %) and == and ===.

const calculator = (operand1, operand2, opertr) => {
    switch(opertr) {
        case '+' :
            return operand1 + operand2;

        case '-' :
            return operand1 - operand2;
        
        case '*' :
            return operand1 * operand2;

        case '/' : 
            return operand1 / operand2;
        
        case '%' : 
            return operand1 % operand2;
        
        default : 
            return -1;
    }
}


console.log(calculator(2, 4, '+'));
console.log(calculator(4, 2, '-'));
console.log(calculator(4, 2, '*'));
console.log(calculator(4, 2, '/'));
console.log(calculator(4, 2, '%'));


let x = 123;
let str = "123";

let res = (x == str ? true : false);
console.log(res);                           //? true

let res1 = (x === str ? true : false);
console.log(res1);                         //? false (Because there data type is not same) 


