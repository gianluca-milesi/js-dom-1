const lamp = document.querySelector(".lamp");
const buttonOnOff = document.getElementById("btn");

buttonOnOff.addEventListener("click", function(){
    lamp.src = "./img/yellow_lamp.png";
    lamp.classList.add("lamp-on");
    buttonOnOff.innerHTML = "Spegni";
})