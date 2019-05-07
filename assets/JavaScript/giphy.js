// Choose A topic
// Populate an array with items.
// Create a function that will generate buttons from JQuery
// Create a For Loop to go through the array.
// giphy Path-  GET /v1/gifs/search
// giphy Host-  api.giphy.com
// giphy key-   TLZN1i7kUR4xYNko4MGTuAhkd5uOylt9


function getGiphy() {
  // fetch giphy data from the giphy API.
  var searchTerm = document.querySelector("#search").value
  var testUrl ="https://api.giphy.com/v1/gifs/search?q= + topic + &api_key=OsQF2Dn1DvyD1rk1wcwzxYUotxkeDDXD&limit=10&q="+searchTerm

  fetch (testUrl)
  .then(data => data.json())
  .then (res => {
    console.log(res)
// Search bar which will fetch a new gif based off of the search query.
    var arrayOfGifs = res.data
    var rand = Math.floor(Math.random() * arrayOfGifs.length);
    var firstItem = arrayOfGifs[rand]
    var giphyLink = firstItem.images.fixed_width.url
    document.querySelector("#gif").setAttribute("src", giphyLink);
  })
  
  // make the AJAX Call...
  $.ajax({
  url: testUrl,
  method: "GET"
  }) 

}
// Run an array of buttons to be connected to the Giphy API. 

$(document).ready(function(){
  $('#buttons').click(getGiphy); //getGiphy function is being called.
  var animals = ["squirrel", "chipmunk", "rabbit", "raccoon"];
  for (var i = 0; i< animals.length; i++) {
      var buttons = $('<button>' + animals[i] + '</button>')
      buttons.appendTo('#buttons');
  }
})
// at this time, animal buttons generate only one new gif if a search term has been put into the input. This is not ideal.
// When clicked, buttons should generate 10 new Gifs based off of the button name...to be continued....