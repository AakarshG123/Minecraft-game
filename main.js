var canvas = new fabric.Canvas('myCanvas')
block_image_width = 30
block_image_height = 30
player_x = 10
player_y = 10
var player_object = ""
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y,
            left:player_x
        
        });canvas.add(player_object)
    })
}
function new_image(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        block_image_object = Img
        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top:player_y,
            left:player_x
        
        });canvas.add(block_image_object)
    })
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
    Keypress = e.keyCode
    console.log(Keypress)
    if(e.shiftKey==true&&Keypress=='80'){
        console.log("shift key and p key pressed together")
        block_image_width += 10
        block_image_height += 10
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_height
    }
    if(e.shiftKey==true&&Keypress=='77'){
        console.log("shift key and m key pressed together")
        block_image_width -= 10
        block_image_height -= 10
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_height
    }
    if(Keypress == '37'){
        left()
        console.log("left")
    }
    if(Keypress == '38'){
        Up()
        console.log("up")
    }
    if(Keypress == '39'){
        Right()
        console.log("Right")
    }
    if(Keypress == '40'){
        Down()
        console.log("Down")
    }
    if(Keypress == '87'){
        new_image('wall.jpg')
        console.log("W")
    }
    if(Keypress == '71'){
        new_image('ground.png')
        console.log("G")
    }
    if(Keypress == '76'){
        new_image('light_green.png')
        console.log("L")
    }
    if(Keypress == '84'){
        new_image('trunk.jpg')
        console.log("T")
    } if(Keypress == '82'){
        new_image('roof.jpg')
        console.log('R')
    }
    if(Keypress == '89'){
        new_image('yellow_wall.png')
        console.log("Y")
    }
    if(Keypress == '68'){
        new_image('dark_green.png')
        console.log("L")
    }
    if(Keypress == '85'){
        new_image('unique.png')
        console.log("U")
    }
    if(Keypress == '67'){
        new_image('cloud.jpg')
        console.log("C")
    }
}
function Up(){
    if(player_y>=10){
        player_y = player_y-block_image_height
        console.log("Block image height = "+block_image_height)
        console.log("when up key is pressed then x = "+player_x+",y = "+player_y)
        canvas.remove(player_object)
        player_update()
        
    }
}
function Down(){
    if(player_y<=625){
        player_y = player_y+block_image_height
        console.log("Block image height = "+block_image_height)
        console.log("when down key is pressed then x = "+player_x+",y = "+player_y)
        canvas.remove(player_object)
        player_update()
        
    }
}
function Right(){
    if(player_x<=1350){
        player_x = player_x+block_image_width
        console.log("Block image width = "+block_image_width)
        console.log("when up key is pressed then x = "+player_x+",y = "+player_y)
        canvas.remove(player_object)
        player_update()
        
    }
}
function left(){
    if(player_x>=0){
        player_x = player_x-block_image_width
        console.log("Block image width = "+block_image_width)
        console.log("when up key is pressed then x = "+player_x+",y = "+player_y)
        canvas.remove(player_object)
        player_update()
        
    }
}