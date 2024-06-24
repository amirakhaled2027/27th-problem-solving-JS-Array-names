let students = [
    { name: "Lisa", age: 26, mark: 100},
    { name: "Jiso", age: 30, mark: 70},
    { name: "Jennie", age: 27, mark: 90},
    { name: "Rose", age: 28, mark: 60},
];


//Return only names of the students in capital 
let names = [];
for (let i = 0; i < students.length; i++) {
    names.push(students[i].name.toUpperCase());
}
console.log(names);


//Another solution
// let names = students.map((student) => student.name.toUpperCase());
// console.log(names);
















