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

console.log("loop: " + music.loop);
console.log("muted: " + music.muted);
setInterval(displayDate, 1000);
var play = false;
var flag = true;
function button(){
    if (play == false){
        music.play();
        music.volume = 0.05;
        play = true;
        console.log("play: " + play);
    }

    if (flag == true){
        document.getElementById("button").innerHTML = "<img src='./img/sound.png' width='35px'>";
        music.muted = false;
        flag = false;
        console.log("muted: " + music.muted);
    }
    else{
        document.getElementById("button").innerHTML = "<img src='./img/mute.png' width='35px'>";
        flag = true;
        music.muted = true;
        console.log("muted: " + music.muted);
    }
}

