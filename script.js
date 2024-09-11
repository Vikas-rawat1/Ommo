gsap.registerPlugin(ScrollTrigger);
function loco() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function textAnimation() {
  var tl = gsap.timeline();
  // tl.to("#loader", {
  //   opacity: 0,
  //   duration: 0.2,
  //   delay: 0.7,
  // });

  // tl.to("#loader", {
  //   display: "none",
  // });

  gsap.from(".line h1", {
    y: 250,
    stagger: 0.25,
    duration: 1.2,
    delay: 0.2,
  });
}
// loco();

textAnimation();

var tl = gsap.timeline();

tl.to(".video-text",{
  y:-100,
  opacity: 0,
  duration: 0.1,
  delay: 0.1,

  scrollTrigger: {
    markers: true,
    scroller: "body",
    start: "12% 50%",
    end: "10% 90%",
    stagger: 0.4,
    scrub:6,
    // ease:power,
  },
})


tl.to(".video-extend", {
  width: "95vw", 
  scrollTrigger: {
    // markers: true,
    scroller: "body",
    start: "10% 30%",
    end: "10% 80%",
    stagger: 0.4,
    scrub: 6,
  },
});
