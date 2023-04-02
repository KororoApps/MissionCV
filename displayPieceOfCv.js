import { allCvRetrieve } from "./retrievePieceOfCv.js";

export function displayPieceOfCv(
  parchmentWorld,
  containerImages,
  clickCounterPieceCV,
  pieceOfCV,
  buttonRetrieve,
  element,
  ELEMENTS,
  containerPlanet,
  worldbar
) {
  let pieceOfCvExist = false;
  //LORSQUE CLICK SUR PARCHEMIN...
  parchmentWorld.addEventListener("click", () => {
    //AFFICHAGE DU MORCEAU DE CV
    if (pieceOfCvExist) {
      const pieceOfCV = document.querySelector(".piece-of-cv");
      pieceOfCV.remove();
      clickCounterPieceCV++;
      pieceOfCvExist = false;
    }
    //SINON SI PAS TOUT RECUPERE, SUPPRIMER MORCEAU DE CV
    else {
      containerImages.appendChild(pieceOfCV);
      pieceOfCV.classList.add("piece-of-cv");
      pieceOfCV.innerHTML = element.pieceOfCV;
      clickCounterPieceCV++;

      pieceOfCV.appendChild(buttonRetrieve);
      buttonRetrieve.classList.add("button-retrieve");
      pieceOfCvExist = true;
      //VALIDER LORSQUE LE MORCEAU DE CV EST RECUPERE

      if (!element.cvRetrieve) {
        buttonRetrieve.innerHTML = "Récupérer";
        buttonRetrieve.addEventListener("click", () => {
          element.cvRetrieve = true;
          //CHANGEMENT BOUTTON QUAND CV RECUPERE
          buttonRetrieve.innerHTML = "Récupéré !";
          buttonRetrieve.style.backgroundColor = "green";

          allCvRetrieve(ELEMENTS, containerPlanet, worldbar);
        });
      }
    }
  });
}
