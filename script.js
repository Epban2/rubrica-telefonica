/**
 * RICCARDO LA ROCA 4C INF
 * Scrivi un programma per la gestione di una rubrica telefonica che comprenda le
 * funzioni di inserimento, cancellazione, modifica e visualizzazione dei contatti.
 * Ogni contatto deve essere formato da Nume, cognome e numero di telefono
 */

var rubrica = []; //array

function aggiungiPersona() {
    nuovoContatto = { //oggetto
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value,
        numero: document.getElementById("numero").value,
    };

    if (nuovoContatto.nome != "" && nuovoContatto.cognome != "" && nuovoContatto.numero != "")
        rubrica.push(nuovoContatto);
    else alert("Completare i campi!");
}

function printRubrica() { //stampa la rubrica
    let lista = "";
    for (let i = 0; i < rubrica.length; i++) {
        lista += rubrica[i].nome + " " + rubrica[i].cognome + ": +39 " + rubrica[i].numero + "<br>";
    }
    document.getElementById("stampa").innerHTML = lista;
}

function elimina() { //elimina un elemento dalla rubrica
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let numero = document.getElementById("numero").value;

    for (let i = 0; i < rubrica.length; i++) {
        if (rubrica[i].nome === nome && rubrica[i].cognome === cognome && rubrica[i].numero === numero) {
            rubrica.splice(i, 1); //per eliminare 
        }
    }
    printRubrica()
}

function mostraInput(){ //rende visibili i bottoni per la modifica
    var nuoviInput=document.getElementById("mostraInput").style.display="block";
    //nuoviInput.style.display="block";
}
function nascondiInput(){ //nascone i bottoni per la modifica
    var nuoviInput=document.getElementById("mostraInput").style.display="none";
    //nuoviInput.style.display="none";   
}


function modifica() {//modifica un elemento e nasconde i campi al termine
    let nomeVecchio = document.getElementById("nome").value;
    let cognomeVecchio = document.getElementById("cognome").value;
    let numeroVecchio = document.getElementById("numero").value;

    let nuovoNome = document.getElementById("nuovoNome").value;
    let nuovoCognome = document.getElementById("nuovoCognome").value;
    let nuovoNumero = document.getElementById("nuovoNumero").value;

    for (let i = 0; i < rubrica.length; i++) {
        if (rubrica[i].nome === nomeVecchio && rubrica[i].cognome === cognomeVecchio && rubrica[i].numero === numeroVecchio) {
            if (nuovoNome != "" && nuovoCognome != "" && nuovoNumero != ""){
                rubrica[i].nome = nuovoNome;
                rubrica[i].cognome = nuovoCognome;
                rubrica[i].numero = nuovoNumero;
            }else alert("Non valido");
    }
    printRubrica();
    nascondiInput();
}
}
