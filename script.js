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

function cursor() {
  window.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
    });
  });
}
cursor();

function textAnimation() {
  var tl = gsap.timeline();

  tl.from(".page1", {
    y: 1000,
    duration: 0.4,
    delay: 0.5,
  });
  tl.to("#loader", {
    display: "none",
  });

  tl.to(".logo,.right-nav li", {
    y: 30,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.4,
  });
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
      markers: true,
      scroller: "body",
      start: "25% 40%",
      end: "10% 80%",
      stagger: 0.4,
      // scrub: 6,
    },
  });
}
// loco();

textAnimation();

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
      start: "15% 34%",
      end: "10% 80%",
      stagger: 0.4,
      scrub: 6,
    },
  });
}

videoAnimation();
