canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["racing.jpg"];
random_number = Math.floor(Math.random());

rover_width = 100;
rover_height = 90;

backround_image = nasa_mars_images_array[random_number];
console.log("backround_image=" + backround_image);

rover_image = "car1 (1).png";

rover_x = 10;
rover_y = 10;

function add() {
    bt = new Image();
    bt.onload = uploadBackground;
    bt.src = backround_image;

    rt = new Image();
    rt.onload = uploadrover;
    rt.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(bt, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rt, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
     if(keyPressed == '38')
     {
         up();
         console.log("up");
     }
     if(keyPressed == '40')
     {
         down();
         console.log("down");
     }
     if(keyPressed == '37')
     {
         left();
         console.log("left");
     }
     if(keyPressed == '39')
     {
         right();
         console.log("right");
     }
}
function up() {
    if (rover_y >= 0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
} 
function down() {
    if (rover_y <= 500)
    {
        rover_y = rover_y + 30;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right() {
    if (rover_x <= 700)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left() {
    if (rover_x >= 0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
