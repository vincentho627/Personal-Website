const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { y: "-50" }, { y: "0", duration: 1 });
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");
tl.fromTo(".title-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

gsap.registerPlugin(ScrollTrigger);
gsap.to(".profile-pic", {
  scrollTrigger: {
    trigger: ".profile-pic",
    toggleActions: "restart pause resume pause"
  },
  y: 100,
  opacity: 1,
  duration: 1
});

gsap.to(".about-paragraph", {
  scrollTrigger: {
    trigger: ".about-paragraph",
    toggleActions: "restart pause resume pause"
  },
  x: 100,
  opacity: 1,
  duration: 1
})

gsap.to(".about-title", {
  scrollTrigger: {
    trigger: ".about-title",
    toggleActions: "restart pause resume pause"
  },
  x: 100,
  opacity: 1,
  duration: 1
})

gsap.to(".exp", {
  scrollTrigger: {
    trigger: ".exp",
    toggleActions: "restart pause resume pause"
  },
  y: 100,
  opacity: 1,
  duration: 1
})

gsap.to(".project", {
  scrollTrigger: {
    trigger: ".project",
    toggleActions: "restart pause resume pause"
  },
  y: 100,
  opacity: 1,
  duration: 1
})


gsap.to(".timeline", {
  scrollTrigger: {
    trigger: ".header",
    toggleActions: "restart pause resume pause"
  },
  y: -70,
  opacity: 1,
  duration: 1
})

gsap.to(".experience-card", {
  scrollTrigger: {
    trigger: ".header",
    toggleActions: "restart pause resume pause"
  },
  y: -70,
  opacity: 1,
  duration: 1
})

gsap.to(".projectContainer", {
  scrollTrigger: {
    trigger: "#projects",
    toggleActions: "restart pause resume pause"
  },
  y: -70,
  opacity: 1,
  duration: 1
});

// gsap.to("#carousel", {
//   scrollTrigger: {
//     trigger: "#carousel",
//     toggleActions: "restart pause resume pause"
//   },
//   y: -70,
//   opacity: 1,
//   duration: 1
// })
//
// gsap.to("#prev", {
//   scrollTrigger: {
//     trigger: "#carousel",
//     toggleActions: "restart pause resume pause"
//   },
//   y: -100,
//   opacity: 1,
//   duration: 1
// })
//
// gsap.to("#next", {
//   scrollTrigger: {
//     trigger: "#carousel",
//     toggleActions: "restart pause resume pause"
//   },
//   y: -100,
//   opacity: 1,
//   duration: 1
// })

gsap.to(".contact-header", {
  scrollTrigger: {
    trigger: "#contact",
    toggleActions: "restart pause resume pause"
  },
  y: 100,
  opacity: 1,
  duration: 1
})

gsap.to(".contacts-list", {
  scrollTrigger: {
    trigger: "#contact",
    toggleActions: "restart pause resume pause"
  },
  y: -100,
  opacity: 1,
  duration: 1
})


gsap.to(".bye-gif", {
  scrollTrigger: {
    trigger: ".bye-gif",
    toggleActions: "restart pause resume pause"
  },
  x: 200,
  opacity: 1,
  duration: 1
})
