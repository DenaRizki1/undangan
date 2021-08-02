var countDownDate = new Date("aug 5, 2021 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("waktuacara").innerHTML = days + "  Hari " + hours + " Jam "
  + minutes + "Menit " + seconds + "Detik ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("waktuacara").innerHTML = "EXPIRED";
  }
}, 1000);

var musik = new Audio();
        musik.src="p.mp3";
        musik.loop=true;
        musik.play();

        function mulaiAudio(){
            var play = document.getElementById("play");

            play.addEventListener('click', fplay);

            function fplay(){
                if(musik.paused){
                    musik.play();
                }else{
                    musik.pause();
                }
            }
        }
        window.addEventListener('load', mulaiAudio);



       
