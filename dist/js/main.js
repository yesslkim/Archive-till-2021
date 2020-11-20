/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var body = document.querySelector('body');

function disableScroll() {
  body.classList.add('lockscroll');
  document.querySelector('html').offsetTop = window.scrollY;
}

function enableScroll() {
  body.classList.remove('lockscroll');
}

var closeUI = function closeUI(target) {
  target.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      e.target.parentElement.classList.add('hidden');
      enableScroll();
    }
  });
};

var gnbTabMenu = function gnbTabMenu() {
  var gnbLists = document.querySelectorAll('.gnb li');
  gnbLists.forEach(function (gnbList, index) {
    gnbList.addEventListener('click', function () {
      var mainSections = document.querySelectorAll('.main > section');
      mainSections.forEach(function (mainSection) {
        mainSection.classList.remove('active');
      });
      mainSections[index].classList.add('active');
    });
  });
};

var openSubpages = function openSubpages() {
  var projectLists = document.querySelectorAll('.projects li');
  projectLists.forEach(function (projectList) {
    projectList.addEventListener('click', function (e) {
      var link = e.target.parentElement;

      if (link.tagName === 'A') {
        link.nextElementSibling.classList.remove('hidden');
        disableScroll();
      }
    });
  });
};

var closeSubpages = function closeSubpages() {
  var subpages = document.querySelectorAll('.project-description');
  subpages.forEach(function (subpage) {
    closeUI(subpage);
  });
};

var openHome = function openHome() {
  var header = document.querySelector('.header');
  var title = document.querySelector('.title > a');
  var sections = Array.from(document.querySelectorAll('.main > section'));
  header.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target === title) {
      sections.map(function (section) {
        section.classList.remove('active');

        if (section.className === 'about-section') {
          section.classList.add('active');
        }
      });
    }
  });
};

window.addEventListener('DOMContentLoaded', function () {
  gnbTabMenu();
  openSubpages();
  closeSubpages();
  openHome();
});

/***/ })
/******/ ]);