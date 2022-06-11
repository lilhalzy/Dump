const timeline = gsap.timeline({defaults: {duration: .75, ease: 'Power3.out'}})

timeline.fromTo('.hero-img', {scale: 1.5, borderRadius: '0rem'}, {
  scale: 1, borderRadius: '5.4rem',
  duration: 3,
  ease: 'elastic.out(1.6, 1)'
})