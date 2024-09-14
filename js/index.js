gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".service-card-left").forEach((card) => {
  gsap.fromTo(
    card,
    {
      x: -100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: card, // Each element has its own trigger
        start: "top 70%",
      },
      x: 0,
      opacity: 1,
    }
  );
});
gsap.utils.toArray(".service-card-right").forEach((card) => {
  gsap.fromTo(
    card,
    {
      x: 100,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: card, // Each element has its own trigger
        start: "top 70%",
      },
      x: 0,
      opacity: 1,
    }
  );
});

gsap.fromTo(
  ".header-left-text",
  {
    y: 100,
    opacity: 0,
  },
  {
    scrollTrigger: ".header-left-text",
    y: 0,
    opacity: 1,
  }
);
gsap.fromTo(
  ".big-service-card",
  {
    y: 100,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: ".big-service-card",
      start: "top 70%",
    },
    y: 0,
    opacity: 1,
  }
);

gsap.fromTo(
  "#about-us-section",
  {
    y: 100,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: "#about-us-section",

      start: "top 90%",
    },
    y: 0,
    opacity: 1,
  }
);
gsap.fromTo(
  "#partners-section",
  {
    y: 100,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: "#partners-section",

      start: "top 60%",
    },
    y: 0,
    opacity: 1,
  }
);
gsap.fromTo(
  "#contact-us-section",
  {
    y: 100,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: "#contact-us-section",

      start: "top 60%",
    },
    y: 0,
    opacity: 1,
  }
);

const toggleMenu = document.querySelectorAll(".toggle-menu");

const menu = document.querySelector("#mobile-menu");

for (let i = 0; i < toggleMenu.length; i++) {
  toggleMenu[i].addEventListener("click", () => {
    console.log("clicked");
    menu.classList.toggle("hidden");
  });
}
