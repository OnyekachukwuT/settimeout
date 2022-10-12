const changeColorButton = document.getElementById("changeColorButton");
const cancelChangeColor = document.getElementById("cancelChangeColor");
const box = document.getElementById("box");

changeColorButton.addEventListener('click',onchangeColorClick);
cancelChangeColor.addEventListener('click',cancelChangeColorOnclick);

let timerId = 0;

function onchangeColorClick(){
    setTimeout(changeColor,2000)
    changeColorButton.disabled = true;
}
function cancelChangeColorOnclick(){
    clearTimeout(timerId);
    changeColorButton.disabled =  false;
}


function changeColor() {
    changeColorButton.disabled = false;
    if(box.style.backgroundColor == "blue"){
        box.style.backgroundColor = "white";
    }
    else{
        box.style.backgroundColor = "blue";
    }
}