let tl = gsap.timeline();
const headerTop = document.querySelector(".header-top");

window.addEventListener("resize", () => {
  gsap.to(".popup", {
    display: "block",
  });
});

document.querySelector(".popup").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  gsap.to(".popup", {
    opacity: 0,
  });
});

const matchMedia = {
  desktop: {
    y:
      document.querySelector(".about-image").clientHeight -
      document.querySelector(".bowl").clientHeight +
      80,
    otherY: document.querySelector(".about-image").clientHeight + 70,
  },
  tablet: {
    y:
      document.querySelector(".about-image").clientHeight -
      document.querySelector(".bowl").clientHeight +
      40,
    otherY: document.querySelector(".about-image").clientHeight + 40,
  },
};

function onComplete() {
  let index = 0;

  document.querySelectorAll(".about-image > div").forEach((apple, i) => {
    if (apple.classList.contains("target")) {
      index = i + 1;
      document.querySelector(".target").classList.remove("target");
      return index;
    }
  });

  document.querySelectorAll(".about-list li").forEach((list) => {
    list.classList.remove("show");
    document.querySelectorAll(".about-list li")[index].classList.add("show");
  });
}

const mainTimeline = (y, othery) => {
  const sectionTimeline = gsap.timeline();
  sectionTimeline
    .to(".html-apple", {
      y: y,
      rotate: 360,
      onStart: () => {
        document.querySelector(".html-apple").classList.add("target");
      },
      onComplete: onComplete,
      onReverseComplete: () => {
        document.querySelectorAll(".about-list li").forEach((list) => {
          list.classList.remove("show");
        });
        document.querySelector(".about-default").classList.add("show");
      },
    })
    .to(".css-apple", {
      y: y,
      rotate: 360,
      onStart: () => {
        document.querySelector(".css-apple").classList.add("target");
      },
      onComplete: onComplete,
      onReverseComplete: () => {
        document.querySelector(".html-apple").classList.add("target");
        onComplete();
      },
    })
    .to(".js-apple", {
      y: y,
      rotate: 360,
      onStart: () => {
        document.querySelector(".js-apple").classList.add("target");
      },
      onComplete: onComplete,
      onReverseComplete: () => {
        document.querySelector(".css-apple").classList.add("target");
        onComplete();
      },
    })
    .to(".others-apple", {
      y: othery,
      rotate: 360,
      onStart: () => {
        document.querySelector(".others-apple").classList.add("target");
      },
      onComplete: onComplete,
      onReverseComplete: () => {
        document.querySelector(".js-apple").classList.add("target");
        onComplete();
      },
    })
    .from(".projects", {
      delay: 0.5,
      opacity: 0,
      yPercent: 100,
    })
    .to(".about-content", {
      opacity: 0,
    });

  ScrollTrigger.create({
    animation: sectionTimeline,
    trigger: ".main",
    start: "top top",
    end: "+=4000",
    pin: true,
    scrub: true,
    anticipatePin: 1,
    toggleActions: "restart none reverse none",
  });
};

ScrollTrigger.matchMedia({
  // DESKTOP
  "(min-width: 1024px)": function () {
    ScrollTrigger.saveStyles(".main, .about, .projects");
    mainTimeline(matchMedia.desktop.y, matchMedia.desktop.otherY);
    headerTop.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") return;
      if (e.target.classList.contains("project-link")) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: "#projects", offsetY: -1400 },
        });
      }
    });
  },

  // TABLET
  "(min-width: 768px) and (max-width: 1023px)": function () {
    ScrollTrigger.saveStyles(".main, .about, .projects");
    mainTimeline(matchMedia.tablet.y, matchMedia.tablet.otherY);
    headerTop.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") return;
      if (e.target.classList.contains("project-link")) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: "#projects", offsetY: -1400 },
        });
      }
    });
  },

  // MOBILE
  "(min-width: 320px) and (max-width: 767px)": function () {
    gsap.to(".smile-wrapper", {
      scrollTrigger: {
        trigger: ".header",
        scrub: true,
        start: "top top",
        end: "+=100% 0px",
        pin: true,
      },
      rotate: 360,
      y: 210,
      scale: 1.25 / 0.75,
    });
  },

  // DEVICE COMMOM
  all: function () {
    //HEADER
    gsap.from(".hero", {
      duration: 1,
      opacity: 0,
      y: 310,
    });

    ScrollTrigger.saveStyles(".gnb, .gnb li");

    headerTop.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;

      if (e.target.classList.contains("gnb-btn")) {
        tl.fromTo(
          ".gnb",
          {
            width: 0,
            opacity: 0,
          },
          {
            duration: 0.5,
            opacity: 1,
            width: "100%",
          }
        ).fromTo(
          ".gnb li",
          {
            display: "block",
            opacity: 0,
            y: "50%",
          },
          {
            duration: 1,
            opacity: 1,
            y: "0",
            stagger: 0.25,
            ease: "power4.out",
          }
        );
      }

      if (e.target.classList.contains("close-btn")) {
        tl.to(".gnb li", {
          duration: 0.1,
          display: "block",
          opacity: 0,
          y: "50%",
          stagger: {
            each: 0.25,
            from: "end",
          },
        }).to(".gnb", {
          width: 0,
          opacity: 0,
        });
      }
    });

    headerTop.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") return;

      gsap.to(".gnb", {
        width: 0,
        opacity: 0,
      });
    });

    //MAIN - ABOUT-SECTION

    document.querySelector(".about-list").addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;

      document.querySelectorAll(".skill-btn").forEach((btn) => {
        if (btn.parentElement.classList.contains("active")) {
          btn.parentElement.classList.remove("active");
        } else {
          btn.parentElement.classList.remove("active");
          btn === e.target && btn.parentElement.classList.add("active");
        }
      });
    });
  },
});
