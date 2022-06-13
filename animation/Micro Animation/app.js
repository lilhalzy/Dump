const timeline = gsap.timeline({defaults: {duration: .4, ease: 'Power.easeOut'}})

const home = document.querySelector('.home')
const homeTitle = document.querySelector('.home-title')
const homeLetters = homeTitle.textContent.split('')

gsap.set('.feather', {scale: 0, transformOrigin: 'center'})
home.addEventListener('click', () => {
  gsap.fromTo('.home-svg', {scale: 1}, {scale: .85, yoyo: true, repeat: 1})
  gsap.fromTo('.feather', {y: -5, scale: 0}, {y: 20, scale: 1.6, duration: 1, stagger: .2})
  gsap.fromTo('.right-feather', {x: 0}, {x: 5})
  gsap.fromTo('.left-feather', {x: 0}, {x: -5})
  gsap.fromTo('.roof', {y: 0}, {y: 6, yoyo: true, repeat: 1})
  gsap.set(".letter", { display: "inline-block" });
  gsap.fromTo(
    ".letter",
    { y: 0 },
    { y: "-40%", stagger: 0.04, yoyo: true, repeat: 1 }, '<'
  );
})


homeTitle.textContent = ""
homeLetters.forEach(letter => {
  homeTitle.innerHTML += `<span class='letter'>` + letter + `</span>`
})