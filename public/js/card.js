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

function getSolutions(){
    title, image, text, link, linkText
    let solutions = [
        {
            id: 1,
            title: "Transport",
            image: "transport-01.svg",
            text: "Use Mevo, using mevo can be a great way to avoid owning your own car",
            link: "mevo.co.nz",
            linkText: "Mevo"
        },
        {
            id: 2,
            title: "Transport",
            image: "transport-02.svg",
            text: "Ditch your car and walk, just using Uber on important and required",
            link: "uber.com",
            linkText: "Uber"
        }
]
/**
"Uber/Ola",
"Metlink",
"Jump/Flamingo Scooters" */

}


$(function () {
    // console.log will log a message or object to the browser developer console
    console.log("Loaded card.js ...");
    let card = new Card("Test! ", "transport-01.svg", "You should sell your car", "http://trademe.co.nz", "Sell your car here for fast cash");
    $("#card-target").html(card.html);

});