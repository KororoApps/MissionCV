//FONCTION POUR FAIRE DEFILER LE TEXTE
let timeoutWriter;
export function writer(text) {
  if (timeoutWriter) {
    clearTimeout(timeoutWriter);
  }

  const speak = document.querySelector(".speak");
  speak.innerHTML = "";
  timeoutWriter = setTimeout(() => {
    typewriter(text, 0);
  }, 200);
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
