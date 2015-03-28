velocity_interval = setInterval(velocity,20);
var time = 10;
text();
var main_interval = setInterval(decrease_time,1000);

function decrease_time() {
    if(time > 0) {
        show_time(time);
        time--;
    }
    else {
        show_time(time);
        clearInterval(main_interval);
        clearInterval(velocity_interval);
    }
}
function text()
{
    var text = document.getElementById("text");
    //text.appendChild = "TIMER";
}
function show_time(t) {
    timer = document.getElementById('data');
    timer.innerHTML = t;
}