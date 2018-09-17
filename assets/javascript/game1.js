
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
//Set target number
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
var numberOptions = [10, 5, 3, 7];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++){

  // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);

}



  
 $(".afghanite-image").on("click", function() {
    alert("You clicked on Afghanite!");
    //var pointsA = 5
    //counter += pointsA
    counter += 5;
    $("#user-score").text(counter);

    
  })
  
  $(".purple-quartz-image").on("click", function() {
    alert("You clicked on Purple Quartz!");
    var pointsB = 10
    counter += pointsB;
    $("#user-score").text(counter);

    
  })    
  $(".yellow-quartz-image").on("click", function() {
    alert("You clicked on Yellow Quartz!");
    var pointsC = 7;
    counter += pointsC;
    $("#user-score").text(counter);

    
  })
  $(".andradite-image").on("click", function() {
    alert("You clicked on Andradite!");
    var pointsD = 11;
    counter += pointsD;
    $("#user-score").text(counter);

    
  })  
    // Here we created a counter, we'll be using this to track the user's total.

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

      
    userWins ++;
    $('#user-wins').text(userWins);
     reset();
    }

    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= targetNumber) {

      // Then they are alerted with a loss.
      alert("You lose!!");
   
  userLosses ++;
   $("#user-losses").text(userLosses);
   
   reset();
    }    
  });
    
//score = score + button points
//display new score
//if score === randomNumber player wins, userWins ++. Display userWins. game resets 
//if score > randomNumber player loses and game starts over. userLosses--. display userLosses. game resets.
//Create reset function, which does the following:
  //player score = 0. playerscore is displayed.
  //user wins resets and displays
  //new random number is displayed.
  //new values for crystal objects.

