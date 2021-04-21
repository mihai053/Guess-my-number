'use strict';

//console.log(document.querySelector('.message').textContent);

//document.querySelector('.message').textContent = 'Correct Number! 🎉';
//console.log(document.querySelector('.message').textContent);

//document.querySelector('.number').textContent = '13';
//document.querySelector('.score').textContent = 10;


//document.querySelector('.guess').value = 23;
//console.log(document.querySelector('.guess').value);

//check este clasa ce ne intereseaza

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

//document.querySelector('.number').textContent = secretNumber;


const displayMessage = function(message)  //functie pentru a nu repeta merei document.querySelector('.message').textContent
{
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

 // console.log(typeof guess);
   //Verificare daca input-ul este valid
   if(!guess) {
   // document.querySelector('.message').textContent = 'No Number 🚫';
   displayMessage('No Number 🚫');
   }
    //Conditie atunci cand jucatorul castiga
   else if(guess === secretNumber){ 
    //document.querySelector('.message').textContent = 'Correct Number! ';
    displayMessage('Correct Number!');  //functie pentru a afisa mesajul 
    document.querySelector('body').style.backgroundColor = '#60b347';  //modificare culoare background (nu se modifica fisierul CSS)
    document.querySelector('.number').style.width = '30rem'; //modificare widht 
    document.querySelector('.number').textContent = secretNumber;

    if (highScore < score) { highScore = score;  //actualizam hoghscore-ul
      document.querySelector('.highscore').textContent = highScore; //afisam pe pagina highscoreul actualizat
    }

   }
   //Conditie atunci cand numarul este mai mare sa mai incerce
   //when guess is wrong
   else if(guess !== secretNumber){
    if(score > 1){  //daca guess e diferit de numarul generat
     // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high! 📈' :'Too low!📉' ; // conditie ternara  pentru
      displayMessage(guess > secretNumber ? 'Too high! 📈' :'Too low!📉') ;
     //a vedea daca numarul este mai mic sau mai mare
     score--;
     document.querySelector('.score').textContent = score;
     }
     else {document.querySelector('.message').textContent = 'Game Over!';
     document.querySelector('.score').textContent = 0;
   }

}
})


document.querySelector('.again').addEventListener('click', function()
{
   score = 20;  //scorul resetat la 20
   secretNumber = Math.trunc(Math.random()*20)+1;  //secretNumber generat din nou
   document.querySelector('.number').textContent = secretNumber;  // 
   document.querySelector('.score').textContent = score;  //scorul resetat la 20
   document.querySelector('.message').textContent = 'Start guessing...';  //resetare mesaj de inceput
   document.querySelector('.number').textContent = '?';   //resetare casuta cu semn de intrebare
   document.querySelector('.guess').value = '';  //input-ul din casuta de guess este gol si il setam asa
   document.querySelector('body').style.backgroundColor = '#222';  //resetare culoare body
   document.querySelector('.number').style.width = '15rem'; // resetare width casuta intrebare

})

