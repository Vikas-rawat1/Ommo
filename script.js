var tl = gsap.timeline();

tl.from(".main", {
  y: 1800,
  stagger:0.2,
  // duration:0.1,
});

tl.from(".line h1 ", {
  y: 60,
  stagger: 0.5,
  duration: 0.6,
  delay: 0.2,
});
