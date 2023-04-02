import { ELEMENTS } from "./elements.js";
import { worldbarCreate } from "./worldbarCreator.js";

const galaxy = document.getElementById("galaxy");

export const galaxyCreator = () => {
  ELEMENTS.forEach((element) => {
    //CREATION DE LA DIV ACCUEILLANT LA PLANETE, LA TARGET, LA WORLDBAR
    const containerPlanet = planetCreate(element);
    //POSITIONEMENT DE CHAQUE TARGET
    targetCreate(element, containerPlanet);
    //CREATION DE LA BALISE ACCUEILLANT L'IMAGE DE LA PLANETE
    imagePlanet(element, containerPlanet);
    //AU CLIC SUR LA PLANETE DEPLOIEMENT DE LA WORLDBAR, AGRANDISSEMENT DE LA PLANETE...
    worldbarCreate(element, ELEMENTS, containerPlanet);
  });
};

function planetCreate(element) {
  //CREATION DE LA DIV ACCUEILLANT LA PLANETE, LA TARGET, LA WORLD BAR
  const containerPlanet = document.createElement("div");
  galaxy.appendChild(containerPlanet);
  containerPlanet.classList.add("container-planet");
  containerPlanet.id = element.id;
  //POSITIONNEMENT DE CHAQUE DIV
  containerPlanet.style.top = element.top;
  containerPlanet.style.left = element.left;
  return containerPlanet;
}

function targetCreate(element, containerPlanet) {
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
