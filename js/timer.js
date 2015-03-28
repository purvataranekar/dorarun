velocity_interval = setInterval(velocity,20);
var time = 10;
main_interval = setInterval(decrease_time,1000);
var current_state = "resumed";

function decrease_time() {
    console.log('time'+time);
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

function show_time(t) {
    timer = document.getElementById('data');
    timer.innerHTML = t;
}
