// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
    
    var noon = 12;
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
 

  
  showCurrentTime();
};
updateClock();
// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var setGreeting = function()
{
    var greetingMsg = document.getElementById('greeting');

    var currentTime = new Date();
    var hours = currentTime.getHours();
    if (hours > 18)
    {
        greetingMsg = "Good Evening!";
    }
    else if (hours > 12)
    {
        greetingMsg = "Good Afternoon!";
    }
    else
    {
        greetingMsg = "Good Morning!";
    }
greeting.innerText = greetingMsg;
};
setGreeting();