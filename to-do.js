let todo = [];
let req = prompt("enter your req");
console.log(req);

while (true) {
    if (req == "quit") {
        console.log("quitting app");
        break;
    }

    if (req == 'list') {
        console.log("_______________");
        for (myTask of todo) {
            console.log(myTask);

        }
        console.log("___________________________");

    }
    else if (req == 'add') {
        //console.log("add in my to-do list ");
        let task = prompt("plss enter what you want to do add in your to do list");
        todo.push(task);
        console.log("task added");

    }
    //req = prompt("enter your next req");

}