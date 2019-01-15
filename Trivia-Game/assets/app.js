var count = 45;
var intervalId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var submit = false;


$(document).ready(function(){

    // Start Page logic.
    $('.triviaPage').hide();
    $('.resultsPage').hide();

    $('#churchillStart').mouseover(function() {
        $('#churchillStart').attr('src', 'assets/images/duo-2.jpg');
    });
    $('#churchillStart').mouseout(function() {
        $('#churchillStart').attr('src', 'assets/images/churchill.jpg');
    });

    $('#startButton').click(function() {
        $('.startPage').hide();
        $('.triviaPage').show();
        runTimer();
    });


    // Trivia Page Logic.
    function runTimer() {
        if (!intervalId) {
            intervalId = setInterval(decrement, 1000);
        }
    }

    function decrement() {
        count--;
        $('#timer').text(count);
        if (count === 0) {
            stop();
            alert('Time\'s up!');
        }
    };

    function stop() {
        clearInterval(intervalId);
        intervalId = null;
    }

    $('#submitButton').click(function(){
        stop();
        $('.triviaPage').hide();
        $('.resultsPage').show();
        count = 45;
        checkResults();
    })


    // Results Page Logic.
    function checkResults(){ 
    var Q1 = $('input[name=q1]:checked').val();
    var Q2 = $('input[name=q2]:checked').val();
    var Q3 = $('input[name=q3]:checked').val();
    var Q4 = $('input[name=q4]:checked').val();
    var Q5 = $('input[name=q5]:checked').val();
    var Q6 = $('input[name=q6]:checked').val();
    var Q7 = $('input[name=q7]:checked').val();
    var Q8 = $('input[name=q8]:checked').val();

    if(Q1 == undefined){
        unanswered++;
        }
        else if(Q1 == "goldendoodle"){
            correct++;
            }
        else{
            incorrect++;
        }
        console.log(Q1);

    if(Q2 == undefined){
        unanswered++;
        }
        else if(Q2 == "partiPoodle"){
            correct++;
            }
        else{
            incorrect++;
        }
        // console.log(Q2);

    if(Q3 == undefined){
        unanswered++;
        }
        else if(Q3 == "greenBottle"){
            correct++;
            }
        else{
            incorrect++;
        }
        // console.log(Q3);

    if(Q4 == undefined){
        unanswered++;
        }
        else if(Q4 == "winstonsToy"){
            correct++;
            }
        else{
            incorrect++;
        }
        // console.log(Q4);

    if(Q5 == undefined){
        unanswered++;
        }
        else if(Q5 == "davidPumpkin"){
            correct++;
            }
        else{
            incorrect++;
        }
        // console.log(Q5);

    if(Q6 == undefined){
        unanswered++;
        }
        else if(Q6 == "princessDiana"){
            correct++;
            }
        else{
            incorrect++;
        }
        // console.log(Q6);

    if(Q7 == undefined){
        unanswered++;
        }
        else if(Q7 == "bedFoot"){
            correct++;
            }
        else{
            incorrect++;
        }
        // console.log(Q7);

    if(Q8 == undefined){
        unanswered++;
        }
        else if(Q8 == "bedHog2"){
            correct++;
            }
        else{
            incorrect++;
        }
        // console.log(Q8);

        $('#correct').text(correct);
        $('#incorrect').text(incorrect);
        $('#unanswered').text(unanswered);
    };


    $('#churchillEnd').mouseover(function() {
        $('#churchillEnd').attr('src', 'assets/images/dogs.jpg');
    });

    $('#churchillEnd').mouseout(function() {
        $('#churchillEnd').attr('src', 'assets/images/result-image.jpg');
    });

        // Restart Game.
        $('#tryAgainButton').click(function(){
            $('.resultsPage').hide();
            $('.startPage').show();
            $('input[type=radio]').prop('checked', false);
            correct = 0;
            incorrect = 0;
            unanswered = 0;
        })



});    
    

