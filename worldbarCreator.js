import { displayPieceOfCv } from "./displayPieceOfCv.js";
import { textIntroPlanet } from "./displayStoryModal.js";
import { cvRetrieve } from "./retrievePieceOfCv.js";

const worldBar = document.getElementById("world-bar");
let translateGalaxyX;
let translateGalaxyY;

export function toggleActive(element, ELEMENTS, containerPlanet) {
  //DEPLOYER LA WORLDBAR
  const active = worldBar.classList.toggle("active");
  //GROSSIR LA DIV DE LA PLANETE
  containerPlanet.classList.toggle("active");
  //TRANSLATE GALAXY
  galaxy.classList.toggle("active");
  //SI WORLDBARD ACTIVE...
  worldbarActive(element, ELEMENTS, active, containerPlanet);
}

export function worldbarCreate(element, ELEMENTS, containerPlanet) {
  //AU CLIC SUR LA PLANETE DEPLOIEMENT DE LA WORLDBAR, AGRANDISSEMENT DE LA PLANETE...
  containerPlanet.addEventListener("click", () => {
    toggleActive(element, ELEMENTS, containerPlanet);
  });
}

export function worldbarActive(element, ELEMENTS, active, containerPlanet) {
  //CREER DANS LA WORLDBAR LA BALISE POUR LE BACKGROUND ET LA BALISE POUR LE CV

  if (active) {
    //AFFICHAGE LORSQUE LA WORLD BAR EST DEPLOYEE
    const [parchmentWorld, containerImages] = displayWorldbar(
      element,
      containerPlanet
    );

    //CREATION DE LA DIV ACCUEILLANT L'EXTRAIT DE CV
    const pieceOfCV = document.createElement("div");
    //CREATION DU BOUTTON POUR RECUPERER LE MORCEAU DE CV
    const buttonRetrieve = document.createElement("button");

    cvRetrieve(element, containerImages, pieceOfCV, buttonRetrieve, ELEMENTS);

    displayPieceOfCv(
      parchmentWorld,
      containerImages,
      pieceOfCV,
      buttonRetrieve,
      element,
      ELEMENTS,
      containerPlanet,
      worldBar
    );

    const body = document.querySelector("body");

    //CREATION D'UNE AIDE
    const heldEchap = document.getElementById("help-echap");
    heldEchap.style.visibility = "initial";
    heldEchap.textContent =
      "Cliquez n'importe où dans l'univers ou sur la croix en haut à droite pour continuer l'aventure :)";

    const helpPlanet = document.getElementById("help-planet");
    helpPlanet.style.visibility = "hidden";

    //AU CLIC SUR RETOUR, WORLDBAR SE RANGE
    const returnToGalaxy = document.querySelector(".return-to-galaxy");
    returnToGalaxy.addEventListener("click", () => {
      toggleActive(element, ELEMENTS, containerPlanet);
      heldEchap.style.visibility = "hidden";
      helpPlanet.style.visibility = "initial";
      helpPlanet.textContent = "Cliquez sur une planète pour la visiter";
    });

    //AU CLIC SUR BACKDROP, WORLDBAR SE RANGE
    const backdrop = document.createElement("div");
    body.appendChild(backdrop);
    backdrop.classList.add("backdrop");
    backdrop.id = "backdrop";
    console.log(backdrop);
    backdrop.style.height = "100%";
    backdrop.style.width = "100%";
    backdrop.style.top = "0";
    backdrop.style.position = "absolute";
    worldBar.style.zIndex = "3";
    backdrop.addEventListener("click", () => {
      toggleActive(element, ELEMENTS, containerPlanet);
      heldEchap.style.visibility = "hidden";
      helpPlanet.style.visibility = "initial";
      helpPlanet.textContent = "Cliquez sur une planète pour la visiter ;)";
    });

    if (element.id == "intro-planet") {
      textIntroPlanet();
    }

    //SINON, SUPPRESSION DE LA DIV ET DES IMAGES DE WORLDBAR
  } else if (!active) {
    const images = worldBar.querySelectorAll("img");
    images.forEach((image) => {
      image.remove();
    });
    const containerImage = worldBar.querySelector("div");
    containerImage.remove();
    backdrop.remove();
  }
}

function displayWorldbar(element, containerPlanet) {
  //CREATION D'UNE DIV POUR ACCUEILLIR LES IMAGES DU MONDE CORRESPONDANT (BACKGROUND + PARCHEMIN)
  const [parchmentWorld, containerImages, returnToGalaxy] =
    createElementsWorldBar(element);

  //CENTRER LA PLANETE LORS DE L'AFFICHAGE DE LA WORLDBAR
  centerPlanetWorldbar(containerPlanet);

  return [parchmentWorld, containerImages, returnToGalaxy];
}

function createElementsWorldBar(element) {
  //CREATION D'UN DIV POUR ACCUEILLIR LES IMAGES DU MONDE CORRESPONDANT (BACKGROUND + PARCHEMIN)
  const containerImages = document.createElement("div");
  worldBar.appendChild(containerImages);
  containerImages.classList.add("container-images");

  //CREATION D'UN DIV POUR AFFICHER LE BACKGROUND
  const containerBackground = document.createElement("div");
  containerImages.appendChild(containerBackground);
  containerBackground.classList.add("container-background");
  const backgroundWorld = document.createElement("img");
  containerBackground.appendChild(backgroundWorld);
  //IMAGE DE FOND DE LA PLANETE
  backgroundWorld.classList.add("background");
  //AJUSTEMENT DE LA POSITION DE L'IMAGE
  backgroundWorld.style.setProperty("--right-position", element.rightPosition);
  backgroundWorld.style.setProperty("--top-position", element.topPosition);
  backgroundWorld.src = element.backgroundSrc;

  //CREATION D'UN BALISE IMAGE POUR AFFICHER LE PARCHEMIN
  const parchmentWorld = document.createElement("img");
  containerBackground.appendChild(parchmentWorld);
  //IMAGE DU CV
  parchmentWorld.classList.add("parchment");
  parchmentWorld.src = element.parchmentSrc;
  parchmentWorld.style.setProperty("--right-position", element.rightPosition);
  parchmentWorld.style.setProperty("--top-position", element.topPosition);

  //CREATION BOUTON RETOUR SUR GALAXY
  const returnToGalaxy = document.createElement("p");
  containerBackground.appendChild(returnToGalaxy);
  returnToGalaxy.classList.add("return-to-galaxy");
  returnToGalaxy.innerHTML = "X";

  return [parchmentWorld, containerImages, returnToGalaxy];
}

function centerPlanetWorldbar(containerPlanet) {
  //CENTRER LA DIV DE LA PLANETE SUR L'ECRAN RESTANT
  const centerX = (window.innerWidth - worldBar.offsetWidth) / 2;
  const centerY = window.innerHeight / 2;

  translateGalaxyX =
    centerX - (containerPlanet.offsetLeft + containerPlanet.offsetWidth / 2);
  translateGalaxyY =
    centerY - (containerPlanet.offsetTop + containerPlanet.offsetHeight / 2);

  galaxy.style.setProperty("--translate-x", translateGalaxyX + "px");
  galaxy.style.setProperty("--translate-y", translateGalaxyY + "px");
}
