function Card(title, image, text, link, linkText) {
  /*  //Materialize Card
  let cardHtml = '' +
    '<div class="col s12 m6 l3" '+ ' id="' + title +'-card">' +
        //'<h5 class="header"> ' + title + '</h5> ' +
        '<div class="card horizontal">' +
            '<div class="card-image">' +
                '<img src="../images/' + image + '"> '+
            '</div>' +
            '<div class="card-stacked"> ' +
                '<div class="card-content">' +
                  '<h5 class="header"> ' + title + '</h5> ' +
                    '<p>' + text + '</p>' +
                '</div>' +
                '<div class="card-action">' +
                    '<a href="' + link + '"><button type="button" class="btn btn-primary">' + linkText + '</button></a>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>'
    */

   let cardHtml = '' +
   '<div class="card mb-3" style="max-width: 540px;" '+ ' id="' + title +'-card">' +
   '<div class="row no-gutters">' +
     '<div class="col-md-4">' +
       '<img src="/images/' + image + '" class="card-img" alt="...">' +
     '</div>' +
     '<div class="col-md-8">' +
       '<div class="card-body">' +
          '<h5 class="card-title">' +title +'</h5>' +
          '<p class="card-text">'+ text +'</p>' +
          '<div class="card-action">' +
            '<a href="' + link + '"><button type="button" class="btn btn-primary">' + linkText + '</button></a>' +
          '</div>' +
         //'<p class="card-text"><small class="text-muted">' + text + '</small></p>'+
       '</div>'+
     '</div>'+
     '</div>'+
   '</div>'

    this.html = function(){
        return cardHtml;
    }
}

function getSolutions(){
    //title, image, text, link, linkText
    let solutions = [
        {
            id: 1,
            title: "Transport",
            image: "transport-01.svg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu pharetra dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam quis magna ultricies, fringilla sem eget, fringilla felis. Proin feugiat porta enim, et dapibus libero mattis vitae. Morbi quis volutpat lectus. Donec sagittis erat tortor. Aliquam neque turpis, porta sed porttitor in, viverra non urna. Curabitur porta sit amet sapien a laoreet. Nulla facilisi. Suspendisse eget consectetur enim, quis varius urna. Aenean ac varius mi. Phasellus luctus sollicitudin gravida. Nunc eget nisi ligula. Proin id ipsum id risus dapibus scelerisque ut et mauris. Fusce suscipit mauris leo, sed interdum sapien convallis a.",
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
        },

        {
          id: 3,
          title: "Transport",
          image: "cycling-01.svg",
          text: "Is cycling a carbon-friendly thing to do? Emphatically yes! Powered by biscuits, bananas or breakfast cereal, the bike is nearly 10 times more carbon-efficient than the most efficient of petrol cars. Cycling also keeps you healthy, provided you don’t end up under a bus.",
          link: "uber.com",
          linkText: "Uber"
        },

        {
            id: 4,
            title: "Carbon Offset",
            image: "tree-01.svg",
            text: "Pay for a tree to be planted. Who’s leading the native tree count? Every native tree planted or funded helps grow the count. Check out the planters and funders making a difference.",
            link: "https://www.treesthatcount.co.nz/",
            linkText: "Trees that Count"
        },
        {
          id: 5,
          title: "Zero-Waste Products",
          image: "tree-01.svg",
          text: "PLASTIC & WASTE FREE PRODUCTS. Make the switch to using reusable, zero waste & plastic free items today.           Everything is packaged with either recyclable, compostable or reusable packaging. All sourced & designed to replace everyday plastic & one use items in your life. ",
          link: "https://thenaturalco.nz/collections/plastic-free-products",
          linkText: "The Natural"
       }];
       console.log(solutions);
  return solutions;

}


$(function () {
    // console.log will log a message or object to the browser developer console
    console.log("Loaded card.js ...");
    //let cards = new Array();
    let solutions = getSolutions();
    let solutionsHtml = "";
    //getSolutions().map(
    for(let i = 0; i < solutions.length; i++){
      solution = solutions[i];
      //console.log(solution);
      let card = new Card(solution.title, solution.image,solution.text, solution.link, solution.linkText);
      //cards.push(card);
      solutionsHtml += card.html();
    };

    //console.log(solutionsHtml);
    $("#card-target").html(solutionsHtml);
});
