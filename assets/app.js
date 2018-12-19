 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBnpPjki2semGQYd2mz8wWBkcsvqtg5-Ec",
    authDomain: "group1-5ce00.firebaseapp.com",
    databaseURL: "https://group1-5ce00.firebaseio.com",
    projectId: "group1-5ce00",
    storageBucket: "group1-5ce00.appspot.com",
    messagingSenderId: "398011782738"
  };
  firebase.initializeApp(config);

//   Variable to hold database
var database = firebase.database();

//Submit button to add to database
$("#submit").on("click", function(event) {
event.preventDefault();

//Grab user input 
var fullName = $("#full-name").val().trim();
var emailInfo = $("#email-input").val().trim();
//var gender needs to be worked on here for radio buttons
var dogName = $("#name").val().trim();
var dogBreed = $("#breed").val().trim();
var dogColor = $("#color").val().trim();
var dogSize = $("#size").val().trim();
var dogHair = $("#hair").val().trim();
var dogLocation = $("location").val().trim();

//Create temporary object to hold doggy data
var newDog = {
	name: fullName,
	email: emailInfo,
	dog: dogName,
	breed: dogBreed,
	color: dogColor,
	size: dogSize,
	hair: dogHair,
	location: dogLocation
}

//Uploads data to Firebase
database.ref().push(newDog);

//Logging it
console.log(newDog);

//Clear all the text boxes
$("#full-name").val("");
$("#email-input").val("");
$("#name").val("");
$("#breed").val("");
$("#color").val("");
$("#size").val("");
$("#hair").val("");
$("location").val("");


});

//Create FireBase event for adding dogs to the database
database.ref().on("child_added", function(childSnapshot) {
console.log(childSnapshot.val());

//Store everything into variables
var fullName = childSnapshot.val().name;
var emailInfo = childSnapshot.val().email;
var dogName = childSnapshot.val().dog;
var dogBreed = childSnapshot.val().breed;
var dogColor = childSnapshot.val().color;
var dogSize = childSnapshot.val().size;
var dogHair = childSnapshot.val().hair;
var dogLocation = childSnapshot.val().location;

//Log it
console.log(fullName);
console.log(emailInfo);
console.log(dogName);
console.log(dogBreed);
console.log(dogColor);
console.log(dogSize);
console.log(dogHair);
console.log(dogLocation);

});




                $(function () {
                  $('#demo-form').parsley().on('field:validated', function() {
                    var ok = $('.parsley-error').length === 0;
                    $('.bs-callout-info').toggleClass('hidden', !ok);
                    $('.bs-callout-warning').toggleClass('hidden', ok);
                  })
                  .on('form:submit', function() {
                    return false; // Don't submit form for this demo
                  });
                });
                



function loadgif () {

	// Storing our giphy API URL for a random cat or dog image
	var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=b3pwT2Dgw57RUVbsOOWFaiNJH5z0XGjM&tag=cats+dogs";

	// Perfoming an AJAX GET request to our queryURL
	$.ajax({
	  url: queryURL,
	  method: "GET"
	})

	// After the data from the AJAX request comes back
	  .then(function(response) {

	  // Saving the image_original_url property
		var imageUrl = response.data.image_original_url;

		// Creating and storing an image tag
		var catDogImage = $("<img>");

		// Setting the catDogImage src attribute to imageUrl
		catDogImage.attr("src", imageUrl);
		catDogImage.attr("alt", "cat+dog image");

		// Prepending the catDogImage to the images div
		$("#images").prepend(catDogImage);
	  });
  };
  window.onload = loadgif;
  console.log(loadgif)
