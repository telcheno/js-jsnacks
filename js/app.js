console.log("JS SNACKS");
//Ricupero degli elementi dal dom
const primoNumElement = document.getElementById("primo-num");
const secondoNumElement = document.getElementById("secondo-num")
//console.log(primoNumElement, secondoNumElement);
const numMagElement = document.getElementById("numero-mag")
// console.log(numMagElement);




//JSnack 1
//L’utente inserisce due numeri in successione, con due prompt.
//--Il software stampa il maggiore.

//Chiedere due numeri al utente
const primoNum = prompt("Scelie il primo numero"); 
const secondoNum = prompt("Sceglie il secondo numero");
console.log( "Primo numero " + primoNum, "Secondo numero " +secondoNum);

//Controlo tra i due numeri quale è il maggiore
//--SE il primo numero è maggiore
    if(primoNum > secondoNum){
  //---Stampa il primo numero come maggiore
    console.log("Il numero magiore è: " + primoNum);
    numMagElement.innerHTML = primoNum; 

    //--ALTRIMENTI SE il primo numero è minore
  }else if(primoNum < secondoNum){
    //---Stampa il secondo numero come maggiore
    console.log("Il numero magiore è: " + secondoNum);
    numMagElement.innerHTML = secondoNum; 
    
    //--ALTRIMENTI SE i numeri sono uguali
  }  else if(primoNum === secondoNum){
    //---Stampa numeri uguali
    console.log("I numeri sono uguali");
    alert("I numeri sono uguali");
    
    //--ALTRIMENTI
  }else{
    console("Scelta non valida");
  }
  
  primoNumElement.innerHTML = primoNum;
  secondoNumElement.innerHTML = secondoNum;

  