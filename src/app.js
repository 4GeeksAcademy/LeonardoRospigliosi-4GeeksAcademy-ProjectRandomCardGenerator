// import "bootstrap";
// import "./style.css";
// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

function generarCarta() {
  const valores = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
  const palos = ['♥', '♦', '♣', '♠'];
    
  // Seleccionar un valor y un palo aleatorio
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  

  // Mostrar el valor y el palo en el HTML
  document.getElementById("numero").textContent = valorAleatorio;
  document.getElementById("simbolo1").textContent=paloAleatorio;
  document.getElementById("simbolo1").style.color=getColor(paloAleatorio);
  document.getElementById("simbolo2").textContent=paloAleatorio;
  document.getElementById("simbolo2").style.color=getColor(paloAleatorio);
}

function getColor(simbolo) {
  if (simbolo == '♥' || simbolo == '♦') 
  {
    return 'red';
  }else{
    return 'black';
  }
}


window.onload = function() {
  generarCarta();
};
