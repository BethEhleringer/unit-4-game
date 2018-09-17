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
var counter = 0
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

var pointsA 
var emeraldValue
var sapphireValue
var topazValue

var ruby = {
  "value": rubyValue

}

var emerald = {
  "value": emeraldValue
}

var sapphire = {
  "value": sapphireValue
}

var topaz = {
  "value": topazValue
}



//create objects - buttons 
//Assign a different score to each crystal object.
//Connect each crystal object points attribute and button action to the players score.
//create counter


  // Here we created an on-click event that responds to button clicks of the crystal image.
  //$(".crystal-image").on("click", function() {

    // Clicking the button triggers an alert message.
    //alert("You clicked a crystal!");

  //});
  
  $(".afghanite-image").on("click", function() {
    alert("You clicked on Afghanite!");
    counter += pointsA
    //counter += 5;
    $("#user-score").text(counter);

    
  })
  
  $(".purple-quartz-image").on("click", function() {
    alert("You clicked on Purple Quartz!");
    counter += pointsB;
    $("#user-score").text(counter);

    
  })    
  $(".yellow-quartz-image").on("click", function() {
    alert("You clicked on Yellow Quartz!");
    counter += pointsC;
    $("#user-score").text(counter);

    
  })
  $(".andradite-image").on("click", function() {
    alert("You clicked on Andradite!");
    counter += pointsD;
    $("#user-score").text(counter);

    
  })  
    // Here we created a counter, we'll be using this to track the user's total.

    $(".crystal-image").on("click", function() {
  
      // Each time the user clicks the crystal the counter goes up by 1.
      counter += 10;
  
      // We then output the number of times the crystal is clicked.
      alert("New score: " + counter);
      document.getElementById("user-score")
      //displayUserWins = document.getElementById("user-score");

  
    });

    if (counter === targetNumber) {

      alert("You win!");
    }

    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= targetNumber) {

      // Then they are alerted with a loss.
      alert("You lose!!");
    }    

    
//score = score + button points
//display new score
//if score === randomNumber player wins, userWins ++. Display userWins. game resets 
//if score > randomNumber player loses and game starts over. userLosses--. display userLosses. game resets.
//Create reset function, which does the following:
  //player score = 0. playerscore is displayed.
  //user wins resets and displays
  //new random number is displayed.
  //new values for crystal objects.

