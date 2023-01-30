let menuButton = document.querySelector(".btn-drop-down");
let dropMenu = document.getElementById("drop-menu");

menuButton.addEventListener("click", function () {
  dropMenu.classList.toggle("dropdown");
});
document.addEventListener("click", (event) => {
  let dropMenu = document.getElementById("drop-menu");
  if (!dropMenu.contains(event.target) && !menuButton.contains(event.target)) {
    dropMenu.classList.add("dropdown");
  }
});
