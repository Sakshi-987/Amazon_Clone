var con = document.querySelector("#container")
var like = document.querySelector("i");

con.addEventListener("dblclick", function(){
    like.style.opacity=0.8;
    like.style.transform = 'translate(-50%,-50%) scale(1)'
    setTimeout(function(){
        like.style.opacity=0;
    },1000)
    setTimeout(function(){
        like.style.transform='translate(-50%,-50%) scale(0)'
    },3000)
})
