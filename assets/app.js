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



// Variable with Pet Finder API url---- This can be changed just a place holder
var queryURL = 'http://api.petfinder.com/my.method?format=json&key=12345&callback=?';
 
// Ajax call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {

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
