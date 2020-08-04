var imagesArray = ['images/red.png', 'images/blue.png', 'images/green.png', 'images/yellow.png', 'images/purple.png'];

function displayImage(){

    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num = Math.floor(Math.random() * 5);
    var num2 = Math.floor(Math.random() * 5);
    var num3 = Math.floor(Math.random() * 5);
    var num4 = Math.floor(Math.random() * 5);
    var num5 = Math.floor(Math.random() * 5);
    var num6 = Math.floor(Math.random() * 5);
    var num7 = Math.floor(Math.random() * 5);
    var num8 = Math.floor(Math.random() * 5);
    var num9 = Math.floor(Math.random() * 5);
    var num10 = Math.floor(Math.random() * 5);
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.getElementById("balloon").src = imagesArray[num];
    document.getElementById("balloon2").src = imagesArray[num2];
    document.getElementById("balloon3").src = imagesArray[num3];
    document.getElementById("balloon4").src = imagesArray[num4];
    document.getElementById("balloon5").src = imagesArray[num5];
    document.getElementById("balloon6").src = imagesArray[num6];
    document.getElementById("balloon7").src = imagesArray[num7];
    document.getElementById("balloon8").src = imagesArray[num8];
    document.getElementById("balloon9").src = imagesArray[num9];
    document.getElementById("balloon10").src = imagesArray[num10];

}
