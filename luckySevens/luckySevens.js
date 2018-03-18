//Script for lucky sevens

function rollDie() {
return Math.ceil(Math.random() * 6)}

function playGame() {
    startingBet = Number(document.getElementById("startingBet").value);
    if (startingBet <= 0) {alert("Please enter a value higher than 0."); return} 
    //The game costs and rewards only whole dollar amounts, so it doesn't make sense to include decimals (change)
    if (Math.ceil(startingBet) != startingBet) {alert("Please enter a whole number."); return}
    var rollCounter = 0;
    var highestWon = startingBet; //If they lose out, what they started with will be the "most" they won
    var rollAtWin = 0;
    var diceSum = 0;
    var gameMoney = startingBet;
    
    while (gameMoney > 0) {
        rollCounter++;
        diceSum = rollDie() + rollDie()
        if (diceSum == 7) {
            gameMoney = gameMoney + 4;
            if (gameMoney > highestWon) {highestWon = gameMoney; rollAtWin = rollCounter}; //Only necessary to check this after a win
            }//end of if statement
        else {gameMoney = gameMoney - 1;}
        console.log(diceSum)

        
    } //end of while loop
    
    document.getElementById("startingResult").innerText = startingBet;
    document.getElementById("rollCountResult").innerText = rollCounter;
    document.getElementById("highestResult").innerText = highestWon;
    document.getElementById("rollAtHighestResult").innerText = rollAtWin;
    document.getElementById("playButton").innerText = "Play Again!";
    document.getElementById("resultsTable").style.display = "block"
 
}//end of function

