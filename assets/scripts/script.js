"use strict";

const modalButtons = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

modalButtons.forEach((el) => {
  el.addEventListener("click", openModal);
});
closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
