function setup(){
    canvas = createCanvas(640,480);
    canvas.position(350,50);
    video = createCapture(VIDEO);
    video.hide();
    }
    function draw(){
    image(video,70,40,500,400);
    
    fill(255,0,0);
    stroke(255,0,0);
    circle(20,20,100);
    
    circle(20,460,100);
    circle(620,20,100);
    circle(620,460,100)
    
    fill(0,255,0);
    stroke(0,255,0);
    rect(75,0,490,20);
    
    rect(75,460,490,20);
    }