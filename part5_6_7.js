let student = {
    name: "sakshi",
    age: 20,
    marks: 94.4
}

//thread / twitter post 
const post = {
    userName: "@Sayomi_Sakshi",
    content: "This is my #firstPost.",
    likes: 500,
    reposts: 10,
    tags: ["@apnaCollege", "@delta", "@alphaplus"]
};
//to access data in objects 
console.log(post.tags[1]);
console.log(post["tags"]);

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"

}
console.log(obj[null]);
console.log(obj.null);

//add or update value
const newStudent = {
    name: "shradha",
    age: 20,
    marks: 94.4,
    city: "Delhi"
};
//change city to "mumbai" , add new property (gender, "female") & change marksh to "A"
newStudent.marks = "A";
newStudent.city = "Mumbai";
newStudent.gender = "female";
delete newStudent.age; //age will be removed from object


//object of objects
const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi",
    },
    shradha: {
        grade: "A",
        city: "Pune",
    },
    karan: {
        grade: "D",
        city: "Mumbai",
    }
}

//array of objects
const arrayOfObjects = [
    {
        name: "aman",
        grade: "A+",
        city: "Delhi",
    },
    {
        name: "Shradha",
        grade: "A",
        city: "Pune",
    },
    {
        name: "Karan",
        grade: "O",
        city: "Mumbai",
    }
]
//to access array of objects
console.log(arrayOfObjects[0].name); //aman
console.log(arrayOfObjects[1]); //gives u the whole data of oject at index 1
arrayOfObjects[1].gender = "female";//new property added in object 2


//generating random integers in a fixed range

let num = Math.floor(Math.random() * 10) + 1;
console.log(num);

//to generate random numbers between 20 to 25(excluding 25)
let num1 = Math.floor(Math.random() * 5) + 20;
console.log(num1);
//if to print from 21 to 25 replace 20 with 21


//part - 5
//functions

function hello() {
    console.log("hello");
}
hello(); //calling the function

//printing from 1 to  5
function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumbers();

function isAdult() {
    let age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
}
isAdult();


//print poem 
function printPoem() {
    console.log("Twinkle Twinkle little stars,");
    console.log("How i wonder what you are,");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}
printPoem();

//roll a dice
function rollDice() {
    let value = Math.floor(Math.random() * 6) + 1;
    console.log(value);
}
rollDice();

//sum
function sum(a, b) {
    console.log(a + b);
}
sum(456321, 123654);

//avg of 3
function avgof3(a, b, c) {
    console.log((a + b + c) / 3);

}
avgof3(4, 5, 8);

//print table
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
}
printTable(8);

//using return keyword
function calcSum(a, b) {
    return a + b;
}
console.log(calcSum(5, 8));
console.log(calcSum(calcSum(5, 8), 7));

function adulting(age) {
    if (age >= 18) {
        return 'adult';
    }
    else {
        return 'not adult';

    }
    console.log("bye bye");
    //last statement will never execute and vs is also showing warning to remove it 
    // as no statement will execute after return statement 
    // or program stops execution after return .

}
console.log(adulting(18));

//return sum of no. from 1 to n
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(1000));

//return the conacatenation of all strings of array
//1st method
function concatString(str1, str2, str3, str4) {
    return (str1 + str2 + str3 + str4);
}
console.log(concatString("hi", "hello", "bye", "!"));

//2nd method 
let str = ["hi", "hello", "bye", "!"];
function concatString2(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}
console.log(concatString2(str));

//what will be the output of the program?
let greet = "hello";
function changeGreet() {
    let greet = "namaste";
    console.log(greet);

    function innerGreet() {
        console.log(greet);
    }
}
console.log(greet);
changeGreet();

//function expression
let hello1 = function () {
    console.log("hello12345");
}
hello1();

//higher order function
function multipleGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func();
    }
}

let greet1 = function () {
    console.log("hello");
}
multipleGreet(greet1, 50);

multipleGreet(function () { console.log("namaste") }, 5);

//Higher Order Function
function oddOrEvenFactory(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
    else if (request == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);
        }
        return even;
    }
    else {
        console.log("wrong ans");
    }
}

console.log(oddOrEvenFactory("odd"));

//methods
const calculator = {
    number: 55,
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },

}
console.log(calculator.mul(5, 6));


// methods shorthand
const calci = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
};
console.log(calci.sub(8, 7));

//part7 begins

//using this keyword
const studentData = {
    name: "Sakshi",
    age: 20,
    eng: 95,
    math: 85,
    phy: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
console.log(studentData.getAvg());


console.log(this);//print the window object 
//when there is no object , there is window object by default which is at top at every object.



//miscellaneous topics

//1st ... arrow function 
const mySum = (a, b, c, d) => {
    console.log(a + b + c + d);
};
console.log(mySum(1, 2, 3, 4));
console.log(mySum);

//calculate cube by arrow funct
const cube = (a) => {
    return a * a * a;
}
console.log(cube(12));

//implicit return in arrow 
const squ = a => (
    a * a
);

//setTimeOut func
console.log("Hi there!");

setTimeout(() => {
    console.log("Apna College");
}, 1000);

console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");

let id = setInterval(() => {
    console.log("Apna College");
}, 2000);

let id2 = setInterval(() => {
    console.log("Hello World");
}, 3000);

console.log(clearInterval(id));
console.log(clearInterval(id2));

//this keyword
const myStudent = {
    name: "aman",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);//parent's scope -> window
        return this.marks;
    },
    //seeing benefits of this keyword
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);//student
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function(){
            console.log(this);//window object
        },2000);
    },
};
console.log(myStudent.getName());
console.log(myStudent.getMarks());
//benefits
console.log(myStudent.getInfo1());
console.log(myStudent.getInfo2());

//practice ques1
//  to print square of n 
const sq =n=>n*n;//done in more compact way 
console.log(sq(5));

//practice ques 2
//  write an arrow func that prints hello world 5 times at interval of 2s each
let myId = setInterval( ()=>{
    console.log("Hello World");
},2000);
setTimeout( ()=>{
    clearInterval(myId);
    console.log("clear interval ran");
},10000);




