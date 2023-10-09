//elements selection

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const rollDiceBtn =document.querySelector(".btn--roll");
const holdBtn =document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");
const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");


//initial conditionshjg
let scores, activePlayer,currentScore,playing;
function init (){
 scores = [0,0] ;
 activePlayer = 0;
 currentScore = 0;
score0El.textContent = 0; 
score1El.textContent = 0;
currentScore0El.textContent= 0;
currentScore1El.textContent =0;
diceEl.classList.add('hidden');
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
 playing = true;};
init ();

function switchPlayer (){
  document.getElementById(`current--${activePlayer}`).textContent= 0;
  currentScore =0;
activePlayer = activePlayer === 0 ? 1: 0;
//change the background color to show who is the active player
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
};
//when we click the roll dice button
rollDiceBtn.addEventListener("click", function(){
  if(playing){
  dice = Math.trunc(Math.random()*6) +1;

  diceEl.src= `dice-${dice}.png`;
  if(dice === 1){
    //Switch the active player
    
   switchPlayer();

  }
  else {
    //Add the dice to the current scores
    currentScore+=dice;
document.getElementById(`current--${activePlayer}`).textContent= currentScore;
  }}
})
//when we click the hold button
holdBtn.addEventListener("click", function (){
  // playing variable is there to show that none has won the game and we are still playing
  if(playing){
scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer] ;
if(scores[activePlayer] >= 20){
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

//document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
playing = false;
}
else{
switchPlayer()};}

})

newGameBtn.addEventListener('click', init);


 