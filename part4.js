console.log('backward');
for (let i = 1000; i >= 2; i = i - 2) {
    console.log(i);
}

//print multiplication table of 5
// for (let n = 5; n <= 50; n = n + 5) {
//     console.log(n);
// }

//asking from user
// let n = prompt("write your number u want to print a table for");
// n = parseInt(n);
// for (let i = n; i <= n * 10; i = i + n) {
//     console.log(i);
// }

//nested for loop
for (let i = 1; i <= 3; i++) {
    console.log(i);
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

//favourite movie activity
//const favMovie = "Kyy";
// let guess = prompt("enter favourite movie");
// while ((guess != favMovie) && (guess != 'quit')) {
//     //console.log("wrong guess");
//     guess = prompt("wrong guess.Either enter 'quit' or try again.");
// }

// if (guess == favMovie) {
//     console.log("congrats!");
// }
// else {
//     // console.log("you quit the game");
//}

//break keyword
let j = 1;
while (j <= 5) {
    if (j === 3) {
        break;
    }
    console.log(j);
    j++;
}
console.log("we used break keyword");

// const favMovie="Kyy";
// let guess=prompt("enter favourite movie");
// while(guess!=favMovie){
//     if(guess=='quit'){
//         console.log('you quit');
//         break;
//     }
//     guess=prompt("wrong guess.Either enter 'quit' or try again.");
// }if(guess==favMovie){
//     console.log("congrats!");
//}

//loops with array
let fruits = ['mango', 'apple', 'banana', 'litchi', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(`fruit at ${i} index is ${fruits[i]}.`);
}
console.log(fruits.reverse());

//loops with nested array

let heroes=[
    ['batman','superman','flash'],
    ['ironman','hulk','thor']
]

for(let i=0; i<heroes.length ; i++){
    console.log(i , heroes[i] , heroes[i].length);
    for(let j=0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}

//nested array to acces students marks
let students=[
    ['sachin',90],['sakshi',97],['sonali',94]
];

 for(let i=0; i<students.length; i++){
    console.log(`info of students #${i+1}`);
    for(let j=0; j<students[i].length; j++){
        console.log(students[i][j]);
    }
 }


//for of loop
 let fruit=['mango','apple','banana','litchi'];
 for(myFruit of fruit){
    console.log(myFruit);
 }

 for(char of "apnacollege"){
    console.log(char);
 }


//nested for of loop
//using previous heroes array
for(list of heroes){
    console.log(list);
    for(name of list){
        console.log(name);
    }
}


let starBaker = ['pastry',"cakes","cupcakes","donuts","cookies"];
starBaker.splice(0,2,"new","added","previously","deleted");
console.log(starBaker.sort());

let start = ['jan','july','march','aug'];
start.splice(0,2,"july","june");
console.log(start);

