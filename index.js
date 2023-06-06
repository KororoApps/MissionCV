import { createGalaxy } from "./galaxyCreator.js";
import { displayStoryModal } from "./displayStoryModal.js";
import { parallax } from "./parallaxEffect.js";

//OUVERTURE INTRO DU CV
window.addEventListener("load", () => {
  displayStoryModal();
});

const closeModal = document.querySelector(".click");

closeModal.addEventListener("click", () => {
  parallax();
});

//CREATION GALAXY
createGalaxy();
