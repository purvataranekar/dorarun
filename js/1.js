var current_pos = {x : 0, y : 0};
var current_vel = {x : 1, y : 0};
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "60px Comic Sans";
ctx.fillText("TIME", 900, 50);

var img = new Image();

img.addEventListener("load", function () {
	ctx.drawImage(img, 0, 0);
})

img.src = 'images/new_dora.png';

window.onkeydown = check_return; 

/*window.setTimeout("Tick()", 1000);
function Tick() {
    window.setTimeout("Tick()", 1000);

}
setInterval(1000);*/

function check_return(event) {
    var oldx,oldy;
    console.log('checking return');
	var key = event.keyCode || event.which;
	if(key === 37) {             //left key
        current_vel.x = -1;
        current_vel.y = 0;
    }

    else if(key === 38) {       //top key
        //redraw(0,-10);
        current_vel.x = 0;
        current_vel.y = -1;
    }

    else if(key === 40) {       //down key
        //redraw(0,10);
        current_vel.x = 0;
        current_vel.y = 1;
        //console.log('down key pressed')
    }

    else if(key === 39) {       //right key
        //redraw(10,0);
        current_vel.x = 1;
        current_vel.y = 0;
	}
    else if(key === 80 || key === 112) {    //pause
        oldx = current_vel.x;
        oldy = current_vel.y;
        show_time(time);
        clearInterval(main_interval);
        clearInterval(velocity_interval);
        current_vel.x = 0;
        current_vel.y = 0;
    }
    else if(key === 82 || key === 114) {
        setInterval(decrease_time,1000);    //resume
        show_time(time);
        time--;
        current_vel.x = oldx;
        current_vel.y = oldy;  
    }
        
}

function redraw(x, y) {
    erase();
    current_pos.x = x;
    current_pos.y = y;
    if(current_pos.x >= 820)
        current_pos.x = 0;

    else if(current_pos.y >= 620)    
        current_pos.y = 0;
    else if(current_pos.x < 0) {
        current_pos.x = 810;
    }
    else if(current_pos.y < 0) {
        current_pos.y = 610;
    }

    ctx.drawImage(img, current_pos.x, current_pos.y);
}
        
function erase() {
    x = current_pos.x;
    y = current_pos.y;
    ctx.clearRect(x, y, x + 79, y + 92);
}

function velocity() {
    var current_x = current_pos.x;
    var current_y = current_pos.y;
    redraw(current_x + current_vel.x * 2, current_y + current_vel.y * 2);
}
