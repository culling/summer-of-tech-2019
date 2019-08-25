function firstQuestion(){
  let q1 = $("#hasCar").val();
  if(q1 === "ownsCar"){
//  record q1 outcome
    displayCarQuestions();
  }


}
function displayCarQuestions(){

  let q2 = $("#carUsage").val();

}

function skipCarQuestions(){}

function toggleCarUse(){
  let notSure = $("#notSure:checked").length;

  if(notSure){
    $("#elecInput").attr("disabled", true);
  }
  else{
    $("#elecInput").removeAttr("disabled");
  }
}

function togglePower(){
  let notSure = $("#notSure:checked").length;

  if(notSure){
    $("#elecInput").attr("disabled", true);
  }
  else{
    $("#elecInput").removeAttr("disabled");
  }
}

$(function () {
  $("#notSure").change(() => {
    togglePower()
  });

  $('.nextBut').click((e) => {
    let currentContainer = $(e.currentTarget).parents('.question-container');

    if (currentContainer.length === 0) return;

    let currentNum = parseInt(currentContainer.data('num'));

    let nextContainer = currentContainer.siblings('[data-num='+ (currentNum + 1) + ']')

    if (nextContainer.length === 1) {
      currentContainer.hide();
      nextContainer.show();
    }
  });

  $('.submit').click(() => {
    $('.questions').hide();
    $('.solutions').show();

    window.scrollTo(0,0);
    showGraph();
  })

})


function showGraph(){


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

}
