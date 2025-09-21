// Sincronizar el poema/dedicatoria con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array con el poema o dedicatoria
var poemaData = [
  { text: "Hoy son flores virtuales para ti,", time: 2 },
  { text: "pero muy pronto podré entregártelas en persona.", time: 6 },
  { text: "La distancia no apaga lo que siento,", time: 10 },
  { text: "al contrario, hace crecer más mi amor por ti.", time: 14 },
  { text: "Eres mi razón de sonreír,", time: 18 },
  { text: "mi fuerza en los días difíciles,", time: 22 },
  { text: "y el sueño más bonito que tengo.", time: 26 },
  { text: "Aunque estemos lejos,", time: 30 },
  { text: "cada palabra y cada detalle me acercan a ti.", time: 34 },
  { text: "Te prometo que pronto,", time: 38 },
  { text: "estas flores serán reales y entre mis manos llegarán a ti.", time: 42 },
  { text: "Hasta entonces,", time: 46 },
  { text: "quiero que recuerdes que te amo con todo mi corazón ❤", time: 50 },
  { text: "Te amo mucho, Yhanira Emperatriz Mego Sevilla,", time: 54 },
  { text: "mi niña hermosa, mi frambuesita, mi limeñita, mi amor...", time: 60}
];
// Animar el poema
function updatePoema() {
  var time = Math.floor(audio.currentTime);
  var currentLine = poemaData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.5; // tiempo para la animación de aparición
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updatePoema, 1000);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);