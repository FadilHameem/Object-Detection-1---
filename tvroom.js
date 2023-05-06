status = "";

function preload(){
    img = loadImage("Tvandac.jpg");
}

function setup(){
    canvas = createCanvas(799, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detetcting Objects";
}

function modelLoaded(){
    console.log("Model Loaded !");
    status = true;
    objectDetector.detetct(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
    }
}