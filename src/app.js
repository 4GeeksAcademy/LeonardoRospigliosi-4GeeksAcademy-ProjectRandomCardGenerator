// import "bootstrap";
// import "./style.css";
// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

function generarCarta() {
  const valores = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
  const palos = ['♥', '♦', '♣', '♠'];
  const color = ['red', 'black'];
  
  // Seleccionar un valor y un palo aleatorio
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  const colorAleatorio = color[Math.floor(Math.random() * color.length)];

  // Mostrar el valor y el palo en el HTML
  document.getElementById("numero").textContent = valorAleatorio;
  document.getElementById("simbolo1").textContent=paloAleatorio;
  document.getElementById("simbolo1").style.color=colorAleatorio;
  document.getElementById("simbolo2").textContent=paloAleatorio;
  document.getElementById("simbolo2").style.color=colorAleatorio;
}


window.onload = function() {

  // // Evento para generar una carta cuando el usuario haga clic en el botón
  // document.getElementById('generate-card').addEventListener('click', generarCarta);

  // // Generar una carta al cargar la página
  generarCarta();
  
  //console.log("Hello Rigo from the console!");
};
