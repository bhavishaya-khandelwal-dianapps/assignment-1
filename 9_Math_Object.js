//* 9. *Math Object* - Write a program that generates a random number between 1 and 100.

const generateRandomNumber = () => {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    return randomNum;
}
console.log(generateRandomNumber());