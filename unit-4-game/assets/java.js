var targetNumber = Math.floor((Math.random() * 102) + 19);
var treeOne = Math.floor((Math.random() * 12) + 1);
var treeTwo = Math.floor((Math.random() * 12) + 1);
var treeThree = Math.floor((Math.random() * 12) + 1);
var treeFour = Math.floor((Math.random() * 12) + 1);
var karmaPoints = 0;
var win = 0;
var loss = 0;

$(document).ready(function(){

// Begin game with new target number, new tree values, and karma points at 0.

function gameReset() {
    karmaPoints = 0; 
    $('#karmaPoints').text(karmaPoints);

    targetNumber = Math.floor((Math.random() * 102) + 19);
    $("#targetNumber").text(targetNumber);
    console.log(targetNumber);

    treeOne = Math.floor((Math.random() * 12) + 1);
        console.log(treeOne);
    treeTwo = Math.floor((Math.random() * 12) + 1);
        console.log(treeTwo);
    treeThree = Math.floor((Math.random() * 12) + 1);
        console.log(treeThree);
    treeFour = Math.floor((Math.random() * 12) + 1);
        console.log(treeFour);
    }

// Adding up karma points

$('#treeOne').on('click', function() {
    karmaPoints += parseInt(treeOne);
    console.log(karmaPoints);
    $('#karmaPoints').text(karmaPoints);
    gameWin();
});

$('#treeTwo').on('click', function() {
    karmaPoints += parseInt(treeTwo);
    console.log(karmaPoints);
    $('#karmaPoints').text(karmaPoints);
    gameWin();
});

$('#treeThree').on('click', function() {
    karmaPoints += parseInt(treeThree);
    console.log(karmaPoints);
    $('#karmaPoints').text(karmaPoints);
    gameWin();
});

$('#treeFour').on('click', function() {
    karmaPoints += parseInt(treeFour);
    console.log(karmaPoints);
    $('#karmaPoints').text(karmaPoints);
    gameWin();
});


// Win/lose conditions
function gameWin() {
if (karmaPoints === targetNumber) {
    win++;
    $('#playerWins').text(win);
    alert('You are a tree lover, you win!');
    gameReset();   
}

else if (karmaPoints > targetNumber) {
    loss++;
    $('#playerLosses').text(loss);
    alert('You lose! Keep on hugging!');
    gameReset();
 }
};

gameReset();



});