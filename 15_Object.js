//* 15. *Objects* - Create an object to represent a student with properties like name, age, and subjects. Add a method to display the student's details.


const student = {
    name : "Bhavishaya Khandelwal", 
    age : 22, 
    subjects : ["Math", "English", "Science", "Hindi", "Social Science"], 
};


// console.log(Object.keys(student));
// console.log(Object.values(student));
console.log(Object.entries(student));


console.log(student.name);
console.log(student.age);
console.log(student.subjects);


for(let value of student.subjects) {
    console.log(value);
}