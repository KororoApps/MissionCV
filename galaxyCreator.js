import { ELEMENTS } from "./elements.js";
import { worldbarCreate } from "./worldbarCreator.js";

const galaxy = document.getElementById("galaxy");

export const createGalaxy = () => {
  ELEMENTS.forEach((element) => {
    //CREATION DE LA DIV ACCUEILLANT LA PLANETE, LA TARGET, LA WORLDBAR
    const containerPlanet = createPlanet(element);
    //POSITIONEMENT DE CHAQUE TARGET
    createTarget(element, containerPlanet);
    //CREATION DE LA BALISE ACCUEILLANT L'IMAGE DE LA PLANETE
    imagePlanet(element, containerPlanet);
    //AU CLIC SUR LA PLANETE DEPLOIEMENT DE LA WORLDBAR, AGRANDISSEMENT DE LA PLANETE...
    worldbarCreate(element, ELEMENTS, containerPlanet);
  });
  //AFFICHAGE CV COMPLET
  cvComplet();
};

function createPlanet(element) {
  //CREATION DE LA DIV ACCUEILLANT LA PLANETE, LA TARGET, LA WORLD BAR
  const containerPlanet = document.createElement("div");
  galaxy.appendChild(containerPlanet);
  containerPlanet.classList.add("container-planet");
  containerPlanet.id = element.id;
  //POSITIONNEMENT DE CHAQUE DIV
  containerPlanet.style.setProperty("--top", element.top);
  containerPlanet.style.setProperty("--left", element.left);
  //POSITIONNEMENT DE CHAQUE DIV EN MODE SMARTPHONE
  containerPlanet.style.setProperty("--portrait-top", element.portraitTop);
  containerPlanet.style.setProperty("--portrait-left", element.portraitLeft);
  return containerPlanet;
}

function createTarget(element, containerPlanet) {
  //POSITIONEMENT DE CHAQUE TARGET
  containerPlanet.style.setProperty("--target-width", element.targetWidth);
  containerPlanet.style.setProperty("--target-height", element.targetHeight);
  containerPlanet.style.setProperty(
    "--target-translate-x",
    element.translateTargetX
  );
  containerPlanet.style.setProperty(
    "--target-translate-y",
    element.translateTargetY
  );
  containerPlanet.style.setProperty(
    "--target-portrait-translate-x",
    element.portraitTranslateTargetX
  );
  containerPlanet.style.setProperty(
    "--target-portrait-translate-y",
    element.portraitTranslateTargetY
  );
}

function imagePlanet(element, containerPlanet) {
  //CREATION DE LA BALISE ACCUEILLANT L'IMAGE DE LA PLANETE
  const createPlanet = document.createElement("img");
  containerPlanet.appendChild(createPlanet);
  createPlanet.classList.add("planet");
  createPlanet.style.height = element.height;
  createPlanet.src = element.planetSrc;
  createPlanet.alt = element.planetAlt;
}

function cvComplet() {
  const body = document.querySelector("body");
  const piecesOfParchment = document.createElement("div");
  body.appendChild(piecesOfParchment);
  piecesOfParchment.classList.add("pieces-of-parchment-retrieve");
  piecesOfParchment.style.position = "absolute";
  piecesOfParchment.style.height = "100px";
  piecesOfParchment.style.position = "absolute";
  piecesOfParchment.style.width = "100px";
  piecesOfParchment.style.top = "0px";
  piecesOfParchment.style.left = "0.5%";

  console.log(piecesOfParchment);
  const completParchment = document.createElement("img");
  piecesOfParchment.appendChild(completParchment);
  completParchment.src = "./Cv_Galaxy/piece_of_cv/cv-complet.png";
  completParchment.classList.add("cv-complet");
  completParchment.style.height = "200px";
  completParchment.style.opacity = "0.2";
  completParchment.style.position = "absolute";
  completParchment.style.top = "0px";
  completParchment.style.border = "2px solid rgb(74, 12, 85)";
}
