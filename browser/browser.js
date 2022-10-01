var time = document.getElementById("time");

function Time (e) {
    var getCurrentDate = new Date();
    var getCurrentTime = getCurrentDate.getHours();

    if(getCurrentTime >= 0){
        e.textContent = 'Good morning';
    }

    if(getCurrentTime >= 12){
        e.textContent = 'Good afternoon';
    }

    if(getCurrentTime >= 18){
        e.textContent = 'Good evening';
    }
}

Time(time);