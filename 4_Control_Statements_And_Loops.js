//* 4.  *Control Statements and Loops *- 
//todo -- a. Write a program to print all even numbers between 1 and 20 using a for loop.
//todo -- b. Write a program that uses a while loop to find the sum of numbers from 1 to 10.



//? Answer (a) :- Even numbers from 1 to 20 
console.log("Even numbers from 1 to 20 are :- ");
for(let i = 1 ; i <= 20 ; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}
console.log();



//? Answer (b) :- Sum of numbers from 1 to 10 using while loop
let j = 1;
let sum = 0;
while(j <= 10) {
    sum += j;
    j++;
}
console.log(`Sum of numbers from 1 to 10 is = ${sum}`);