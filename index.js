gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });

gsap.to(".button", {
  duration: 2.5,
  ease: "bounce.out",
  y: -334,
});

gsap.to(".button", {
  duration: 2.5,
  ease: "bounce.out",
  y: +329,
  delay: 0.9,
});

gsap.to(".right", { duration: 2, x: "-33vw", delay: 0, ease: "power3.in" });
gsap.to(".left", { duration: 2, x: "33vw", delay: 0, ease: "power3.in" });

gsap.to(".right", { duration: 2, x: "", delay: 2, ease: "power3.in" });
gsap.to(".left", { duration: 2, x: "", delay: 2, ease: "power3.in" });

document.getElementById("button").addEventListener("click", function () {
  alert("Thik heh You WON :|");

  location.reload();
});
