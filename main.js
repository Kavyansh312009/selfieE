var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function begin(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie"){
        speak();
    }
}
function speak(){
    var speak1=window.speechSynthesis;
    var sentence="taking your selfie in 5 seconds";
    var say=new SpeechSynthesisUtterance(sentence);
    speak1.speak(say);
    Webcam.attach(camera)  
}

Webcam.set({
    width:360,
    height:250,
    image_format:'jpg',
    jpg_quality:90
});
var camera=document.getElementById("camera");