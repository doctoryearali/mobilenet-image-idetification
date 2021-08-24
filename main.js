Webcam.set
({
   width:300,
   height:300,
   image_format:'png',
   png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function capture_image()
{
  Webcam.snap(function(data_uri){
      document.getElementById("Result").innerHTML='<img id="selfie" src="'+data_uri+'">';
  });
}

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wQ3k1VM2c/model.json',modelLoaded);

function modelLoaded()
{
 console.log("moddelLoaded");
}

function identify_object()
{
  capture_img=document.getElementById("selfie");
  classifier.classify(capture_img, gotResult)
} 

function gotResult(error,results)
{
  if(error)
  {
    console.error(error)
  }
  else 
  {
    console.log(results)
    document.getElementById("objects").innerHTML=results[0].label;
    document.getElementById("accuarcy").innerHTML=results[0].confidence.toFixed(2);
  }
}