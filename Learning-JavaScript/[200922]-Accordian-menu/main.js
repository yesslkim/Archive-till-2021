const accordianBtns = document.querySelectorAll(".accordian-title button");

accordianBtns.forEach((accordianBtn, index) => {
  accordianBtn.addEventListener("click", (e) => {
    const accText = e.target.parentElement.nextElementSibling;
    if (accText.style.display === "block") {
      accText.style.display = "none";
      accordianBtn.classList.toggle("open");
    } else {
      accText.style.display = "block";
      accordianBtn.classList.toggle("open");
    }
  });
});
