img = "";

function preload()
{
     img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    text("Cat", 350, 100);
    rect(290, 70, 400, 300);
    text("Bowl", 300, 330);
    rect(270, 320, 150, 100);
}