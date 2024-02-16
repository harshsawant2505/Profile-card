
$("button").click(function(){
    
   playAudio();

})

function playAudio(){
    var audio = new Audio('/public/music/pop.wav');
    audio.play();                               
    
}



