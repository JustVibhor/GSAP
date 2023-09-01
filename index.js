// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
// gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });

// gsap.to(".button", {
//   duration: 2.5,
//   ease: "bounce.out",
//   y: -334,
// });

// gsap.to(".button", {
//   duration: 2.5,
//   ease: "bounce.out",
//   y: +329,
//   delay: 0.9,
// });

// gsap.to(".right", { duration: 2, x: "-33vw", delay: 0, ease: "power3.in" });
// gsap.to(".left", { duration: 2, x: "33vw", delay: 0, ease: "power3.in" });

// gsap.to(".right", { duration: 2, x: "", delay: 2, ease: "power3.in" });
// gsap.to(".left", { duration: 2, x: "", delay: 2, ease: "power3.in" });

// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 1.5 });

//* better way to write gsap
const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(".header", { duration: 0.5, y: "-100%", ease: "bounce" })
  .to(".button", {
    duration: 1,
    ease: "bounce.out",
    y: -334,
  })
  .to(".footer", { duration: 0.6, y: 0, ease: "elastic" })
  .to(".button", {
    duration: 1,
    ease: "bounce.out",
    y: +329,
  })
  .from(".link", { duration: 0.5, opacity: 0, stagger: 0.5 })
  .to(".right", { duration: 0.2, x: "-33vw", ease: "power3.in" })
  .to(".left", { duration: 0.2, x: "33vw", ease: "power3.in" })
  .to(".right", { duration: 0.2, x: "", ease: "power3.in" })
  .to(".left", { duration: 0.2, x: "", ease: "power3.in" });

// Success TAG
document.getElementById("button").addEventListener("click", function () {
  alert("Thik heh You WON :|");

  location.reload();
});
