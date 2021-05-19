var jugadas = prompt("¿Cuantas veces quieres jugar?: ")
var pipati
var compu

jugadas = parseInt(jugadas)

for (var i = 0; i < jugadas; i++) {


pipati = prompt("Escribe tu opcion, Piedra, Papel o Tijera: ");


var aleatorio = function() {
    var numero =  Math.floor((Math.random()*3)); 
    var resPc;
    if (numero == 0) {
        resPc = "piedra";
    } else if (numero == 1) {
        resPc = "papel";
    } else {
        resPc = "tijera";
    }
    return resPc;
};

compu = aleatorio();

if (pipati == "piedra" && compu == "tijera"){
    alert("Dijiste: "+ pipati + " Computador dijo: " + compu + "\n Felicidades!! Has Ganado!");
}
else if (pipati == "piedra" && compu == "papel"){
    alert("Dijiste: "+ pipati + " Computador dijo: " + compu + "\n Buuu!! Te gano una maquina!");
}
else if (pipati == "papel" && compu == "tijera") {
    alert("Dijiste: "+ pipati + " Computador dijo: " + compu + "\n Buuu!! Te gano una maquina!");
}
else if (pipati == "papel" && compu == "piedra") {
    alert("Dijiste: "+ pipati + " Computador dijo: " + compu + "\n Felicidades!! Has Ganado!");
}
else if (pipati == "tijera" && compu == "piedra") {
    alert("Dijiste: "+ pipati + " Computador dijo: " + compu + "\n Buuu!! Te gano una maquina!");
}
else if (pipati == "tijera" && compu == "papel") {
    alert("Dijiste: "+ pipati + " Computador dijo: " + compu + "\n Felicidades!! Has Ganado!");
}
else {
    alert("Han Empatado!");
}
};










