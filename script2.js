/*  background rengini değiştirmek için oluşturulan js kodları */
/* Generated js codes to change the background color */

const body = document.querySelector("body");
const button= document.querySelector("button");

const color = ["black", "white", "yellow","green","pink","purple"];

button.addEventListener("click", ChangeBackground);
function ChangeBackground() {

body.style.backgroundColor = "purple"; {
    const randomNumber = Math.floor(Math.random() * color.length);
    const selectColor = color[randomNumber];
    body.style.backgroundColor = selectColor;
        
}
        
}