import { ELEMENTS } from "./js-elementsManager.js";

//FERMETURE INTRO DU CV
const galaxy = document.getElementById("galaxy");
const worldBar = document.getElementById("world-bar");
let translateGalaxyX;
let translateGalaxyY;

export const createGalaxy = () => {
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
        backgroundWorld.style.setProperty(
          "--top-position",
          element.topPosition
        );
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
};
