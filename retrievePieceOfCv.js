import { displayParchment } from "./displayPiecesOfParchment.js";

export function cvRetrieve(
  element,
  containerImages,
  pieceOfCV
  // buttonRetrieve
) {
  //SI cvRETRIEVE FALSE
  if (!element.cvRetrieve) {
    return;
  }
  //SI cvRETRIEVE TRUE
  containerImages.appendChild(pieceOfCV);
  pieceOfCV.classList.add("piece-of-cv");
  pieceOfCV.innerHTML = element.pieceOfCV;

  displayParchment(element);

  // pieceOfCV.appendChild(buttonRetrieve);
  // buttonRetrieve.classList.add("button-retrieve");
  // buttonRetrieve.innerHTML = "Récupéré !";
  // buttonRetrieve.style.backgroundColor = "green";
}

//SI TOUS LES CV SONT RECUPERES...
export function allCvRetrieve(ELEMENTS, containerPlanet, worldBar) {
  if (ELEMENTS.every((element) => element.cvRetrieve)) {
    /*const containerImages = document.querySelector(".container-images");
    worldBar.classList.remove("active");
    containerImages.remove();
    containerPlanet.classList.remove("active");
    //TRANSLATE GALAXY
    galaxy.classList.remove("active");
    const txtCvComplete = document.createElement("div");
    galaxy.appendChild(txtCvComplete);
    txtCvComplete.classList.add("txt-cv-complete");
    txtCvComplete.innerHTML = `Merci ! Vous avez retrouver mon CV au complet ! <br> 
                                Vous pouvez me contacter pour me le rendre <br> si vous le souhaitez :)`;
    //AFFICHER LE CV ENTIER DANS UNE MODAL
    const cvComplete = document.createElement("dialog");
    galaxy.appendChild(cvComplete);
    cvComplete.classList.add("cv-complete");
    cvComplete.showModal();
    const imgCvComplete = document.createElement("img");
    cvComplete.appendChild(imgCvComplete);
    imgCvComplete.classList.add("img-cv-complete");
    imgCvComplete.src = "./Cv_Galaxy/cvComplete.jpg";
    //POUVOIR TELECHARGER LE CV ENTIER
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
    //SI CLICK SUR GALAXY ALORS CV FERME
    galaxy.addEventListener("click", () => {
      cvComplete.close();
      txtCvComplete.remove();
    });*/
    //BOUTON DE TELECHARGEMENT DE MON CV COMPLET
    const downloadCvComplete = document.createElement("a");
    const body = document.querySelector("body");
    body.appendChild(downloadCvComplete);
    downloadCvComplete.classList.add("download-cv");
    downloadCvComplete.innerHTML = "Télécharger le CV complet !";
    downloadCvComplete.href = "./Cv_Galaxy/cvComplete.pdf";
    downloadCvComplete.download = "CV-Elodie SPONTON.pdf";
    //POP-UP CV RETROUVE !
    const txtCvComplete = document.createElement("div");
    body.appendChild(txtCvComplete);
    txtCvComplete.classList.add("txt-cv-complete");
    txtCvComplete.innerHTML = `Merci ! Vous avez retrouver mon CV au complet ! <br> 
                                Vous pouvez me contacter pour me le rendre <br> si vous le souhaitez :)`;
    //SUPPRIMER POP-UP AIDE
    const helpPopUp = document.getElementById("help-planet");
    helpPopUp.classList.remove("help");


  }
}
