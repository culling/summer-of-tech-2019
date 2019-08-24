function Card(title, image, text, link, linkText) {
    let cardHtml = '' +
    '<div class="col s12 m6">' +
        '<h2 class="header"> ' + title + '</h2> ' +
        '<div class="card horizontal">' +
            '<div class="card-image">' +
                '<img src="../images/' + image + '"> '+ 
            '</div>' +
            '<div class="card-stacked"> ' +
                '<div class="card-content">' +
                    '<p>' + text + '</p>' +
                '</div>' +
                '<div class="card-action">' +
                    '<a href="' + link + '">' + linkText + '</a>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>'
    this.html = function(){
        return cardHtml;
    }
}

$(function () {
    // console.log will log a message or object to the browser developer console
    console.log("Loaded card.js ...");
    let card = new Card("Test! ", "transport-01.svg", "You should sell your car", "http://trademe.co.nz", "Sell your car here for fast cash");
    $("#card-target").html(card.html);

});