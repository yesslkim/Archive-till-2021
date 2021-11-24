////
//// BOARD UI
////

//BOARD - RENDER PAGINATION NUMBER
const renderPagination = (totalPages) => {
  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement("a");
    pageNumber.setAttribute("href", "#");
    pageNumber.setAttribute("aria-label", "페이지");
    pageNumber.classList.add("num");
    pageNumber.textContent = i;

    //current-page styling
    if (pageNumber.textContent == 1) pageNumber.classList.add("active");

    const pagination = document.querySelector(".pagination");
    pagination.insertBefore(
      pageNumber,
      pagination.lastElementChild.previousSibling
    );
  }
};

//BOARD - RENDER PAGE
const renderPage = (board, numberOfItems, numberPerPage, currentPage) => {
  const pagesWrapper = document.querySelector(".pagination");
  const pages = document.querySelectorAll(".pagination .num");
  pagesWrapper.addEventListener("click", (e) => {
    if (!e.target.classList.contains("num")) return;
    pages.forEach((page) => {
      page.classList.remove("active");

      //Set current-page
      if (page == e.target) {
        e.target.classList.add("active");
        currentPage = Number(e.target.textContent);
      }

      //re-render board lists
      document.querySelector(".board-lists").innerHTML = "";
      renderBoardLists(board, numberOfItems, numberPerPage, currentPage);
    });
  });
};

//BOARD - RENDER BOARD LISTS
const renderBoardLists = (board, numberOfItems, numberPerPage, currentPage) => {
  if (numberOfItems <= numberPerPage) return;
  const firstDataIndex = currentPage * numberPerPage - numberPerPage;
  const lastDataIndex = currentPage * numberPerPage - 1;

  for (let index = lastDataIndex; index >= firstDataIndex; index--) {
    const data = board[index];
    const template = `
    <tr>
    <td>${data.id}</td>
    <td class="title"><a href="#">${data.title}</a></td>
    <td>사용자</td>
    <td>00</td>
    </tr>
    `;
    document.querySelector(".board-lists").innerHTML += template;
  }
};

//BOARD - GET DATA
const BOARD_URL = "https://jsonplaceholder.typicode.com/posts";
fetch(BOARD_URL)
  .then((response) => response.json())
  .then((json) => {
    //15개 데이터 사용을 위해 slice 사용
    const board = json.slice(0, 15);

    const numberOfItems = board.length;
    const numberPerPage = 5;
    const totalPages = Math.ceil(numberOfItems / numberPerPage);
    const currentPage = 1;
    renderPagination(totalPages);
    renderBoardLists(board, numberOfItems, numberPerPage, currentPage);
    renderPage(board, numberOfItems, numberPerPage, currentPage);
  });

////
//// CAROUSEL UI
////

//CAROUSEL - GET DATA
const CAROUSEL_URL = "https://jsonplaceholder.typicode.com/photos";

fetch(CAROUSEL_URL)
  .then((response) => response.json())
  .then((json) => {
    const carouselArray = json.slice(0, 10);

    carouselArray.map((item) => {
      const img = document.createElement("img");
      img.setAttribute("src", item.thumbnailUrl);
      img.setAttribute("alt", item.title);

      const carouselLists = document.createElement("div");
      carouselLists.append(img);
      carouselLists.classList.add("carousel-img");

      document.querySelector(".carousel").append(carouselLists);
    });
  });

//CAROUSEL - DISABLE BTNS
let positionX = 0;

const disableBtns = (carousel, positionX) => {
  const carouselWidth = carousel.offsetWidth;

  const leftBtn = carouselBtns.querySelector(".prev");
  const rightBtn = carouselBtns.querySelector(".next");

  if (positionX === 0) {
    leftBtn.setAttribute("disabled", true);
  } else {
    leftBtn.removeAttribute("disabled");
  }

  if (positionX < -carouselWidth) {
    rightBtn.setAttribute("disabled", true);
  } else {
    rightBtn.removeAttribute("disabled");
  }
};

//CAROUSEL - UI
const carouselBtns = document.querySelector(".carousel-btns");
carouselBtns.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const carousel = document.querySelector(".carousel");
  const carouselImgWidth = Number(
    document.querySelector(".carousel-img").offsetWidth
  );

  if (e.target.classList.contains("prev")) {
    carousel.style.transform += `translate3d(${carouselImgWidth}px, 0px, 0px)`;
    positionX += carouselImgWidth;
  } else {
    carousel.style.transform += `translate3d(-${carouselImgWidth}px, 0px, 0px)`;
    positionX -= carouselImgWidth;
  }

  disableBtns(carousel, positionX);
});

////
//// REVIEW UI
////

//REVIEW - STARS
const reviewWrapper = document.querySelector(".ui-review");
const reviewInfoWrapper = document.querySelector(".review-info");
const starsWrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars > button");
const textArea = reviewWrapper.querySelector(".text");

starsWrapper.addEventListener("mouseover", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const targetIndex = Array.from(stars).indexOf(e.target);

  stars.forEach((star, index) => {
    if (index <= targetIndex) {
      star.classList.add("hover");
    } else {
      star.classList.remove("hover");
      star.classList.remove("click");
    }
  });
});

starsWrapper.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const targetIndex = Array.from(stars).indexOf(e.target);

  const strong = starsWrapper.querySelector("strong");
  strong.classList.add("active");
  strong.textContent = targetIndex + 1;

  stars.forEach((star, index) => {
    if (index <= targetIndex) {
      star.classList.add("click");
    } else {
      star.classList.remove("click");
    }
  });
});

starsWrapper.addEventListener("mouseout", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  stars.forEach((star) => star.classList.remove("hover"));
});

//REVIEW - SPOILER BTN
reviewInfoWrapper.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  e.target.classList.toggle("click");
});

//REVIEW - LETTER COUNTER
textArea.addEventListener("keyup", (e) => {
  const counters = e.target.value.split("").length;
  reviewInfoWrapper.querySelector("strong").textContent = `(${counters}/1000)`;
});

////
//// TOS UI
////

//TOS - CHANGE INPUT(CHECKED) STATE
const changeCheckState = (elem) => {
  if (elem.classList.contains("active")) {
    elem.nextElementSibling.checked = true;
  } else {
    elem.nextElementSibling.checked = false;
  }
};

//TOS - BTN STYLE
const addBtnStyle = (elem) => {
  elem.classList.add("active");
};
const removeBtnStyle = (elem) => {
  elem.classList.remove("active");
};

//TOS - UPDATING STATE OF BTN-ALL BTN
const updateBtnAllState = (checkedBtnsQuantity, btnsQuantity, btnAll) => {
  if (checkedBtnsQuantity === btnsQuantity) {
    btnAll.classList.add("clickBtnAll");
    addBtnStyle(btnAll);
    changeCheckState(btnAll);
  } else if (checkedBtnsQuantity < btnsQuantity) {
    btnAll.classList.remove("clickBtnAll");
    removeBtnStyle(btnAll);
    changeCheckState(btnAll);
  }
};

//TOS - UPDATING STATE OF EACH BTNS
const updateBtnsState = (targetElem, btns) => {
  targetElem.classList.toggle("clickBtnAll"); //FOR BTN-ALL STATE
  btns.forEach((btn) => {
    if (targetElem.classList.contains("clickBtnAll")) {
      addBtnStyle(btn);
      changeCheckState(btn);
    } else {
      removeBtnStyle(btn);
      changeCheckState(btn);
    }
  });
};

//TOS - SET CHECKBOX BTNS
const setCheckboxBtns = (targetElem) => {
  if (!targetElem.classList.contains("check")) return;

  targetElem.classList.toggle("active");

  const btns = document.querySelectorAll(".btn");
  const btnsQuantity = btns.length;
  let checkedBtnsQuantity = document.querySelectorAll(".btn.active").length;
  const btnAll = document.querySelector(".btn-all");

  if (targetElem.classList.contains("btn"))
    updateBtnAllState(checkedBtnsQuantity, btnsQuantity, btnAll);

  if (targetElem.classList.contains("btn-all"))
    updateBtnsState(targetElem, btns);
};

//TOS - SET FORM BTNS
const setFormBtn = (targetElem) => {
  if (targetElem.tagName !== "BUTTON") return;

  //필수선택 갯수 , 선택된 필수선택 갯수
  const btnsQuantity = document.querySelectorAll(".chk-required").length;
  const checkedBtnsQuantity = document.querySelectorAll(
    ".chk-required.active"
  ).length;

  if (targetElem.classList.contains("agree")) {
    if (checkedBtnsQuantity < btnsQuantity) {
      document.querySelector(".alarm").classList.add("active");
      targetElem.parentElement.classList.add("slide-down");
    } else {
      alert("다음 페이지로 넘어갑니다.");
    }
  }

  if (targetElem.classList.contains("cancel")) {
    alert("이전 페이지로 이동됩니다.");
  }
};

const tosWrapper = document.querySelector(".ui-tos");
tosWrapper.addEventListener("click", (e) => {
  e.preventDefault();
  const targetElem = e.target;

  setCheckboxBtns(targetElem);
  setFormBtn(targetElem);
});

////
//// TAB UI
////

const tabWrapper = document.querySelector(".ui-tab");

tabWrapper.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  //TAB TITLE BTN
  const tabTitleBtns = document.querySelectorAll(".tab-title li");
  tabTitleBtns.forEach((btn) => btn.classList.remove("active"));
  e.target.closest("li").classList.add("active");

  //TAB PARAGRAPH
  const targetTab = document.querySelector(".tab-title li.active");
  const targetTabIndex = Array.from(tabTitleBtns).indexOf(targetTab);
  const tabInfo = document.querySelectorAll(".tab-info li");
  tabInfo.forEach((info) => info.classList.add("hidden"));
  tabInfo[targetTabIndex].classList.remove("hidden");
});
