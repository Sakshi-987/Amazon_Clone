var ele = document.querySelectorAll(".ele");

// val represent all child of class ele , it stores in form of node , if we see it in on conssole window img is at index 3
//  accessing the childnode on index 3 means we're performing actions on image 
ele.forEach(function (val) {
    let img = val.querySelector("img")
    val.addEventListener("mouseenter", function () {
        img.style.opacity = 1;
    });

    val.addEventListener("mouseleave", function () {
        img.style.opacity = 0;
    })

    val.addEventListener("mousemove", function (dets) {
        let bounds = val.getBoundingClientRect();
        let x=dets.clientX - bounds.left;
        let y=dets.clientY-bounds.top;
        img.style.left=x+"px";
        img.style.top=y+"px";
    })
});
// explanation:

// getBoundingClientRect():
// Finds the position and size of the .ele element relative to the viewport (browser window).
// Example: If .ele starts 200px from the top of the screen, bounds.top will be 200.

// dets.clientX - bounds.left:
// dets.clientX is the mouse’s X position in the entire viewport.
// Subtracting bounds.left converts it to a coordinate inside the .ele element.
// Example: If the mouse is at 350px and .ele starts at 300px, inside .ele the X is 50px.

// dets.clientY - bounds.top:
// Same idea as above, but for the vertical position.