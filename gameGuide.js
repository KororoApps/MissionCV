//GUIDE POUR COMPRENDRE COMMENT JOUER

const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

export function gameGuide() {
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
}
