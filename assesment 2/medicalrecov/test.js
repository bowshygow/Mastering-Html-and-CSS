const hamburger = document.getElementById("hamburger");
const navul = document.getElementById("navul");

console.log("bowshy");

hamburger.addEventListener("click", () => {
  console.log("bowshy");
  navul.classList.toggle("show");
});

hamburger.setAttribute("onclick", console.log("bowshy"));
