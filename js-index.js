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
    rightPosition: "10%",
    topPosition: "50%",
    pieceOfCV: `<h1>ELODIE SPONTON</h1> 
    <h4>DEVELOPPEUSE WEB</h4>
    <h3>COORDONNEES</h3>
    <p>Tél : 06 42 96 52 26</p>
    <p>Mail : elodie.sponton@yahoo.fr</p>
    <p>Adresse : 4H allée de la 1er Division Fr Libre</p>
    <p>21000 DIJON</p>`,
    cvRetrieve: true,
  },
  {
    id: "mando-planet",
    planetSrc: "./Cv_Galaxy/map/mando_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/mando.jpg",
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
    rightPosition: "0%",
    topPosition: "5%",
    pieceOfCV: `<h2>FORMATIONS AUTODIDACTES</h2> 
    <h3>Apprentissage de l'algorithmique et Java</h3>
    <p>Etude avec le livre "Algorithmique - Des bases à la POO en Java"</p>
    <h3>Apprentissage de Javascript</h3>
    <p>Etude avec la formation en ligne Javascript de A à Z, de Fromscratch.podia.com</p>
    <h3>Apprentissage de Symfony</h3>
    <p>Etude avec la formation en ligne We Develop Me, de Lior Chamla</p>
    <h3>Apprentissage de HTML, CSS, PHP, SQL, GIT</h3>
    <p>Etude avec OpenClassRooms</p>`,
    cvRetrieve: false,
  },
  {
    id: "mononoke-planet",
    planetSrc: "./Cv_Galaxy/map/mononoke_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/mononoke.jpg",
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
    rightPosition: "50%",
    topPosition: "50%",
    pieceOfCV: `<h2>FORMATIONS</h2> 
    <h3>Titre de niveau II, Responsable QSE</h3>
    <h4>2014-2016 / CESI Entreprise, Dijon</h4>
    <h3>Master 2, Management des Risques Industriels et Environnementaux</h3>
    <h4>2012-2013 / Université de Poitiers</h4>
    <h3>Master 2, Espace Rural et Environnement</h3>
    <h4>2011-2012 / Université de Bourgogne</h4>`,
    cvRetrieve: false,
  },
  {
    id: "porco-planet",
    planetSrc: "./Cv_Galaxy/map/porco_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/porco.jpg",
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
    rightPosition: "50%",
    topPosition: "50%",
    pieceOfCV: `<h2>EXPERIENCES PROFESSIONNELLES</h2> 
    <h3>Assistante admnistrative - Sanitel</h3>
    <h4>Octobre 2017 - En cours</h4>
    <p>Accueil physique et téléphonique, Établissement de DC4 et contrat de sous-traitance, Vérification des factures...</p>
    <h3>Assistane administrative - Loiseau Volets Roulants</h3>
    <h4>Février - Octobre 2017</h4>
    <p>Prise et suivie de commandes, Suivide de la trésorerie, Accueil physique et téléphonique.</p>
    <h3>Ingénieure QSE - Schneider Electric</h3>
    <h4>Septembre 2014 - Mars 2016</h4>
    <p>Unification du système de management de deux usines.</p>`,
    cvRetrieve: false,
  },
  {
    id: "catsby-planet",
    planetSrc: "./Cv_Galaxy/map/catsby_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/catsby.jpg",
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
    rightPosition: "50%",
    topPosition: "40%",
    pieceOfCV: `<h2>INTÉRÊTS ET LOISIRS</h2> 
    <h4>Dessin et création</h4>
    <p>Animation d'un blog Wordpress et d'un compte Instagram.</p>
    <p>Création de vidéos Tiktok.</p>
    <p>Participation à l'Inktober depuis 2016.</p>`,
    cvRetrieve: false,
  },
  {
    id: "simpson-planet",
    planetSrc: "./Cv_Galaxy/map/simpson_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/simpson.jpg",
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
    rightPosition: "50%",
    topPosition: "20%",
    pieceOfCV: `<h2>PROJETS PERSONNELS</h2> 
    <h3>- Création d'un jeu de tir pour m'exercer à Javascript</h3>
    <p>https://kororoapps.github.io/ShootTeemo/</p>
    <h3>- Création d'un site internet "Cookiniste" pour m'exercer à Symfony</h3>`,
    cvRetrieve: false,
  },
  {
    id: "ange-planet",
    planetSrc: "./Cv_Galaxy/map/ange_planet.png",
    backgroundSrc: "./Cv_Galaxy/background_worlds/ange.jpg",
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
    rightPosition: "50%",
    topPosition: "20%",
    pieceOfCV: `<h2>PROFIL PERSONNEL</h2> 
    <p>Autonome</p>
    <p>Créative</p>
    <p>Persévérante</p>
    <p>Je suis confiante dans ma capacité à progresser</p>`,
    cvRetrieve: false,
  },
];

const STORY = [
  {
    image: "./Cv_Galaxy/story/story_01.png",
    txt: `Haaaaa ! Mon CV ! <br> Noooon, revenez !!`,
  },
  {
    image: "./Cv_Galaxy/story/story_02.png",
    txt: `Les chats de l'espace ont encore sévi ! <br>
Ils volent les CV afin que les humains ne trouvent pas de travail et passent leur temps chez eux avec leur chat !`,
  },
  {
    image: "./Cv_Galaxy/story/story_03.png",
    txt: `Est-ce que voulez bien m'aider à retrouver mon CV ? <br>
Je crois qu'ils l'ont dispersé dans le multivers. <br> J'ai seulement pu retrouver ce morceau...`,
  },
];

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const storyContainer = document.querySelector(".story-container");
const buttonNext = document.querySelector(".button-next");
const blinkParchment = document.getElementById("blink-parchment");

//FONCTION POUR FAIRE DEFILER LE TEXTE
let timeoutWriter;
function writer(text) {
  if (timeoutWriter) {
    clearTimeout(timeoutWriter);
  }

  const speak = document.querySelector(".speak");
  speak.innerHTML = "";
  timeoutWriter = setTimeout(() => {
    typewriter(text, 0);
  }, 500);
  function typewriter(text, index) {
    if (index < text.length) {
      timeoutWriter = setTimeout(() => {
        if (text.slice(index).startsWith("<br>")) {
          speak.innerHTML += `<br>`;
          index += 4;
        } else {
          speak.innerHTML += `${text[index]}`;
        }
        typewriter(text, index + 1);
      }, 30);
    } else {
      speak.innerHTML = `${text}`;
    }
  }
}

//OUVERTURE INTRO DU CV
window.addEventListener("load", () => {
  modal.showModal();
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
});

//FERMETURE INTRO DU CV
const galaxy = document.getElementById("galaxy");
const worldBar = document.getElementById("world-bar");
let translateGalaxyX;
let translateGalaxyY;

ELEMENTS.forEach((element) => {
  //CREATION DE LA DIV ACCUEILLANT LA PLANETE, LA TARGET, L'IMAGE ET LE CV
  const containerPlanet = document.createElement("div");
  galaxy.appendChild(containerPlanet);
  containerPlanet.classList.add("container-planet");
  containerPlanet.id = element.id;
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
      const containerBackground = document.createElement("div");
      containerImages.appendChild(containerBackground);
      containerBackground.classList.add("container-background");

      const backgroundWorld = document.createElement("img");
      const parchmentWorld = document.createElement("img");

      containerBackground.appendChild(backgroundWorld);
      containerBackground.appendChild(parchmentWorld);

      //IMAGE DE FOND DE LA PLANETE
      backgroundWorld.classList.add("background");
      backgroundWorld.style.setProperty(
        "--right-position",
        element.rightPosition
      );
      backgroundWorld.style.setProperty("--top-position", element.topPosition);
      backgroundWorld.src = element.backgroundSrc;

      //IMAGE DU CV
      parchmentWorld.classList.add("parchment");
      parchmentWorld.src = element.parchmentSrc;
      parchmentWorld.style.setProperty(
        "--right-position",
        element.rightPosition
      );
      parchmentWorld.style.setProperty("--top-position", element.topPosition);

      //CENTRER LA DIV DE LA PLANETE SUR L'ECRAN RESTANT
      const centerX = (window.innerWidth - worldBar.offsetWidth) / 2;
      const centerY = window.innerHeight / 2;
      console.log(centerY);

      translateGalaxyX =
        centerX -
        (containerPlanet.offsetLeft + containerPlanet.offsetWidth / 2);
      translateGalaxyY =
        centerY -
        (containerPlanet.offsetTop + containerPlanet.offsetHeight / 2);

      galaxy.style.setProperty("--translate-x", translateGalaxyX + "px");
      galaxy.style.setProperty("--translate-y", translateGalaxyY + "px");

      let clickCounterPieceCV = 0;
      const pieceOfCV = document.createElement("div");
      const buttonRetrieve = document.createElement("button");

      if (element.cvRetrieve) {
        containerImages.appendChild(pieceOfCV);
        pieceOfCV.classList.add("piece-of-cv");
        pieceOfCV.innerHTML = element.pieceOfCV;
        pieceOfCV.appendChild(buttonRetrieve);
        buttonRetrieve.classList.add("button-retrieve");
        buttonRetrieve.innerHTML = "Récupéré !";
        buttonRetrieve.style.backgroundColor = "green";
      }

      parchmentWorld.addEventListener("click", () => {
        if (clickCounterPieceCV % 2 == 0) {
          containerImages.appendChild(pieceOfCV);
          pieceOfCV.classList.add("piece-of-cv");
          pieceOfCV.innerHTML = element.pieceOfCV;
          clickCounterPieceCV++;

          pieceOfCV.appendChild(buttonRetrieve);
          buttonRetrieve.classList.add("button-retrieve");
          if (element.cvRetrieve) {
            buttonRetrieve.innerHTML = "Récupéré !";
            buttonRetrieve.style.backgroundColor = "green";
          } else {
            buttonRetrieve.innerHTML = "Récupérer";
            buttonRetrieve.addEventListener("click", () => {
              element.cvRetrieve = true;
              //CHGT BOUTTON QUAND CV RECUPERE
              buttonRetrieve.innerHTML = "Récupéré !";
              buttonRetrieve.style.backgroundColor = "green";

              //VERIFIER SI TOUS LES CV SONT RECUPERES
              console.log(ELEMENTS);
              if (ELEMENTS.every((element) => element.cvRetrieve)) {
                worldBar.classList.toggle("active");
                containerPlanet.classList.toggle("active");
                //TRANSLATE GALAXY
                galaxy.classList.toggle("active");
                const txtCvComplete = document.createElement("div");
                galaxy.appendChild(txtCvComplete);
                txtCvComplete.classList.add("txt-cv-complete");
                txtCvComplete.innerHTML = `Merci ! Vous avez retrouver mon CV au complet ! <br> 
                Vous pouvez me contacter pour me le rendre <br> si vous le souhaitez :)`;
                const cvComplete = document.createElement("dialog");
                galaxy.appendChild(cvComplete);
                cvComplete.classList.add("cv-complete");
                cvComplete.showModal();
                const imgCvComplete = document.createElement("img");
                cvComplete.appendChild(imgCvComplete);
                imgCvComplete.classList.add("img-cv-complete");
                imgCvComplete.src = "./Cv_Galaxy/cvComplete.jpg";
                const downloadCvComplete = document.createElement("a");
                cvComplete.appendChild(downloadCvComplete);
                downloadCvComplete.classList.add("download-cv");
                downloadCvComplete.innerHTML = "Télécharger";
                downloadCvComplete.href = "./Cv_Galaxy/cvComplete.pdf";
                downloadCvComplete.download = "CV-Elodie SPONTON.pdf";
                downloadCvComplete.addEventListener("click", () => {
                  cvComplete.close();
                  txtCvComplete.remove();
                });
                galaxy.addEventListener("click", () => {
                  cvComplete.close();
                  txtCvComplete.remove();
                });
              }
            });
          }
        } else {
          const pieceOfCV = document.querySelector(".piece-of-cv");
          pieceOfCV.remove();
          clickCounterPieceCV++;
        }
      });

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

//LA PLANETE TERRE NE CLIGNOTE PAS
const introPlanet = document.getElementById("intro-planet");
introPlanet.style.animationPlayState = "paused";

//SI ON SURVOLE LA PLANETE TERRE, LE CLIGNOTTEMENT S'ARRETE
introPlanet.addEventListener("mouseover", () => {
  introPlanet.style.animation = "initial";
});

//A LA FERMETURE DE LA MODAL, LA PLANETE TERRE CLIGNOTE
modalClose.addEventListener("click", () => {
  modal.close();
  introPlanet.style.animationPlayState = "running";
});
