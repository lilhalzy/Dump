const timeline = gsap.timeline({
  defaults: { duration: 0.4, ease: "Power.easeOut" },
});

const home = document.querySelector(".home");
const homeTitle = document.querySelector(".home-title");
const homeLetters = homeTitle.textContent.split("");
const notifications = document.querySelector(".notifications");
const messages = document.querySelector('.messages')

// Make the birds disappear before a click happens
gsap.set(".feather", { scale: 0, transformOrigin: "center" });

home.addEventListener("click", () => {
  gsap.fromTo(
    ".home-svg",
    { scale: 1 },
    { scale: 0.85, yoyo: true, repeat: 1 }
  );
  gsap.fromTo(
    ".feather",
    { y: -5, scale: 0 },
    { y: 20, scale: 1.6, duration: 1, stagger: 0.2 }
  );
  gsap.fromTo(".right-feather", { x: 0 }, { x: 5 });
  gsap.fromTo(".left-feather", { x: 0 }, { x: -5 });
  gsap.fromTo(".roof", { y: 0 }, { y: 6, yoyo: true, repeat: 1 });
  gsap.set(".letter", { display: "inline-block" });
  gsap.fromTo(
    ".letter",
    { y: 0 },
    { y: "-40%", stagger: 0.04, yoyo: true, repeat: 1 },
    "<"
  );
});

// Make the text bounce
homeTitle.textContent = "";
homeLetters.forEach((letter) => {
  homeTitle.innerHTML += `<span class='letter'>` + letter + `</span>`;
});

// Transform origin
gsap.set(".bell", { transformOrigin: "top center" });
gsap.set(".ringer", { transformOrigin: "top center" });
gsap.set(".wave", { opacity: 0, transformOrigin: "bottom" });

notifications.addEventListener("click", () => {
  gsap.fromTo(
    ".bell",
    { rotation: -5 },
    { rotation: 0, duration: 2, ease: "elastic.out(5, .2)" }
  );
  gsap.fromTo(
    ".ringer",
    { rotation: -3, x: 0.5 },
    { rotation: 0, x: 0, duration: 2, ease: "elastic.out(5, .4)" }
  );
  gsap.fromTo(
    ".wave",
    { scale: 0, opacity: 1 },
    { scale: 1.3, opacity: 0, duration: 1 }
  );
});

gsap.set('.flap', { transformOrigin: 'top' })
messages.addEventListener('click', () => {
  timeline.fromTo('.messages-svg', { scale: 1 }, { scale: .9 })
  timeline.fromTo('.flap', { scale: 1 }, { scale: -1 }, '<50%')
  timeline.fromTo('.messages-svg', { scale: .9 }, { scale: 1 }, '<50%')
  timeline.fromTo('.note', { y: 0, opacity: 1 }, { y: -40, opacity: 0, duration: .7 })
  timeline.to('.flap', { scale: 1 }, '<90%')
})