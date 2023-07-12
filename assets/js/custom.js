(function($) {
    'use strict';

    setInterval(function() { makeTimer(); }, 300);  
    // WOW JS
    new WOW().init();

    // Preloader JS
    
   

// Immediately invoked function to set the theme on initial load

    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();

$(window).on('load',function(){
    $(".preloader").fadeOut(500);
});

 // Count Time JS
 function makeTimer() {
    var edT = $('#startDate').val();
    var endTime = new Date(edT);			
    var endTime = (Date.parse(endTime)) / 1000;
    var now = new Date();
    var now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
}


// Subscribe form


// function to set a given theme/color-scheme
function setTheme(themeName) {
localStorage.setItem('theme', themeName);
document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
} else {
    setTheme('theme-dark');
}
}