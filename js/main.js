import { Accordion } from "./accordion.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const accordionElements = document.querySelectorAll(".custom-accordion");

  accordionElements.forEach((accordionElement) => {
    new Accordion(accordionElement);
    console.log("Initialized accordion for:", accordionElement.id);
  });

  const subheader = document.querySelector(".subheader-banner");
  subheader.addEventListener("click", () => {
    alert("Order your free guide here!");
  });
});
