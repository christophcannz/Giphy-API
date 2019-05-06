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
  var testUrl ="https://api.giphy.com/v1/gifs/search?api_key=OsQF2Dn1DvyD1rk1wcwzxYUotxkeDDXD&limit=10&q="+searchTerm

  fetch (testUrl)
  .then(data => data.json())
  .then (res => {
    console.log(res)

    var arrayOfGifs = res.data
    var rand = Math.floor(Math.random() * arrayOfGifs.length);
    var firstItem = arrayOfGifs[rand]
    var giphyLink = firstItem.images.fixed_width.url
    document.querySelector("#gif").setAttribute("src", giphyLink);
  })
  // Pick a gif from the search term.
  // make that gif appear on the page.
  $.ajax({
  url: testUrl,
  method: "GET"
}) 

.then(function(response) {

  //
    var imageUrl = response.data.image_original_url;
    console.log(imageUrl);

    //
    var squirrelImage = $("<img>");

    //
    squirrelImage.attr("src", imageUrl);
    squirrelImage.attr("alt", "squirrel image");

    //
    $("#images").prepend(squirrelImage);
});

}

/*$(document).ready(function(){
  var animals = ["squirrel", "chipmunk", "rabbit"];
  for (var i = 0; i< animals.length; i++) {
      $("#squirrel").on("click", function() {

      })

  }
})*/



//
 