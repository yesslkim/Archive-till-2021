let tl = gsap.timeline();

ScrollTrigger.matchMedia({
  // large
  "(min-width: 1024px)": function () {
    ScrollTrigger.saveStyles(".main, .main > section");
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
        document
          .querySelectorAll(".about-list li")
          [index].classList.add("show");
      });
    }

    const mainTimeline = gsap.timeline();
    mainTimeline
      .to(".html-apple", {
        y: 450,
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
        y: 450,
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
        y: 450,
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
        y: 780,
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
        yPercent: 100,
      });

    ScrollTrigger.create({
      animation: mainTimeline,
      trigger: ".main",
      start: "top top",
      end: "+=4000",
      pin: true,
      scrub: true,
      anticipatePin: 1,
      toggleActions: "restart none reverse none",
    });
  },

  // tablet
  "(min-width: 768px) and (max-width: 1023px)": function () {
    ScrollTrigger.saveStyles(".main, .main > section");
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
        document
          .querySelectorAll(".about-list li")
          [index].classList.add("show");
      });
    }

    const mainTimeline = gsap.timeline();
    mainTimeline
      .to(".html-apple", {
        y: 350,
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
        y: 350,
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
        y: 350,
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
        y: 665,
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
        yPercent: 100,
      });

    ScrollTrigger.create({
      animation: mainTimeline,
      trigger: ".main",
      start: "top top",
      end: "+=4000",
      pin: true,
      scrub: true,
      anticipatePin: 1,
      toggleActions: "restart none reverse none",
    });
  },

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

  // all
  all: function () {
    //HEADER
    const headerTop = document.querySelector(".header-top");
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
