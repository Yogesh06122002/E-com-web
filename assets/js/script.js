'use strict';
// navbar toggle

const overlay=document.querySelector("[dataoverlay]");
const navOpenbtn=document.querySelector("[data-nav-open-btn]");
const navbar=document.querySelector("[data-navbar]");
const navClosebtn=document.querySelector("[data-nav-close-btn]");

const navElem=[overlay,navOpenbtn,navClosebtn];

for(let i=0;i<navElem.length;i++){
    navElem[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    })
}

const header= document.querySelector("[data-header]");
const goTopBtn=document.querySelector("[data-go-top]");
window.addEventListener("scroll",function(){
    if(window.scrollY >= 80){
        header.classList.add("active");
        goTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});