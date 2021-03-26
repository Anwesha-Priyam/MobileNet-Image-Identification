Webcam.set(
{
    width:200,
    height:215,
    image_format: 'png',
    png_quality:90,
    constraints: 
    {
        facingMode: "environment"
    }
}
);

camera=document.getElementById("Webcam");

Webcam.attach("#Webcam");

function Snapshot()
{
    Webcam.snap(function takePic(data_uri){
    document.getElementById("result").innerHTML='<img id="pic" src="'+data_uri+'"/>';
    }
   );
}
console.log("ml5 ver-", ml5.version);
classifier=ml5.imageClassifier("MobileNet", modelLoaded);
function modelLoaded()
{
    console.log("Model loaded");
}

function Identify()
{
    img=document.getElementById("pic");
    classifier.classify(img, gotResult);
}
function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results)
        document.getElementById("identifiedObjectName").innerHTML=results[0].label;
    }
}