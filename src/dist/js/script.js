const hamBtn = document.querySelector(".hamburger");
const menus = document.querySelector(".menu");
const arr = document.querySelector(".arrow")

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("is-active");
    menus.classList.toggle("menu-active");
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        arr.style.display = "block";

        if (menus.classList.contains("menu-active")) {
            menus.classList.remove("menu-active"); // Menghilangkan menu active
            hamBtn.classList.remove("is-active"); // Menghilangkan tombol hamburger active
        }
    } else {
        arr.style.display = "none";
    }
 });