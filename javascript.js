var countDownDate = new Date("aug 5, 2021 08:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var hari = Math.floor(distance / (1000 * 60 * 60 * 24));
  var jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var detik = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = hari + " <br> Hari ";
  document.getElementById("jam").innerHTML = jam + " <br> Jam ";
  document.getElementById("menit").innerHTML = menit + " <br> Menit ";
  document.getElementById("detik").innerHTML = detik + " <br> Detik ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hari").innerHTML = "0 <br> Hari";
    document.getElementById("jam").innerHTML = "0 <br> jam";
    document.getElementById("menit").innerHTML = "0 <br> Menit";
    document.getElementById("detik").innerHTML = "0 <br> Detik";
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

        function maps() {
          document.location="https://goo.gl/maps/3uX9V9bSqqRavfsu9";
      }
      



       
