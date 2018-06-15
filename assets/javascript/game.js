// since I rarely feel like I know how to begin, I'll start with just getting the js stuff ready.  I thought I knew what I was doing, but it keeps throwing errors.  Turns out, no matter how perfectly you code, if you don't have the jQuery library attached, you only anger the console god. (His name is Window)
$(document).ready(function() {
    console.log("document loaded");



// this next bit keeps the space bar from auto scrolling
window.onkeydown = function(e) {
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        return false;
    }
};

//this is where the real stuff begins
var counter1 = 0;
$("#counter").text(counter1);


//this will keep track of wins and losses
var wins = 0;
var losses = 0;

$("#wins").html("&nbspWins: " + wins + "&nbsp");
$("#losses").html("&nbspLosses: " + losses + "&nbsp");


var start1 = document.getElementById("start");
var directions1 = document.getElementById("directions");

console.log("game.js connected");



//this is all the random math generators
var randomGameNum = Math.floor(Math.random() * 101+19);
console.log(randomGameNum);
var randomBlueNum = Math.floor(Math.random() * 11+1);
console.log(randomBlueNum);
var randomWhiteNum = Math.floor(Math.random() * 11+1);
console.log(randomWhiteNum);
var randomPurpleNum = Math.floor(Math.random() * 11+1);
console.log(randomPurpleNum);
var randomGreenNum  = Math.floor(Math.random() * 11+1);
console.log(randomGreenNum);




function fiveSeconds() {
    $("#youDidSomething").text("");
    console.log("timer worked");
}



// this should be the first called function from the onclick event
function goodTry() {
    $("#numberDemanded").text(randomGameNum);

    if (start1.style.display === "block") {
        start1.style.display = "none";
        console.log("It's magic!");
    } 
    if (start1.style.display = "none") {
        document.getElementById("directions");
        directions.style.display = "block";
    console.log("It reappears!");   
    }

    //this is all the random math generators
        var randomGameNum = Math.floor(Math.random() * 101+19);
        console.log(randomGameNum);
        var randomBlueNum = Math.floor(Math.random() * 11+1);
        console.log(randomBlueNum);
        var randomWhiteNum = Math.floor(Math.random() * 11+1);
        console.log(randomWhiteNum);
        var randomPurpleNum = Math.floor(Math.random() * 11+1);
        console.log(randomPurpleNum);
        var randomGreenNum  = Math.floor(Math.random() * 11+1);
        console.log(randomGreenNum);

}


    $("#crystalBlue").on("click", function(){
        counter1 = counter1 + randomBlueNum;
        $("#counter").text(counter1);

            if (counter1 === randomGameNum){
                winner();
            }
            else if (counter1 > randomGameNum){
                loser();
            }
        });
    

    $("#crystalWhite").on("click", function(){
        counter1 = counter1 + randomWhiteNum;
        $("#counter").text(counter1);

            if (counter1 === randomGameNum){
                winner();
            }
            else if (counter1 > randomGameNum){
                loser();
            }
    });
    

    $("#crystalPurple").on("click", function(){
        counter1 = counter1 + randomPurpleNum;
        $("#counter").text(counter1);

            if (counter1 === randomGameNum){
                winner();
            }
            else if (counter1 > randomGameNum){
                loser();
            }
    });
    

    $("#crystalGreen").on("click", function(){
        counter1 = counter1 + randomGreenNum;
        $("#counter").text(counter1);

            if (counter1 === randomGameNum){
                winner();
            }
            else if (counter1 > randomGameNum){
                loser();
            }
    });    
    

// this will set up the winner or loser functions to be called later.

function winner() {
    $("#youDidSomething").text("WINNER WINNER CHICKEN DINNER");
    console.log("youDidSomething worked");
    wins ++;
    $("#wins").html("&nbspWins: " + wins + "&nbsp");
    setTimeout(fiveSeconds, 1000 * 5);
    goodTry;
}

function loser() {
    $("#youDidSomething").text("It can't rain all the time!");
    console.log("youDidSomething worked");
    losses ++;
    $("#losses").html("&nbspLosses: " + losses + "&nbsp");
    setTimeout(fiveSeconds, 1000 * 5);
    goodTry;
}



// $("#wins").html("&nbspWins: " + wins + "&nbsp");
// $("#losses").html("&nbspLosses: " + losses + "&nbsp");



// this is where it should all start...

document.onclick = function(event) {

    $("#numberDemanded").text(randomGameNum);

    if (start1.style.display === "block") {
    start1.style.display = "none";
    console.log("It's magic!");
    } 
    if (start1.style.display = "none") {
    document.getElementById("directions");
    directions.style.display = "block";
    console.log("It's also magic!");
    }

    // if (counter1.style.display = "none") {
    //     document.getElementById("counter");
    //     directions.style.display = "block";
    //     console.log("It's also magic3!");
        
    // }

};
});
