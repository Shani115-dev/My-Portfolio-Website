// Navbar related logi
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("navbar_hover");
  } else {
    nav.classList.remove("navbar_hover");
  }
};
// downloading cv
// JavaScript to handle the download on button click
document.getElementById("downloadBtn").addEventListener("click", function () {
  // Trigger the hidden link to download the CV
  document.getElementById("cvDownloadLink").click();

  // Optional: Show a message or handle more logic here
  console.log("CV download started.");
});

// Add class target blank to all anchor
// Select all anchor elements on the page
const links = document.querySelectorAll("a");

// Loop through each link and add the target attribute
links.forEach((link) => {
  link.setAttribute("target", "_blank");
});

