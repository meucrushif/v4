self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/articles.js":
/*!********************************!*\
  !*** ./components/articles.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var _speechly_speech_recognition_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @speechly/speech-recognition-polyfill */ "../node_modules/@speechly/speech-recognition-polyfill/dist/index.js");
/* harmony import */ var _speechly_speech_recognition_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_speechly_speech_recognition_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-speech-recognition */ "../node_modules/react-speech-recognition/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Farm\xE1cias App\\project\\strapi\\v4\\frontend\\components\\articles.js",
    _this = undefined,
    _s = $RefreshSig$();






var Articles = function Articles(_ref) {
  _s();

  var articles = _ref.articles;
  var leftArticlesCount = Math.ceil(articles.length / 5);
  var leftArticles = articles.slice(0, leftArticlesCount);
  var rightArticles = articles.slice(leftArticlesCount, articles.length);

  var _useSpeechRecognition = (0,react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition)(),
      transcript = _useSpeechRecognition.transcript,
      listening = _useSpeechRecognition.listening,
      browserSupportsSpeechRecognition = _useSpeechRecognition.browserSupportsSpeechRecognition;

  var startListening = function startListening() {
    return react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.default.startListening({
      continuous: true
    });
  };

  if (!browserSupportsSpeechRecognition) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "Browser doesn't support speech recognition."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "alo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-child-width-1-2@s",
      "data-uk-grid": "true",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: leftArticles.map(function (article, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card__WEBPACK_IMPORTED_MODULE_2__.default, {
            article: article
          }, "article__left__".concat(article.attributes.slug), false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "uk-child-width-1-2@m uk-grid-match",
          "data-uk-grid": true,
          children: rightArticles.map(function (article, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card__WEBPACK_IMPORTED_MODULE_2__.default, {
              article: article
            }, "article__left__".concat(article.attributes.slug), false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(Articles, "uliptws6IanepRR+FIsDNuMIzrY=", false, function () {
  return [react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition];
});

_c = Articles;
/* harmony default export */ __webpack_exports__["default"] = (Articles);

var _c;

$RefreshReg$(_c, "Articles");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcnRpY2xlcy5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlcyIsImFydGljbGVzIiwibGVmdEFydGljbGVzQ291bnQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImxlZnRBcnRpY2xlcyIsInNsaWNlIiwicmlnaHRBcnRpY2xlcyIsInVzZVNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdCIsImxpc3RlbmluZyIsImJyb3dzZXJTdXBwb3J0c1NwZWVjaFJlY29nbml0aW9uIiwic3RhcnRMaXN0ZW5pbmciLCJTcGVlY2hSZWNvZ25pdGlvbiIsImNvbnRpbnVvdXMiLCJtYXAiLCJhcnRpY2xlIiwiaSIsImF0dHJpYnV0ZXMiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDakMsTUFBTUMsaUJBQWlCLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxRQUFRLENBQUNJLE1BQVQsR0FBa0IsQ0FBNUIsQ0FBMUI7QUFDQSxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sS0FBVCxDQUFlLENBQWYsRUFBa0JMLGlCQUFsQixDQUFyQjtBQUNBLE1BQU1NLGFBQWEsR0FBR1AsUUFBUSxDQUFDTSxLQUFULENBQWVMLGlCQUFmLEVBQWtDRCxRQUFRLENBQUNJLE1BQTNDLENBQXRCOztBQUhpQyw4QkFRN0JJLDhFQUFvQixFQVJTO0FBQUEsTUFLL0JDLFVBTCtCLHlCQUsvQkEsVUFMK0I7QUFBQSxNQU0vQkMsU0FOK0IseUJBTS9CQSxTQU4rQjtBQUFBLE1BTy9CQyxnQ0FQK0IseUJBTy9CQSxnQ0FQK0I7O0FBU2pDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUFNQyw0RUFBQSxDQUFpQztBQUFFQyxnQkFBVSxFQUFFO0FBQWQsS0FBakMsQ0FBTjtBQUFBLEdBQXZCOztBQUVBLE1BQUksQ0FBQ0gsZ0NBQUwsRUFBdUM7QUFDckMsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUdELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQXNDLHNCQUFhLE1BQW5EO0FBQUEsOEJBQ0U7QUFBQSxrQkFDR04sWUFBWSxDQUFDVSxHQUFiLENBQWlCLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVixFQUFnQjtBQUNoQyw4QkFDRSw4REFBQywwQ0FBRDtBQUNFLG1CQUFPLEVBQUVEO0FBRFgsc0NBRXlCQSxPQUFPLENBQUNFLFVBQVIsQ0FBbUJDLElBRjVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFNRCxTQVBBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBV0U7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsb0NBQWY7QUFBb0QsOEJBQXBEO0FBQUEsb0JBQ0daLGFBQWEsQ0FBQ1EsR0FBZCxDQUFrQixVQUFDQyxPQUFELEVBQVVDLENBQVYsRUFBZ0I7QUFDakMsZ0NBQ0UsOERBQUMsMENBQUQ7QUFDRSxxQkFBTyxFQUFFRDtBQURYLHdDQUV5QkEsT0FBTyxDQUFDRSxVQUFSLENBQW1CQyxJQUY1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBTUQsV0FQQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2QkQsQ0E3Q0Q7O0dBQU1wQixRO1VBUUFTLDBFOzs7S0FSQVQsUTtBQStDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iN2FjN2FhODA1ZWU5OTEwYmM2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkXCJcbmltcG9ydCB7IGNyZWF0ZVNwZWVjaGx5U3BlZWNoUmVjb2duaXRpb24gfSBmcm9tICdAc3BlZWNobHkvc3BlZWNoLXJlY29nbml0aW9uLXBvbHlmaWxsJ1xuaW1wb3J0IFNwZWVjaFJlY29nbml0aW9uLCB7IHVzZVNwZWVjaFJlY29nbml0aW9uIH0gZnJvbSAncmVhY3Qtc3BlZWNoLXJlY29nbml0aW9uJ1xuY29uc3QgQXJ0aWNsZXMgPSAoeyBhcnRpY2xlcyB9KSA9PiB7XG4gIGNvbnN0IGxlZnRBcnRpY2xlc0NvdW50ID0gTWF0aC5jZWlsKGFydGljbGVzLmxlbmd0aCAvIDUpXG4gIGNvbnN0IGxlZnRBcnRpY2xlcyA9IGFydGljbGVzLnNsaWNlKDAsIGxlZnRBcnRpY2xlc0NvdW50KVxuICBjb25zdCByaWdodEFydGljbGVzID0gYXJ0aWNsZXMuc2xpY2UobGVmdEFydGljbGVzQ291bnQsIGFydGljbGVzLmxlbmd0aClcbiAgY29uc3Qge1xuICAgIHRyYW5zY3JpcHQsXG4gICAgbGlzdGVuaW5nLFxuICAgIGJyb3dzZXJTdXBwb3J0c1NwZWVjaFJlY29nbml0aW9uXG4gIH0gPSB1c2VTcGVlY2hSZWNvZ25pdGlvbigpXG4gIGNvbnN0IHN0YXJ0TGlzdGVuaW5nID0gKCkgPT4gU3BlZWNoUmVjb2duaXRpb24uc3RhcnRMaXN0ZW5pbmcoeyBjb250aW51b3VzOiB0cnVlIH0pO1xuXG4gIGlmICghYnJvd3NlclN1cHBvcnRzU3BlZWNoUmVjb2duaXRpb24pIHtcbiAgICByZXR1cm4gPHNwYW4+QnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgc3BlZWNoIHJlY29nbml0aW9uLjwvc3Bhbj47XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5hbG88L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jaGlsZC13aWR0aC0xLTJAc1wiIGRhdGEtdWstZ3JpZD1cInRydWVcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7bGVmdEFydGljbGVzLm1hcCgoYXJ0aWNsZSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgICAgICAgIGtleT17YGFydGljbGVfX2xlZnRfXyR7YXJ0aWNsZS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jaGlsZC13aWR0aC0xLTJAbSB1ay1ncmlkLW1hdGNoXCIgZGF0YS11ay1ncmlkPlxuICAgICAgICAgICAge3JpZ2h0QXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIGFydGljbGU9e2FydGljbGV9XG4gICAgICAgICAgICAgICAgICBrZXk9e2BhcnRpY2xlX19sZWZ0X18ke2FydGljbGUuYXR0cmlidXRlcy5zbHVnfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXNcbiJdLCJzb3VyY2VSb290IjoiIn0=