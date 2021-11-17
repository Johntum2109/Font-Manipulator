// Nose
noseX = 0;
noseY = 0;

// Wrist
difference = 0;
leftWristX = 0;
RightWristX = 0;

function preload() { }

function setup() 
{
    // Canvas
    canvas = createCanvas(550, 600)
    canvas.center();

    video = createCapture(VIDEO);
    video.size(550, 600);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(result) 
{ 
    if (result.length > 0) 
    { 
        // Nose
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;

        // Wrist
        leftWristX = result[0].pose.leftWrist.x;
        RightWristX = result[0].pose.rightWrist.x;

        difference = leftWristX - RightWristX; // Difference

        console.log(result);
    }
}

function modelLoaded() 
{ 
    console.log("Model Loaded...")
}

function draw() 
{ 
    background("#000000");
    textSize(difference);
    fill(255, 0, 0);
    text("John", noseX, noseY);
}