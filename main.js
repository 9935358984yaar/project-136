img = "";
status = "";
object = "";

function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
   video= createCapture(VIDEO);
   video.size(380,380);
   video.hide();

}

function start(){
    document.getElementById("status").innerHTML="Getting on it right away...";
    cocossd= ml5.objectDetector('cocossd',modelLoaded );
    obj= document.getElementById("inputObject").value;
    console.log(obj);
}

function preload() {
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    cocossd.detect(video, gotResult);
}

function gotResult(error,result){
    if(error){
        console.log(error);
    }
}