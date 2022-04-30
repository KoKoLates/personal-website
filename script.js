function musicPlay(){
    var video = document.getElementById("music");
    video.volume = 0.05;
}

function displayDate(){
    var dateToday = new Date();
    let addZero = (num) =>{
        return num < 10 ? `0${num}` : num;
    }

    let YY = dateToday.getFullYear();
    let MM = addZero(dateToday.getMonth() + 1);
    let DD = addZero(dateToday.getDate())
    let hh = addZero(dateToday.getHours());
    let mm = addZero(dateToday.getMinutes());
    let ss = addZero(dateToday.getSeconds());

    document.getElementById("time").textContent = `${MM}-${DD}-${YY} ${hh}:${mm}:${ss}`;
}

setInterval(displayDate, 1000);
musicPlay();