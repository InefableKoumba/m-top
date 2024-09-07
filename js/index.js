const toggleMenu = document.querySelectorAll(".toggle-menu");

const menu = document.querySelector("#mobile-menu");

for (let i = 0; i < toggleMenu.length; i++) {
  toggleMenu[i].addEventListener("click", () => {
    console.log("clicked");
    menu.classList.toggle("hidden");
  });
}
