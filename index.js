import { createGalaxy } from "./galaxyCreator.js";
import { gameGuide } from "./gameGuide.js";
import { displayStoryModal } from "./displayStoryModal.js";

//OUVERTURE INTRO DU CV
window.addEventListener("load", () => {
  displayStoryModal();
});

//CREATION GALAXY
createGalaxy();

//GUIDE DE JEU
gameGuide();
