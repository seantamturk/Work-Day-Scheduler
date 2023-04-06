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


// Adds date and time to header
var currentHour;
$(document).ready(function () {
  setInterval(function () {
    $('#currentDay').text(dayjs().format('dddd, MMMM D, h:mm:ss a'));
    currentHour = dayjs().hour()
    onHourUpdated(currentHour); //callback function to get currentHour outside function scope
  }, 1000);
});

// Current hour color updater
// if at least 1 element has a class name of the current hour, adds class of present
function onHourUpdated(hour) {
  // test console log 
  console.log("currentHour: " + currentHour);
  console.log("hour: " + hour);
  if ($('.' + hour.toString()).length) {
    $('.' + hour.toString()).addClass('present');
  }
  // sets past coloring for all hours less than current
  $('div').filter(function () {
    return parseInt($(this).attr('class')) < hour;
  }).addClass('past');

  // ssets future coloring for all hours > current
  $('div').filter(function () {
    return parseInt($(this).attr('class')) > hour;
  }).addClass('future');

}

// local storage code

// Select all save buttons and text inputs
const saveBtns = document.querySelectorAll('.saveBtn');
const textInputs = document.querySelectorAll('.description');

// Add click event listener to each save button
saveBtns.forEach(function (saveBtn, index) {
  saveBtn.addEventListener('click', function (event) {
    event.preventDefault();

    // Get the hour and description for the corresponding text input
    const hour = this.parentElement.querySelector('.hour').textContent;
    const description = textInputs[index].value;

    // Check if description is not empty and save to local storage or remove from local storage accordingly
    if (description !== '') {
      localStorage.setItem(hour, description);
    } else {
      localStorage.removeItem(hour);
    }
  });
});

// Load saved descriptions from local storage when the page is loaded
window.addEventListener('load', function () {
  const textInputs = document.querySelectorAll('.description');
  textInputs.forEach(function (textInput) {
    // Get the hour for the corresponding text input and load the saved description from local storage if it exists
    const hour = textInput.parentElement.querySelector('.hour').textContent;
    const savedDescription = localStorage.getItem(hour);
    if (savedDescription) {
      textInput.value = savedDescription;
    }
  });
});















