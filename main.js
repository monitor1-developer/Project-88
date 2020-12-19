var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);

        player_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(player_object);
    });
}

function new_Image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeigh(block_image_height);

        block_image_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift are being pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift are being pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == '37') {
        console.log("left is being pressed");
        left();
    }

    if (keyPressed == '38') {
        console.log("up is being pressed");
        up();
    }

    if (keyPressed == '39') {
        console.log("right is being pressed");
        right();
    }

    if (keyPressed == '40') {
        console.log("down is being pressed");
        down();
    }

    if (keyPressed == '87') {
        console.log("w is being pressed");
        new_Image('wall.jpg');
    }

    if (keyPressed == '71') {
        console.log("g is being pressed");
        new_Image('ground.png');
    }

    if (keyPressed == '76') {
        console.log("l is being pressed");
        new_Image('light_green.png');
    }

    if (keyPressed == '84') {
        console.log("t is being pressed");
        new_Image('trunk.jpg');
    }

    if (keyPressed == '82') {
        console.log("r is being pressed");
        new_Image('roof.jpg');
    }

    if (keyPressed == '89') {
        console.log("y is being pressed");
        new_Image('yellow_wall.png');
    }

    if (keyPressed == '82') {
        console.log("r is being pressed");
        new_Image('roof.jpg');
    }

    if (keyPressed == '68') {
        console.log("d is being pressed");
        new_Image('dark_green.png');
    }

    if (keyPressed == '67') {
        console.log("c is being pressed");
        new_Image('cloud.jpg');
    }

    if (keyPressed == '85') {
        console.log("u is being pressed");
        new_Image('unique.png');
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block_image_height" + block_image_height);
        console.log("when up arrow key is pressed x =" + player_x + "y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("block_image_height" + block_image_height);
        console.log("when down arrow key is pressed x =" + player_x + "y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_image_width;
        console.log("block_image_width" + block_image_width);
        console.log("when left arrow key is pressed x =" + player_x + "y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("block_image_width" + block_image_width);
        console.log("when right arrow key is pressed x =" + player_x + "y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}