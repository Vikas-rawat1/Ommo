var tl = gsap.timeline();
tl.from("#loader",{
  y:100,
  opacity: 0,
  duration: 1,
})
tl.from(".main ", {
  y: 100,
  stagger:0.25,
  duration:0.6,
  delay:0.1,
});

gsap.from(".line h1", {
  y: 100,
  stagger: 0.25,
  duration: 1,
  delay: 0.1,
});
