"use strict";

// Elements

const headerLowerEl = document.querySelector(".header-lower");
const toggleMenuBtn = document.querySelector("#toggle-menu-btn");

// Event listeners

toggleMenuBtn.addEventListener("click", function () {
  headerLowerEl.classList.toggle("open");
});
