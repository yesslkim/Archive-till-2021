// VARIABLE
let tl = gsap.timeline();
const headerTop = document.querySelector(".header-top");

// HEADER - GNB
headerTop.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  if (e.target.classList.contains("gnb-btn")) {
    document.body.classList.add("disable-scroll");

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

    document.body.classList.remove("disable-scroll");
  }
});

headerTop.addEventListener("click", (e) => {
  if (e.target.tagName !== "A") return;

  gsap.to(".gnb", {
    width: 0,
    opacity: 0,
  });

  document.body.classList.remove("disable-scroll");
});

// MAIN - ABOUT-SECTION
document.querySelector(".about-skills").addEventListener("click", (e) => {
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

// MAIN - PROJECT-SECTION
document.querySelector(".project-contents").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  if (e.target.classList.contains("summary")) {
    document.querySelector(".project-contents .inner").classList.remove("left");
    document.querySelector(".project-contents .inner").classList.add("right");

    document.querySelectorAll(".project").forEach((project) => {
      project.classList.remove("active");

      if (e.target.dataset.target === project.dataset.target) {
        project.classList.add("active");
      }
    });
  }

  if (e.target.classList.contains("back-btn")) {
    document
      .querySelector(".project-contents .inner")
      .classList.remove("right");
    document.querySelector(".project-contents .inner").classList.add("left");
  }
});

// BG SETTINGS
document.querySelector(".setting1").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const colorName = e.target.getAttribute("class");

  document.querySelectorAll(".setting2 button").forEach((opacityBtn) => {
    opacityBtn.style.backgroundColor = "#" + colorName;
  });

  document.body.style.backgroundColor = "#" + colorName;
});

document.querySelector(".setting2").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  let colorName = document.body.style.backgroundColor;
  let colorRGB = colorName.slice(4, -1);
  const opacity = e.target.textContent;

  if (colorName == "") {
    colorName = "rgb(236, 243, 255)";
  } else if (colorName.slice(0, 4) == "rgba") {
    colorRGB = colorName.slice(5, -6);
  }

  document.body.style.backgroundColor = `rgba(${colorRGB},${opacity})`;
});

// SCREEN OVERFLOW ISSUE
window.addEventListener("resize", (e) => {
  const headeContHeight =
    document.querySelector(".header-bottom").getBoundingClientRect().height +
    document.querySelector(".header-top").getBoundingClientRect().height;

  const headerHeight = document
    .querySelector(".header")
    .getBoundingClientRect().height;

  if (headeContHeight > headerHeight) {
    document
      .querySelector(".header-bottom .smile-wrapper")
      .classList.add("active");
    document.querySelector(".header-bottom p").classList.add("active");
  } else {
    document
      .querySelector(".header-bottom .smile-wrapper")
      .classList.remove("active");
    document.querySelector(".header-bottom p").classList.remove("active");
  }
});
