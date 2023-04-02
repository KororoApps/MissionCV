import { displayPieceOfCv } from "./displayPieceOfCv.js";
import { cvRetrieve } from "./retrievePieceOfCv.js";

const worldBar = document.getElementById("world-bar");
let translateGalaxyX;
let translateGalaxyY;

export function worldbarCreate(element, ELEMENTS, containerPlanet) {
  //AU CLIC SUR LA PLANETE DEPLOIEMENT DE LA WORLDBAR, AGRANDISSEMENT DE LA PLANETE...
  containerPlanet.addEventListener("click", () => {
    //DEPLOYER LA WORLDBAR
    const active = worldBar.classList.toggle("active");
    //GROSSIR LA DIV DE LA PLANETE
    containerPlanet.classList.toggle("active");
    //TRANSLATE GALAXY
    galaxy.classList.toggle("active");
    //SI WORLDBARD ACTIVE...
    worldbarActive(element, ELEMENTS, active, containerPlanet);
  });
}

function worldbarActive(element, ELEMENTS, active, containerPlanet) {
  //CREER DANS LA WORLDBAR LA BALISE POUR LE BACKGROUND ET LA BALISE POUR LE CV

  if (active) {
    //AFFICHAGE LORSQUE LA WORLD BAR EST DEPLOYEE
    const [parchmentWorld, containerImages] = displayWorldbar(
      element,
      containerPlanet
    );

    //COMPTER LE NOMBRE DE CLICK SUR LE CV
    let clickCounterPieceCV = 0;
    //CREATION DE LA DIV ACCUEILLANT L'EXTRAIT DE CV
    const pieceOfCV = document.createElement("div");
    //CREATION DU BOUTTON POUR RECUPERER LE MORCEAU DE CV
    const buttonRetrieve = document.createElement("button");

    cvRetrieve(element, containerImages, pieceOfCV, buttonRetrieve);

    displayPieceOfCv(
      parchmentWorld,
      containerImages,
      clickCounterPieceCV,
      pieceOfCV,
      buttonRetrieve,
      element,
      ELEMENTS,
      containerPlanet,
      worldBar
    );

    //SINON, SUPPRESSION DE LA DIV ET DES IMAGES DE WORLDBAR
  } else {
    const images = worldBar.querySelectorAll("img");
    images.forEach((image) => {
      image.remove();
    });
    const containerImage = worldBar.querySelector("div");
    containerImage.remove();
  }
}

function displayWorldbar(element, containerPlanet) {
  //CREATION D'UN DIV POUR ACCUEILLIR LES IMAGES DU MONDE CORRESPONDANT (BACKGROUND + PARCHEMIN)
  const [parchmentWorld, containerImages] = createElementsWorldBar(element);

  //CENTRER LA PLANETE LORS DE L'AFFICHAGE DE LA WORLDBAR
  centerPlanetWorldbar(containerPlanet);

  return [parchmentWorld, containerImages];
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

  return [parchmentWorld, containerImages];
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
