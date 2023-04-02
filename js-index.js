import { createGalaxy } from "./js-createGalaxy.js";
import { gameGuide } from "./js-gameGuide.js";
import { storyScroll } from "./js-modalStart.js";

const modal = document.querySelector(".modal");

//OUVERTURE INTRO DU CV
window.addEventListener("load", () => {
  modal.showModal();
  storyScroll();
});

//CREATION GALAXY
createGalaxy();

gameGuide();
