$(document).ready(function() {
    var api_url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
    var getQuote = function(data) {
        if (data.quoteAuthor === "") {
            data.quoteAuthor = "Unknown";
        }
        $("#author").text(data.quoteAuthor);
        $("#text").text(data.quoteText);
        $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + data.quoteText + '" ' + data.quoteAuthor));
    };

    // first quote, hardcoded
    var firstQuote = "Not all treasure is silver and gold, mate.";
    var firstAuthor = "Jack Sparrow";

    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + firstQuote + '" ' + firstAuthor));

    $("#new-quote").on("click", function() {
        $.getJSON(api_url, getQuote, 'jsonp');
    });
})