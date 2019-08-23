/*
* We are using jQuery functions as they are pretty easy to use.
* You can do all of this stuff using vanilla javascript though
*/


// $(...) will run the function you give it when the page is loaded & ready
$(function () {
  // console.log will log a message or object to the browser developer console
  console.log("page loaded...");
  printCurrentDate();
  timer();

  $("#animal-trivia-btn").click(function () { getAnimalQuestions(); });
  /*
   * TODO: You will need to use a css selector to get jQuery to find the button element in the page
   * Then you will need to make a new javascript function to do stuff for when the button
   * is clicked and pass it into the click function above...
   * The function should call one of the functions below, and pass the other in as the callback...
   */

  // $("#trademe-jobs-btn").click(function(){ getTradeMeJobs(); });
  $("#github-btn").click( ()=>{ 
    let githubUsername = $("#github-username-input").val();
    console.log(githubUsername);
    getGithubProjects(githubUsername); 
  }  );
});

function getAnimalQuestions() {
  console.log("Button Clicked!");
  fetchRandomTriviaQuestion(displayQuestionAndAnswer);
  $('#results-area').text("Fetching questions");
}


function displayQuestionAndAnswer(question, answer) {
  $("#results-area").text("True or false?");
  $("#question-display").text(question);
  $("#answer-display").text("Answer: " + answer);
}

// Gets a random animal trivia question from an API, then pass the result to the callback function
function fetchRandomTriviaQuestion(callback) {
  // This API gets random trvia questions
  // The url includes parameters to configure the API to only return
  // true or false trivia on animals encoded in base64

  // Configure your own api call at https://opentdb.com/api_config.php
  let promise = $.get("https://opentdb.com/api.php?amount=1&category=27&type=boolean&encode=base64");

  // $.get is asynchronous, so we need to define a
  // handler for when the request is complete
  promise.done(function (data) {
    // Check the console when you have the API call working in order
    // to inspect the json object that we recieve
    console.log(data);

    // extract and decode the results
    let results = data.results;

    // atob() is a built in method to decode base64 encoded strings
    let question = atob(results[0].question);
    let answer = atob(results[0].correct_answer);

    // call the function we passed into fetchRandomTriviaQuestion
    callback(question, answer);
  })
}


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

function timer() {
  let myTime = 15 * 60;
  timerWithTime(myTime);
}

function printTimer(minutes, seconds) {
  seconds = pad(seconds, 2);
  $(".timer").text(minutes + ":" + seconds);
}

function timerWithTime(fullTimeInSeconds) {
  let minutes = Math.floor(fullTimeInSeconds / 60);
  let seconds = fullTimeInSeconds % 60;
  printTimer(minutes, seconds);
  fullTimeInSeconds--;
  //console.log(fullTimeInSeconds);
  window.setTimeout(function () { timerWithTime(fullTimeInSeconds) }, 1000);
}

function getGithubProjects(githubUsername){
  console.log("getGithubProjects hit!");

  let urlString = "https://api.github.com/users/" + githubUsername + "/repos";
  let promise = $.get(urlString);
  promise.done( function(data){  printGithubProjects(data); });

}

function printGithubProjects(projects){
  console.log(projects);
  let projectSummary = "";


  projects.map(project =>{
    projectSummary += '<div class="github-project-name">'  + project.name + '</div>';
  });
  $("#projects-target").html( projectSummary );
}
/*
function getTradeMeJobs(){
  let jobsCategory = 5119;
  let key = "F8026E13B6B8508E978EF453B2A6AD6C";
  let urlString = "https://api.trademe.co.nz/v1/Search/Jobs.json?category=" + jobsCategory + "&key=" + key;
  let promise = $.get(urlString);
  promise.done( function(data){  printTradeMeJobs(data); });
}

function printTradeMeJobs(data){

}

function getTradeMeJobCategories(){
  console.log("getJobs hit!");

  let urlString = "https://api.trademe.co.nz/v1/Categories/Jobs.json";

  let promise = $.get(urlString);

  promise.done( function(data){printTradeMeJobCategories(data);   });
}

function printTradeMeJobCategories(data){
  console.log("Print Jobs hit!");
  console.log(data);
}
*/