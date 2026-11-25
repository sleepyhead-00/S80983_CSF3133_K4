// Store game scores and results
let wins = 0;
let losses = 0;
let draws = 0;
let results = [];
let gameStarted = false;

// Start Game Function
function startGame() {

let name = document.getElementById("playerName").value;

if (name == "") {
    alert("Please enter your name.");
    return;
}

gameStarted = true;

document.getElementById("welcome").innerHTML =
    "Welcome, " + name + "!";

document.getElementById("startTime").innerHTML =
    "Start Time: " + new Date();
}

// Generate Computer Choice
function getComputerChoice() {

let choices = ["rock", "paper", "scissors"];

let random = Math.floor(Math.random() * 3);

return choices[random];
}

// Play Round Function
function playRound(playerChoice) {

if (gameStarted == false) {
    alert("Click Start Game first.");
    return;
}

let computerChoice = getComputerChoice();
let result = "";

// Determine the winner
if (playerChoice == computerChoice) {

    result = "Draw";
    draws++;

} else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "rock")
) {

    result = "Win";
    wins++;

} else {

    result = "Lose";
    losses++;

}

// Change the images
document.getElementById("playerImage").src =
    playerChoice + ".jpg";

document.getElementById("computerImage").src =
    computerChoice + ".jpg";


// Display result and change colour
let resultElement = document.getElementById("result");

resultElement.innerHTML = result;

if (result == "Win") {
    resultElement.style.color = "green";

} else if (result == "Lose") {
    resultElement.style.color = "red";

} else {
    resultElement.style.color = "grey";
}


// Update scoreboard
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("draws").innerHTML = draws;


// Store result in array
results.push(result);


// Add new row to history table
let table = document.getElementById("history");

table.innerHTML +=
    "<tr>" +
    "<td>" + results.length + "</td>" +
    "<td>" + playerChoice + "</td>" +
    "<td>" + computerChoice + "</td>" +
    "<td>" + result + "</td>" +
    "</tr>";
}

// Show Summary Function
function showSummary() {

let totalWins = 0;

// Count total wins using for loop
for (let i = 0; i < results.length; i++) {

    if (results[i] == "Win") {
        totalWins++;
    }
}

let totalRounds = results.length;

let percentage = 0;

if (totalRounds > 0) {
    percentage = Math.round(
        (totalWins / totalRounds) * 100
    );
}

document.getElementById("summary").innerHTML =
    "You played " + totalRounds +
    " rounds and won " + percentage + "%";
}

// Reset Game Function
function resetGame() {

wins = 0;
losses = 0;
draws = 0;

results = [];

// Reset scoreboard
document.getElementById("wins").innerHTML = 0;
document.getElementById("losses").innerHTML = 0;
document.getElementById("draws").innerHTML = 0;

// Clear history table
document.getElementById("history").innerHTML =
    "<tr>" +
    "<th>Round</th>" +
    "<th>You</th>" +
    "<th>Computer</th>" +
    "<th>Result</th>" +
    "</tr>";

// Clear result and summary
document.getElementById("result").innerHTML =
    "Make your choice!";

document.getElementById("result").style.color = "black";

document.getElementById("summary").innerHTML = "";

// Reset images
document.getElementById("playerImage").src = "rock.jpg";
document.getElementById("computerImage").src = "rock.jpg";
}