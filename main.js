music_1="";
music_2=""; 

leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0; 

function preload()
{
music_1= loadSound("Top Gun Maverick Theme Sound Effect.mp3");
music_2= loadSound("Inception Soundtrack-Dream is Collapsing (Hans Zimmer).mp3");
}
function setup()
{
    canvas = createCanvas(550, 500);
canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialised");
}

function draw()
{
    image(video, 0, 0, 550, 550);
}


function gotPoses(results)
{
if(results.length > 0)
{
    leftWristX= results[0].pose.leftWrist.x;
    leftWristY= results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWristY = " + leftWristY);


    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX = "+ rightWristX +"rightWristY = " + rightWristY);
}
}