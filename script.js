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

  tl.from(".line h1", {
    y: 250,
    stagger: 0.25,
    duration: 1.2,
    delay: 0.1,
  });
  gsap.from(".line2 h1", {
    y: 250,
    stagger: 0.25,
    duration: 1.2,
    delay: 0.2,
    scrollTrigger: {
      // markers: true,
      scroller: "body",
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
      scroller: "body",
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
      scroller: "body",
      trigger: ".approachAnimation",
      start: "80% 40%",
      end: "60% 80%",
      stagger: 0.4,
      scrub: 6,
    },
  });
}

function videoAnimation() {
  var tl = gsap.timeline();

  tl.to(".video-text", {
    y: -50,
    opacity: 0,
    duration: 0.4,
    delay: 0.7,

    scrollTrigger: {
      // markers: true,
      scroller: "body",
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
      scroller: "body",
      start: "11% 34%",
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
      scroller: "body",
      start: "-40% 50%",
      end: "30% 50%",
      // markers: true,
      stagger: 0.4,
      scrub: 6,
    },
  });

  gsap.from(".footer-text p", {
    // opacity: 0,
    y: 100,
    delay: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".footer-text",
      scroller: "body",
      start: "40% 25%",
      end: "30% 50%",
      // markers: true,
      stagger: 0.4,
      scrub: 6,
    },
  });
}
function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

loco();

cursorMovement();

textAnimation();

videoAnimation();

page3Animation();
