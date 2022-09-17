/* Secunde pana incepe download-ul */
var delay = 1;
var multiplicator = setTimeout("download()", delay*1000);

/* Dynamic HTML */
var theDelay = 4;
var timer = setTimeout("changeInfo()",theDelay*1000)
function changeInfo() {
    document.getElementById("infodl").innerHTML = "DOWNLOAD HAS STARTED ✔️";
};
var timerH = setTimeout("changeHeart()",theDelay*0000)
function changeHeart() {
    document.getElementById("heart").innerHTML = "♥";
};