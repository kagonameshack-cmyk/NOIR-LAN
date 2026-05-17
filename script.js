/* HEADER SCROLL */

const header =
document.querySelector("header");

if(header){

    window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 50){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    });

}

/* NAV SCROLL */

const nav =
document.querySelector("nav");

if(nav){

    window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 80){

            nav.classList.add("scrolled");

        }

        else{

            nav.classList.remove("scrolled");

        }

    });

}

/* MOBILE MENU */

const menuToggle =
document.querySelector(".menu-toggle");

const mobileMenu =
document.querySelector(".mobile-menu");

if(menuToggle && mobileMenu){

    menuToggle.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle("active");

    });

}
