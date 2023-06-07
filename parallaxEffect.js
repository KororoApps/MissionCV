export function parallax() {
  const parallax = document.querySelector(".parallax-effect");
  const frontParallax = document.querySelector(".parallax-front");
  const backParallax = document.querySelector(".parallax-back");

  const sFront = -20;
  const sBack = -40;

  parallax.addEventListener("mousemove", (e) => {
    const x = e.clientX - window.innerWidth / 2;

    const y = e.clientY - window.innerHeight / 2;

    console.log(x, y);
    frontParallax.style.transform = `translate(

        calc(${x / sFront}px + var(--translate-x)), 
        
        calc(${y / sFront}px + var(--translate-y))

        )`;

    backParallax.style.transform = `translate(${x / sBack}px, ${y / sBack}px)`;

    // window.addEventListener("deviceorientation", (e) => {
    //   const frontToBack = e.beta;
    //   const leftToRight = e.gamma;

    //   frontParallax.style.transform = `translate(

    //     calc(${frontToBack / sFront}px + var(--translate-x)),

    //     calc(${leftToRight / sFront}px + var(--translate-y))

    //     )`;

    //   backParallax.style.transform = `translate(${frontToBack / sBack}px, ${
    //     leftToRight / sBack
    //   }px)`;
    // });
  });
}
