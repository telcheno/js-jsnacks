console.log("JS SNACKS");

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
      
      //--ALTRIMENTI SE il primo numero è minore
    }else if(primoNum < secondoNum){
      //---Stampa il secondo numero come maggiore
      console.log("Il numero magiore è: " + secondoNum);
      
      //--ALTRIMENTI SE i numeri sono uguali
    }  else if(primoNum === secondoNum){
      //---Stampa numeri uguali
      console.log("I numeri sono uguali");
      
      //--ALTRIMENTI
    }else{
      console("Scelta non valida");
    }

    