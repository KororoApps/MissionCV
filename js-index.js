const ELEMENTS = [
  {
    id: "intro-planet",
    planetSrc: "./Cv_Galaxy/map/intro_planet.png",
    backgroundSrc: "./Cv_Galaxy/story/story_fond.jpg",
    story1Src: "./Cv_Galaxy/story/story_01.png",
    story2Src: "./Cv_Galaxy/story/story_02.png",
    parchmentSrc: "./Cv_Galaxy/story/story_03.png",
    planetAlt: "Planète Terre",
    height: "22vh",
    top: "40%",
    left: "2%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-16%",
    translateTargetY: "-15%",
  },
  {
    id: "mando-planet",
    planetSrc: "./Cv_Galaxy/map/mando_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/mando.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/mando_cv.png",
    planetAlt: "Planète Mandalorian",
    backgroundAlt: "Mando et Grogu",
    parchmentAlt: "CV Parchemin",
    height: "20vh",
    top: "15%",
    left: "30%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-20%",
    translateTargetY: "-20%",
  },
  {
    id: "mononoke-planet",
    planetSrc: "./Cv_Galaxy/map/mononoke_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/mononoke.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/mononoke_cv.png",
    planetAlt: "Planète Princesse Mononoké",
    backgroundAlt: "Dans la forêt",
    parchmentAlt: "CV Parchemin",
    height: "25vh",
    top: "10%",
    left: "50%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-10%",
    translateTargetY: "-15%",
  },
  {
    id: "porco-planet",
    planetSrc: "./Cv_Galaxy/map/porco_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/porco.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/porco_cv.png",
    planetAlt: "Planète Porco Rosso",
    backgroundAlt: "Luffy aviatrice",
    parchmentAlt: "CV Parchemin",
    height: "20vh",
    top: "15%",
    left: "75%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-24%",
    translateTargetY: "-20%",
  },
  {
    id: "catsby-planet",
    planetSrc: "./Cv_Galaxy/map/catsby_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/catsby.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/catsby_cv.png",
    planetAlt: "Planète Catsby",
    backgroundAlt: "Chat Catsby",
    parchmentAlt: "CV Parchemin",
    height: "25vh",
    top: "70%",
    left: "20%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-13%",
    translateTargetY: "-10%",
  },
  {
    id: "simpson-planet",
    planetSrc: "./Cv_Galaxy/map/simpson_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/simpson.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/simpson_cv.png",
    planetAlt: "Planète Simpson",
    backgroundAlt: "Petit papa Noël devant la télé",
    parchmentAlt: "CV Parchemin",
    height: "20vh",
    top: "75%",
    left: "45%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-23%",
    translateTargetY: "-20%",
  },
  {
    id: "ange-planet",
    planetSrc: "./Cv_Galaxy/map/ange_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/ange.png",
    parchmentSrc: "./Cv_Galaxy/background_worlds/ange_cv.png",
    planetAlt: "Planète tableau",
    backgroundAlt: "Un ange",
    parchmentAlt: "CV Parchemin",
    height: "25vh",
    top: "60%",
    left: "70%",
    targetWidth: "33vh",
    targetHeight: "33vh",
    translateTargetX: "-15%",
    translateTargetY: "-10%",
  },
];

const modal = document.querySelector(".modal");

//OUVERTURE INTRO DU CV
window.addEventListener("load", () => {
  modal.showModal();
});

const buttonNext = document.querySelector(".button-next");
const modalClose = document.querySelector(".modal-close");
const storyOne = document.getElementById("story-one");
const storyTwo = document.getElementById("story-two");
const storyThree = document.getElementById("story-three");

let clickCounter = 0;
//FAIRE DEFILER L'HISTOIRE
buttonNext.addEventListener("click", () => {
  console.log("youpi");

  if (clickCounter == 0) {
    storyOne.style.visibility = "hidden";
    storyTwo.style.visibility = "visible";
    clickCounter++;
  } else if (clickCounter == 1) {
    storyTwo.style.visibility = "hidden";
    storyThree.style.visibility = "visible";
    buttonNext.style.display = "none";
    modalClose.style.visibility = "visible";
  }
});

// const storyContainer = document.createElement("div");
// modal.appendChild(storyContainer);
// storyContainer.classList.add("story-container");
// const storyBackground = document.createElement("img");
// storyContainer.appendChild(storyBackground);
// storyBackground.classList.add("story");
// storyBackground.src = ELEMENTS[0].backgroundSrc;
// storyBackground.id = "story-background";
// const storyOne = document.createElement("img");
// storyContainer.appendChild(storyOne);
// storyOne.classList.add("story");
// storyOne.src = ELEMENTS[0].story1Src;
// storyOne.id = "story-one";
// const storyTwo = document.createElement("img");
// storyContainer.appendChild(storyTwo);
// storyTwo.classList.add("story");
// storyTwo.src = ELEMENTS[0].story2Src;
// storyTwo.id = "story-two";
// const storyThree = document.createElement("img");
// storyContainer.appendChild(storyThree);
// storyThree.classList.add("story");
// storyThree.src = ELEMENTS[0].parchmentSrc;
// storyThree.id = "story-three";

//FERMETURE INTRO DU CV

modalClose.addEventListener("click", () => {
  modal.close();
});

const galaxy = document.getElementById("galaxy");
const worldBar = document.getElementById("world-bar");
let translateGalaxyX;
let translateGalaxyY;

ELEMENTS.forEach((element) => {
  //CREATION DE LA DIV ACCUEILLANT LA PLANETE, LA TARGET, L'IMAGE ET LE CV
  const containerPlanet = document.createElement("div");
  galaxy.appendChild(containerPlanet);
  containerPlanet.classList.add("containerPlanet");
  containerPlanet.style.top = element.top;
  containerPlanet.style.left = element.left;
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

  //CREATION DE LA BALISE ACCUEILLANT L'IMAGE DE LA PLANETE
  const createPlanet = document.createElement("img");
  containerPlanet.appendChild(createPlanet);
  createPlanet.classList.add("planet");
  createPlanet.style.height = element.height;
  createPlanet.src = element.planetSrc;
  createPlanet.alt = element.planetAlt;

  //AU CLIC SUR LA PLANETE...
  containerPlanet.addEventListener("click", () => {
    //DEPLOYER LA WORLDBAR
    const active = worldBar.classList.toggle("active");
    //GROSSIR LA DIV DE LA PLANETE
    containerPlanet.classList.toggle("active");
    //TRANSLATE GALAXY
    galaxy.classList.toggle("active");

    //CREER DANS LA WORLDBAR LA BALISE POUR LE BACKGROUND ET LA BALISE POUR LE CV

    if (active) {
      const containerImages = document.createElement("div");
      worldBar.appendChild(containerImages);
      containerImages.classList.add("container-images");
      const backgroundWorld = document.createElement("img");
      const parchmentWorld = document.createElement("img");

      containerImages.appendChild(backgroundWorld);
      containerImages.appendChild(parchmentWorld);

      //IMAGE DE FOND DE LA PLANETE
      backgroundWorld.classList.add("background");
      backgroundWorld.src = element.backgroundSrc;
      console.log(backgroundWorld);

      //IMAGE DU CV
      parchmentWorld.classList.add("parchment");
      parchmentWorld.src = element.parchmentSrc;

      //CENTRER LA DIV DE LA PLANETE SUR L'ECRAN RESTANT
      const centerX = (window.innerWidth - worldBar.offsetWidth) / 2;
      const centerY = window.innerHeight / 2;

      translateGalaxyX =
        centerX -
        (containerPlanet.offsetLeft + containerPlanet.offsetWidth / 2);
      translateGalaxyY =
        centerY -
        (containerPlanet.offsetTop + containerPlanet.offsetHeight / 2);

      galaxy.style.setProperty("--translate-x", translateGalaxyX + "px");
      galaxy.style.setProperty("--translate-y", translateGalaxyY + "px");

      //SINON, SUPPRESSION DE LA DIV ET DES IMAGES DE WORLDBAR
    } else {
      const images = worldBar.querySelectorAll("img");
      images.forEach((image) => {
        image.remove();
      });
      const containerImage = worldBar.querySelector("div");
      containerImage.remove();
    }
  });
});
