difference=0;
rightWristX=0;
leftWristX=0;


function setup(){
    canvas=createCanvas(450,450);
    canvas.position(850,190);

    video=createCapture(VIDEO)
    video.size(550,550);
    video.position(50,165);
    poseNet = ml5.poseNet(video, ModelLoaded)
poseNet.on('pose',gotPoses)
}




function ModelLoaded(){
console.log("PoseNet is working")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
        console.log("leftWristX " +leftWristX+"rightWristX ="+rightWristX+"difference = "+difference);
        
    }
}
function draw(){

    background("#FF7F7F")
    textSize(difference);
    fill("#000000");
    text('Hi', 150, 250);

}