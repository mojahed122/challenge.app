const menuBar = document.querySelector(".menu-bar");
const navegater = document.querySelector(".navegater ul");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    navegater.classList.toggle("active");
})


// document.querySelector(".bi-list").onclick = function() {
//     document.querySelector(".navegater, ul").classList.toggle("open");
// }
