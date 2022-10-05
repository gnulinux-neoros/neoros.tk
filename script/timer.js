var content = document.getElementById('nr-pagecontent');

content.textContent = `We couldn't find the page ${window.location.pathname}, make sure you've provided us the right page.`

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds == 1 ? seconds + " second": seconds + " seconds"

        display.textContent = `The website will automatically redirect you to home in ${seconds}.`;

        if (--timer < 0) {
            window.location = '/';
            display.textContent = 'Redirecting...'
        }
        

        function endTimer(){
            timer = 0;
            console.log("assewrnewkr")
        }

        var redirect = document.getElementById("redirect");
        
        redirect.addEventListener("click", endTimer);

    }, 1000);
}

window.onload = function () {
    var time = 9;
    var displayText = document.getElementById('nr-timer');
    startTimer(time, displayText);
};