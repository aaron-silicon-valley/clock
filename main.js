


function showTime() {
    // var format = require('dateFormat')
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var timeZone = 'Central Standard Time';
    var session = "PM";


    if (h == 19){
        h=0
    }


    if (h == 0){
        h=12
        session = "AM"

    }
    if (s <10 ){
        var time = h + ":" + m + ":" + 0 + s + " " + session;
    }

    else {
        var time = h + ":" + m + ":" + s + " " + session;
    }
    
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();

