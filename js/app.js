//Esercizio
// const lamp = document.querySelector(".lamp");
// const buttonOnOff = document.getElementById("btn");

// buttonOnOff.addEventListener("click", function(){
//     lamp.src = "./img/yellow_lamp.png";
//     lamp.classList.add("lamp-on");
//     buttonOnOff.innerHTML = "Spegni";
// })

//Esercizio Bonus
// const lamp = document.querySelector(".lamp");
// const buttonOnOff = document.getElementById("btn");

// buttonOnOff.addEventListener("click", function () {
//     if (lamp.src.includes("./img/white_lamp.png")) {
//         lamp.src = "./img/yellow_lamp.png";
//         lamp.classList.add("lamp-on");
//         buttonOnOff.innerHTML = "Spegni";
//     } else {
//         lamp.src = "./img/white_lamp.png";
//         buttonOnOff.innerHTML = "Accendi";
//     }
// })




//Metodo 2
const lampOff = document.querySelector(".white-lamp");
const lampOn = document.querySelector(".yellow-lamp");
lampOn.classList.add("display-none");
const buttonOnOff = document.getElementById("btn");

buttonOnOff.addEventListener("click", function () {
    if (lampOn.classList.contains("display-none")) {
        lampOn.classList.toggle("display-none");
        lampOff.classList.add("display-none");
    } else {
        lampOn.classList.add("display-none");
        lampOff.classList.toggle("display-none");
    }
})
