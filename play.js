let  name = "Joseph"; //declaring and assignment of variable
let age = 22;
const fullName = "John Joseph L. Encarnacion";
let hasHobby = true;
let hobbies=["Reading", "Coding", "Gaming"] // this is an array


// accessing array elements
// console.log(hobbies[0])
// console.log(hobbies[1])

// looping through array
// method1
for(let hobby of hobbies){
    console.log(hobby);
}
// method2
hobbies.map((hobby) => {
    console.log(hobby);
});
// method3
hobbies.forEach((hobby) => {
    console.log(hobby);
});

// function to summarize the name, age and hobbies
function summarizedUser (userName, userAge, userhasHobby){
    return(
        "Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userhasHobby
    );
}
console.log(summarizedUser(name , age , hasHobby));

function add(x,y){
    // let sum = x + y;
    return x+y;
}
// function to add 
// console.log(add(1,1)); =2

if (hasHobby == true){
    console.log(hobbies);
}
else {
    console.log(name, "has no hobby");
}
if (age > 18){
    console.log("You are an adult");
}
else if (age > 60){
    console.log("You are a senior");
}
else {
    console.log("You are minor");
}
function studentPass(score){
    if (score > 74){
        return "You Passed";
    }
    else{
        return "You Fail";
    }
}
console.log(studentPass(75));
// this is an object
const person = {
    name: "Joseph", //key: pair = value
    age: 25,
    greet: function (){
        console.log("Hello, I am " + person.name);
    },
}

//accessing object properties
console.log(person.greet());
