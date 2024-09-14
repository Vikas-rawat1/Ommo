gsap.registerPlugin(ScrollTrigger);
// function loco() {
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
  return locoScroll;

// }

var cursor = document.querySelector("#cursor");
var page2 = document.querySelector(".page2");

function cursorMovement() {
  window.addEventListener("mousemove", function (dets) {
    // console.log(dets);
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      ease: "expoScale(0.5,7,none)",
    });
  });
  page2.addEventListener("mouseenter", function (dets) {
    // console.log(dets);
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      border: "2px solid black",
      ease: "expoScale(0.5,7,none)",
    });
  });
  page2.addEventListener("mouseleave", function (dets) {
    // console.log(dets);
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      border: "2px solid white",
      ease: "expoScale(0.5,7,none)",
    });
  });
}

function textAnimation() {
  var tl = gsap.timeline();

  tl.from(".page1", {
    // y: 1000,
    duration: 0.4,
    delay: 0.5,
  });
  tl.to("#loader", {
    display: "none",
  });

  // tl.to(".logo,.right-nav li", {
  //   y: 30,
  //   stagger: 0.25,
  //   duration: 0.6,
  //   delay: 0.4,
  // });
  tl.from(".line h1", {
    y: 250,
    stagger: 0.25,
    duration: 1.2,
    delay: 0.2,
  });
  gsap.from(".line2 h1", {
    y: 250,
    stagger: 0.25,
    duration: 1.2,
    delay: 0.2,
    scrollTrigger: {
      // markers: true,
      scroller: "#main",
      start: "25% 40%",
      end: "10% 80%",
      stagger: 0.4,
      // scrub: 6,
    },
  });
  gsap.from(".name-animation p,.testimonial-text", {
    y: 250,
    stagger: 0.25,
    duration: 1.2,
    delay: 0.2,
    scrollTrigger: {
      // markers: true,
      trigger: ".testimonial",
      scroller: "#main",
      start: "55% 40%",
      end: "60% 80%",
      stagger: 0.4,
      scrub: 6,
    },
  });
  gsap.from(".line3 h1", {
    y: 250,
    stagger: 0.25,
    duration: 1.2,
    delay: 0.2,
    scrollTrigger: {
      // markers: true,
      trigger: ".approachAnimation",
      scroller: "#main",
      start: "80% 40%",
      end: "60% 80%",
      stagger: 0.4,
      scrub: 6,
    },
  });
}
// loco();

function videoAnimation() {
  var tl = gsap.timeline();

  tl.to(".video-text", {
    y: -50,
    opacity: 0,
    duration: 0.4,
    delay: 0.7,

    scrollTrigger: {
      // markers: true,
      scroller: "#main",
      start: "9% 50%",
      end: "10% 90%",
      stagger: 0.2,
      scrub: 6,
      // ease:power,
    },
  });

  tl.to(".video-extend", {
    width: "95vw",
    scrollTrigger: {
      // markers: true,
      scroller: "#main",
      start: "15% 34%",
      end: "10% 80%",
      stagger: 0.4,
      scrub: 6,
    },
  });
}

function page3Animation() {
  gsap.from(".page3", {
    y: 100,
    duration: 0.8,
    delay: 0.1,
    scrollTrigger: {
      trigger: ".page3",
      scroller: "#main",
      start: "-40% 50%",
      end: "30% 50%",
      // markers: true,
      stagger: 0.4,
      scrub: 6,
    },
  });

  gsap.from(".footer-text", {
    // opacity: 0,
    y: 100,
    delay: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".page3",
      scroller: "#main",
      start: "40% 25%",
      end: "30% 50%",
      // markers: true,
      stagger: 0.4,
      scrub: 6,
    },
  });
}

// gsap.to(".left-img",{
//   scale:3
// })

Shery.imageEffect(".left-img", {
  style: 1 /*OR 5 for different variant */,
  // debug: true,
  config: {
    a: { value: 0, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.1634114980697632 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

cursorMovement();

textAnimation();


videoAnimation();

page3Animation();
