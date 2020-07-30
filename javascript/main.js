/* 1. Grab the input */

var input = document.querySelector("input").value;


document.querySelector(".js-go").addEventListener('click', function () {
    var input = document.querySelector("input").value;

    makeRequest(input)
    //pushToDOM(input);
})

document.querySelector(".js-userinput").addEventListener('keyup', function (e) {
    // if the key ENTER is pressed...
    var input = document.querySelector("input").value;
    if (e.which === 13) {
        makeRequest(input)
        // pushToDOM(input);
    }
})

/* 2. Do the data stuff with the API */

function makeRequest(input) {

    var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC";
    // AJAX request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function (e) {

        var data = e.target.response;
        console.log(data);
        pushToDOM(data);
    });
}


/* 3. Show me the GIFs */

function pushToDOM(data) {
    var response = JSON.parse(data);

    var imageUrls = response.data;
    var container = document.querySelector(".js-container");
    container.innerHTML = '';

    imageUrls.forEach(function (image) {
        var src = image.images.fixed_height.url;
        container.innerHTML = container.innerHTML + "<img src =\"" + src + "\" class=\"container-image\">";
    });


}