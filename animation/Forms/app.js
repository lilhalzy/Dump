const containers = document.querySelectorAll(".input-container");
const form = document.querySelector("form");

const timeline = gsap.timeline({ defaults: { duration: 1 } });

// Line
const start =
  "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
const end =
  "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";

// Elastic effect
containers.forEach((container) => {
  const input = container.querySelector(".input");
  const line = container.querySelector(".elastic-line");
  const placeholder = container.querySelector(".placeholder");

  input.addEventListener("focus", () => {
    // Check to see if there is any text in the input
    if (!input.value) {
      timeline.fromTo(
        line,
        { attr: { d: start } },
        { attr: { d: end }, ease: "Power2.easeOut", duration: 0.75 }
      );
      timeline.to(
        line,
        { attr: { d: start }, ease: "elastic.out(2.5, .5)" },
        "<50%"
      );
      // Placeholder
      timeline.to(
        placeholder,
        {
          top: -25,
          left: 0,
          scale: 0.8,
          duration: 0.75,
          ease: "Power2.easeOut",
        },
        "<10%"
      );
    }
  });
});

// Return to the original if it's not focused
form.addEventListener("click", () => {
  containers.forEach((container) => {
    const input = container.querySelector(".input");
    const line = container.querySelector(".elastic-line");
    const placeholder = container.querySelector(".placeholder");

    if (document.activeElement !== input) {
      if (!input.value) {
        gsap.to(placeholder, {
          top: 0,
          left: 0,
          scale: 1,
          duration: 0.5,
          ease: "Power2.easeOut",
        });
      }
    }
  });
});

// Email validation
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhone(phone) {
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(phone);
}
