// El principal objetivo de este desafío es fortalecer tus 
// habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

let listaDeAmigos = [];

function agregarAmigo() {
    let campoTexto = document.getElementById("amigo");
    let verificarTexto = campoTexto.value.trim();

    if (verificarTexto != "") {
        listaDeAmigos.push(verificarTexto);
        console.log(listaDeAmigos);
        alert("Elemento agregado correctamente");
        limpiarCaja();
        mostrarLista();
    } else {
        alert("Debe añadir un nombre");
    }
}

function limpiarCaja() {
    valorCaja = document.querySelector("#amigo");
    valorCaja.value = '';
}

function mostrarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    listaDeAmigos.forEach(verificarTexto => {
        let li = document.createElement("li");
        li.textContent = verificarTexto;
        listaHTML.appendChild(li);

    });
}

function sortearAmigo() {
    if (listaDeAmigos.length != 0) {
        let indice = Math.floor(Math.random() * listaDeAmigos.length);
    document.getElementById("resultado").textContent = "El amigo secreto es: " + listaDeAmigos[indice];
    } else{
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;

    }
    

}



