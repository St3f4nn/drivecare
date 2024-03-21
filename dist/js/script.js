"use strict";

// Elements

const headerEl = document.querySelector("header");
const toggleMenuBtn = document.querySelector("#toggle-menu-btn");

// Event listeners

toggleMenuBtn.addEventListener("click", function () {
  headerEl.classList.toggle("open");
});
