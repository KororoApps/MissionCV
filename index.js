import { galaxyCreator } from "./galaxyCreator.js";
import { gameGuide } from "./gameGuide.js";
import { displayStoryModal } from "./displayStoryModal.js";

//OUVERTURE INTRO DU CV
window.addEventListener("load", () => {
  displayStoryModal();
});

//CREATION GALAXY
galaxyCreator();

//GUIDE DE JEU
gameGuide();
