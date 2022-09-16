function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds == 1 ? seconds + " second": seconds + " seconds"

        display.innerHTML = `To keep you safe, this website will redirect you to Home in ${seconds}, or click <a href='/' id='redirect'>Here</a> to redirect automatically.`;

        if (--timer < 0) {
            window.location = '/';
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
    var time = 10;
    var displayText = document.getElementById('nr-timer');
    startTimer(time, displayText);
};