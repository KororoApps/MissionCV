export function displayParchment(element) {
  const piecesOfParchment = document.querySelector(
    ".pieces-of-parchment-retrieve"
  );

  const pieceOfParchment = document.createElement("img");
  piecesOfParchment.appendChild(pieceOfParchment);
  pieceOfParchment.src = element.pieceOfParchment;
  pieceOfParchment.classList.add("piece-of-parchment-retrieve");
}
