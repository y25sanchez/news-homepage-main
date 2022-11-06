const menu = document.getElementById("menu")
const navLinks = document.getElementById("navLinks")
const layer = document.getElementById("layer")



menu.addEventListener("click", ()=> {
    menu.classList.toggle("logo-active")
    navLinks.classList.toggle("active")
    layer.classList.toggle("active")
})

document.querySelectorAll(".nav_links").forEach(e => e.addEventListener("click", () => {
    menu.classList.remove("logo-active")
    navLinks.classList.remove("active")
    layer.classList.remove("active")
}))