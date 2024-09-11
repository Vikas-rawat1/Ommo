// function textAnimation() {
//   var tl = gsap.timeline();
//   tl.to("#loader", {
//     opacity: 0,
//     duration: 0.2,
//     delay: 0.7,
//   });

//   tl.to("#loader", {
//     display: "none",
//   });

//   gsap.from(".line h1", {
//     y: 100,
//     stagger: 0.25,
//     duration: 1,
//     delay: 0.1,
//   });
// }
// textAnimation()

setInterval(function () {
  var h1 = document.querySelector(".counter");

  var count = 0;
  if (count < 100) {
    // count++;
    h1.innerHTML = count++;
    console.log(count);
  } else {
    h1.innerHTML = count;
  }
}, 25);
