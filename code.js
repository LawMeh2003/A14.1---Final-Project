//a code to play Hi Lo on index page
function playHiLo() {
    console.log("playHiLo() started");
    //step 1. draw a card Ace to King or 1 to 13
    var card1;
    card1 = Math.floor(14 * Math.random());
    console.log("card1 is :" + card1);
    //step 1b. Print results on screen
    document.getElementById("card1Res").innerHTML = card1;
}

//step 2. player will choose if next card is higher or lower
//If player bet high
function High() {
    console.log("bet high")
    var card1;
    var card2;
    card1 = Math.floor(14 * Math.random());
    card2 = Math.floor(14 * Math.random());
    console.log("card1 is :" + card1);
    console.log("card2 is :" + card2);
    document.getElementById("card2Res").innerHTML = card2;
    //Condictions
    if (card2 >= card1) {
        document.getElementById("gameRes").innerHTML = "You Win!";
    }

    else if (card2 <= card1) {
        document.getElementById("gameRes").innerHTML = "You Lose!";
    }



    //If player bet low   
}
function Low() {
    console.log("bet low")
    var card1;
    var card2;
    card1 = Math.floor(14 * Math.random());
    card2 = Math.floor(14 * Math.random());
    console.log("card1 is :" + card1);
    console.log("card2 is :" + card2);
    document.getElementById("card2Res").innerHTML = card2;
    //condictions
    if (card2 <= card1) {
        document.getElementById("gameRes").innerHTML = "You Win!";
    }
    else if (card2 >= card1) {
        document.getElementById("gameRes").innerHTML = "You Lose!";
    }

}
/*if(condictions for true){
    do this if condictions are true
}else if (another condictions for true){
    do this if condictions are true
}else{
    do this if none are true
}}*/


//start button
function startFun() {
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    //turns start button gray if clicked, means being used
    document.getElementById("stopButton").disabled = false;
    document.getElementById('mymarquee').start();
    //start marquee motion
}
//stop button
function stopFun() {
    console.log("stopFun() started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    //turns stop button gray if clicked, means being used
    document.getElementById('mymarquee').stop();
    //stop marquee motion
}

function checkPalin() {
    //check to see if a sentence is a palindrome
    console.log("checkPalin() started");

    //extract the entered text to a string variable called entStr
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("The text entered is: " + entStr);
    //remove the spaces from the string
    var entStrNoSpace = entStr.split(" ").join("");
    console.log("no spaces = " + entStrNoSpace);

    //create a new variable called revStr and store the entered string reversed here
    var revStr;
    const revArray = [];
    length = entStrNoSpace.length - 1;
    console.log("string length = " + length);
    for (let i = length; i >= 0; i--) {
        revArray.push(entStrNoSpace[i]);
    };
    revStr = revArray.join("");
    console.log("reversed is: " + revStr);

    //compare entStr to revStr
    var equal = 0;
    console.log(entStrNoSpace === revStr);
    equal = (entStrNoSpace === revStr);
    console.log(equal);

    //give notice of equality status
    if (equal == true) {
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome!";
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome!";
    }

}

//checkCreds function for sting.html
function checkCreds() {
    console.log("checkCreds() started...");
    document.getElementById("loginStatus").innerHTML = "Score";
    var answer;


    //this will place the characters under the fName id in the answer variable
    answer = document.getElementById("answer").value;
    console.log("The answer is " + answer);
  
    //this sets the rules which are the full name cannot be more than 20 chracters and the zipcode must be 5 characters
    if (answer !== "Fairy Tail") {
        document.getElementById("loginStatus").innerHTML = "Wrong, please try again";
    } else {
        alert("Pass! Welcome, fairy ");
    }
}
//Add audio
function playSong(){
    console.log("playSong() started")
    mySound = new sound("fairyTail.mp3");
    mySound.play();
}
//Set audio
function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause()
    }
}