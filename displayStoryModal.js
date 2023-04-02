import { STORIES } from "./stories.js";
import { writer } from "./writerFunction.js";

const buttonNext = document.querySelector(".button-next");
const blinkParchment = document.getElementById("blink-parchment");
const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

let clickCounter = 0;

export function displayStoryModal() {
  //OUVERTURE DE LA MODAL
  modal.showModal();
  //CREATION DE LA DIV STORY ACCUEILLANT UNE IMAGE ET UN TEXTE
  const imageStory = createStory();
  //AFFICHAGE DE LA 1er IMAGE
  imageStory.src = STORIES[clickCounter].image;
  //AFFICHAGE DU 1er TEXTE
  writer(STORIES[clickCounter].txt);
  //AFFICHAGE DES IMAGES SUIVANTES SUIVANT LE NOMBRE DE CLIQUES SUR "SUIVANT"
  nextImageStory(imageStory);
  //EN CLIQUANT SUR LE PARCHEMIN QUI CLIGNOTE, L'ANIMATION S'ARRETE + PETIT MOT D'ENCOURAGEMENT
  readyToContinue();
}

function createStory() {
  //CREATION DE LA DIV STORY ACCUEILLANT UNE IMAGE ET UN TEXTE
  const story = document.createElement("div");
  blinkParchment.before(story);
  story.classList.add("story");
  const imageStory = document.createElement("img");
  story.appendChild(imageStory);
  imageStory.classList.add("image-story");
  imageStory.classList.add("story");
  const textStory = document.createElement("p");
  story.appendChild(textStory);
  textStory.classList.add("speak");
  return imageStory;
}

function nextImageStory(imageStory) {
  //AFFICHAGE DES IMAGES SUIVANTES SUIVANT LE NOMBRE DE CLIQUES SUR "SUIVANT"
  buttonNext.addEventListener("click", () => {
    clickCounter++;
    imageStory.src = STORIES[clickCounter].image;
    writer(STORIES[clickCounter].txt);
    //SI CLICKCOUNTER == 3, CLIGNOTER ET AFFICHER LE BOUTON PRET
    if (clickCounter == STORIES.length - 1) {
      buttonNext.style.display = "none";
      modalClose.style.display = "initial";
      modalClose.style.animationPlayState = "paused";
      setTimeout(() => {
        blinkParchment.style.display = "initial";
      }, 5000);
    }
  });
}

function readyToContinue() {
  //EN CLIQUANT SUR LE PARCHEMIN QUI CLIGNOTE, L'ANIMATION S'ARRETE + PETIT MOT D'ENCOURAGEMENT
  blinkParchment.querySelector("img").addEventListener("click", () => {
    const clickImage = document.querySelector(".click");
    clickImage.style.visibility = "hidden";
    blinkParchment.style.animation = "initial";
    const firstPiece = document.createElement("div");
    blinkParchment.appendChild(firstPiece);
    firstPiece.classList.add("first-piece");
    firstPiece.innerHTML = `Bravo ! Vous avez récupéré un premier morceau ! <br> 
      Allez sur la planète Terre pour le voir de plus près !`;
    modalClose.style.animationPlayState = "running";
  });
}
