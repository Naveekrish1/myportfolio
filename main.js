
const hambBar = document.querySelector(".hamb-bar")
const menuList = document.querySelector(".menu-list")

hambBar.addEventListener("click", ()=>{
     menuList.classList.toggle("togg")
})