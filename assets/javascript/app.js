// $("button").on("click", function() {
//     event.preventDefault();
//     var x = $(this).data("input");
//     console.log(x);
//     topic = $(this).val();
//     $.ajax({ url: queryURL, method: "GET" })

//     .done(function(response) {
//     	var results = response.data;
//     	var topicImage = $("<img>");

//     })

// })


// submit form button needs to call a function that creates a new button via html append to body or parent div


$("#create").on('click', function() {
    let topic = document.getElementById("topic").value;
    $("#topicButtons").append("<button id=" + topic + " value=" + topic + ">" + topic + "</button>");
    $("button").click(function() {
        var fired_button = $(this).val();
        console.log(fired_button);
        event.preventDefault();
        let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=95bfdd6cda3f400aa1f2c12d2ba93f14";
        console.log(queryURL);
        $.ajax({ url: queryURL, method: 'GET' })
            .done(function(response) {
                console.log(response.data[0].rating);
                console.log(response.data);
                for (var i = 0; i < response.data.length; i++) {
                    $('#GIFArea').prepend("<img src='" + response.data[i].images.downsized.url + "' >");
                    $('#GIFArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
                }
            })

    });
})







// $("#create").on('click', function() {
// 	let topic = document.getElementById("topic").value;
//     event.preventDefault();
//     let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=95bfdd6cda3f400aa1f2c12d2ba93f14";
//     // console.log(topic);
//     $("#topicButtons").append("<button id=" + topic + " value=" + topic + ">" + topic + "</button>");
//     console.log(queryURL);
//     $.ajax({ url: queryURL, method: 'GET' })
//         .done(function(response) {
//             console.log(response.data[0].rating);
//             console.log(response.data);

//             // $('body').append("<p>"+response.data[0].rating);
//             for (var i = 0; i < response.data.length; i++) {
//                 $('#GIFArea').prepend("<img src='" + response.data[i].images.downsized.url + "' >");
//                 $('#GIFArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
//             }
//         })
//     $("button").click(function() {
//         var fired_button = $(this).val();
//         console.log(fired_button);
//     });

// })



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