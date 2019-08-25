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

  $('input').change((e) => {
    let currentContainer = $(e.currentTarget).parents('.question-container');

    if (currentContainer.length === 0) return;

    let currentNum = parseInt(currentContainer.data('num'));

    let nextContainer = currentContainer.siblings('[data-num='+ (currentNum + 1) + ']')

    if (nextContainer.length === 1) {
      currentContainer.hide();
      nextContainer.show();
    }
  });

})
