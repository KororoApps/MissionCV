import { createGalaxy } from "./galaxyCreator.js";
import { displayStoryModal } from "./displayStoryModal.js";

//OUVERTURE INTRO DU CV
window.addEventListener("load", () => {
  displayStoryModal();
});

//CREATION GALAXY
createGalaxy();
