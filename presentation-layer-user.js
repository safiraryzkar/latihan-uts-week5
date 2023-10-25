// File: presentation-layer-user.js

function getDataFromBusinessLayer() {
    event.preventDefault();
const email = $("#email").val();
// Perform the GET request to the business layer
$.ajax ({
    url: 'http://localhost:8081/get-user/${email}',
    type: "GET",
    success: function (user) {
    // Render the user object on the page
    // Ommitted for brevity
    },
    error: function (jqXHR, textStatus, ex) {
        console.log(textStatus + "," + ex + "," + jqXHR. responseText);
    },
  });
}