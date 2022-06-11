const timeline = gsap.timeline({defaults: {duration: .75, ease: 'Power3.out'}})

timeline.fromTo('.hero-img', {scale: 1.5, borderRadius: '0rem'}, {
  scale: 1, borderRadius: '5.4rem',
  duration: 3,
  ease: 'elastic.out(1.6, 1)'
});

timeline.fromTo('.cta1', {x: '100%', opacity: .5}, {x: 0, opacity:1}, '<25%');
timeline.fromTo('.cta3', {x: '-100%', opacity: .5}, {x: 0, opacity:1}, '<25%');
timeline.fromTo('.cta2', {y: '100%', opacity: .5}, {y: 0, opacity:1}, '<25%');
timeline.fromTo('.cta4', {x: '100%', opacity: .5}, {x: 0, opacity:1}, '<25%');
timeline.fromTo('.cta6', {x: '-100%', opacity: .5}, {x: 0, opacity:1}, '<25%');
timeline.fromTo('.cta5', {y: '100%', opacity: .5}, {y: 0, opacity:1}, '<25%');
timeline.fromTo('.cta-btn', {y: 20, opacity: 0} , {y: 0, opacity: 1})

const logo = document.querySelector('.logo');
const letters = logo.textContent.split('');

logo.textContent = ""

letters.forEach(letter => {
  logo.innerHTML += `<span class='letter'>` + letter + `</span>`;
})

gsap.set('.letter', {display: 'inline-block'});
gsap.fromTo('.letter', {y: 30}, {y: 0, delay: 3, stagger: .05})