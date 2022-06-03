let menuBtn = document.getElementById("menuBtn");
let sideBar = document.getElementById("sidebar");
let closeBtn = document.getElementById("closeBtn")

menuBtn.addEventListener("click", function() {
  sideBar.style.width = "20vw";
  closeBtn.style.display = "";
})