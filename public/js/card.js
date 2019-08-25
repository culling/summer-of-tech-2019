function Card(title, image, text, link, linkText, id) {
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
    '<div class="card mb-3" style="max-width: 540px;" ' + ' id="' + id + '-card">' +
    '<div class="row no-gutters">' +
    '<div class="col-md-4">' +
    '<img src="/images/' + image + '" class="card-img" alt="...">' +
    '</div>' +
    '<div class="col-md-8">' +
    '<div class="card-body">' +
    '<h5 class="card-title">' + title + '</h5>' +
    '<p class="card-text">' + text + '</p>';
  if (link && linkText) {
    cardHtml += '<div class="card-action">' +
      '<a href="' + link + '"><button type="button" class="btn btn-primary">' + linkText + '</button></a>' +
      '</div>'
  }
  cardHtml += '</div>' +
    '</div>' +
    '</div>' +
    '</div>'

  this.html = function () {
    return cardHtml;
  }
}

function getSolutions() {
  //title, image, text, link, linkText
  let solutions = [
    {
      id: 1,
      title: "Transport",
      image: "transport-01.svg",
      text: "Did you know you can hire cars by the minute? Mevo allows you to ditch your car and use a eco friendly plug in hybrids whenever and for however long you need! These are available at a wide range of convenient range of locations city wide! Use the promo code LESSCARBON and get a discount on your first trip!",
      link: "http://www.mevo.co.nz",
      linkText: "Mevo"
    },
    {
      id: 2,
      title: "Shop Locally",
      image: "transport-01.svg",
      text: "Getting your self around impacts your footprint, so does getting your food around. Thinking about where your food comes from, and trying to buy food locally will make a difference without really needed a lifestyle change.",
    },

    {
      id: 3,
      title: "Transport",
      image: "cycling-01.svg",
      text: "Is cycling a carbon-friendly thing to do? Emphatically yes! Powered by biscuits, bananas or breakfast cereal, the bike is much more carbon-efficient than the most efficient of petrol cars. Cycling also keeps you healthy, provided you don’t end up under a bus.",
    },
    {
      id: 4,
      title: "Plant Some Trees",
      image: "carbon-offset-01.svg",
      text: "Pay for a tree to be planted. Who is leading the native tree count? Every native tree planted or funded helps grow the count. Check out the planters and funders making a difference.",
      link: "https://www.treesthatcount.co.nz/",
      linkText: "Trees that Count"
    },
    {
      id: 5,
      title: "Zero-Waste Products",
      image: "carbon-offset-01.svg",
      text: "PLASTIC & WASTE FREE PRODUCTS. Make the switch to using reusable, zero waste & plastic free items today. Everything is packaged with either recyclable, compostable or reusable packaging. All sourced & designed to replace everyday plastic & one use items in your life. ",
      link: "https://thenaturalco.nz/collections/plastic-free-products",
      linkText: "The Natural"
    },
    {
      id: 6,
      title: "Metlink",
      image: "transport-02.svg",
      text: "Trains and buses?! Say what? Did you know taking the train produces a 10th of the carbon than driving your own car? Metlink provides convenient, cheaper, and much more environmentally friendly ways to get to where you need to go! You'll be surprised how many stops there are.",
      link: "https://www.metlink.org.nz/",
      linkText: "Trees that Count"
    },
    {
      id: 7,
      title: "Car Pool",
      image: "transport-03.svg",
      text: "Maybe trains and buses aren't going to work for you, but there are some great ways to arrange car pooling for your daily commute. You can start one or join one with just a few easy clicks!",
      link: "https://www.smarttravel.org.nz/Public/Home.aspx",
      linkText: "Smart Travel Carpool"
    },
    {
      id: 8,
      title: "Buy an EV",
      image: "transport-01.svg",
      text: "It maybe seem a little bit radical, but owning an Electric vehicle simply makes sense! Even the cheapest of pure EVs have ranges over 100km, and charge from the wall is only a few hours. How far is your daily drive? When was the last time you drove more than 50km in a day? Driving an EV in New Zealand makes a heap of sense, and will impact your footprint way more than changing your home energy habits. Consider the switch now. ",
      link: "https://www.trademe.co.nz/motors/electric-cars",
      linkText: "Buy an EV"
    },
    {
      id: 9,
      title: "Switch to pure renewable",
      image: "energy-01.svg",
      text: "New Zealand does a great job of producing clean energy, but we can be even better! Considering changing your power company to a provider that offers power from pure renewable services. This would drop your home energy footprint to almost 0!",
      link: "https://ecotricity.co.nz/",
      linkText: "Use Cleaner Energy"
    },
    {
      id: 10,
      title: "Shorter Showers",
      image: "energy-01.svg",
      text: "Look, we are not saying no shower... please shower. But reducing your shower time drastically reduces your home energy usage. For most homes heating hot water is responsible for a majority of electricity.",
    },
    {
      id: 11,
      title: "More Efficient Heating",
      image: "energy-01.svg",
      text: "Heating is heating, right? Wrong. Different heaters require drastically different amounts of power. Look at those energy star ratings, and look at new options. Not only is this better for the environment, but it will reduce your electricity bill. You will pay off that new heater in no time!",
      link: "https://www.energywise.govt.nz/at-home/heating-and-cooling/heating-your-home/",
      linkText: "Better heating"
    },
    {
      id: 12,
      title: "LED Lightbulbs",
      image: "energy-01.svg",
      text: "Look we all know about how useless old light bulbs are. Did you know there are even better, even more efficient lights out now. Check out these LED options that need to be replaced less, and use less power than the 'old' energy efficient options",
      link: "https://www.energywise.govt.nz/at-home/lighting/choosing-the-right-energy-efficient-bulb/light-emitting-diodes-leds/?gclid=Cj0KCQjwwIPrBRCJARIsAFlVT8-uxXf4hdcAbrF05XyXJDqA1bPnPagpLDqLHqoQ_sI0BNpz_uzJiqsaAvG_EALw_wcB",
      linkText: "Better lighting"
    },
    {
      id: 13,
      title: "Bring Your Own Container",
      image: "carbon-offset-01.svg",
      text: "Can not get enough of that sushi fix, or maybe noodles are you thing? Most takeaway place will not only be happy for you to use your own container, they will most likely give you a decent discount as well. Ask about this and considering switching to a sushi joint that offers this.",
    },
  ];
  console.log(solutions);

  return solutions;
}


$(function () {
  // console.log will log a message or object to the browser developer console
  console.log("Loaded card.js ...");
  //let cards = new Array();
  let solutions = getSolutions();
  let solutionsHtml = "";

  for (let i = 0; i < solutions.length; i++) {
    solution = solutions[i];
    let card = new Card(solution.title, solution.image, solution.text, solution.link, solution.linkText, solution.id);
    solutionsHtml += card.html();
  }
  ;

  //console.log(solutionsHtml);
  $("#card-target").html(solutionsHtml);
});
