
var startingButtons = [
    'Orange is the new Black',
    'Superjail',
    'How I met your Mother',
    'American Horror Story',
    'Supernatural',
    'Homeland',
    'Pushing Daisies',
    'Mr. Robot'
];

$(document).ready(function() {
    addStartingButtons();
});


let addStartingButtons = function() {
    for(var i = 0; i<startingButtons.length; i++){
    $("#defaultSearchButtons").append("<button id=" + startingButtons[i] + " value=" + startingButtons[i] + ">" + startingButtons[i] + "</button>");
    }
    $("button").click(function() {
        var fired_button = $(this).val();
        event.preventDefault();
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + fired_button + "&api_key=95bfdd6cda3f400aa1f2c12d2ba93f14";
        $.ajax({ url: queryURL, method: 'GET' })
            .done(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    $('#gifArea').prepend("<img  src='" + response.data[i].images.downsized.url + "' >");
                    $('#gifArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
                }
            })

    });
}



$("#create").on('click', function() {
    let topic = document.getElementById("topic").value;
    $("#defaultSearchButtons").append("<button id=" + topic + " value=" + topic + ">" + topic + "</button>");
    $("button").click(function() {
        var fired_button = $(this).val();
        event.preventDefault();
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + fired_button + "&api_key=95bfdd6cda3f400aa1f2c12d2ba93f14";
        $.ajax({ url: queryURL, method: 'GET' })
            .done(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    $('#gifArea').prepend("<img  src='" + response.data[i].images.downsized.url + "' >");
                    $('#gifArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
                }
            })

    });


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

    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

});

$(".gif").on("click", function() {
    var state = $(this).attr("data-state"); //data-state

    if (state === "still") {
        $(this).attr("src", $(this.attr("data-animate"))); //data-animate
        $(this).attr("data-state", "animate");

    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

});