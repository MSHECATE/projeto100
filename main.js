var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var Textbox = document.getElementById("textbox");

var recognition = new SpeechRecognition();

function start()
{
  
    recognition.start();
} 

recognition.onresult = function(event) 
{
    Content = event.results[0][0].transcript;
    
    if (Content=="selfie") {
        speak(); 
    }
}


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak()
{
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em cinco segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    
}

camera=document.getElementById("camera");

Webcam.attach(camera);
    setTimeout(function()
    {
    takeSelfie();
    save();
    },5000);

function takeSelfie()
{
    Webcam.snap(function(data_uri) 
    {
     document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src ;
    link.href = image;
    link.click();
}