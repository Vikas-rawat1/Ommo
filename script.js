var tl = gsap.timeline();
tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 0.7,
});

tl.to("#loader", {
  display: "none",
});
gsap.from(".line h1", {
  y: 100,
  stagger: 0.25,
  duration: 1,
  delay: 0.1,
});
 