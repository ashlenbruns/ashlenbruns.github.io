$(document).ready(function () {

var topics = ["badminton", "Zion Williamson", "dunk", "football", "Randy Moss", "ping pong", "foul", "Michael Jordan", "bowling"];

function showButtons() {
    $('#button-list').empty();

    for (var i = 0; i < topics.length; i++) {

        if (i > 8) {
            var create = $('<button>', {class: 'btn-warning'});
            create.text(topics[i]);
            create.attr('data-name', topics[i]);
            $('#button-list').append(create);
        }
        else {
            var create = $('<button>', {class: 'btn-success'});
            create.text(topics[i]);
            create.attr('data-name', topics[i]);
            $('#button-list').append(create);
        }  
    }
};

// API call.
function buttonClick() {
    $(document).on('click', 'button', function() {
        $('#gif-info').empty();
        var selectedBtn = $(this).attr('data-name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + selectedBtn + "&api_key=NW53QpWpZPLqCQuGDX4LFAE1Zzbk5PWv&limit=10";
        console.log(queryURL);
    
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) { 
            console.log(response); 
            var results = response.data;

            for (i = 0; i < results.length; i++) {
                var gifDiv = $('<div>');
                gifDiv.addClass('gif-image');

                var rating = $('<p>').text('Rating: ' + results[i].rating);

                var sportsImage = $('<img>');
                
                sportsImage.attr('src', results[i].images.fixed_height_still.url);
                sportsImage.attr('data-still', results[i].images.fixed_height_still.url);
                sportsImage.attr('data-animate', results[i].images.fixed_height.url);
                sportsImage.addClass('sports-image');
                sportsImage.attr('data-state', 'still');

                gifDiv.append(rating);
                gifDiv.append(sportsImage);

                $('#gif-info').append(gifDiv);
            }
        });
    });    
}

// Click gif function.
$(document).on('click', '.sports-image', function() {
    var state = $(this).attr('data-state');

    if (state === 'still') {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
    }
    else {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
    }
});

// User adds button.
$('#add-button').on('click', function(event) {
    event.preventDefault();
    var buttonInput = $('#exampleInput').val().trim();
    topics.push(buttonInput);
    $('#exampleInput').val('');
    showButtons();
})

showButtons();
buttonClick();

});