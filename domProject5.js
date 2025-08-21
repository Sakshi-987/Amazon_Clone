var arr = [
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GuHHtnjXljCaKUPv6ZdNOCn0OEFYGFG5kA&s" ,story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxty9ssO16t2ML-HuSuSi2sw5q8c-Jitk04w&s" },
    { dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D" },
    { dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D", story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQgM9AIOs3w707kpMHUatfqazRG2Lus0_dw&s" },
    { dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww", story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mTGjgS7jcAm7welMO4H6B74Z8904OUq-7g&s" },
]

var stories = document.querySelector("#stories")
var clutter = ""
// if we left it undeclared , so default value stored is "undefined" in it
arr.forEach(function (ele, idx) {
    clutter += `<div id="story">
                <img id="${idx}" src="${ele.dp}" alt="">
            </div>`
})
// id="${idx}" it'll give you the index of story ..making it easy to read it from console window
stories.innerHTML = clutter
// 4 stories will show -> as array size is 4

stories.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function () {
        document.querySelector("#full-screen").style.display = "none"
    }, 3000)
    // settimeout , to give real look
});

// url(${arr[dets.target.id].story}) => dets.target.id gives the index of the image you're clicking , .story gives the image address stored at that index
