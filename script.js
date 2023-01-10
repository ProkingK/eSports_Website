'use strict';

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0 , len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav);

const navClose = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElements(navLinks, "click", navClose);

const header = document.querySelector("[data-header]");

const activeElement = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElement);


const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
    this.style.setProperty("--top", `${event.offsetY}px`);
    this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple);