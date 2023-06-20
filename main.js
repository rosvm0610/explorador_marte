canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array =["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);

//Define el ancho y alto de la imagen del explorador.
rover_width = 100;
rover_height =90;

background_image = nasa_mars_images_array[random_number];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Crea la función "add()"
function add(){
    //Define la variable con una nueva imagen
    background_imgTag = new Image();
    // Define una función para cargar esta variable
    background_imgTag.onload =uploadBackground;
    // Carga la imagen
    background_imgTag.src = background_image;
    
    //Define la variable con una nueva imagen
    rover_imgTag = new Image();
    // Define una función para cargar esta variable
    rover_imgTag.onload =uploadrover;
    // Carga la imagen
    rover_imgTag.src =rover_image;
}                                        

//Crea una función uploadBackground()
 function uploadBackground(){
    //Dibuja la imagen de fondo
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 }                             
    
 function uploadrover(){
    //Dibuja la imagen de fondo
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
 }   

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
	if(keyPressed == "38"){
        up();
    }
     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
     if(keyPressed == "40"){
        down();
    }
    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
    if(keyPressed == "37"){
     left();
    }
    if(keyPressed == "39"){
        right();
    }
}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        uploadBackground();
        uploadrover();
    }
}
function down(){
	if(rover_y <=500){
        rover_y = rover_y + 10;
        uploadBackground();
        uploadrover();
    }
}
function right(){
	if(rover_x <=700){
        rover_x = rover_x + 10;
        uploadBackground();
        uploadrover();
    }
}
function left(){
	if(rover_x >= 0){
        rover_x = rover_x - 10;
        uploadBackground();
        uploadrover();
    }
}



