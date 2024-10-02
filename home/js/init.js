function enableSound(){
    var audio = document.getElementById("music");
    audio.play()
    console.log("meow")

    var credit = document.getElementById("music-credit");
    credit.style.display = 'block';
}