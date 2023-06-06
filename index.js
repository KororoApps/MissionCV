import { createGalaxy } from "./galaxyCreator.js";
import { displayStoryModal } from "./displayStoryModal.js";
import { parallax } from "./parallaxEffect.js";

//OUVERTURE INTRO DU CV
window.addEventListener("load", () => {
  displayStoryModal();
  parallax();
});

const closeModal = document.querySelector(".click");

//CREATION GALAXY
createGalaxy();
