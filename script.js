const button=document.querySelector(".btn");
console.log(button);
const rgb=document.querySelector("#rgb");
button.addEventListener("click",(e)=>{
    rgb.textContent=random();
    document.body.style.backgroundColor=random();
});
function random(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}