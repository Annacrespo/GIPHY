var startingButtons = [
    'OrangeisthenewBlack',
    'Superjail',
    'HowImetyourMother',
    'AmericanHorrorStory',
    'Supernatural',
    'PushingDaisies',
    'Mr.Robot'
]


$(document).ready(function() {
    addStartingButtons();
});

let addStartingButtons = function() {
    for (var i = 0; i < startingButtons.length; i++) {
        $("#defaultSearchButtons").append("<button class='btn btn-info' id=" + startingButtons[i] + " value=" + startingButtons[i] + ">" + startingButtons[i] + "</button>");
    }
    $("button").click(function() {
        var fired_button = $(this).val().trim();
        event.preventDefault();
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + fired_button + "&api_key=95bfdd6cda3f400aa1f2c12d2ba93f14&limit=10";
        $.ajax({ url: queryURL, method: 'GET' })
            .done(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    $('#gifArea').prepend("<img  src='" + response.data[i].images.fixed_height_still.url + "' >");
                    $('#gifArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
                    console.log(response);
                }
            })

    });
}



$("#create").on('click', function() {
    let topic = document.getElementById("topic").value;
    $("#defaultSearchButtons").append("<button class='btn btn-info' id=" + topic + " value=" + topic + ">" + topic + "</button>");
    $("button").click(function() {
        var fired_button = $(this).val().trim();
        event.preventDefault();
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + fired_button + "&api_key=95bfdd6cda3f400aa1f2c12d2ba93f14&limit=10";
        $.ajax({ url: queryURL, method: 'GET' })
            .done(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    $('#gifArea').prepend("<img  src='" + response.data[i].images.fixed_height_still.url + "' >");

                    $('#gifArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
                    

                    /*
                    grab src urls for starting and stopping gif state
                    */
                    // var gifDiv = $("<div class='gifDiv'>");
                    // var rating = results[i].rating;
                    // var p = $("<p>").text("Rating: " + rating);
                    // var showGif = $("<img class='gifImg' src='' state='' animate=''>");
                    // showGif.attr("src", rating[i].images.fixed_height.url);
                    // showGif.attr("data-animate", rating[i].images.fixed_height.url);
                    // showGif.attr("data-state", "animate");

                    // gifDiv.append(p);
                    // gifDiv.append(showGif);

                }

                /*
                function for on click that would change the src from still image to moving and vice versa using a conditional statement
                */
                
                // $(document).on("click", ".gifImg", function() {
                //     var src = $(this).attr("src");
                //     var state = $(this).attr("data-state");
                //     var animate = $(this).attr("data-animate");

                //     if (state === "animate") {
                //         $(this).attr("src", src.replace(".gif", "_s.gif"))
                //         $(this).attr("data-state", "still")
                //     } else {
                //         $(this).attr('src', animate)
                //         $(this).attr("data-state", "animate")
                //     }

                // })

            });

    })

});
