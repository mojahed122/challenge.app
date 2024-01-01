const menuBar = document.querySelector(".menu-bar i");
const naveGater = document.querySelector("ul");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    naveGater.classList.toggle("active");
})


// document.querySelector(".bi-list").onclick = function() {
//     document.querySelector(".navegater, ul").classList.toggle("open");
// }
