noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}

function gotPoses(results) {
  if (results.legth>0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log(noseX +" ; " + noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = (leftWristX - rightWristX)
    console.log(leftWristX + " ; " + rightWristX)
  }
}

function draw() {
  background("#969a97")
  document.getElementById("square_side"),innerHTML = "Largura e altura do quadrado são = "+ difference
  fill("#f900093")
  stroke("#f900093")
  square(noseX, noseY, difference)
}