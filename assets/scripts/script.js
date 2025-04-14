"use strict";
// Elements
const modalButtons = document.querySelectorAll(".show-modal");
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelectorAll(".close-modal");
//////////////////////////////////////////
// Vars
let modalIdElDataset;
let modalID;
let curElement;
////////////////////////////////////////////
// Functions
function openModal(el) {
  el.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal(el) {
  el.classList.add("hidden");
  overlay.classList.add("hidden");
}
//////////////////////////////////////////
// Events
modalButtons.forEach((el) => {
  el.addEventListener("click", (e) => {
    modalID = e.target.innerHTML.split(" ")[2];
    modal.forEach((element) => {
      if (element.dataset.modal === modalID) {
        curElement = element;
        openModal(curElement);
      }
    });
  });
});

closeBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    curElement = e.target.closest(".modal");
    closeModal(curElement);
  });
});

overlay.addEventListener("click", () => {
  closeModal(curElement);
});
