
 
//computer randomly selects a number between 19-120 for player to match

var randomNum = 19 + Math.floor(Math.random() * 101);

//show this number under #numToGuess

$("#numToGuess").html(randomNum);
console.log(randomNum);


//computer randomly selects a number between 1-12 for each gem

var blueGem = 1 + Math.floor(Math.random() * 11);
var pinkGem = 1 + Math.floor(Math.random() * 11);
var greenGem = 1 + Math.floor(Math.random() * 11);
var purpleGem = 1 + Math.floor(Math.random() * 11);

//set all variables to 0

var userTotal = 0;
var wins = 0;
var losses = 0;
$("#totalNum").html(userTotal);
$("#wins").html(wins);
$("#losses").html(losses);

//reset all variables once game is won/lost

var reset = function() {
    userTotal = 0;
    randomNum = 19 + Math.floor(Math.random() * 101);
    blueGem = 1 + Math.floor(Math.random() * 11);
    pinkGem = 1 + Math.floor(Math.random() * 11);
    greenGem = 1 + Math.floor(Math.random() * 11);
    purpleGem = 1 + Math.floor(Math.random() * 11);
    console.log(randomNum);
    $("#numToGuess").html(randomNum);
    $("#totalNum").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

//if else statement for winning or losing. 
//if total === random win.
//if total > random lose.

var winCheck = function() {
    if (userTotal == randomNum) {
        wins++;
        alert("Hooray! You won!");
        $("#wins").html(wins);
        reset();

    } else if (userTotal > randomNum) {
        losses++;
        alert("Boo, you did not win! Try Again!");
        $("#losses").html(losses);
        reset();
    }
};

//whenever user clicks (on.click) a gem, the random number is added to total score.
//show this number under #totalNum

$("#purple").on("click", function() {
    userTotal = userTotal + purpleGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#green").on("click", function() {
    userTotal = userTotal + greenGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#pink").on("click", function() {
    userTotal = userTotal + pinkGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

$("#blue").on("click", function() {
    userTotal = userTotal + blueGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    winCheck();
})

