noseX=0;
noseY=0;

function preload() {
    mushtash = loadImage('https://i.postimg.cc/Gty9yLYb/mustash.png');
}

function setup() {
    canvas = createCanvas(700,700);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(700, 700);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function draw() {
    image(video, 0, 0, 700, 700);
    fill(255,0,0);
    stroke(255,0,0);
    image(mushtash, noseX-35, noseY-13, 80, 80);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}




