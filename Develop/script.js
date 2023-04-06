// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


var currentHour;
// Adds date and time to header
$(document).ready(function () {
  setInterval(function() {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, h:mm:ss a'));
  currentHour = dayjs().hour()
  onHourUpdated(currentHour); //callback function to get currentHour outside function scope
  // console.log(currentHour)
}, 1000);
});

// test console log 
console.log(currentHour)
// Current hour color updater
// if at least 1 element has a class name of the current hour, adds class of present
function onHourUpdated(hour){
  // test console log 
  console.log(currentHour)
if ($('.' + hour.toString()).length) {
  $('.' + hour.toString()).addClass('present');
}}

// 



// $(document).ready(function () {
//   setInterval(function() {
//     currentHour = dayjs().format('HH');
//   }, 1000);
// });




// start at i=0, run as long as i < Array.length, increment i++ each run of the Code
// use a for loop to loop code until sucess
// if i === .some() value of the array, then its true and stop code
// if i === .some() value if the array, then rerun the code incrementing i++ to next index



