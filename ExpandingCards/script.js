"use strict";
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.classList.remove("expand");
    });
    box.classList.add("expand");
  });
});
