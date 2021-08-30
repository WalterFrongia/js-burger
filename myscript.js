// Il programma dovrà consentire di calcolare il prezzo del panino
// selezionando o deselezionando gli ingredienti proposti.

// Consigli del giorno:
// Create inizialmente un html base con gli elementi minimi necessari al funzionamento,
// passate poi alla parte JS ragionando come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.

document.getElementById("name-burger").innerHTML = "Boolean burger"

let prezzoPaninoBase = 10 
const prezzoIngredienti = 5 

const btn = document.getElementById("btn-js")

btn.addEventListener("click", function(){ //
    prezzoPaninoBase = 10
    let ingredienti = document.getElementsByClassName("my-ingredients")
    console.log(ingredienti);
    for( let i = 0; i<ingredienti.length; i++){
        let ingrediente = ingredienti[i];
        console.log(ingrediente);
        if(ingrediente.checked){
            prezzoPaninoBase += prezzoIngredienti 
        }
    }
    console.log(prezzoPaninoBase);
}); 