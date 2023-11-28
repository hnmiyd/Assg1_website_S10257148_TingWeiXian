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

links.forEach((link, index)=>{
    link.addEventListener("click",()=>{
        links.forEach((menu_link)=>{
            menu_link.classList.remove("active-li")
        })
        links[index].classList.add("active-li");
        nav.classList.remove("nav-active")
        header.classList.remove("header-fixed")
        hamburger.classList.add("fa-menu")
        hamburger.classList.remove("fa-x");
    })
})

window.addEventListener('scroll',()=>{
    if(window.scrollY > 100){
        header.classList.add("bg-header")
    }
    else{
        header.classList.remove("bg-header")
    }
})

$('.slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
  });
