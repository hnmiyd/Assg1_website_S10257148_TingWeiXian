const hamburger = document.getElementById("hamburger")
const nav = document.querySelector(".menu")
const header = document.querySelector("header")
const links = document.querySelectorAll(".menu li")

hamburger.addEventListener("click",()=>{
    if(nav.classList.contains("nav-active")){
        nav.classList.remove("")
        header.classList.remove("")
        hamburger.classList.add("")
        hamburger.classList.remove("fa-x");
    }
    else{
        nav.classList.add("nav-active")
        header.classList.add("")
        hamburger.classList.remove("")
        hamburger.classList.add("fa-x");
    }
})
