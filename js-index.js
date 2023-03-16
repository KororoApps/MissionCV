const ELEMENTS = [
  {
    id: "intro-planet",
    planetSrc: ["./Cv_Galaxy/map/intro_planet.png"],
    alt: "planète_Terre",
  },
  {
    id: "mando-planet",
    planetSrc: "./Cv_Galaxy/map/mando_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/mando.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/mando_cv.png",
    alt: "planète_Mandalorian",
  },
  {
    id: "mononoke-planet",
    planetSrc: "./Cv_Galaxy/map/mononoke_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/mononoke.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/mononoke_cv.png",
    alt: "planète_MononokeHime",
  },
  {
    id: "porco-planet",
    planetSrc: "./Cv_Galaxy/map/porco_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/porco.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/porco_cv.png",
    alt: "planète_PorcoRocco",
  },
  {
    id: "catsby-planet",
    planetSrc: "./Cv_Galaxy/map/catsby_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/catsby.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/catsby_cv.png",
    alt: "planète_Catsby",
  },
  {
    id: "simpson-planet",
    planetSrc: "./Cv_Galaxy/map/simpson_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/simpson.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/simpson_cv.png",
    alt: "planète_Simpson",
  },
  {
    id: "ange-planet",
    planetSrc: "./Cv_Galaxy/map/ange_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/ange.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/ange_cv.png",
    alt: "planète_ange",
  },
];

const galaxy = document.getElementById("galaxy");
const worldBar = document.getElementById("world-bar");

ELEMENTS.forEach((element) => {
  const pictureSrc = element.planetSrc;
  const pictureAlt = element.alt;
  const pictureId = element.id;
  const createPlanet = document.createElement("img");
  galaxy.appendChild(createPlanet);
  createPlanet.classList.add("planets");
  createPlanet.src = pictureSrc;
  createPlanet.alt = pictureAlt;
  createPlanet.id = pictureId;
  createPlanet.addEventListener("click", () => {
    worldBar.classList.toggle("active");
  });
});
