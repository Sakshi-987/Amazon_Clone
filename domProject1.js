var follow = document.querySelector("#follow")
var msg = document.querySelector("#msg");
var flag = 0;

follow.addEventListener("click", function () {
    if (flag == 0) {
        follow.innerHTML = "Following"
        follow.style.fontSize = "small"
        follow.style.backgroundColor = "blue"
        msg.style.fontSize = "small"
        flag = 1;
    } else {
        follow.innerHTML = "Follow"
        follow.style.fontSize = "medium"
        follow.style.backgroundColor = "rgb(30, 111, 198)"
        msg.style.fontSize = "medium"
        flag = 0
    }

})