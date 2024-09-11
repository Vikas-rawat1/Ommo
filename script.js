var tl = gsap.timeline();

tl.from(".main ", {
  y: 10,
  stagger:0.25,
  duration:0.6,
  delay:0.2,
});

gsap.from(".line h1", {
  y: 100,
  stagger: 0.25,
  duration: 1,
  delay: 0.1,
});
