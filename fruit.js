status = "";
objects = "";

function preload(){
    img = loadImage("fruitbasket2.jpg");
}

function setup(){
    canvas = createCanvas(799, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detetcting Objects";
}

function draw(){
    image(img, 0, 0, 799, 500);
    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Detected Objects";

            percent = floor(objects[i].confidence * 100);
            fill("#FF0000");
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded(){
    console.log("Model Loaded !");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        objects = results;
    }
}