// const lamp = document.querySelector(".lamp");
// const buttonOnOff = document.getElementById("btn");

// buttonOnOff.addEventListener("click", function(){
//     lamp.src = "./img/yellow_lamp.png";
//     lamp.classList.add("lamp-on");
//     buttonOnOff.innerHTML = "Spegni";
// })


const lamp = document.querySelector(".lamp");
const buttonOnOff = document.getElementById("btn");

buttonOnOff.addEventListener("click", function () {
    if (lamp.src.includes("white_lamp.png")) {
        lamp.src = "./img/yellow_lamp.png";
        lamp.classList.add("lamp-on");
        buttonOnOff.innerHTML = "Spegni";
    } else {
        lamp.src = "./img/white_lamp.png";
        buttonOnOff.innerHTML = "Accendi";
    }
})