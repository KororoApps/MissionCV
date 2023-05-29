export function displayParchment(element) {
  const piecesOfParchment = document.querySelector(
    ".pieces-of-parchment-retrieve"
  );

  const pieceOfParchment = document.createElement("img");
  piecesOfParchment.appendChild(pieceOfParchment);
  pieceOfParchment.src = element.pieceOfParchment;
  pieceOfParchment.classList.add("piece-of-parchment-retrieve");
  pieceOfParchment.style.height = "200px";
  pieceOfParchment.style.border = "2px solid rgb(74, 12, 85)";
  pieceOfParchment.style.top = "0px";
  pieceOfParchment.style.position = "absolute";
}
