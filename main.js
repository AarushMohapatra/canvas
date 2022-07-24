/*get the canvas element using its id and store it in a variable “canvas” so that we can 
manipulate the canvas throughout the js code.*/
var canvas = document.getElementById("myCanvas")

//Get reference of canvas created.


color = "blue";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
color = "black";
ctx.beginPath();
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
color = "red";
ctx.beginPath();
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
color = "orange";
ctx.beginPath();
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
color = "green";
ctx.beginPath();
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
// Attach canvas and addEventListener with 'mousedown' event.

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    //additional activity ends
    //Get the x and y coordinates when the mouse is clicked.
    mouse_y = e.clientY - canvas.offsetTop;
    mouse_x = e.clientX - canvas.offsetLeft;
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    //Call the "circle()" function with mouse_x and mouse_y as parameters.  
    circle(mouse_x, mouse_y)

}


function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    //Assign 'color' to the 'strokeStyle' of the circle.
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    // Use "arc()" function to create a circle.
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);

    ctx.stroke();
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}