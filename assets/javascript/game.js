/** There will be four crystals displayed as buttons on the page.

* The player will be shown a random number at the start of the game.

* When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

  * Your game will hide this amount until the player clicks a crystal.
  * When they do click one, update the player's score counter.

* The player wins if their total score matches the random number from the beginning of the game.

* The player loses if their score goes above the random number.

* The game restarts whenever the player wins or loses.

  * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

* The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.*/

//Set variables

//Set playerScore at 0
var counter = 0;
//display player score
$("#user-score").text(counter);
// user wins
var userWins = 0
// user losses
var userLosses = 0
//hide score until player clicks a crystal

//Random number var between 19 and 120
var targetNumber = Math.floor(Math.random() * 120) + 19;


  // Here we set the "number-to-guess" header to match the "targetNumber".
  // Eventually this will allow us to change the HTML to match the value in the JavaScript.
  $("#number-to-guess").text(targetNumber);
//Show random number on page.
function reset (){
  var targetNumber = Math.floor(Math.random() * 120) + 19;
$("#number-to-guess").text(targetNumber);
counter = 0;
$("#user-score").text(counter);
}


// We begin by expanding our array to include four options.
//var numberOptions = [10, 5, 3, 7];
var numberOptions = [10, 5, 3, 7];

var imageOptions = ["assets/images/Afghanite.jpg", "assets/images/andradite.jpg", "assets/images/QuartzPurple.jpg", "assets/images/QuartzYellow.jpg"]

//function to shuffle arrays. Credit goes to ??
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
     // While there remain elements to shuffle...
    while (0 !== currentIndex) {
       // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
       // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
      return array;
  }

  var shuffleValues = shuffle(numberOptions);
  var shuffleImages = shuffle(imageOptions);

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++){

  // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", shuffleImages[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", shuffleValues[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);

}





    $(".crystal-image").on("click", function() {
  
var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  //Add crystalValue to the user's score (via counter, a global variable)
  counter += crystalValue;
  // We then output the number of times the crystal is clicked.
      alert("New score: " + counter);
      $("#user-score").text(counter);
      
      //displayUserWins = document.getElementById("user-score");

  
    

    if (counter === targetNumber) {

      alert("You win!");
//Add a point to user wins   
    userWins ++;
//display the new userWins value.
    $('#user-wins').text(userWins);
//Change score back to 0 and change target number to new random value.
    reset();

    //function to shuffle arrays. Credit goes to ??
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
     // While there remain elements to shuffle...
    while (0 !== currentIndex) {
       // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
       // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
      return array;
  }

  shuffle(shuffleValues);
  shuffle(shuffleImages);
  imageCrystal.attr("data-crystalvalue", shuffleValues);
  imageCrystal.attr("src", shuffleImages);
    }

    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= targetNumber) {

      // Then they are alerted with a loss.
      alert("You lose!!");
   
  userLosses ++;
   $("#user-losses").text(userLosses);
   
   reset();
   shuffle(shuffleValues);
  shuffle(shuffleImages);
  imageCrystal.attr("data-crystalvalue", shuffleValues);
  imageCrystal.attr("src", shuffleImages);
    }    
  });
    


