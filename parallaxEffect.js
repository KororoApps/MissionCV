export function parallax() {
  const parallax = document.querySelector(".parallax-effect");
  const frontParallax = document.querySelector(".parallax-front");
  const backParallax = document.querySelector(".parallax-back");

  const sFront = 200;
  const sBack = 400;

  parallax.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    frontParallax.style.transform = `translate(${x / sFront}%, ${y / sFront}%)`;

    backParallax.style.transform = `translate(${x / sBack}%, ${y / sBack}%)`;
    console.log(backParallax);
  });
}
