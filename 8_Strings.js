//* 8. *Strings* - Write a program to:
//todo --- a. Find the length of a string.
//todo --- b. Convert the string to uppercase.
//todo --- c. Extract a substring.



//? Answer (a) : Find the length of a string 
//* Method 1 :- 
const findLength = (str) => {
    let ct = 0;
    for(let value of str) {
        ct++;
    }
    return ct;
}
console.log(findLength("Bhavishaya"));

//* Method 2 :- Using .length 
console.log("Khandelwal".length);









//? Answer (b) :- Convert the string to uppercase 
//* Method 1 : Uisng toUpperCase() method 

let str2 = "bhavishaya Khandelwal";
str2 = str2.toUpperCase();
console.log(str2);


//* Method 2 : By creating a function for it 
const convertStrToUppercase = (str) => {
    let resStr = "";
    for(let i in str) {
        let asciiValue = str.charCodeAt(i);
        asciiValue = parseInt(asciiValue);
        if(asciiValue >= 97 && asciiValue <= 122) {
            let newChar = asciiValue - 32;
            newChar = String.fromCharCode(newChar);
            resStr += newChar;
        }
        else {
            resStr += str[i];
        }
    }
    return resStr;
}
console.log(convertStrToUppercase("bhavishaya 346sbdkjnsb587 &T$&Tn Khandelwal"));








//? Answer (c) : Extracting a substring  
//* We can extract substring using .substring() method 

let str3 = "Hello World!!";
console.log(str3);


//* Now if we want to access the substring from index number 3 to index number 7 then we can use substring method to do so, but we need to make sure that last index we provide as +1
let subStr = str3.substring(3, 8);
console.log(subStr);