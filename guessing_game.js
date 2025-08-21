//guessing game
const max = prompt("enter the max number");
const random = Math.floor(Math.random() * 10) + 1;
let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit.");
        break;
    }

    if(guess == random){
        console.log("you're right! Congrats!! random number was",random);
        break;
    }
    else if(guess < random){
        guess = prompt("your guess was too small. please try again.");

    }
    else{
        guess = prompt("yur guess was too large.please try again.");
    }
}
