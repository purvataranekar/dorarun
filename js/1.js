var current_pos = {x : 0, y : 0};
var current_vel = {x : 1, y : 0};
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "60px Comic Sans";
ctx.fillText("TIME", 900, 50);
var p = document.getElementById("pause");

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
    console.log('checking return');
	var key = event.keyCode || event.which;
	if(key === 37) {             //left key
        //redraw(-10,0);
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
        console.log('down key pressed')
    }

    else if(key === 39) {       //right key
        //redraw(10,0);
        current_vel.x = 1;
        current_vel.y = 0;
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

function pause()
{
    var value = text.text;
    text.clearInterval();
}