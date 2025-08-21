var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor")
main.addEventListener("mousemove", function (dets) {
    /* dets give you all the details of mousemovement*/
    crsr.style.left = dets.x + "px"
    /* dets.x (gies the mouse movement of x -direc) will make your cursor move in x direction , 
    it'll only work when cursor have absolute position */
    crsr.style.top = dets.y + "px"
    // dets.y (gives the mouse movement of y direc) let your cursor move in y-dire
    // combining both make your cursor move in all direc
})