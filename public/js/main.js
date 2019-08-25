/*
 * We are using jQuery functions as they are pretty easy to use.
 * You can do all of this stuff using vanilla javascript though
 */

function printCurrentDate() {
  let today = new Date();
  let dateString = "";
  dateString += today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate();
  $(".date").text(dateString);
}

function pad(n, width) {
  n = n + '';
  if (n >= width) {
    return n;
  }
  let zerosToPad = (width - n.length) + 1;
  let paddingZeros = new Array(zerosToPad).join('0');
  return (paddingZeros + n);
}

let treesCount = 3;
let background = new Background();


//let graphing = new graphing();
// $(...) will run the function you give it when the page is loaded & ready
$(function () {
  // console.log will log a message or object to the browser developer console
  console.log("page loaded...");
  background.drawTrees(treesCount);

  $('.submit').click(() => {

    let canvas  = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
  });

  $("#plant-tree-btn").click(function () {
    treesCount++;
    background.drawTrees(treesCount);
  });



  $("#show-graph-btn").click(function () {

    nv.addGraph(function () {
      console.log("Add graph hit!");

      let width = $(".graph-container").width();
      let graph  = document.getElementById('graph-01');
      console.log("Graph container width: " + width);
      graph.width = width;

      var chart = nv.models.discreteBarChart()
        .x(function (d) { return d.label })    //Specify the data accessors.
        .y(function (d) { return d.value })
        .staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
        .showValues(true)       //...instead, show the bar value right on top of each bar.
        ;

      d3.select('#graph-01')
        .datum(provideDataForGraph())
        .call(chart);

      nv.utils.windowResize(chart.update);
      chart.duration = 900;
      chart.tooltips = false;
      return chart;
    });


  });

});

