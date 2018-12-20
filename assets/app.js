$(document).ready(function () {



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
var dogLocation = $("#location").val().trim();

//Create temporary object to hold doggy data
var newDog = {
	name: fullName,
	email: emailInfo,
	dog: dogName,
	breed: dogBreed,
	color: dogColor,
	size: dogSize,
	location: dogLocation
};

//Uploads data to Firebase
database.ref().push(newDog);

//Logging it
console.log(newDog);

//Clear all the text boxes
$("#full-name").val("");
$("#email-input").val("");
$("#phone").val("");
$("#name").val("");
$("#breed").val("");
$("#color").val("");
$("#size").val("");
$("#location").val("");
$("#message").val("");



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
var dogLocation = childSnapshot.val().location;

//Log it
// console.log(fullName);
// console.log(emailInfo);
console.log(dogName);
console.log(dogBreed);
console.log(dogColor);
console.log(dogSize);
console.log(dogLocation);

// Create the new row
var newRow = $("<tr>").append(
    // $("<td>").text(fullName),
    // $("<td>").text(emailInfo),
    $("<td>").text(dogName),
    $("<td>").text(dogBreed),
	$("<td>").text(dogColor),
	$("<td>").text(dogSize),
	$("<td>").text(dogLocation),

  );

  // Append the new row to the table
  $("#pet-table > tbody").append(newRow);

});



	//Parsley function
                $(function () {
                  $('#demo-form').parsley().on('field:validated', function() {
                    var ok = $('.parsley-error').length === 0;
                    $('.bs-callout-info').toggleClass('hidden', !ok);
                    $('.bs-callout-warning').toggleClass('hidden', ok);
                  })
                  .on('form:submit', function() {
                    return true; // Don't submit form for this demo
                  });
                });
                





});
  
function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 39.3210, lng: -111.0937 },
      zoom: 6,
      mapTypeId: 'roadmap'
  });
  console.log(initAutocomplete);
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function () {
      searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function () {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
          return;
      }

      // Clear out the old markers.
      markers.forEach(function (marker) {
          marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function (place) {
          if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
          }
          var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
          }));

          if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
          } else {
              bounds.extend(place.geometry.location);
          }
      });
      map.fitBounds(bounds);
  });
}
