import { ELEMENTS } from "./elements.js";
import { STORIES } from "./stories.js";
import { worldbarActive } from "./worldbarCreator.js";
import { writer } from "./writerFunction.js";

const buttonNext = document.querySelector(".button-next");
const blinkParchment = document.getElementById("blink-parchment");
const modal = document.querySelector(".modal");

let clickCounter = 0;

export function displayStoryModal() {
  //OUVERTURE DE LA MODAL
  modal.showModal();
  console.log(innerHeight);
  console.log(innerWidth);
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
    const textStory = document.querySelector(".speak");
    textStory.id = STORIES[clickCounter].id;
    console.log(clickCounter);
    imageStory.src = STORIES[clickCounter].image;
    writer(STORIES[clickCounter].txt);
    //SI CLICKCOUNTER == 3, CLIGNOTER ET AFFICHER LE BOUTON PRET
    if (clickCounter == STORIES.length - 1) {
      buttonNext.style.display = "none";
      setTimeout(() => {
        blinkParchment.style.display = "initial";
      }, 5000);
    }
  });
}

function readyToContinue() {
  //EN CLIQUANT SUR LE PARCHEMIN QUI CLIGNOTE, L'ANIMATION S'ARRETE + PETIT MOT D'ENCOURAGEMENT
  blinkParchment.querySelector("img").addEventListener("click", () => {
    const worldBar = document.getElementById("world-bar");
    modal.close();
    const introPlanet = document.getElementById("intro-planet");
    //DEPLOYER LA WORLDBAR
    const active = worldBar.classList.toggle("active");
    //GROSSIR LA DIV DE LA PLANETE
    introPlanet.classList.toggle("active");
    //TRANSLATE GALAXY
    galaxy.classList.toggle("active");
    //CREATION D'UNE AIDE
    const helpEchap = document.getElementById("help-echap");
    helpEchap.style.visibility = "initial";
    helpEchap.textContent =
      "Cliquez n'importe où dans l'univers ou sur la croix en haut à droite pour continuer l'aventure :)";
    //SI WORLDBARD ACTIVE...

    worldbarActive(ELEMENTS[0], ELEMENTS, active, introPlanet);
    textIntroPlanet();
  });
}

export function textIntroPlanet() {
  let counter = counterTrue(ELEMENTS);
  const containerIntroPlanet = document.querySelector(".container-background");
  const speakIntroPlanet = document.createElement("p");
  containerIntroPlanet.appendChild(speakIntroPlanet);
  speakIntroPlanet.classList.add("speak-intro-planet");
  speakIntroPlanet.innerHTML = `Merci ! Déjà ${counter} morceau de trouvé ! <br> 
  Faites un tour dans la galaxie et n'hésitez pas à visiter chaque planète que vous verrez. <br> 
  Je crois qu'il reste ${
    ELEMENTS.length - counter
  } morceaux de mon CV à trouver...`;
}

function counterTrue(ELEMENTS) {
  let counterTrue = 0;
  ELEMENTS.forEach((element) => {
    if (element.cvRetrieve == true) {
      counterTrue++;
    }
  });
  return counterTrue;
}
