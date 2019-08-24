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


// $(...) will run the function you give it when the page is loaded & ready
$(function () {
  // console.log will log a message or object to the browser developer console
  console.log("page loaded...");
  printCurrentDate();


});
