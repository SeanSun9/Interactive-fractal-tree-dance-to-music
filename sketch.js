let angle1 = Math.PI/3;
let angle2 = Math.PI*0.75;
let angle3 = Math.PI*0.2;
let a = 0.618;
let b = 0.382;
let c = 0.6;
let sliderAngle1;
let sliderAngle2;
let sliderAngle3;
let sliderNum1;
let sliderNum2;
let sliderNum3;
let music;
let btn;
let amp;
let data;


function preload(){
    music = loadSound("silence.mp3");
}


function setup() {
    createCanvas(400, 400);
    sliderAngle1 = createSlider(0,TWO_PI,Math.PI/3,0.01);
    sliderAngle2 = createSlider(0,TWO_PI,Math.PI*0.75,0.01);
    sliderAngle3 = createSlider(0,TWO_PI,PI*0.2,0.01);

    sliderAngle3.position(20,420);
    sliderAngle2.position(160,420);
    sliderAngle1.position(300,420);

    sliderNum1 = createSlider(0,0.7,0.618,0.01);
    sliderNum2 = createSlider(0,0.4,0.382,0.01);
    sliderNum3 = createSlider(0,0.7,0.6,0.01);

    sliderNum3.position(20,480);
    sliderNum2.position(160,480);
    sliderNum1.position(300,480);

    btn = createButton("play");
    btn.mousePressed(toggle);
    btn.position(20,530);

    amp = new p5.Amplitude();

}

function draw() {
    background(234,159,137);
    angle1 = sliderAngle1.value();
    angle2 = sliderAngle2.value();
    angle3 = sliderAngle3.value();
    a = sliderNum1.value();
    b = sliderNum2.value();
    c = sliderNum3.value();
    translate(200,height);
    branch1(100);
    //branch(100);  
    
    data = amp.getLevel();
    console.log(data);

}
function branch1(len){
    stroke(255);
    line(0,0,0,-len);
    translate(0,-len);
    if(len>2){
    push();
    let angleData1 = map(data,0,0.3,0.2,PI/10);
    rotate(angleData1);
    branch1(len*a);
    pop();

    push();
    let angleData2 = map(data,0,0.3,0.2,PI/10);
    rotate(-angleData2);
    branch1(len*b);
    pop();

    push();
    let angleData3 = map(data,0,0.3,0.2,PI/10);
    rotate(-angleData3);
    branch1(len*c);
    pop();
    }
}

function toggle(){
    if(music.isPlaying()){
        music.stop();
        btn.html("play");
    }
    else{
        music.loop();
        btn.html("stop");
    }

}

