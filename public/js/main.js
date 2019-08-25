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

//let treesCount = 3;
//let background = new Background();


//let graphing = new graphing();
// $(...) will run the function you give it when the page is loaded & ready
$(function () {
  // console.log will log a message or object to the browser developer console
  console.log("page loaded...");
  //background.drawTrees(treesCount);

  /*
  $('.submit').click(() => {
    treesCount = provideDataForTrees();

    let canvasWidth = $("#canvas-container").width();
    let canvas  = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    context.canvas.width = canvasWidth;
    background.drawTrees(treesCount);
  });
  */

  // $("#plant-tree-btn").click(function () {
  //   treesCount++;
  //   background.drawTrees(treesCount);
  // });



});

