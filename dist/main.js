/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const url = 'https://jsonplaceholder.typicode.com/';
const postsCntr = document.querySelector('.posts');
const requestBtn = document.querySelector("#request");
const idInput = document.querySelector('#id');
requestBtn.addEventListener('click', main);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const id = Number.parseInt(idInput.value);
        if (!isNaN(id)) {
            try {
                const resPosts = yield fetch(`${url}posts/${id}`);
                const fetchedPost = yield resPosts.json();
                const resComments = yield fetch(`${url}posts/${id}/comments`);
                const comments = yield resComments.json();
                createPostWithComments(fetchedPost, comments);
            }
            catch (error) {
                console.log(new Error(error));
            }
        }
    });
}
function createPostWithComments(post, comments) {
    let { title, body } = post;
    let titleElem = document.createElement('h4');
    let bodyElem = document.createElement('p');
    let commentElem = document.createElement('p');
    const divOfComments = document.createElement('div');
    titleElem.textContent = title;
    bodyElem.textContent = body;
    titleElem.style.borderBottom = '2px solid red';
    titleElem.style.textAlign = 'center';
    postsCntr.append(titleElem);
    titleElem.after(bodyElem);
    if (comments.length != 0) {
        commentElem.textContent = "Comments:";
        for (let { email, body } of comments) {
            let comment = document.createElement('p');
            comment.innerHTML = email + "</br>" + body;
            comment.style.marginTop = '5px';
            divOfComments.append(comment);
        }
        bodyElem.after(divOfComments);
        bodyElem.after(commentElem);
        divOfComments.style.marginBottom = '10px';
        divOfComments.style.marginLeft = '10px';
        commentElem.style.marginTop = '10px';
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map