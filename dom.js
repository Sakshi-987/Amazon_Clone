var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

// obviously we do on & off bulb using button....so adding event listener to btn
// logic for only opening the bulb 

// btn.addEventListener("click",function(){
//     bulb.style.backgroundColor = "yellow";
// })

// we want to on and off the bulb using same btn .. so logic for that

var flag = 0 //means initially bulb is off 
btn.addEventListener("click", function () {
    if (flag == 0) {
        // bulb is on now, flag = 1 will be assigned so that on clicking again on the button we can off it like daily purpose btns
        bulb.style.backgroundColor = "yellow";
        console.log("bulb is on.");
        btn.innerHTML = "Off"
        flag = 1
    }else{
        bulb.style.backgroundColor = "transparent";
        console.log("bulb is off")
        btn.innerHTML = "On"
        flag = 0
    }
})

var h = document.querySelectorAll("h1");
