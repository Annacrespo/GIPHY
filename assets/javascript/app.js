var topic;

var queryURL = "http://api.giphy.com/v1/gifs/search?q=fail" + topic + "&api_key=95bfdd6cda3f400aa1f2c12d2ba93f14";
$.ajax({url:queryURL, method:'GET'})
.done(function(response){
	console.log(response);
	})


$("button").on("click", function() {
    event.preventDefault();
    var x = $(this).data("input");
    console.log(x);
    topic = $(this).val();
    $.ajax({ url: queryURL, method: "GET" })

    .done(function(response) {
    	var results = response.data;
    	var topicImage = $("<img>");

    })

})


// submit form button needs to call a function that creates a new button via html append to body or parent div

$("#create").on('click', function(){
	let topic = document.getElementById("topic").value;
	$("#topicButtons").append("<button id=" + topic + ">" + topic + "</button>");
})

// submit form input needs to be stored in a variable
// create new function needs to pass in variable of submit form similar to wins and losses on other game
// so that the ajax call uses the name on the button for the giphy api call

//research task, when a text form is submitted what is the text? value? input? m,m, mmmm m. 

//function to set value of attribute on HTML

$(".gif").on("click", function() {
            var state = $(this).attr("data-state"); //data-state

            if (state === "still") {
                $(this).attr("src", $(this.attr("data-animate"))); //data-animate
                    $(this).attr("data-state", "animate");

                }
                else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }

            });