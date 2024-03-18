console.log("JS SNACKS");

/*-------------------------
-------  JSnack 1  --------
-------------------------*/

//L’utente inserisce due numeri in successione, con due prompt.
//--Il software stampa il maggiore.

//Ricupero degli elementi dal dom
const primoNumElement = document.getElementById("primo-num");
const secondoNumElement = document.getElementById("secondo-num")
//console.log(primoNumElement, secondoNumElement);
const numMagElement = document.getElementById("numero-mag")
// console.log(numMagElement);
const buttonJsnack1Elemenet = document.getElementById("button");
// console.dir(buttonJsnack1Elemenet);


//Agungo l'ascolto del clik al pulsante per iniziare
buttonJsnack1Elemenet.addEventListener("click", function(){
  // console.log("Ciao");
  
  
  //Chiedere due numeri al utente
const primoNum = prompt("JSNACK 1 Scelie il primo numero"); //string | NaN
const secondoNum = prompt("JSNACK 2 Sceglie il secondo numero");//string | NaN
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
});
  
  /*-------------------------
  -------  JSnack 2  --------
  -------------------------*/

//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

//chiedo due parole con il prompt
const primaParola = prompt("Inserisce una parola");// string | NaN
const secondaParola = prompt("Inserisce un'altra parola");// string | NaN

//controlo la lungheza della prima parola
const primaLungheza = primaParola.length;
//controlo la lungheza della seconda parola
const secondaLungheza = secondaParola.length;
//console.log(primaParola.length, secondaParola.length);//string

//SE la prima parola è piu corta de la seconda parola
if (primaLungheza < secondaLungheza){

  //stampo la prima parola e dopo la seconda parola
  console.log(primaParola, secondaParola);

//ALTRIMENTI se la seconda parola è piu corta
}else if(primaLungheza > secondaLungheza){
  //stampo la seconda parola e dopo la prima parola
  console.log(secondaParola, primaParola);
  //ALTRIMENTI
}else{
  alert("Le parole sono lunghe uguale!");
}


