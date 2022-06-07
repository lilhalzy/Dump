// // From bottom to the top animation (fades out)
// gsap.fromTo('.text', {opacity: 0, y: 20}, {opacity: 1, y:0, duration: 1})

const timelineOne = gsap.timeline({
  defaults: { duration: 0.65, ease: "power1.out" },
});

timelineOne.fromTo(
  ".cookie-container",
  { scale: 0.25 },
  { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.4 }
);
timelineOne.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" },
  "<30%"
);
timelineOne.fromTo(".text", { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "<");


const button = document.querySelector('button');

button.addEventListener('click', () => {
  gsap.to('.cookie-container', {opacity: 0, y: 100, duration: .75, ease: 'power1.outgit push '})
})