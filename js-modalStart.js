import { STORY } from "./js-storyManager.js";
import { writer } from "./js-writerFunction.js";

const buttonNext = document.querySelector(".button-next");
const blinkParchment = document.getElementById("blink-parchment");
const modalClose = document.querySelector(".modal-close");

export function storyScroll() {
  let clickCounter = 0;
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
  //AFFICHAGE DE LA 1er IMAGE
  imageStory.src = STORY[clickCounter].image;
  //AFFICHAGE DU 1er TEXTE
  //textStory.innerHTML = `${STORY[clickCounter].txt}`;
  writer(STORY[clickCounter].txt);
  //AFFICHAGE DES IMAGES SUIVANTES SUIVANT LE NOMBRE DE CLIQUES SUR "SUIVANT"
  buttonNext.addEventListener("click", () => {
    clickCounter++;
    imageStory.src = STORY[clickCounter].image;
    writer(STORY[clickCounter].txt);
    //SI CLICKCOUNTER == 3, CLIGNOTER ET AFFICHER LE BOUTON PRET
    if (clickCounter == STORY.length - 1) {
      buttonNext.style.display = "none";
      modalClose.style.display = "initial";
      modalClose.style.animationPlayState = "paused";
      setTimeout(() => {
        blinkParchment.style.display = "initial";
      }, 5000);
    }
  });
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
