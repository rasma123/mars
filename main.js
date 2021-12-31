canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
background_img="mars.jpg";
rover_img="rover.png";
rover_x=10;
rover_y=10;
nasa_img_array=["nasa_image_1.jpg","nasa_image_2.jpeg","nasa_image_3.jpg","nasa_image_4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
background_image=nasa_img_array[random_number];
console.log("background_image"+background_image);
function add()
{
    background=new Image();
    background.onload=uploadbackground;
    background.src=background_image;

    rover=new Image();
    rover.onload=uploadrover;
    rover.src=rover_img;
}
function uploadbackground()
{
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}
function uploadrover()
    {
        ctx.drawImage(rover,rover_x,rover_y,rover_width,rover_height);
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e)
    {
keyPressed=e.keyCode;
console.log(keyPressed);
if (keyPressed== '38'){
    up();
    console.log("up");
}
if (keyPressed== '39'){
    right();
    console.log("right");
}
if (keyPressed== '37'){
    left();
    console.log("left");
}
if (keyPressed== '40'){
    down();
    console.log("down");
}
    }
    function up()
    {
        if (rover_y>=0){
            rover_y=rover_y-10;
            console.log("when up is pressed , x="+rover_x+"y="+rover_y);
            uploadbackground();
            uploadrover();
        }

    }
    function down()
    {
        if (rover_y<=500){
            rover_y=rover_y+10;
            console.log("when down is pressed , x="+rover_x+"y="+rover_y);
            uploadbackground();
            uploadrover();
        }

    }
    function left()
    {
        if (rover_x>=0){
            rover_x=rover_x-10;
            console.log("when left is pressed , x="+rover_x+"y="+rover_y);
            uploadbackground();
            uploadrover();
        }

    }
    function right()
    {
        if (rover_x<=700){
            rover_x=rover_x+10;
            console.log("when right is pressed , x="+rover_x+"y="+rover_y);
            uploadbackground();
            uploadrover();
        }

    }
