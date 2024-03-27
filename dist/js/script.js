"use strict";

// Elements

const headerLowerEl = document.querySelector(".header-lower");
const toggleMenuBtn = document.querySelector("#toggle-menu-btn");

const yearEl = document.querySelector("#year");

const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

// Event listeners

toggleMenuBtn.addEventListener("click", function () {
  headerLowerEl.classList.toggle("open");
});
