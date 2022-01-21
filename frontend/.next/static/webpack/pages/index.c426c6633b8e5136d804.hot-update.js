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


/***/ }),

/***/ "../node_modules/@speechly/browser-client/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/@speechly/browser-client/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./speechly */ "../node_modules/@speechly/browser-client/speechly/index.js"), exports);
__exportStar(__webpack_require__(/*! ./microphone/types */ "../node_modules/@speechly/browser-client/microphone/types.js"), exports);
__exportStar(__webpack_require__(/*! ./websocket/types */ "../node_modules/@speechly/browser-client/websocket/types.js"), exports);
__exportStar(__webpack_require__(/*! ./storage/types */ "../node_modules/@speechly/browser-client/storage/types.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/microphone/audioworklet.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/microphone/audioworklet.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = `
// Indices for the Control SAB.
const CONTROL = {
  'WRITE_INDEX': 0,
  'FRAMES_AVAILABLE': 1,
  'LOCK': 2,
};

class SpeechlyProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this._initialized = false;
    this.debug = false;
    this.port.onmessage = this._initialize.bind(this);
  }

  _initialize(event) {
    this.controlSAB = new Int32Array(event.data.controlSAB);
    this.dataSAB = new Float32Array(event.data.dataSAB);
    this.debug = event.data.debug;
    this.sharedBufferSize = this.dataSAB.length;
    this.buffer = new Float32Array(0);
    this._initialized = true;
  }

  _transferDataToSharedBuffer(data) {
    this.controlSAB[CONTROL.LOCK] = 1
    let inputWriteIndex = this.controlSAB[CONTROL.WRITE_INDEX]
    if (this.controlSAB[CONTROL.FRAMES_AVAILABLE] > 0) {
      if (inputWriteIndex + data.length > this.sharedBufferSize) {
        // console.log('buffer overflow')
        inputWriteIndex = 0
      }
    }
    this.dataSAB.set(data, inputWriteIndex)
    this.controlSAB[CONTROL.WRITE_INDEX] = inputWriteIndex + data.length
    this.controlSAB[CONTROL.FRAMES_AVAILABLE] = inputWriteIndex + data.length
    this.controlSAB[CONTROL.LOCK] = 0
  }

  _pushData(data) {
    if (this.debug) {
      const signalEnergy = getStandardDeviation(data)
      this.port.postMessage({
        type: 'STATS',
        signalEnergy: signalEnergy
      });
    }

    if (this.buffer.length > this.sharedBufferSize) {
      const dataToTransfer = this.buffer.subarray(0, this.sharedBufferSize)
      this._transferDataToSharedBuffer(dataToTransfer)
      this.buffer = this.buffer.subarray(this.sharedBufferSize)
    }
    let concat = new Float32Array(this.buffer.length + data.length)
    concat.set(this.buffer)
    concat.set(data, this.buffer.length)
    this.buffer = concat
  }

  process(inputs, outputs, parameters) {
    const inputChannelData = inputs[0][0];
      if (inputChannelData !== undefined) {
        if (this.controlSAB && this.dataSAB) {
          this._pushData(inputChannelData);
        } else {
          this.port.postMessage({
            type: 'DATA',
            frames: inputChannelData
          });
        }
      }
      
      return true;
  }
}

function getStandardDeviation(array) {
  const n = array.length
  const mean = array.reduce((a, b) => a + b) / n
  return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

registerProcessor('speechly-worklet', SpeechlyProcessor);
`;
//# sourceMappingURL=audioworklet.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/microphone/browser_microphone.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/microphone/browser_microphone.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrowserMicrophone = void 0;
const types_1 = __webpack_require__(/*! ./types */ "../node_modules/@speechly/browser-client/microphone/types.js");
const audioworklet_1 = __importDefault(__webpack_require__(/*! ./audioworklet */ "../node_modules/@speechly/browser-client/microphone/audioworklet.js"));
const audioProcessEvent = 'audioprocess';
const baseBufferSize = 4096;
class BrowserMicrophone {
    constructor(isWebkit, sampleRate, apiClient, debug = false) {
        this.initialized = false;
        this.muted = false;
        this.stats = {
            maxSignalEnergy: 0.0,
        };
        this.handleAudio = (array) => {
            if (this.muted) {
                return;
            }
            if (array.length > 0) {
                this.apiClient.sendAudio(array);
            }
        };
        this.isWebkit = isWebkit;
        this.apiClient = apiClient;
        this.sampleRate = sampleRate;
        this.debug = debug;
    }
    initialize(audioContext, mediaStreamConstraints) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.mediaDevices) === undefined) {
                throw types_1.ErrDeviceNotSupported;
            }
            this.audioContext = audioContext;
            this.resampleRatio = this.audioContext.sampleRate / this.sampleRate;
            try {
                this.mediaStream = yield window.navigator.mediaDevices.getUserMedia(mediaStreamConstraints);
            }
            catch (_b) {
                throw types_1.ErrNoAudioConsent;
            }
            this.audioTrack = this.mediaStream.getAudioTracks()[0];
            // Start audio context if we are dealing with a non-WebKit browser.
            //
            // Non-webkit browsers (currently only Chrome on Android)
            // require that user media is obtained before resuming the audio context.
            //
            // If audio context is attempted to be resumed before `mediaDevices.getUserMedia`,
            // `audioContext.resume()` will hang indefinitely, without being resolved or rejected.
            if (!this.isWebkit) {
                yield this.audioContext.resume();
            }
            if (window.AudioWorkletNode !== undefined) {
                const blob = new Blob([audioworklet_1.default], { type: 'text/javascript' });
                const blobURL = window.URL.createObjectURL(blob);
                yield this.audioContext.audioWorklet.addModule(blobURL);
                const speechlyNode = new AudioWorkletNode(this.audioContext, 'speechly-worklet');
                this.audioContext.createMediaStreamSource(this.mediaStream).connect(speechlyNode);
                speechlyNode.connect(this.audioContext.destination);
                // @ts-ignore
                if (window.SharedArrayBuffer !== undefined) {
                    // Chrome, Edge, Firefox, Firefox Android
                    // @ts-ignore
                    const controlSAB = new window.SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT);
                    // @ts-ignore
                    const dataSAB = new window.SharedArrayBuffer(1024 * Float32Array.BYTES_PER_ELEMENT);
                    this.apiClient.postMessage({
                        type: 'SET_SHARED_ARRAY_BUFFERS',
                        controlSAB,
                        dataSAB,
                    });
                    speechlyNode.port.postMessage({
                        type: 'SET_SHARED_ARRAY_BUFFERS',
                        controlSAB,
                        dataSAB,
                        debug: this.debug,
                    });
                }
                else {
                    // Opera, Chrome Android, Webview Anroid
                    if (this.debug) {
                        console.log('[SpeechlyClient]', 'can not use SharedArrayBuffer');
                    }
                }
                speechlyNode.port.onmessage = (event) => {
                    switch (event.data.type) {
                        case 'STATS':
                            if (event.data.signalEnergy > this.stats.maxSignalEnergy) {
                                this.stats.maxSignalEnergy = event.data.signalEnergy;
                            }
                            break;
                        case 'DATA':
                            this.handleAudio(event.data.frames);
                            break;
                        default:
                    }
                };
            }
            else {
                if (this.debug) {
                    console.log('[SpeechlyClient]', 'can not use AudioWorkletNode');
                }
                // Safari, iOS Safari and Internet Explorer
                if (this.isWebkit) {
                    // Multiply base buffer size of 4 kB by the resample ratio rounded up to the next power of 2.
                    // i.e. for 48 kHz to 16 kHz downsampling, this will be 4096 (base) * 4 = 16384.
                    const bufSize = baseBufferSize * Math.pow(2, Math.ceil(Math.log(this.resampleRatio) / Math.log(2)));
                    this.audioProcessor = this.audioContext.createScriptProcessor(bufSize, 1, 1);
                }
                else {
                    this.audioProcessor = this.audioContext.createScriptProcessor(undefined, 1, 1);
                }
                this.audioContext.createMediaStreamSource(this.mediaStream).connect(this.audioProcessor);
                this.audioProcessor.connect(this.audioContext.destination);
                this.audioProcessor.addEventListener(audioProcessEvent, (event) => {
                    this.handleAudio(event.inputBuffer.getChannelData(0));
                });
            }
            this.initialized = true;
            this.mute();
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            this.mute();
            if (!this.initialized) {
                throw types_1.ErrNotInitialized;
            }
            const t = this.audioTrack;
            t.enabled = false;
            // Stop all media tracks
            const stream = this.mediaStream;
            stream.getTracks().forEach(t => t.stop());
            // Disconnect and stop ScriptProcessorNode
            if (this.audioProcessor != null) {
                const proc = this.audioProcessor;
                proc.disconnect();
            }
            // Unset all audio infrastructure
            this.mediaStream = undefined;
            this.audioTrack = undefined;
            this.audioProcessor = undefined;
            this.initialized = false;
        });
    }
    mute() {
        this.muted = true;
    }
    unmute() {
        this.muted = false;
    }
    /**
     * print statistics to console
     */
    printStats() {
        if (this.audioTrack != null) {
            const settings = this.audioTrack.getSettings();
            console.log(this.audioTrack.label, this.audioTrack.readyState);
            // @ts-ignore
            console.log('channelCount', settings.channelCount);
            // @ts-ignore
            console.log('latency', settings.latency);
            // @ts-ignore
            console.log('autoGainControl', settings.autoGainControl);
        }
        console.log('maxSignalEnergy', this.stats.maxSignalEnergy);
    }
}
exports.BrowserMicrophone = BrowserMicrophone;
//# sourceMappingURL=browser_microphone.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/microphone/index.js":
/*!********************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/microphone/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./browser_microphone */ "../node_modules/@speechly/browser-client/microphone/browser_microphone.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "../node_modules/@speechly/browser-client/microphone/types.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/microphone/types.js":
/*!********************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/microphone/types.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrAppIdChangeWithoutProjectLogin = exports.ErrNoAudioConsent = exports.ErrDeviceNotSupported = exports.ErrAlreadyInitialized = exports.ErrNotInitialized = exports.DefaultSampleRate = void 0;
/**
 * Default sample rate for microphone streams.
 * @public
 */
exports.DefaultSampleRate = 16000;
/**
 * Error to be thrown when the microphone was accessed before it was initialized.
 * @public
 */
exports.ErrNotInitialized = new Error('Microphone is not initialized');
/**
 * Error to be thrown when the initialize method of a Microphone instance is called more than once.
 * @public
 */
exports.ErrAlreadyInitialized = new Error('Microphone is already initialized');
/**
 * Error to be thrown when the device does not support the Microphone instance's target audio APIs.
 * @public
 */
exports.ErrDeviceNotSupported = new Error('Current device does not support microphone API');
/**
 * Error to be thrown when user did not give consent to the application to record audio.
 * @public
 */
exports.ErrNoAudioConsent = new Error('Microphone consent is no given');
/**
 * Error to be thrown when user tries to change appId without project login.
 * @public
 */
exports.ErrAppIdChangeWithoutProjectLogin = new Error('AppId changed without project login');
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/speechly/client.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/speechly/client.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Client = void 0;
const locale_code_1 = __importDefault(__webpack_require__(/*! locale-code */ "../node_modules/locale-code/src/index.js"));
const uuid_1 = __webpack_require__(/*! uuid */ "../node_modules/uuid/dist/esm-browser/index.js");
const token_1 = __webpack_require__(/*! ../websocket/token */ "../node_modules/@speechly/browser-client/websocket/token.js");
const microphone_1 = __webpack_require__(/*! ../microphone */ "../node_modules/@speechly/browser-client/microphone/index.js");
const websocket_1 = __webpack_require__(/*! ../websocket */ "../node_modules/@speechly/browser-client/websocket/index.js");
const storage_1 = __webpack_require__(/*! ../storage */ "../node_modules/@speechly/browser-client/storage/index.js");
const types_1 = __webpack_require__(/*! ./types */ "../node_modules/@speechly/browser-client/speechly/types.js");
const state_1 = __webpack_require__(/*! ./state */ "../node_modules/@speechly/browser-client/speechly/state.js");
const segment_1 = __webpack_require__(/*! ./segment */ "../node_modules/@speechly/browser-client/speechly/segment.js");
const parsers_1 = __webpack_require__(/*! ./parsers */ "../node_modules/@speechly/browser-client/speechly/parsers.js");
const deviceIdStorageKey = 'speechly-device-id';
const authTokenKey = 'speechly-auth-token';
const defaultApiUrl = 'wss://api.speechly.com/ws/v1';
const defaultLoginUrl = 'https://api.speechly.com/login';
const defaultLanguage = 'en-US';
/**
 * A client for Speechly Spoken Language Understanding (SLU) API. The client handles initializing the microphone
 * and websocket connection to Speechly API, passing control events and audio stream to the API, reading the responses
 * and dispatching them, as well as providing a high-level API for interacting with so-called speech segments.
 * @public
 */
class Client {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.activeContexts = new Map();
        this.reconnectAttemptCount = 5;
        this.reconnectMinDelay = 1000;
        this.contextStopDelay = 250;
        this.state = types_1.ClientState.Disconnected;
        this.stateChangeCb = () => { };
        this.segmentChangeCb = () => { };
        this.tentativeTranscriptCb = () => { };
        this.tentativeEntitiesCb = () => { };
        this.tentativeIntentCb = () => { };
        this.transcriptCb = () => { };
        this.entityCb = () => { };
        this.intentCb = () => { };
        this.handleWebsocketResponse = (response) => {
            var _a;
            if (this.debug) {
                console.log('[SpeechlyClient]', 'Received response', response);
            }
            const { audio_context, segment_id, type } = response;
            let { data } = response;
            const context = this.activeContexts.get(audio_context);
            if (context === undefined) {
                console.warn('[SpeechlyClient]', 'Received response for non-existent context', audio_context);
                return;
            }
            let segmentState = (_a = context.get(segment_id)) !== null && _a !== void 0 ? _a : new segment_1.SegmentState(audio_context, segment_id);
            switch (type) {
                case websocket_1.WebsocketResponseType.TentativeTranscript:
                    data = data;
                    const words = (0, parsers_1.parseTentativeTranscript)(data);
                    this.tentativeTranscriptCb(audio_context, segment_id, words, data.transcript);
                    segmentState = segmentState.updateTranscript(words);
                    break;
                case websocket_1.WebsocketResponseType.Transcript:
                    data = data;
                    const word = (0, parsers_1.parseTranscript)(data);
                    this.transcriptCb(audio_context, segment_id, word);
                    segmentState = segmentState.updateTranscript([word]);
                    break;
                case websocket_1.WebsocketResponseType.TentativeEntities:
                    data = data;
                    const entities = (0, parsers_1.parseTentativeEntities)(data);
                    this.tentativeEntitiesCb(audio_context, segment_id, entities);
                    segmentState = segmentState.updateEntities(entities);
                    break;
                case websocket_1.WebsocketResponseType.Entity:
                    data = data;
                    const entity = (0, parsers_1.parseEntity)(data);
                    this.entityCb(audio_context, segment_id, entity);
                    segmentState = segmentState.updateEntities([entity]);
                    break;
                case websocket_1.WebsocketResponseType.TentativeIntent:
                    data = data;
                    const tentativeIntent = (0, parsers_1.parseIntent)(data, false);
                    this.tentativeIntentCb(audio_context, segment_id, tentativeIntent);
                    segmentState = segmentState.updateIntent(tentativeIntent);
                    break;
                case websocket_1.WebsocketResponseType.Intent:
                    data = data;
                    const intent = (0, parsers_1.parseIntent)(data, true);
                    this.intentCb(audio_context, segment_id, intent);
                    segmentState = segmentState.updateIntent(intent);
                    break;
                case websocket_1.WebsocketResponseType.SegmentEnd:
                    segmentState = segmentState.finalize();
                    break;
                default:
                // TODO: handle unexpected response types.
            }
            // Update the segment in current context.
            context.set(segment_id, segmentState);
            // Update current contexts.
            this.activeContexts.set(audio_context, context);
            // Log segment to console
            if (this.logSegments) {
                console.info(segmentState.toString());
            }
            // Fire segment change event.
            this.segmentChangeCb(segmentState.toSegment());
        };
        this.handleWebsocketClosure = (err) => {
            if (this.debug) {
                console.error('[SpeechlyClient]', 'Server connection closed', err);
            }
            // If for some reason deviceId is missing, there's nothing else we can do but fail completely.
            if (this.deviceId === undefined) {
                this.setState(types_1.ClientState.Failed);
                return;
            }
            // Make sure we don't have concurrent reconnection procedures or attempt to reconnect from a failed state.
            if (this.state === types_1.ClientState.Connecting || this.state === types_1.ClientState.Failed) {
                return;
            }
            this.setState(types_1.ClientState.Connecting);
        };
        this.sampleRate = (_a = options.sampleRate) !== null && _a !== void 0 ? _a : microphone_1.DefaultSampleRate;
        try {
            const constraints = window.navigator.mediaDevices.getSupportedConstraints();
            this.nativeResamplingSupported = constraints.sampleRate === true;
            if (options.autoGainControl != null && options.autoGainControl) {
                // @ts-ignore
                this.autoGainControl = constraints.autoGainControl === true;
            }
            else {
                this.autoGainControl = false;
            }
        }
        catch (_o) {
            this.nativeResamplingSupported = false;
            this.autoGainControl = false;
        }
        const language = (_b = options.language) !== null && _b !== void 0 ? _b : defaultLanguage;
        if (!(locale_code_1.default.validate(language) || (locale_code_1.default.validateLanguageCode(`${language.substring(0, 2)}-XX`) && /^..-\d\d\d$/.test(language)))) {
            throw Error(`[SpeechlyClient] Invalid language "${language}"`);
        }
        this.debug = (_c = options.debug) !== null && _c !== void 0 ? _c : false;
        this.logSegments = (_d = options.logSegments) !== null && _d !== void 0 ? _d : false;
        this.loginUrl = (_e = options.loginUrl) !== null && _e !== void 0 ? _e : defaultLoginUrl;
        this.appId = (_f = options.appId) !== null && _f !== void 0 ? _f : undefined;
        this.projectId = (_g = options.projectId) !== null && _g !== void 0 ? _g : undefined;
        const apiUrl = generateWsUrl((_h = options.apiUrl) !== null && _h !== void 0 ? _h : defaultApiUrl, language, (_j = options.sampleRate) !== null && _j !== void 0 ? _j : microphone_1.DefaultSampleRate);
        this.apiClient = (_k = options.apiClient) !== null && _k !== void 0 ? _k : new websocket_1.WebWorkerController();
        if (this.appId !== undefined && this.projectId !== undefined) {
            throw Error('[SpeechlyClient] You cannot use both appId and projectId at the same time');
        }
        this.storage = (_l = options.storage) !== null && _l !== void 0 ? _l : new storage_1.LocalStorage();
        this.deviceId = this.storage.getOrSet(deviceIdStorageKey, uuid_1.v4);
        const storedToken = this.storage.get(authTokenKey);
        // 2. Fetch auth token. It doesn't matter if it's not present.
        this.initializeApiClientPromise = new Promise(resolve => {
            this.resolveInitialization = resolve;
        });
        if (storedToken == null || !(0, token_1.validateToken)(storedToken, this.projectId, this.appId, this.deviceId)) {
            (0, token_1.fetchToken)(this.loginUrl, this.projectId, this.appId, this.deviceId)
                .then(token => {
                this.authToken = token;
                // Cache the auth token in local storage for future use.
                this.storage.set(authTokenKey, this.authToken);
                this.connect(apiUrl);
            })
                .catch(err => {
                this.setState(types_1.ClientState.Failed);
                throw err;
            });
        }
        else {
            this.authToken = storedToken;
            this.connect(apiUrl);
        }
        if (window.AudioContext !== undefined) {
            this.isWebkit = false;
        }
        else if (window.webkitAudioContext !== undefined) {
            this.isWebkit = true;
        }
        else {
            throw microphone_1.ErrDeviceNotSupported;
        }
        this.microphone = (_m = options.microphone) !== null && _m !== void 0 ? _m : new microphone_1.BrowserMicrophone(this.isWebkit, this.sampleRate, this.apiClient, this.debug);
        this.apiClient.onResponse(this.handleWebsocketResponse);
        this.apiClient.onClose(this.handleWebsocketClosure);
        window.SpeechlyClient = this;
    }
    /**
     * Esteblish websocket connection
     */
    connect(apiUrl) {
        if (this.authToken != null) {
            this.apiClient.initialize(apiUrl, this.authToken, this.sampleRate, this.debug).then(() => {
                if (this.resolveInitialization != null) {
                    this.resolveInitialization();
                }
            }).catch(err => {
                throw err;
            });
        }
    }
    /**
     * Initializes the client, by initializing the microphone and establishing connection to the API.
     *
     * This function HAS to be invoked by a user by e.g. binding it to a button press,
     * or some other user-performed action.
     *
     * If this function is invoked without a user interaction,
     * the microphone functionality will not work due to security restrictions by the browser.
     */
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initializeApiClientPromise;
            if (this.state !== types_1.ClientState.Disconnected) {
                throw Error('Cannot initialize client - client is not in Disconnected state');
            }
            this.setState(types_1.ClientState.Connecting);
            try {
                // 1. Initialise the storage and fetch deviceId (or generate new one and store it).
                // await this.storage.initialize()
                // this.deviceId = await this.storage.getOrSet(deviceIdStorageKey, uuidv4)
                // 2. Initialise the microphone stack.
                if (this.isWebkit) {
                    if (window.webkitAudioContext !== undefined) {
                        // eslint-disable-next-line new-cap
                        this.audioContext = new window.webkitAudioContext();
                    }
                }
                else {
                    const opts = {};
                    if (this.nativeResamplingSupported) {
                        opts.sampleRate = this.sampleRate;
                    }
                    this.audioContext = new window.AudioContext(opts);
                }
                const mediaStreamConstraints = {
                    video: false,
                };
                if (this.nativeResamplingSupported || this.autoGainControl) {
                    mediaStreamConstraints.audio = {
                        sampleRate: this.sampleRate,
                        // @ts-ignore
                        autoGainControl: this.autoGainControl,
                    };
                }
                else {
                    mediaStreamConstraints.audio = true;
                }
                if (this.audioContext != null) {
                    // Start audio context if we are dealing with a WebKit browser.
                    //
                    // WebKit browsers (e.g. Safari) require to resume the context first,
                    // before obtaining user media by calling `mediaDevices.getUserMedia`.
                    //
                    // If done in a different order, the audio context will resume successfully,
                    // but will emit empty audio buffers.
                    if (this.isWebkit) {
                        yield this.audioContext.resume();
                    }
                    // 3. Initialise websocket.
                    yield this.apiClient.setSourceSampleRate(this.audioContext.sampleRate);
                    this.initializeMicrophonePromise = this.microphone.initialize(this.audioContext, mediaStreamConstraints);
                    yield this.initializeMicrophonePromise;
                }
                else {
                    throw microphone_1.ErrDeviceNotSupported;
                }
            }
            catch (err) {
                switch (err) {
                    case microphone_1.ErrDeviceNotSupported:
                        this.setState(types_1.ClientState.NoBrowserSupport);
                        break;
                    case microphone_1.ErrNoAudioConsent:
                        this.setState(types_1.ClientState.NoAudioConsent);
                        break;
                    default:
                        this.setState(types_1.ClientState.Failed);
                }
                throw err;
            }
            this.setState(types_1.ClientState.Connected);
        });
    }
    /**
     * Closes the client by closing the API connection and disabling the microphone.
     */
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            const errs = [];
            try {
                yield this.microphone.close();
            }
            catch (err) {
                // @ts-ignore
                errs.push(err.message);
            }
            try {
                yield this.apiClient.close();
            }
            catch (err) {
                // @ts-ignore
                errs.push(err.message);
            }
            this.activeContexts.clear();
            this.setState(types_1.ClientState.Disconnected);
            if (errs.length > 0) {
                throw Error(errs.join(','));
            }
        });
    }
    /**
     * Stops current context and immediately starts a new SLU context
     * by sending a start context event to the API and unmuting the microphone.
     * @param appId - unique identifier of an app in the dashboard.
     */
    switchContext(appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state === types_1.ClientState.Recording) {
                this.resolveStopContext = undefined;
                const contextId = yield this.apiClient.switchContext(appId);
                this.activeContexts.set(contextId, new Map());
            }
        });
    }
    /**
     * Starts a new SLU context by sending a start context event to the API and unmuting the microphone.
     * @param cb - the callback which is invoked when the context start was acknowledged by the API.
     */
    startContext(appId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.resolveStopContext != null) {
                this.resolveStopContext();
                yield this.stoppedContextIdPromise;
            }
            if (this.state === types_1.ClientState.Disconnected || this.state === types_1.ClientState.Connecting) {
                throw Error('Cannot start context - client is not connected');
            }
            this.setState(types_1.ClientState.Starting);
            const contextId = yield this._startContext(appId);
            return contextId;
        });
    }
    _startContext(appId) {
        return __awaiter(this, void 0, void 0, function* () {
            let contextId;
            try {
                if (this.projectId != null) {
                    contextId = yield this.apiClient.startContext(appId);
                }
                else {
                    if (appId != null && this.appId !== appId) {
                        throw microphone_1.ErrAppIdChangeWithoutProjectLogin;
                    }
                    contextId = yield this.apiClient.startContext();
                }
            }
            catch (err) {
                switch (err) {
                    case microphone_1.ErrAppIdChangeWithoutProjectLogin:
                        this.setState(types_1.ClientState.Failed);
                        break;
                    default:
                        this.setState(types_1.ClientState.Connected);
                }
                throw err;
            }
            this.setState(types_1.ClientState.Recording);
            this.microphone.unmute();
            this.activeContexts.set(contextId, new Map());
            return contextId;
        });
    }
    /**
     * Stops current SLU context by sending a stop context event to the API and muting the microphone
     * delayed by contextStopDelay = 250 ms
     */
    stopContext() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state !== types_1.ClientState.Recording && this.state !== types_1.ClientState.Starting) {
                throw Error('Cannot stop context - client is not recording');
            }
            this.setState(types_1.ClientState.Stopping);
            this.stoppedContextIdPromise = new Promise(resolve => {
                Promise.race([
                    new Promise(resolve => setTimeout(resolve, this.contextStopDelay)),
                    new Promise(resolve => {
                        this.resolveStopContext = resolve;
                    }),
                ])
                    .then(() => {
                    this._stopContext()
                        .then(id => {
                        resolve(id);
                    })
                        .catch(err => {
                        throw err;
                    });
                })
                    .catch(err => {
                    throw err;
                });
            });
            const contextId = yield this.stoppedContextIdPromise;
            this.setState(types_1.ClientState.Connected);
            this.activeContexts.delete(contextId);
            return contextId;
        });
    }
    _stopContext() {
        return __awaiter(this, void 0, void 0, function* () {
            this.microphone.mute();
            let contextId;
            try {
                contextId = yield this.apiClient.stopContext();
            }
            catch (err) {
                this.setState(types_1.ClientState.Failed);
                throw err;
            }
            return contextId;
        });
    }
    /**
     * Adds a listener for client state change events.
     * @param cb - the callback to invoke on state change events.
     */
    onStateChange(cb) {
        this.stateChangeCb = cb;
    }
    /**
     * Adds a listener for current segment change events.
     * @param cb - the callback to invoke on segment change events.
     */
    onSegmentChange(cb) {
        this.segmentChangeCb = cb;
    }
    /**
     * Adds a listener for tentative transcript responses from the API.
     * @param cb - the callback to invoke on a tentative transcript response.
     */
    onTentativeTranscript(cb) {
        this.tentativeTranscriptCb = cb;
    }
    /**
     * Adds a listener for transcript responses from the API.
     * @param cb - the callback to invoke on a transcript response.
     */
    onTranscript(cb) {
        this.transcriptCb = cb;
    }
    /**
     * Adds a listener for tentative entities responses from the API.
     * @param cb - the callback to invoke on a tentative entities response.
     */
    onTentativeEntities(cb) {
        this.tentativeEntitiesCb = cb;
    }
    /**
     * Adds a listener for entity responses from the API.
     * @param cb - the callback to invoke on an entity response.
     */
    onEntity(cb) {
        this.entityCb = cb;
    }
    /**
     * Adds a listener for tentative intent responses from the API.
     * @param cb - the callback to invoke on a tentative intent response.
     */
    onTentativeIntent(cb) {
        this.tentativeIntentCb = cb;
    }
    /**
     * Adds a listener for intent responses from the API.
     * @param cb - the callback to invoke on an intent response.
     */
    onIntent(cb) {
        this.intentCb = cb;
    }
    setState(newState) {
        if (this.state === newState) {
            return;
        }
        if (this.debug) {
            console.log('[SpeechlyClient]', 'State transition', (0, state_1.stateToString)(this.state), (0, state_1.stateToString)(newState));
        }
        this.state = newState;
        this.stateChangeCb(newState);
    }
    /**
     * print statistics to console
     */
    printStats() {
        this.microphone.printStats();
    }
}
exports.Client = Client;
function generateWsUrl(baseUrl, languageCode, sampleRate) {
    const params = new URLSearchParams();
    params.append('languageCode', languageCode);
    params.append('sampleRate', sampleRate.toString());
    return `${baseUrl}?${params.toString()}`;
}
//# sourceMappingURL=client.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/speechly/index.js":
/*!******************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/speechly/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Client = exports.stateToString = void 0;
__exportStar(__webpack_require__(/*! ./types */ "../node_modules/@speechly/browser-client/speechly/types.js"), exports);
var state_1 = __webpack_require__(/*! ./state */ "../node_modules/@speechly/browser-client/speechly/state.js");
Object.defineProperty(exports, "stateToString", ({ enumerable: true, get: function () { return state_1.stateToString; } }));
var client_1 = __webpack_require__(/*! ./client */ "../node_modules/@speechly/browser-client/speechly/client.js");
Object.defineProperty(exports, "Client", ({ enumerable: true, get: function () { return client_1.Client; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/speechly/parsers.js":
/*!********************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/speechly/parsers.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseIntent = exports.parseEntity = exports.parseTentativeEntities = exports.parseTranscript = exports.parseTentativeTranscript = void 0;
function parseTentativeTranscript(data) {
    return data.words.map(({ word, index, start_timestamp, end_timestamp }) => {
        return {
            value: word,
            index: index,
            startTimestamp: start_timestamp,
            endTimestamp: end_timestamp,
            isFinal: false,
        };
    });
}
exports.parseTentativeTranscript = parseTentativeTranscript;
function parseTranscript(data) {
    return {
        value: data.word,
        index: data.index,
        startTimestamp: data.start_timestamp,
        endTimestamp: data.end_timestamp,
        isFinal: true,
    };
}
exports.parseTranscript = parseTranscript;
function parseTentativeEntities(data) {
    return data.entities.map(({ entity, value, start_position, end_position }) => {
        return {
            type: entity,
            value: value,
            startPosition: start_position,
            endPosition: end_position,
            isFinal: false,
        };
    });
}
exports.parseTentativeEntities = parseTentativeEntities;
function parseEntity(data) {
    return {
        type: data.entity,
        value: data.value,
        startPosition: data.start_position,
        endPosition: data.end_position,
        isFinal: true,
    };
}
exports.parseEntity = parseEntity;
function parseIntent(data, isFinal) {
    return {
        intent: data.intent,
        isFinal: isFinal,
    };
}
exports.parseIntent = parseIntent;
//# sourceMappingURL=parsers.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/speechly/segment.js":
/*!********************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/speechly/segment.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SegmentState = void 0;
class SegmentState {
    constructor(ctxId, sId) {
        this.isFinalized = false;
        this.words = [];
        this.entities = new Map();
        this.intent = { intent: '', isFinal: false };
        this.contextId = ctxId;
        this.id = sId;
    }
    toSegment() {
        let i = 0;
        const entities = new Array(this.entities.size);
        this.entities.forEach(v => {
            entities[i] = v;
            i++;
        });
        return {
            id: this.id,
            contextId: this.contextId,
            isFinal: this.isFinalized,
            words: this.words,
            entities: entities,
            intent: this.intent,
        };
    }
    toString() {
        const segment = this.toSegment();
        const words = segment.words.filter((w) => w.value).map((w) => ({ value: w.value, index: w.index }));
        const cleanSegment = Object.assign(Object.assign({}, segment), { words });
        return JSON.stringify(cleanSegment, null, 2);
    }
    updateTranscript(words) {
        words.forEach(w => {
            // Only accept tentative words if the segment is tentative.
            if (!this.isFinalized || w.isFinal) {
                this.words[w.index] = w;
            }
        });
        return this;
    }
    updateEntities(entities) {
        entities.forEach(e => {
            // Only accept tentative entities if the segment is tentative.
            if (!this.isFinalized || e.isFinal) {
                this.entities.set(entityMapKey(e), e);
            }
        });
        return this;
    }
    updateIntent(intent) {
        // Only accept tentative intent if the segment is tentative.
        if (!this.isFinalized || intent.isFinal) {
            this.intent = intent;
        }
        return this;
    }
    finalize() {
        // Filter away any entities which were not finalized.
        this.entities.forEach((val, key) => {
            if (!val.isFinal) {
                this.entities.delete(key);
            }
        });
        // Filter away any transcripts which were not finalized.
        this.words = this.words.filter(w => w.isFinal);
        if (!this.intent.isFinal) {
            this.intent.intent = '';
            this.intent.isFinal = true;
        }
        // Mark as final.
        this.isFinalized = true;
        return this;
    }
}
exports.SegmentState = SegmentState;
function entityMapKey(e) {
    return `${e.startPosition.toString()}:${e.endPosition.toString()}`;
}
//# sourceMappingURL=segment.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/speechly/state.js":
/*!******************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/speechly/state.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stateToString = void 0;
const types_1 = __webpack_require__(/*! ./types */ "../node_modules/@speechly/browser-client/speechly/types.js");
/**
 * Converts client state value to a string, which could be useful for debugging or metrics.
 * @param state - the state of the client
 * @public
 */
function stateToString(state) {
    var _a;
    return (_a = states.get(state)) !== null && _a !== void 0 ? _a : unknown;
}
exports.stateToString = stateToString;
// TODO: generate this from the enum.
const unknown = 'Unknown';
const states = new Map([
    [types_1.ClientState.Failed, 'Failed'],
    [types_1.ClientState.NoBrowserSupport, 'NoBrowserSupport'],
    [types_1.ClientState.NoAudioConsent, 'NoAudioConsent'],
    [types_1.ClientState.Disconnecting, 'Disconnecting'],
    [types_1.ClientState.Disconnected, 'Disconnected'],
    [types_1.ClientState.Connecting, 'Connecting'],
    [types_1.ClientState.Connected, 'Connected'],
    [types_1.ClientState.Starting, 'Starting'],
    [types_1.ClientState.Stopping, 'Stopping'],
    [types_1.ClientState.Recording, 'Recording'],
]);
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/speechly/types.js":
/*!******************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/speechly/types.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientState = void 0;
/**
 * All possible states of a Speechly API client. Failed, NoBrowserSupport and NoAudioConsent states are non-recoverable
 * erroneous states, which should be handled by the end user, according to the semantics of an application.
 * Other states can also be utilized for e.g. enabling and disabling recording buttons or showing the status in the app.
 * It is also possible to use arithmetics for state comparison, e.g. `if (state < speechly.ClientState.Disconnected)`,
 * to react to non-recoverable states.
 * @public
 */
var ClientState;
(function (ClientState) {
    ClientState[ClientState["Failed"] = 0] = "Failed";
    ClientState[ClientState["NoBrowserSupport"] = 1] = "NoBrowserSupport";
    ClientState[ClientState["NoAudioConsent"] = 2] = "NoAudioConsent";
    ClientState[ClientState["Disconnected"] = 3] = "Disconnected";
    ClientState[ClientState["Disconnecting"] = 4] = "Disconnecting";
    ClientState[ClientState["Connecting"] = 5] = "Connecting";
    ClientState[ClientState["Connected"] = 6] = "Connected";
    ClientState[ClientState["Starting"] = 7] = "Starting";
    ClientState[ClientState["Stopping"] = 8] = "Stopping";
    ClientState[ClientState["Recording"] = 9] = "Recording";
})(ClientState = exports.ClientState || (exports.ClientState = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/storage/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/storage/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./storage */ "../node_modules/@speechly/browser-client/storage/storage.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "../node_modules/@speechly/browser-client/storage/types.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/storage/storage.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/storage/storage.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStorage = void 0;
class LocalStorage {
    constructor() {
        this.storage = window.localStorage;
    }
    get(key) {
        const val = this.storage.getItem(key);
        return val;
    }
    set(key, val) {
        this.storage.setItem(key, val);
    }
    getOrSet(key, genFn) {
        let val = this.storage.getItem(key);
        if (val === null) {
            val = genFn();
            this.storage.setItem(key, val);
        }
        return val;
    }
}
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/storage/types.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/storage/types.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrKeyNotFound = exports.ErrNoStorageSupport = void 0;
/**
 * Error to be thrown if storage API is not supported by the device.
 * @public
 */
exports.ErrNoStorageSupport = new Error('Current device does not support storage API');
/**
 * Error to be thrown if requested key was not found in the storage.
 * @public
 */
exports.ErrKeyNotFound = new Error('Requested key was not present in storage');
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/websocket/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/websocket/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./webWorkerController */ "../node_modules/@speechly/browser-client/websocket/webWorkerController.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "../node_modules/@speechly/browser-client/websocket/types.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/websocket/token.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/websocket/token.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeToken = exports.validateToken = exports.fetchToken = exports.minTokenValidTime = void 0;
const base_64_1 = __webpack_require__(/*! base-64 */ "../node_modules/base-64/base64.js");
exports.minTokenValidTime = 60 * 60 * 1000; // 1 hour
function fetchToken(baseUrl, projectId, appId, deviceId, fetcher = fetch, nowFn = Date.now) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let body;
        if (projectId !== undefined) {
            body = { projectId, deviceId };
        }
        else {
            body = { appId, deviceId };
        }
        const response = yield fetcher(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const json = yield response.json();
        if (response.status !== 200) {
            throw Error((_a = json.error) !== null && _a !== void 0 ? _a : `Speechly API login request failed with ${response.status}`);
        }
        if (json.access_token === undefined) {
            throw Error('Invalid login response from Speechly API');
        }
        if (!validateToken(json.access_token, projectId, appId, deviceId, nowFn)) {
            throw Error('Invalid token received from Speechly API');
        }
        return json.access_token;
    });
}
exports.fetchToken = fetchToken;
function validateToken(token, projectId, appId, deviceId, now = Date.now) {
    const decoded = decodeToken(token);
    if (decoded.expiresAtMs - now() < exports.minTokenValidTime) {
        return false;
    }
    if (decoded.appId !== appId || decoded.projectId !== projectId) {
        return false;
    }
    if (decoded.deviceId !== deviceId) {
        return false;
    }
    return true;
}
exports.validateToken = validateToken;
function decodeToken(token) {
    const b = token.split('.')[1];
    let body;
    try {
        body = JSON.parse((0, base_64_1.decode)(b));
    }
    catch (e) {
        throw new Error('Error decoding Speechly token!');
    }
    return {
        appId: body.appId,
        projectId: body.projectId,
        deviceId: body.deviceId,
        configId: body.configId,
        scopes: body.scope.split(' '),
        issuer: body.iss,
        audience: body.aud,
        expiresAtMs: body.exp * 1000, // JWT exp is in seconds, convert to ms, since that's what JS works with.
    };
}
exports.decodeToken = decodeToken;
//# sourceMappingURL=token.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/websocket/types.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/websocket/types.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebsocketResponseType = void 0;
/**
 * Known WebSocket response types.
 * @public
 */
var WebsocketResponseType;
(function (WebsocketResponseType) {
    WebsocketResponseType["Opened"] = "WEBSOCKET_OPEN";
    WebsocketResponseType["SourceSampleRateSetSuccess"] = "SOURSE_SAMPLE_RATE_SET_SUCCESS";
    WebsocketResponseType["Started"] = "started";
    WebsocketResponseType["Stopped"] = "stopped";
    WebsocketResponseType["SegmentEnd"] = "segment_end";
    WebsocketResponseType["Transcript"] = "transcript";
    WebsocketResponseType["Entity"] = "entity";
    WebsocketResponseType["Intent"] = "intent";
    WebsocketResponseType["TentativeTranscript"] = "tentative_transcript";
    WebsocketResponseType["TentativeEntities"] = "tentative_entities";
    WebsocketResponseType["TentativeIntent"] = "tentative_intent";
})(WebsocketResponseType = exports.WebsocketResponseType || (exports.WebsocketResponseType = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/websocket/webWorkerController.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/websocket/webWorkerController.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebWorkerController = void 0;
const types_1 = __webpack_require__(/*! ./types */ "../node_modules/@speechly/browser-client/websocket/types.js");
const worker_1 = __importDefault(__webpack_require__(/*! ./worker */ "../node_modules/@speechly/browser-client/websocket/worker.js"));
class WebWorkerController {
    constructor() {
        this.startCbs = [];
        this.stopCbs = [];
        this.onResponseCb = () => { };
        this.onCloseCb = () => { };
        this.onWebsocketMessage = (event) => {
            const response = event.data;
            switch (response.type) {
                case types_1.WebsocketResponseType.Opened:
                    if (this.resolveInitialization != null) {
                        this.resolveInitialization();
                    }
                    break;
                case types_1.WebsocketResponseType.SourceSampleRateSetSuccess:
                    if (this.resolveSourceSampleRateSet != null) {
                        this.resolveSourceSampleRateSet();
                    }
                    break;
                case types_1.WebsocketResponseType.Started:
                    this.startCbs.forEach(cb => {
                        try {
                            cb(undefined, response.audio_context);
                        }
                        catch (e) {
                            console.error('[SpeechlyClient] Error while invoking "onStart" callback:', e);
                        }
                    });
                    this.startCbs.length = 0;
                    break;
                case types_1.WebsocketResponseType.Stopped:
                    this.stopCbs.forEach(cb => {
                        try {
                            cb(undefined, response.audio_context);
                        }
                        catch (e) {
                            console.error('[SpeechlyClient] Error while invoking "onStop" callback:', e);
                        }
                    });
                    this.stopCbs.length = 0;
                    break;
                default:
                    this.onResponseCb(response);
            }
        };
        const blob = new Blob([worker_1.default], { type: 'text/javascript' });
        const blobURL = window.URL.createObjectURL(blob);
        this.worker = new Worker(blobURL);
        this.worker.addEventListener('message', this.onWebsocketMessage);
    }
    onResponse(cb) {
        this.onResponseCb = cb;
    }
    onClose(cb) {
        this.onCloseCb = cb;
    }
    initialize(apiUrl, authToken, targetSampleRate, debug) {
        return __awaiter(this, void 0, void 0, function* () {
            this.worker.postMessage({
                type: 'INIT',
                apiUrl,
                authToken,
                targetSampleRate,
                debug,
            });
            return new Promise(resolve => {
                this.resolveInitialization = resolve;
            });
        });
    }
    setSourceSampleRate(sourceSampleRate) {
        return __awaiter(this, void 0, void 0, function* () {
            this.worker.postMessage({
                type: 'SET_SOURSE_SAMPLE_RATE',
                sourceSampleRate,
            });
            return new Promise(resolve => {
                this.resolveSourceSampleRateSet = resolve;
            });
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.worker.postMessage({
                    type: 'CLOSE',
                    code: 1000,
                    message: 'Client has ended the session',
                });
                resolve();
            });
        });
    }
    startContext(appId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.startCbs.push((err, id) => {
                    if (err !== undefined) {
                        reject(err);
                    }
                    else {
                        resolve(id);
                    }
                });
                if (appId != null) {
                    this.worker.postMessage({ type: 'START_CONTEXT', appId });
                }
                else {
                    this.worker.postMessage({ type: 'START_CONTEXT' });
                }
            });
        });
    }
    stopContext() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.stopCbs.push((err, id) => {
                    if (err !== undefined) {
                        reject(err);
                    }
                    else {
                        resolve(id);
                    }
                });
                this.worker.postMessage({ type: 'STOP_CONTEXT' });
            });
        });
    }
    switchContext(appId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.startCbs.push((err, id) => {
                    if (err !== undefined) {
                        reject(err);
                    }
                    else {
                        resolve(id);
                    }
                });
                this.worker.postMessage({ type: 'SWITCH_CONTEXT', appId });
            });
        });
    }
    postMessage(message) {
        this.worker.postMessage(message);
    }
    sendAudio(audioChunk) {
        this.worker.postMessage({ type: 'AUDIO', payload: audioChunk });
    }
}
exports.WebWorkerController = WebWorkerController;
//# sourceMappingURL=webWorkerController.js.map

/***/ }),

/***/ "../node_modules/@speechly/browser-client/websocket/worker.js":
/*!********************************************************************!*\
  !*** ../node_modules/@speechly/browser-client/websocket/worker.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = `/**
 * Known WebSocket response types.
 * @public
 */
var WebsocketResponseType;
(function (WebsocketResponseType) {
    WebsocketResponseType["Opened"] = "WEBSOCKET_OPEN";
    WebsocketResponseType["SourceSampleRateSetSuccess"] = "SOURSE_SAMPLE_RATE_SET_SUCCESS";
    WebsocketResponseType["Started"] = "started";
    WebsocketResponseType["Stopped"] = "stopped";
})(WebsocketResponseType || (WebsocketResponseType = {}));
var CONTROL = {
    WRITE_INDEX: 0,
    FRAMES_AVAILABLE: 1,
    LOCK: 2
};
var WebsocketClient = /** @class */ (function () {
    function WebsocketClient(ctx) {
        var _this = this;
        this.isContextStarted = false;
        this.isStartContextConfirmed = false;
        this.shouldResendLastFramesSent = false;
        this.buffer = new Float32Array(0);
        this.lastFramesSent = new Int16Array(0); // to re-send after switch context
        this.debug = false;
        this.initialized = false;
        this.onWebsocketClose = function (event) {
            _this.websocket = undefined;
            _this.connect(0);
        };
        this.onWebsocketOpen = function (_event) {
            if (_this.debug) {
                console.log('[SpeechlyClient]', 'websocket opened');
            }
            if (_this.isContextStarted && !_this.isStartContextConfirmed) {
                _this.send(_this.outbox);
            }
            _this.workerCtx.postMessage({ type: 'WEBSOCKET_OPEN' });
        };
        this.onWebsocketError = function (_event) {
            if (_this.debug) {
                console.log('[SpeechlyClient]', 'websocket error');
            }
            _this.closeWebsocket();
        };
        this.onWebsocketMessage = function (event) {
            var response;
            try {
                response = JSON.parse(event.data);
            }
            catch (e) {
                console.error('[SpeechlyClient] Error parsing response from the server:', e);
                return;
            }
            if (response.type === WebsocketResponseType.Started) {
                _this.isStartContextConfirmed = true;
                if (_this.shouldResendLastFramesSent) {
                    _this.resendLastFrames();
                    _this.shouldResendLastFramesSent = false;
                }
            }
            _this.workerCtx.postMessage(response);
        };
        this.workerCtx = ctx;
    }
    WebsocketClient.prototype.init = function (apiUrl, authToken, targetSampleRate, debug) {
        if (this.initialized) {
            console.log('[SpeechlyClient]', 'already initialized');
            return;
        }
        this.debug = debug;
        if (this.debug) {
            console.log('[SpeechlyClient]', 'initialize worker');
        }
        this.apiUrl = apiUrl;
        this.authToken = authToken;
        this.targetSampleRate = targetSampleRate;
        this.initialized = true;
        this.connect(0);
    };
    WebsocketClient.prototype.setSourceSampleRate = function (sourceSampleRate) {
        this.sourceSampleRate = sourceSampleRate;
        this.resampleRatio = this.sourceSampleRate / this.targetSampleRate;
        if (this.debug) {
            console.log('[SpeechlyClient]', 'resampleRatio', this.resampleRatio);
        }
        if (this.resampleRatio > 1) {
            this.filter = generateFilter(this.sourceSampleRate, this.targetSampleRate, 127);
        }
        this.workerCtx.postMessage({ type: 'SOURSE_SAMPLE_RATE_SET_SUCCESS' });
        if (isNaN(this.resampleRatio)) {
            throw Error("resampleRatio is NaN source rate is " + this.sourceSampleRate + " and target rate is " + this.targetSampleRate);
        }
    };
    WebsocketClient.prototype.setSharedArrayBuffers = function (controlSAB, dataSAB) {
        this.controlSAB = new Int32Array(controlSAB);
        this.dataSAB = new Float32Array(dataSAB);
        var audioHandleInterval = this.dataSAB.length / 32; // ms
        if (this.debug) {
            console.log('[SpeechlyClient]', 'Audio handle interval', audioHandleInterval, 'ms');
        }
        setInterval(this.sendAudioFromSAB.bind(this), audioHandleInterval);
    };
    WebsocketClient.prototype.connect = function (timeout) {
        if (timeout === void 0) { timeout = 1000; }
        if (this.debug) {
            console.log('[SpeechlyClient]', 'connect in ', timeout / 1000, 'sec');
        }
        setTimeout(this.initializeWebsocket.bind(this), timeout);
    };
    WebsocketClient.prototype.initializeWebsocket = function () {
        if (this.debug) {
            console.log('[SpeechlyClient]', 'connecting to ', this.apiUrl);
        }
        this.websocket = new WebSocket(this.apiUrl, this.authToken);
        this.websocket.addEventListener('open', this.onWebsocketOpen);
        this.websocket.addEventListener('message', this.onWebsocketMessage);
        this.websocket.addEventListener('error', this.onWebsocketError);
        this.websocket.addEventListener('close', this.onWebsocketClose);
    };
    WebsocketClient.prototype.isOpen = function () {
        return this.websocket !== undefined && this.websocket.readyState === this.websocket.OPEN;
    };
    WebsocketClient.prototype.resendLastFrames = function () {
        if (this.lastFramesSent.length > 0) {
            this.send(this.lastFramesSent);
            this.lastFramesSent = new Int16Array(0);
        }
    };
    WebsocketClient.prototype.sendAudio = function (audioChunk) {
        if (!this.isContextStarted) {
            return;
        }
        if (audioChunk.length > 0) {
            if (this.resampleRatio > 1) {
                // Downsampling
                this.send(this.downsample(audioChunk));
            }
            else {
                this.send(float32ToInt16(audioChunk));
            }
        }
    };
    WebsocketClient.prototype.sendAudioFromSAB = function () {
        if (!this.isContextStarted) {
            this.controlSAB[CONTROL.FRAMES_AVAILABLE] = 0;
            this.controlSAB[CONTROL.WRITE_INDEX] = 0;
            return;
        }
        if (this.controlSAB == undefined) {
            return;
        }
        var framesAvailable = this.controlSAB[CONTROL.FRAMES_AVAILABLE];
        var lock = this.controlSAB[CONTROL.LOCK];
        if (lock == 0 && framesAvailable > 0) {
            var data = this.dataSAB.subarray(0, framesAvailable);
            this.controlSAB[CONTROL.FRAMES_AVAILABLE] = 0;
            this.controlSAB[CONTROL.WRITE_INDEX] = 0;
            if (data.length > 0) {
                var frames_1;
                if (this.resampleRatio > 1) {
                    frames_1 = this.downsample(data);
                }
                else {
                    frames_1 = float32ToInt16(data);
                }
                this.send(frames_1);
                // 16000 per second, 1000 in 100 ms
                // save last 250 ms
                if (this.lastFramesSent.length > 1024 * 4) {
                    this.lastFramesSent = frames_1;
                }
                else {
                    var concat = new Int16Array(this.lastFramesSent.length + frames_1.length);
                    concat.set(this.lastFramesSent);
                    concat.set(frames_1, this.lastFramesSent.length);
                    this.lastFramesSent = concat;
                }
            }
        }
    };
    WebsocketClient.prototype.startContext = function (appId) {
        if (this.isContextStarted) {
            console.log('Cant start context: it has been already started');
            return;
        }
        this.isContextStarted = true;
        this.isStartContextConfirmed = false;
        if (appId !== undefined) {
            this.outbox = JSON.stringify({ event: 'start', appId: appId });
        }
        else {
            this.outbox = JSON.stringify({ event: 'start' });
        }
        this.send(this.outbox);
    };
    WebsocketClient.prototype.stopContext = function () {
        if (this.websocket == undefined) {
            throw Error('Cant start context: websocket is undefined');
        }
        if (!this.isContextStarted) {
            console.log('Cant stop context: it is not started');
            return;
        }
        this.isContextStarted = false;
        this.isStartContextConfirmed = false;
        var StopEventJSON = JSON.stringify({ event: 'stop' });
        this.send(StopEventJSON);
    };
    WebsocketClient.prototype.switchContext = function (newAppId) {
        if (this.websocket == undefined) {
            throw Error('Cant switch context: websocket is undefined');
        }
        if (!this.isContextStarted) {
            console.log('Cant switch context: it is not started');
            return;
        }
        if (newAppId == undefined) {
            console.log('Cant switch context: new app id is undefined');
            return;
        }
        this.isStartContextConfirmed = false;
        var StopEventJSON = JSON.stringify({ event: 'stop' });
        this.send(StopEventJSON);
        this.shouldResendLastFramesSent = true;
        this.send(JSON.stringify({ event: 'start', appId: newAppId }));
    };
    WebsocketClient.prototype.closeWebsocket = function () {
        if (this.websocket == null) {
            throw Error('Websocket is not open');
        }
        this.websocket.removeEventListener('open', this.onWebsocketOpen);
        this.websocket.removeEventListener('message', this.onWebsocketMessage);
        this.websocket.removeEventListener('error', this.onWebsocketError);
        this.websocket.removeEventListener('close', this.onWebsocketClose);
        this.websocket.close();
    };
    WebsocketClient.prototype.downsample = function (input) {
        var inputBuffer = new Float32Array(this.buffer.length + input.length);
        inputBuffer.set(this.buffer, 0);
        inputBuffer.set(input, this.buffer.length);
        var outputLength = Math.ceil((inputBuffer.length - this.filter.length) / this.resampleRatio);
        var outputBuffer = new Int16Array(outputLength);
        for (var i = 0; i < outputLength; i++) {
            var offset = Math.round(this.resampleRatio * i);
            var val = 0.0;
            for (var j = 0; j < this.filter.length; j++) {
                val += inputBuffer[offset + j] * this.filter[j];
            }
            outputBuffer[i] = val * (val < 0 ? 0x8000 : 0x7fff);
        }
        var remainingOffset = Math.round(this.resampleRatio * outputLength);
        if (remainingOffset < inputBuffer.length) {
            this.buffer = inputBuffer.subarray(remainingOffset);
        }
        else {
            this.buffer = new Float32Array(0);
        }
        return outputBuffer;
    };
    WebsocketClient.prototype.send = function (data) {
        if (!this.isOpen()) {
            throw Error('Cant send data: websocket is inactive');
        }
        try {
            this.websocket.send(data);
        }
        catch (error) {
            console.log('[SpeechlyClient]', 'Server connection error', error);
        }
    };
    return WebsocketClient;
}());
var ctx = self;
var websocketClient = new WebsocketClient(ctx);
ctx.onmessage = function (e) {
    switch (e.data.type) {
        case 'INIT':
            websocketClient.init(e.data.apiUrl, e.data.authToken, e.data.targetSampleRate, e.data.debug);
            break;
        case 'SET_SOURSE_SAMPLE_RATE':
            websocketClient.setSourceSampleRate(e.data.sourceSampleRate);
            break;
        case 'SET_SHARED_ARRAY_BUFFERS':
            websocketClient.setSharedArrayBuffers(e.data.controlSAB, e.data.dataSAB);
            break;
        case 'CLOSE':
            websocketClient.closeWebsocket();
            break;
        case 'START_CONTEXT':
            websocketClient.startContext(e.data.appId);
            break;
        case 'SWITCH_CONTEXT':
            websocketClient.switchContext(e.data.appId);
            break;
        case 'STOP_CONTEXT':
            websocketClient.stopContext();
            break;
        case 'AUDIO':
            websocketClient.sendAudio(e.data.payload);
            break;
        default:
            console.log('WORKER', e);
    }
};
function float32ToInt16(buffer) {
    var buf = new Int16Array(buffer.length);
    for (var l = 0; l < buffer.length; l++) {
        buf[l] = buffer[l] * (buffer[l] < 0 ? 0x8000 : 0x7fff);
    }
    return buf;
}
function generateFilter(sourceSampleRate, targetSampleRate, length) {
    if (length % 2 === 0) {
        throw Error('Filter length must be odd');
    }
    var cutoff = targetSampleRate / 2;
    var filter = new Float32Array(length);
    var sum = 0;
    for (var i = 0; i < length; i++) {
        var x = sinc(((2 * cutoff) / sourceSampleRate) * (i - (length - 1) / 2));
        sum += x;
        filter[i] = x;
    }
    for (var i = 0; i < length; i++) {
        filter[i] = filter[i] / sum;
    }
    return filter;
}
function sinc(x) {
    if (x === 0.0) {
        return 1.0;
    }
    var piX = Math.PI * x;
    return Math.sin(piX) / piX;
}
`;
//# sourceMappingURL=worker.js.map

/***/ }),

/***/ "../node_modules/@speechly/speech-recognition-polyfill/dist/createSpeechRecognition.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@speechly/speech-recognition-polyfill/dist/createSpeechRecognition.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSpeechlySpeechRecognition = void 0;
const browser_client_1 = __webpack_require__(/*! @speechly/browser-client */ "../node_modules/@speechly/browser-client/index.js");
const types_1 = __webpack_require__(/*! ./types */ "../node_modules/@speechly/speech-recognition-polyfill/dist/types.js");
/**
 * Returns a SpeechRecognition implementation that uses a given Speechly app ID
 * to generate transcriptions using the Speechly API
 *
 * @param appId - Speechly app ID
 * @returns Class that implements the SpeechRecognition interface
 * @public
 */
const createSpeechlySpeechRecognition = (appId) => {
    var _a;
    var _b;
    const browserSupportsAudioApis = typeof window !== 'undefined' &&
        ((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.mediaDevices) !== undefined &&
        (window.AudioContext !== undefined || window.webkitAudioContext !== undefined);
    return _b = class SpeechlySpeechRecognition {
            constructor() {
                this.clientInitialised = false;
                this.aborted = false;
                this.transcribing = false;
                this.continuous = false;
                this.interimResults = false;
                this.onresult = () => { };
                this.onend = () => { };
                this.onerror = () => { };
                this.start = () => __awaiter(this, void 0, void 0, function* () {
                    try {
                        this.aborted = false;
                        yield this.initialise();
                        yield this.client.startContext();
                        this.transcribing = true;
                    }
                    catch (e) {
                        if (e === browser_client_1.ErrNoAudioConsent) {
                            this.onerror(types_1.MicrophoneNotAllowedError);
                        }
                        else {
                            this.onerror(types_1.SpeechRecognitionFailedError);
                        }
                    }
                });
                this.stop = () => __awaiter(this, void 0, void 0, function* () {
                    yield this._stop();
                });
                this.abort = () => __awaiter(this, void 0, void 0, function* () {
                    this.aborted = true;
                    yield this._stop();
                });
                this.initialise = () => __awaiter(this, void 0, void 0, function* () {
                    if (!this.clientInitialised) {
                        yield this.client.initialize();
                        this.clientInitialised = true;
                    }
                });
                this._stop = () => __awaiter(this, void 0, void 0, function* () {
                    if (!this.transcribing) {
                        return;
                    }
                    yield this.initialise();
                    try {
                        yield this.client.stopContext();
                        this.transcribing = false;
                        this.onend();
                    }
                    catch (e) {
                        // swallow errors
                    }
                });
                this.handleResult = (segment) => {
                    if (this.aborted) {
                        return;
                    }
                    if (!this.interimResults && !segment.isFinal) {
                        return;
                    }
                    const transcript = segment.words
                        .map(x => x.value)
                        .filter(x => x)
                        .join(' ');
                    const results = [
                        {
                            0: {
                                transcript,
                                confidence: 1,
                            },
                            isFinal: segment.isFinal,
                        },
                    ];
                    this.onresult({ results, resultIndex: 0 });
                    if (!this.continuous && segment.isFinal) {
                        this.abort().catch(() => { }); // swallow errors
                    }
                };
                this.client = new browser_client_1.Client({ appId });
                this.client.onSegmentChange(this.handleResult);
            }
        },
        _b.hasBrowserSupport = browserSupportsAudioApis,
        _b;
};
exports.createSpeechlySpeechRecognition = createSpeechlySpeechRecognition;
exports.default = exports.createSpeechlySpeechRecognition;
//# sourceMappingURL=createSpeechRecognition.js.map

/***/ }),

/***/ "../node_modules/@speechly/speech-recognition-polyfill/dist/index.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@speechly/speech-recognition-polyfill/dist/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * A polyfill (a "{@link https://ponyfoo.com/articles/polyfills-or-ponyfills | ponyfill}" to be more precise) for the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition | SpeechRecognition API} that uses
 * {@link https://www.speechly.com/ | Speechly} to implement the transcription functionality
 *
 * @remarks
 * The implementation of the {@link https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition | SpeechRecognition spec}
 * is incomplete, but should enable the majority of use cases
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./createSpeechRecognition */ "../node_modules/@speechly/speech-recognition-polyfill/dist/createSpeechRecognition.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "../node_modules/@speechly/speech-recognition-polyfill/dist/types.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@speechly/speech-recognition-polyfill/dist/types.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@speechly/speech-recognition-polyfill/dist/types.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpeechRecognitionFailedError = exports.MicrophoneNotAllowedError = void 0;
/**
 * Error emitted when the user does not give permission to use the microphone
 * @public
 */
exports.MicrophoneNotAllowedError = {
    error: 'not-allowed',
    message: 'User did not give permission to use the microphone',
};
/**
 * Generic error when speech recognition fails due to an unknown cause
 * @public
 */
exports.SpeechRecognitionFailedError = {
    error: 'audio-capture',
    message: 'Speech recognition failed',
};
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../node_modules/base-64/base64.js":
/*!*****************************************!*\
  !*** ../node_modules/base-64/base64.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports =  true && exports;

	// Detect free variable `module`.
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code, and use
	// it as `root`.
	var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var InvalidCharacterError = function(message) {
		this.message = message;
	};
	InvalidCharacterError.prototype = new Error;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';

	var error = function(message) {
		// Note: the error messages used throughout this file match those used by
		// the native `atob`/`btoa` implementation in Chromium.
		throw new InvalidCharacterError(message);
	};

	var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	// http://whatwg.org/html/common-microsyntaxes.html#space-character
	var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

	// `decode` is designed to be fully compatible with `atob` as described in the
	// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
	// The optimized base64-decoding algorithm used is based on @atk’s excellent
	// implementation. https://gist.github.com/atk/1020396
	var decode = function(input) {
		input = String(input)
			.replace(REGEX_SPACE_CHARACTERS, '');
		var length = input.length;
		if (length % 4 == 0) {
			input = input.replace(/==?$/, '');
			length = input.length;
		}
		if (
			length % 4 == 1 ||
			// http://whatwg.org/C#alphanumeric-ascii-characters
			/[^+a-zA-Z0-9/]/.test(input)
		) {
			error(
				'Invalid character: the string to be decoded is not correctly encoded.'
			);
		}
		var bitCounter = 0;
		var bitStorage;
		var buffer;
		var output = '';
		var position = -1;
		while (++position < length) {
			buffer = TABLE.indexOf(input.charAt(position));
			bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
			// Unless this is the first of a group of 4 characters…
			if (bitCounter++ % 4) {
				// …convert the first 8 bits to a single ASCII character.
				output += String.fromCharCode(
					0xFF & bitStorage >> (-2 * bitCounter & 6)
				);
			}
		}
		return output;
	};

	// `encode` is designed to be fully compatible with `btoa` as described in the
	// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
	var encode = function(input) {
		input = String(input);
		if (/[^\0-\xFF]/.test(input)) {
			// Note: no need to special-case astral symbols here, as surrogates are
			// matched, and the input is supposed to only contain ASCII anyway.
			error(
				'The string to be encoded contains characters outside of the ' +
				'Latin1 range.'
			);
		}
		var padding = input.length % 3;
		var output = '';
		var position = -1;
		var a;
		var b;
		var c;
		var d;
		var buffer;
		// Make sure any padding is handled outside of the loop.
		var length = input.length - padding;

		while (++position < length) {
			// Read three bytes, i.e. 24 bits.
			a = input.charCodeAt(position) << 16;
			b = input.charCodeAt(++position) << 8;
			c = input.charCodeAt(++position);
			buffer = a + b + c;
			// Turn the 24 bits into four chunks of 6 bits each, and append the
			// matching character for each of them to the output.
			output += (
				TABLE.charAt(buffer >> 18 & 0x3F) +
				TABLE.charAt(buffer >> 12 & 0x3F) +
				TABLE.charAt(buffer >> 6 & 0x3F) +
				TABLE.charAt(buffer & 0x3F)
			);
		}

		if (padding == 2) {
			a = input.charCodeAt(position) << 8;
			b = input.charCodeAt(++position);
			buffer = a + b;
			output += (
				TABLE.charAt(buffer >> 10) +
				TABLE.charAt((buffer >> 4) & 0x3F) +
				TABLE.charAt((buffer << 2) & 0x3F) +
				'='
			);
		} else if (padding == 1) {
			buffer = input.charCodeAt(position);
			output += (
				TABLE.charAt(buffer >> 2) +
				TABLE.charAt((buffer << 4) & 0x3F) +
				'=='
			);
		}

		return output;
	};

	var base64 = {
		'encode': encode,
		'decode': decode,
		'version': '0.1.0'
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return base64;
		}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key; }

}(this));


/***/ }),

/***/ "../node_modules/iso-3166-1-alpha-2/index.js":
/*!***************************************************!*\
  !*** ../node_modules/iso-3166-1-alpha-2/index.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function() {
    var Iso31661a2, mout, singleton;

    mout = __webpack_require__(/*! mout/object */ "../node_modules/mout/object.js");

    Iso31661a2 = (function() {
        function Iso31661a2() {}

        Iso31661a2.prototype.getCountry = function(code) {
            return Iso31661a2.prototype.countries[code];
        };

        Iso31661a2.prototype.getCode = function(country) {
            var idx, ret;
            ret = null;
            if (country != null) {
                idx = mout.values(Iso31661a2.prototype.countries).indexOf(country);
                if (idx !== -1) {
                    ret = Object.keys(Iso31661a2.prototype.countries)[idx];
                }
            }
            return ret;
        };

        Iso31661a2.prototype.getCountries = function() {
            return mout.values(Iso31661a2.prototype.countries);
        };

        Iso31661a2.prototype.getCodes = function() {
            return Object.keys(Iso31661a2.prototype.countries);
        };

        Iso31661a2.prototype.getData = function() {
            return Iso31661a2.prototype.countries;
        };

        Iso31661a2.prototype.countries = {
            AF: "Afghanistan",
            AX: "Åland Islands",
            AL: "Albania",
            DZ: "Algeria",
            AS: "American Samoa",
            AD: "Andorra",
            AO: "Angola",
            AI: "Anguilla",
            AQ: "Antarctica",
            AG: "Antigua and Barbuda",
            AR: "Argentina",
            AM: "Armenia",
            AW: "Aruba",
            AU: "Australia",
            AT: "Austria",
            AZ: "Azerbaijan",
            BS: "Bahamas",
            BH: "Bahrain",
            BD: "Bangladesh",
            BB: "Barbados",
            BY: "Belarus",
            BE: "Belgium",
            BZ: "Belize",
            BJ: "Benin",
            BM: "Bermuda",
            BT: "Bhutan",
            BO: "Bolivia, Plurinational State of",
            BQ: "Bonaire, Sint Eustatius and Saba",
            BA: "Bosnia and Herzegovina",
            BW: "Botswana",
            BV: "Bouvet Island",
            BR: "Brazil",
            IO: "British Indian Ocean Territory",
            BN: "Brunei Darussalam",
            BG: "Bulgaria",
            BF: "Burkina Faso",
            BI: "Burundi",
            KH: "Cambodia",
            CM: "Cameroon",
            CA: "Canada",
            CV: "Cape Verde",
            KY: "Cayman Islands",
            CF: "Central African Republic",
            TD: "Chad",
            CL: "Chile",
            CN: "China",
            CX: "Christmas Island",
            CC: "Cocos (Keeling) Islands",
            CO: "Colombia",
            KM: "Comoros",
            CG: "Congo",
            CD: "Congo, the Democratic Republic of the",
            CK: "Cook Islands",
            CR: "Costa Rica",
            CI: "Côte d'Ivoire",
            HR: "Croatia",
            CU: "Cuba",
            CW: "Curaçao",
            CY: "Cyprus",
            CZ: "Czech Republic",
            DK: "Denmark",
            DJ: "Djibouti",
            DM: "Dominica",
            DO: "Dominican Republic",
            EC: "Ecuador",
            EG: "Egypt",
            SV: "El Salvador",
            GQ: "Equatorial Guinea",
            ER: "Eritrea",
            EE: "Estonia",
            ET: "Ethiopia",
            FK: "Falkland Islands (Malvinas)",
            FO: "Faroe Islands",
            FJ: "Fiji",
            FI: "Finland",
            FR: "France",
            GF: "French Guiana",
            PF: "French Polynesia",
            TF: "French Southern Territories",
            GA: "Gabon",
            GM: "Gambia",
            GE: "Georgia",
            DE: "Germany",
            GH: "Ghana",
            GI: "Gibraltar",
            GR: "Greece",
            GL: "Greenland",
            GD: "Grenada",
            GP: "Guadeloupe",
            GU: "Guam",
            GT: "Guatemala",
            GG: "Guernsey",
            GN: "Guinea",
            GW: "Guinea-Bissau",
            GY: "Guyana",
            HT: "Haiti",
            HM: "Heard Island and McDonald Mcdonald Islands",
            VA: "Holy See (Vatican City State)",
            HN: "Honduras",
            HK: "Hong Kong",
            HU: "Hungary",
            IS: "Iceland",
            IN: "India",
            ID: "Indonesia",
            IR: "Iran, Islamic Republic of",
            IQ: "Iraq",
            IE: "Ireland",
            IM: "Isle of Man",
            IL: "Israel",
            IT: "Italy",
            JM: "Jamaica",
            JP: "Japan",
            JE: "Jersey",
            JO: "Jordan",
            KZ: "Kazakhstan",
            KE: "Kenya",
            KI: "Kiribati",
            KP: "Korea, Democratic People's Republic of",
            KR: "Korea, Republic of",
            KW: "Kuwait",
            KG: "Kyrgyzstan",
            LA: "Lao People's Democratic Republic",
            LV: "Latvia",
            LB: "Lebanon",
            LS: "Lesotho",
            LR: "Liberia",
            LY: "Libya",
            LI: "Liechtenstein",
            LT: "Lithuania",
            LU: "Luxembourg",
            MO: "Macao",
            MK: "Macedonia, the Former Yugoslav Republic of",
            MG: "Madagascar",
            MW: "Malawi",
            MY: "Malaysia",
            MV: "Maldives",
            ML: "Mali",
            MT: "Malta",
            MH: "Marshall Islands",
            MQ: "Martinique",
            MR: "Mauritania",
            MU: "Mauritius",
            YT: "Mayotte",
            MX: "Mexico",
            FM: "Micronesia, Federated States of",
            MD: "Moldova, Republic of",
            MC: "Monaco",
            MN: "Mongolia",
            ME: "Montenegro",
            MS: "Montserrat",
            MA: "Morocco",
            MZ: "Mozambique",
            MM: "Myanmar",
            NA: "Namibia",
            NR: "Nauru",
            NP: "Nepal",
            NL: "Netherlands",
            NC: "New Caledonia",
            NZ: "New Zealand",
            NI: "Nicaragua",
            NE: "Niger",
            NG: "Nigeria",
            NU: "Niue",
            NF: "Norfolk Island",
            MP: "Northern Mariana Islands",
            NO: "Norway",
            OM: "Oman",
            PK: "Pakistan",
            PW: "Palau",
            PS: "Palestine, State of",
            PA: "Panama",
            PG: "Papua New Guinea",
            PY: "Paraguay",
            PE: "Peru",
            PH: "Philippines",
            PN: "Pitcairn",
            PL: "Poland",
            PT: "Portugal",
            PR: "Puerto Rico",
            QA: "Qatar",
            RE: "Réunion",
            RO: "Romania",
            RU: "Russian Federation",
            RW: "Rwanda",
            BL: "Saint Barthélemy",
            SH: "Saint Helena, Ascension and Tristan da Cunha",
            KN: "Saint Kitts and Nevis",
            LC: "Saint Lucia",
            MF: "Saint Martin (French part)",
            PM: "Saint Pierre and Miquelon",
            VC: "Saint Vincent and the Grenadines",
            WS: "Samoa",
            SM: "San Marino",
            ST: "Sao Tome and Principe",
            SA: "Saudi Arabia",
            SN: "Senegal",
            RS: "Serbia",
            SC: "Seychelles",
            SL: "Sierra Leone",
            SG: "Singapore",
            SX: "Sint Maarten (Dutch part)",
            SK: "Slovakia",
            SI: "Slovenia",
            SB: "Solomon Islands",
            SO: "Somalia",
            ZA: "South Africa",
            GS: "South Georgia and the South Sandwich Islands",
            SS: "South Sudan",
            ES: "Spain",
            LK: "Sri Lanka",
            SD: "Sudan",
            SR: "Suriname",
            SJ: "Svalbard and Jan Mayen",
            SZ: "Swaziland",
            SE: "Sweden",
            CH: "Switzerland",
            SY: "Syrian Arab Republic",
            TW: "Taiwan, Province of China",
            TJ: "Tajikistan",
            TZ: "Tanzania, United Republic of",
            TH: "Thailand",
            TL: "Timor-Leste",
            TG: "Togo",
            TK: "Tokelau",
            TO: "Tonga",
            TT: "Trinidad and Tobago",
            TN: "Tunisia",
            TR: "Turkey",
            TM: "Turkmenistan",
            TC: "Turks and Caicos Islands",
            TV: "Tuvalu",
            UG: "Uganda",
            UA: "Ukraine",
            AE: "United Arab Emirates",
            GB: "United Kingdom",
            US: "United States",
            UM: "United States Minor Outlying Islands",
            UY: "Uruguay",
            UZ: "Uzbekistan",
            VU: "Vanuatu",
            VE: "Venezuela, Bolivarian Republic of",
            VN: "Viet Nam",
            VG: "Virgin Islands, British",
            VI: "Virgin Islands, U.S.",
            WF: "Wallis and Futuna",
            EH: "Western Sahara",
            YE: "Yemen",
            ZM: "Zambia",
            ZW: "Zimbabwe"
        };

        return Iso31661a2;

    })();

    singleton = null;

    module.exports = (function() {
        return singleton != null ? singleton : singleton = new Iso31661a2();
    })();

}).call(this);


/***/ }),

/***/ "../node_modules/iso-639-1-zh/src/data.js":
/*!************************************************!*\
  !*** ../node_modules/iso-639-1-zh/src/data.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LANGUAGES_ZH_NAMES = {
  aa: '阿法尔语',
  ab: '阿布哈兹语',
  ae: '阿维斯陀语',
  af: '南非荷兰语',
  ak: '阿坎语',
  am: '阿姆哈拉语',
  an: '阿拉贡语',
  ar: '阿拉伯语',
  as: '阿萨姆语',
  av: '阿瓦尔语',
  ay: '艾马拉语',
  az: '阿塞拜疆语',
  ba: '巴什基尔语',
  be: '白俄罗斯语',
  bg: '保加利亚语',
  bh: '比哈尔语',
  bi: '比斯拉马语',
  bm: '班巴拉语',
  bn: '孟加拉语',
  bo: '藏语',
  br: '布列塔尼语',
  bs: '波斯尼亚语',
  ca: '加泰罗尼亚语',
  ce: '车臣语',
  ch: '查莫洛语',
  co: '科西嘉语',
  cr: '克里语',
  cs: '捷克语',
  cu: '古教会斯拉夫语',
  cv: '楚瓦什语',
  cy: '威尔士语',
  da: '丹麦语',
  de: '德语',
  dv: '迪维希语',
  dz: '不丹语',
  ee: '埃维语',
  el: '希腊语',
  en: '英语',
  eo: '世界语',
  es: '西班牙语',
  et: '爱沙尼亚语',
  eu: '巴斯克语',
  fa: '波斯语',
  ff: '富拉语',
  fi: '芬兰语',
  fj: '斐济语',
  fo: '法罗语',
  fr: '法语',
  fy: '西弗里西亚语',
  ga: '爱尔兰语',
  gd: '苏格兰盖尔语',
  gl: '加利西亚语',
  gn: '瓜拉尼语',
  gu: '古吉拉特语',
  gv: '马恩岛语',
  ha: '豪萨语',
  he: '希伯来语',
  hi: '印地语',
  ho: '莫图语',
  hr: '克罗地亚语',
  ht: '海地文',
  hu: '匈牙利语',
  hy: '亚美尼亚语',
  hz: '赫勒娄语',
  ia: '国际语',
  id: '印尼语',
  ie: '国际语',
  ig: '伊博语',
  ii: '诺苏语',
  ik: '依奴皮维克文',
  io: '伊多文',
  is: '冰岛语',
  it: '意大利语',
  iu: '因纽特语',
  ja: '日语',
  jv: '爪哇语',
  ka: '格鲁吉亚语',
  kg: '刚果语',
  ki: '基库尤语',
  kj: '宽亚马语',
  kk: '哈萨克语',
  kl: '格陵兰语',
  km: '高棉语',
  kn: '卡纳达语',
  ko: '韩语',
  kr: '卡努里语',
  ks: '克什米尔语',
  ku: '库尔德语',
  kv: '科米语',
  kw: '科尼什语',
  ky: '吉尔吉斯语',
  la: '拉丁语',
  lb: '卢森堡语',
  lg: '甘达语',
  li: '林堡语',
  ln: '林加拉语',
  lo: '老挝语',
  lt: '立陶宛语',
  lu: '卢巴加丹加语',
  lv: '拉脱维亚语',
  mg: '马尔加什语',
  mh: '马绍尔语',
  mi: '毛利语',
  mk: '马其顿语',
  ml: '马拉雅拉姆语',
  mn: '蒙古文',
  mr: '马拉地语',
  ms: '马来语',
  mt: '马耳他语',
  my: '缅甸语',
  na: '瑙鲁语',
  nb: '挪威博克马尔语',
  nd: '北恩德贝勒语',
  ne: '尼泊尔语',
  ng: '尼日尔刚果语',
  nl: '荷兰语',
  nn: '挪威尼诺斯克语',
  no: '挪威语',
  nr: '南恩德贝勒语',
  nv: '纳瓦霍语',
  ny: '齐切瓦语',
  oc: '奥克西唐语',
  oj: '欧及布威语',
  om: '奥罗莫语',
  or: '奥里亚语',
  os: '奥塞梯语',
  pa: '旁遮普语',
  pi: '巴利语',
  pl: '波兰语',
  ps: '普什图语',
  pt: '葡萄牙语',
  qu: '克丘亚语',
  rm: '罗曼斯语',
  rn: '基隆迪语',
  ro: '罗马尼亚语',
  ru: '俄语',
  rw: '卢旺达语',
  sa: '梵文',
  sc: '撒丁岛语',
  sd: '信德语',
  se: '北萨米文',
  sg: '桑戈语',
  si: '僧伽罗语',
  sk: '斯洛伐克语',
  sl: '斯洛文尼亚语',
  sm: '萨摩亚语',
  sn: '绍纳语',
  so: '索马里语',
  sq: '阿尔巴尼亚语',
  sr: '塞尔维亚语',
  ss: '斯瓦蒂语',
  st: '南索托语',
  su: '巽他语',
  sv: '瑞典语',
  sw: '斯瓦希里语',
  ta: '泰米尔语',
  te: '泰卢固语',
  tg: '塔吉克语',
  th: '泰语',
  ti: '提格雷语',
  tk: '土库曼语',
  tl: '菲律宾语',
  tn: '茨瓦纳语',
  to: '汤加语',
  tr: '土耳其语',
  ts: '特松加语',
  tt: '塔塔尔语',
  tw: '契维语',
  ty: '塔希提语',
  ug: '维吾尔语',
  uk: '乌克兰语',
  ur: '乌尔都语',
  uz: '乌兹别克语',
  ve: '文达语',
  vi: '越南语',
  vo: '沃拉普克语',
  wa: '华隆语',
  wo: '沃洛夫语',
  xh: '科萨语',
  yi: '意第绪语',
  yo: '约鲁巴语',
  za: '壮语',
  zh: '中文',
  zu: '祖鲁语',
};

/* harmony default export */ __webpack_exports__["default"] = (LANGUAGES_ZH_NAMES);


/***/ }),

/***/ "../node_modules/iso-639-1-zh/src/index.js":
/*!*************************************************!*\
  !*** ../node_modules/iso-639-1-zh/src/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ISO6391ZH; }
/* harmony export */ });
/* harmony import */ var iso_639_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iso-639-1 */ "../node_modules/iso-639-1/src/index.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "../node_modules/iso-639-1-zh/src/data.js");



class ISO6391ZH extends iso_639_1__WEBPACK_IMPORTED_MODULE_0__.default {
  static getLanguages(codes) {
    return super.getLanguages(codes).map(language => {
      Object.assign(language, {
        zhName: ISO6391ZH.getZhName(language.code),
      });
      return language;
    });
  }

  static getZhName(code) {
    return super.validate(code) ? _data_js__WEBPACK_IMPORTED_MODULE_1__.default[code] : '';
  }

  static getAllZhNames() {
    return Object.values(_data_js__WEBPACK_IMPORTED_MODULE_1__.default);
  }
}


/***/ }),

/***/ "../node_modules/iso-639-1/src/data.js":
/*!*********************************************!*\
  !*** ../node_modules/iso-639-1/src/data.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LANGUAGES_LIST = {
  aa: {
    name: 'Afar',
    nativeName: 'Afaraf',
  },
  ab: {
    name: 'Abkhaz',
    nativeName: 'аҧсуа бызшәа',
  },
  ae: {
    name: 'Avestan',
    nativeName: 'avesta',
  },
  af: {
    name: 'Afrikaans',
    nativeName: 'Afrikaans',
  },
  ak: {
    name: 'Akan',
    nativeName: 'Akan',
  },
  am: {
    name: 'Amharic',
    nativeName: 'አማርኛ',
  },
  an: {
    name: 'Aragonese',
    nativeName: 'aragonés',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'اللغة العربية',
  },
  as: {
    name: 'Assamese',
    nativeName: 'অসমীয়া',
  },
  av: {
    name: 'Avaric',
    nativeName: 'авар мацӀ',
  },
  ay: {
    name: 'Aymara',
    nativeName: 'aymar aru',
  },
  az: {
    name: 'Azerbaijani',
    nativeName: 'azərbaycan dili',
  },
  ba: {
    name: 'Bashkir',
    nativeName: 'башҡорт теле',
  },
  be: {
    name: 'Belarusian',
    nativeName: 'беларуская мова',
  },
  bg: {
    name: 'Bulgarian',
    nativeName: 'български език',
  },
  bh: {
    name: 'Bihari',
    nativeName: 'भोजपुरी',
  },
  bi: {
    name: 'Bislama',
    nativeName: 'Bislama',
  },
  bm: {
    name: 'Bambara',
    nativeName: 'bamanankan',
  },
  bn: {
    name: 'Bengali',
    nativeName: 'বাংলা',
  },
  bo: {
    name: 'Tibetan',
    nativeName: 'བོད་ཡིག',
  },
  br: {
    name: 'Breton',
    nativeName: 'brezhoneg',
  },
  bs: {
    name: 'Bosnian',
    nativeName: 'bosanski jezik',
  },
  ca: {
    name: 'Catalan',
    nativeName: 'Català',
  },
  ce: {
    name: 'Chechen',
    nativeName: 'нохчийн мотт',
  },
  ch: {
    name: 'Chamorro',
    nativeName: 'Chamoru',
  },
  co: {
    name: 'Corsican',
    nativeName: 'corsu',
  },
  cr: {
    name: 'Cree',
    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ',
  },
  cs: {
    name: 'Czech',
    nativeName: 'čeština',
  },
  cu: {
    name: 'Old Church Slavonic',
    nativeName: 'ѩзыкъ словѣньскъ',
  },
  cv: {
    name: 'Chuvash',
    nativeName: 'чӑваш чӗлхи',
  },
  cy: {
    name: 'Welsh',
    nativeName: 'Cymraeg',
  },
  da: {
    name: 'Danish',
    nativeName: 'dansk',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
  },
  dv: {
    name: 'Divehi',
    nativeName: 'Dhivehi',
  },
  dz: {
    name: 'Dzongkha',
    nativeName: 'རྫོང་ཁ',
  },
  ee: {
    name: 'Ewe',
    nativeName: 'Eʋegbe',
  },
  el: {
    name: 'Greek',
    nativeName: 'Ελληνικά',
  },
  en: {
    name: 'English',
    nativeName: 'English',
  },
  eo: {
    name: 'Esperanto',
    nativeName: 'Esperanto',
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
  },
  et: {
    name: 'Estonian',
    nativeName: 'eesti',
  },
  eu: {
    name: 'Basque',
    nativeName: 'euskara',
  },
  fa: {
    name: 'Persian',
    nativeName: 'فارسی',
  },
  ff: {
    name: 'Fula',
    nativeName: 'Fulfulde',
  },
  fi: {
    name: 'Finnish',
    nativeName: 'suomi',
  },
  fj: {
    name: 'Fijian',
    nativeName: 'Vakaviti',
  },
  fo: {
    name: 'Faroese',
    nativeName: 'føroyskt',
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
  },
  fy: {
    name: 'Western Frisian',
    nativeName: 'Frysk',
  },
  ga: {
    name: 'Irish',
    nativeName: 'Gaeilge',
  },
  gd: {
    name: 'Scottish Gaelic',
    nativeName: 'Gàidhlig',
  },
  gl: {
    name: 'Galician',
    nativeName: 'galego',
  },
  gn: {
    name: 'Guaraní',
    nativeName: "Avañe'ẽ",
  },
  gu: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
  },
  gv: {
    name: 'Manx',
    nativeName: 'Gaelg',
  },
  ha: {
    name: 'Hausa',
    nativeName: 'هَوُسَ',
  },
  he: {
    name: 'Hebrew',
    nativeName: 'עברית',
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी',
  },
  ho: {
    name: 'Hiri Motu',
    nativeName: 'Hiri Motu',
  },
  hr: {
    name: 'Croatian',
    nativeName: 'Hrvatski',
  },
  ht: {
    name: 'Haitian',
    nativeName: 'Kreyòl ayisyen',
  },
  hu: {
    name: 'Hungarian',
    nativeName: 'magyar',
  },
  hy: {
    name: 'Armenian',
    nativeName: 'Հայերեն',
  },
  hz: {
    name: 'Herero',
    nativeName: 'Otjiherero',
  },
  ia: {
    name: 'Interlingua',
    nativeName: 'Interlingua',
  },
  id: {
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
  },
  ie: {
    name: 'Interlingue',
    nativeName: 'Interlingue',
  },
  ig: {
    name: 'Igbo',
    nativeName: 'Asụsụ Igbo',
  },
  ii: {
    name: 'Nuosu',
    nativeName: 'ꆈꌠ꒿ Nuosuhxop',
  },
  ik: {
    name: 'Inupiaq',
    nativeName: 'Iñupiaq',
  },
  io: {
    name: 'Ido',
    nativeName: 'Ido',
  },
  is: {
    name: 'Icelandic',
    nativeName: 'Íslenska',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
  },
  iu: {
    name: 'Inuktitut',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語',
  },
  jv: {
    name: 'Javanese',
    nativeName: 'basa Jawa',
  },
  ka: {
    name: 'Georgian',
    nativeName: 'ქართული',
  },
  kg: {
    name: 'Kongo',
    nativeName: 'Kikongo',
  },
  ki: {
    name: 'Kikuyu',
    nativeName: 'Gĩkũyũ',
  },
  kj: {
    name: 'Kwanyama',
    nativeName: 'Kuanyama',
  },
  kk: {
    name: 'Kazakh',
    nativeName: 'қазақ тілі',
  },
  kl: {
    name: 'Kalaallisut',
    nativeName: 'kalaallisut',
  },
  km: {
    name: 'Khmer',
    nativeName: 'ខេមរភាសា',
  },
  kn: {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어',
  },
  kr: {
    name: 'Kanuri',
    nativeName: 'Kanuri',
  },
  ks: {
    name: 'Kashmiri',
    nativeName: 'कश्मीरी',
  },
  ku: {
    name: 'Kurdish',
    nativeName: 'Kurdî',
  },
  kv: {
    name: 'Komi',
    nativeName: 'коми кыв',
  },
  kw: {
    name: 'Cornish',
    nativeName: 'Kernewek',
  },
  ky: {
    name: 'Kyrgyz',
    nativeName: 'Кыргызча',
  },
  la: {
    name: 'Latin',
    nativeName: 'latine',
  },
  lb: {
    name: 'Luxembourgish',
    nativeName: 'Lëtzebuergesch',
  },
  lg: {
    name: 'Ganda',
    nativeName: 'Luganda',
  },
  li: {
    name: 'Limburgish',
    nativeName: 'Limburgs',
  },
  ln: {
    name: 'Lingala',
    nativeName: 'Lingála',
  },
  lo: {
    name: 'Lao',
    nativeName: 'ພາສາ',
  },
  lt: {
    name: 'Lithuanian',
    nativeName: 'lietuvių kalba',
  },
  lu: {
    name: 'Luba-Katanga',
    nativeName: 'Tshiluba',
  },
  lv: {
    name: 'Latvian',
    nativeName: 'latviešu valoda',
  },
  mg: {
    name: 'Malagasy',
    nativeName: 'fiteny malagasy',
  },
  mh: {
    name: 'Marshallese',
    nativeName: 'Kajin M̧ajeļ',
  },
  mi: {
    name: 'Māori',
    nativeName: 'te reo Māori',
  },
  mk: {
    name: 'Macedonian',
    nativeName: 'македонски јазик',
  },
  ml: {
    name: 'Malayalam',
    nativeName: 'മലയാളം',
  },
  mn: {
    name: 'Mongolian',
    nativeName: 'Монгол хэл',
  },
  mr: {
    name: 'Marathi',
    nativeName: 'मराठी',
  },
  ms: {
    name: 'Malay',
    nativeName: 'Bahasa Malaysia',
  },
  mt: {
    name: 'Maltese',
    nativeName: 'Malti',
  },
  my: {
    name: 'Burmese',
    nativeName: 'ဗမာစာ',
  },
  na: {
    name: 'Nauru',
    nativeName: 'Ekakairũ Naoero',
  },
  nb: {
    name: 'Norwegian Bokmål',
    nativeName: 'Norsk bokmål',
  },
  nd: {
    name: 'Northern Ndebele',
    nativeName: 'isiNdebele',
  },
  ne: {
    name: 'Nepali',
    nativeName: 'नेपाली',
  },
  ng: {
    name: 'Ndonga',
    nativeName: 'Owambo',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands',
  },
  nn: {
    name: 'Norwegian Nynorsk',
    nativeName: 'Norsk nynorsk',
  },
  no: {
    name: 'Norwegian',
    nativeName: 'Norsk',
  },
  nr: {
    name: 'Southern Ndebele',
    nativeName: 'isiNdebele',
  },
  nv: {
    name: 'Navajo',
    nativeName: 'Diné bizaad',
  },
  ny: {
    name: 'Chichewa',
    nativeName: 'chiCheŵa',
  },
  oc: {
    name: 'Occitan',
    nativeName: 'occitan',
  },
  oj: {
    name: 'Ojibwe',
    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ',
  },
  om: {
    name: 'Oromo',
    nativeName: 'Afaan Oromoo',
  },
  or: {
    name: 'Oriya',
    nativeName: 'ଓଡ଼ିଆ',
  },
  os: {
    name: 'Ossetian',
    nativeName: 'ирон æвзаг',
  },
  pa: {
    name: 'Panjabi',
    nativeName: 'ਪੰਜਾਬੀ',
  },
  pi: {
    name: 'Pāli',
    nativeName: 'पाऴि',
  },
  pl: {
    name: 'Polish',
    nativeName: 'Polski',
  },
  ps: {
    name: 'Pashto',
    nativeName: 'پښتو',
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português',
  },
  qu: {
    name: 'Quechua',
    nativeName: 'Runa Simi',
  },
  rm: {
    name: 'Romansh',
    nativeName: 'rumantsch grischun',
  },
  rn: {
    name: 'Kirundi',
    nativeName: 'Ikirundi',
  },
  ro: {
    name: 'Romanian',
    nativeName: 'Română',
  },
  ru: {
    name: 'Russian',
    nativeName: 'Русский',
  },
  rw: {
    name: 'Kinyarwanda',
    nativeName: 'Ikinyarwanda',
  },
  sa: {
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
  },
  sc: {
    name: 'Sardinian',
    nativeName: 'sardu',
  },
  sd: {
    name: 'Sindhi',
    nativeName: 'सिन्धी',
  },
  se: {
    name: 'Northern Sami',
    nativeName: 'Davvisámegiella',
  },
  sg: {
    name: 'Sango',
    nativeName: 'yângâ tî sängö',
  },
  si: {
    name: 'Sinhala',
    nativeName: 'සිංහල',
  },
  sk: {
    name: 'Slovak',
    nativeName: 'slovenčina',
  },
  sl: {
    name: 'Slovenian',
    nativeName: 'slovenščina',
  },
  sm: {
    name: 'Samoan',
    nativeName: "gagana fa'a Samoa",
  },
  sn: {
    name: 'Shona',
    nativeName: 'chiShona',
  },
  so: {
    name: 'Somali',
    nativeName: 'Soomaaliga',
  },
  sq: {
    name: 'Albanian',
    nativeName: 'Shqip',
  },
  sr: {
    name: 'Serbian',
    nativeName: 'српски језик',
  },
  ss: {
    name: 'Swati',
    nativeName: 'SiSwati',
  },
  st: {
    name: 'Southern Sotho',
    nativeName: 'Sesotho',
  },
  su: {
    name: 'Sundanese',
    nativeName: 'Basa Sunda',
  },
  sv: {
    name: 'Swedish',
    nativeName: 'Svenska',
  },
  sw: {
    name: 'Swahili',
    nativeName: 'Kiswahili',
  },
  ta: {
    name: 'Tamil',
    nativeName: 'தமிழ்',
  },
  te: {
    name: 'Telugu',
    nativeName: 'తెలుగు',
  },
  tg: {
    name: 'Tajik',
    nativeName: 'тоҷикӣ',
  },
  th: {
    name: 'Thai',
    nativeName: 'ไทย',
  },
  ti: {
    name: 'Tigrinya',
    nativeName: 'ትግርኛ',
  },
  tk: {
    name: 'Turkmen',
    nativeName: 'Türkmen',
  },
  tl: {
    name: 'Tagalog',
    nativeName: 'Wikang Tagalog',
  },
  tn: {
    name: 'Tswana',
    nativeName: 'Setswana',
  },
  to: {
    name: 'Tonga',
    nativeName: 'faka Tonga',
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
  },
  ts: {
    name: 'Tsonga',
    nativeName: 'Xitsonga',
  },
  tt: {
    name: 'Tatar',
    nativeName: 'татар теле',
  },
  tw: {
    name: 'Twi',
    nativeName: 'Twi',
  },
  ty: {
    name: 'Tahitian',
    nativeName: 'Reo Tahiti',
  },
  ug: {
    name: 'Uyghur',
    nativeName: 'ئۇيغۇرچە‎',
  },
  uk: {
    name: 'Ukrainian',
    nativeName: 'Українська',
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو',
  },
  uz: {
    name: 'Uzbek',
    nativeName: 'Ўзбек',
  },
  ve: {
    name: 'Venda',
    nativeName: 'Tshivenḓa',
  },
  vi: {
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
  },
  vo: {
    name: 'Volapük',
    nativeName: 'Volapük',
  },
  wa: {
    name: 'Walloon',
    nativeName: 'walon',
  },
  wo: {
    name: 'Wolof',
    nativeName: 'Wollof',
  },
  xh: {
    name: 'Xhosa',
    nativeName: 'isiXhosa',
  },
  yi: {
    name: 'Yiddish',
    nativeName: 'ייִדיש',
  },
  yo: {
    name: 'Yoruba',
    nativeName: 'Yorùbá',
  },
  za: {
    name: 'Zhuang',
    nativeName: 'Saɯ cueŋƅ',
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文',
  },
  zu: {
    name: 'Zulu',
    nativeName: 'isiZulu',
  },
};

/* harmony default export */ __webpack_exports__["default"] = (LANGUAGES_LIST);


/***/ }),

/***/ "../node_modules/iso-639-1/src/index.js":
/*!**********************************************!*\
  !*** ../node_modules/iso-639-1/src/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ISO6391; }
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "../node_modules/iso-639-1/src/data.js");


class ISO6391 {
  static getLanguages(codes = []) {
    return codes.map(code => ({
      code,
      name: ISO6391.getName(code),
      nativeName: ISO6391.getNativeName(code),
    }));
  }

  static getName(code) {
    return ISO6391.validate(code) ? _data__WEBPACK_IMPORTED_MODULE_0__.default[code].name : '';
  }

  static getAllNames() {
    return Object.values(_data__WEBPACK_IMPORTED_MODULE_0__.default).map(l => l.name);
  }

  static getNativeName(code) {
    return ISO6391.validate(code) ? _data__WEBPACK_IMPORTED_MODULE_0__.default[code].nativeName : '';
  }

  static getAllNativeNames() {
    return Object.values(_data__WEBPACK_IMPORTED_MODULE_0__.default).map(l => l.nativeName);
  }

  static getCode(name) {
    const code = Object.keys(_data__WEBPACK_IMPORTED_MODULE_0__.default).find(code => {
      const language = _data__WEBPACK_IMPORTED_MODULE_0__.default[code];

      return (
        language.name.toLowerCase() === name.toLowerCase() ||
        language.nativeName.toLowerCase() === name.toLowerCase()
      );
    });
    return code || '';
  }

  static getAllCodes() {
    return Object.keys(_data__WEBPACK_IMPORTED_MODULE_0__.default);
  }

  static validate(code) {
    return _data__WEBPACK_IMPORTED_MODULE_0__.default.hasOwnProperty(code);
  }
}


/***/ }),

/***/ "../node_modules/locale-code/src/index.js":
/*!************************************************!*\
  !*** ../node_modules/locale-code/src/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LocaleCode; }
/* harmony export */ });
/* harmony import */ var iso_639_1_zh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iso-639-1-zh */ "../node_modules/iso-639-1-zh/src/index.js");
/* harmony import */ var iso_3166_1_alpha_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! iso-3166-1-alpha-2 */ "../node_modules/iso-3166-1-alpha-2/index.js");
/* harmony import */ var iso_3166_1_alpha_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(iso_3166_1_alpha_2__WEBPACK_IMPORTED_MODULE_1__);



const REG = /^([a-z]{2})-([A-Z]{2})$/

class LocaleCode {
  /* language iso-639-1 */
  static getLanguageCode(code) {
    var match = code.match(REG)
    if(!match || match.length < 1) return ''
    return match[1]
  }

  static getLanguageName(code) {
    var languageCode = LocaleCode.getLanguageCode(code)
    return iso_639_1_zh__WEBPACK_IMPORTED_MODULE_0__.default.getName(languageCode)
  }

  static getLanguageNativeName(code) {
    var languageCode = LocaleCode.getLanguageCode(code)
    return iso_639_1_zh__WEBPACK_IMPORTED_MODULE_0__.default.getNativeName(languageCode)
  }

  static getLanguageZhName(code) {
    var languageCode = LocaleCode.getLanguageCode(code)
    return iso_639_1_zh__WEBPACK_IMPORTED_MODULE_0__.default.getZhName(languageCode)
  }

  static validateLanguageCode(code) {
    var languageCode = LocaleCode.getLanguageCode(code)
    return iso_639_1_zh__WEBPACK_IMPORTED_MODULE_0__.default.validate(languageCode)
  }

  static getLanguages(codes) {
    var list = []
    for (var i = 0; i < codes.length; i++) {
      list.push({
        code:codes[i], 
        name: LocaleCode.getLanguageName(codes[i]),
        nativeName: LocaleCode.getLanguageNativeName(codes[i]),
        zhName: LocaleCode.getLanguageZhName(codes[i])
      })
    }
    return list
  }

  /* country iso-3166-1-alpha-2 */
  static getCountryCode(code) {
    var match = code.match(REG)
    if(!match || match.length < 2) return ''
    return match[2]
  }
  static getCountryName(code) {
    var countryCode = LocaleCode.getCountryCode(code)
    return iso_3166_1_alpha_2__WEBPACK_IMPORTED_MODULE_1___default().getCountry(countryCode)
  }
  static validateCountryCode(code) {
    code = LocaleCode.getCountryCode(code)
    if(iso_3166_1_alpha_2__WEBPACK_IMPORTED_MODULE_1___default().getCodes().indexOf(code) === -1) {
      return false
    } else {
      return true
    }
  }

  /* validate */
  static validate(code) {
    var match = code.match(REG)
    if(match && match.length === 3 && 
      LocaleCode.validateLanguageCode(code) &&
      LocaleCode.validateCountryCode(code)) {
      return true
    } else {
      return false
    }
  }
}

/***/ }),

/***/ "../node_modules/mout/array/contains.js":
/*!**********************************************!*\
  !*** ../node_modules/mout/array/contains.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var indexOf = __webpack_require__(/*! ./indexOf */ "../node_modules/mout/array/indexOf.js");

    /**
     * If array contains values.
     */
    function contains(arr, val) {
        return indexOf(arr, val) !== -1;
    }
    module.exports = contains;



/***/ }),

/***/ "../node_modules/mout/array/forEach.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/array/forEach.js ***!
  \*********************************************/
/***/ (function(module) {



    /**
     * Array forEach
     */
    function forEach(arr, callback, thisObj) {
        if (arr == null) {
            return;
        }
        var i = -1,
            len = arr.length;
        while (++i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if ( callback.call(thisObj, arr[i], i, arr) === false ) {
                break;
            }
        }
    }

    module.exports = forEach;




/***/ }),

/***/ "../node_modules/mout/array/indexOf.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/array/indexOf.js ***!
  \*********************************************/
/***/ (function(module) {



    /**
     * Array.indexOf
     */
    function indexOf(arr, item, fromIndex) {
        fromIndex = fromIndex || 0;
        if (arr == null) {
            return -1;
        }

        var len = arr.length,
            i = fromIndex < 0 ? len + fromIndex : fromIndex;
        while (i < len) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if (arr[i] === item) {
                return i;
            }

            i++;
        }

        return -1;
    }

    module.exports = indexOf;



/***/ }),

/***/ "../node_modules/mout/array/max.js":
/*!*****************************************!*\
  !*** ../node_modules/mout/array/max.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "../node_modules/mout/function/makeIterator_.js");

    /**
     * Return maximum value inside array
     */
    function max(arr, iterator, thisObj){
        if (arr == null || !arr.length) {
            return Infinity;
        } else if (arr.length && !iterator) {
            return Math.max.apply(Math, arr);
        } else {
            iterator = makeIterator(iterator, thisObj);
            var result,
                compare = -Infinity,
                value,
                temp;

            var i = -1, len = arr.length;
            while (++i < len) {
                value = arr[i];
                temp = iterator(value, i, arr);
                if (temp > compare) {
                    compare = temp;
                    result = value;
                }
            }

            return result;
        }
    }

    module.exports = max;




/***/ }),

/***/ "../node_modules/mout/array/min.js":
/*!*****************************************!*\
  !*** ../node_modules/mout/array/min.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "../node_modules/mout/function/makeIterator_.js");

    /**
     * Return minimum value inside array
     */
    function min(arr, iterator, thisObj){
        if (arr == null || !arr.length) {
            return -Infinity;
        } else if (arr.length && !iterator) {
            return Math.min.apply(Math, arr);
        } else {
            iterator = makeIterator(iterator, thisObj);
            var result,
                compare = Infinity,
                value,
                temp;

            var i = -1, len = arr.length;
            while (++i < len) {
                value = arr[i];
                temp = iterator(value, i, arr);
                if (temp < compare) {
                    compare = temp;
                    result = value;
                }
            }

            return result;
        }
    }

    module.exports = min;




/***/ }),

/***/ "../node_modules/mout/array/slice.js":
/*!*******************************************!*\
  !*** ../node_modules/mout/array/slice.js ***!
  \*******************************************/
/***/ (function(module) {



    /**
     * Create slice of source array or array-like object
     */
    function slice(arr, start, end){
        var len = arr.length;

        if (start == null) {
            start = 0;
        } else if (start < 0) {
            start = Math.max(len + start, 0);
        } else {
            start = Math.min(start, len);
        }

        if (end == null) {
            end = len;
        } else if (end < 0) {
            end = Math.max(len + end, 0);
        } else {
            end = Math.min(end, len);
        }

        var result = [];
        while (start < end) {
            result.push(arr[start++]);
        }

        return result;
    }

    module.exports = slice;




/***/ }),

/***/ "../node_modules/mout/function/bind.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/function/bind.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var slice = __webpack_require__(/*! ../array/slice */ "../node_modules/mout/array/slice.js");

    /**
     * Return a function that will execute in the given context, optionally adding any additional supplied parameters to the beginning of the arguments collection.
     * @param {Function} fn  Function.
     * @param {object} context   Execution context.
     * @param {rest} args    Arguments (0...n arguments).
     * @return {Function} Wrapped Function.
     */
    function bind(fn, context, args){
        var argsArr = slice(arguments, 2); //curried args
        return function(){
            return fn.apply(context, argsArr.concat(slice(arguments)));
        };
    }

    module.exports = bind;




/***/ }),

/***/ "../node_modules/mout/function/identity.js":
/*!*************************************************!*\
  !*** ../node_modules/mout/function/identity.js ***!
  \*************************************************/
/***/ (function(module) {



    /**
     * Returns the first argument provided to it.
     */
    function identity(val){
        return val;
    }

    module.exports = identity;




/***/ }),

/***/ "../node_modules/mout/function/makeIterator_.js":
/*!******************************************************!*\
  !*** ../node_modules/mout/function/makeIterator_.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "../node_modules/mout/function/identity.js");
var prop = __webpack_require__(/*! ./prop */ "../node_modules/mout/function/prop.js");
var deepMatches = __webpack_require__(/*! ../object/deepMatches */ "../node_modules/mout/object/deepMatches.js");

    /**
     * Converts argument into a valid iterator.
     * Used internally on most array/object/collection methods that receives a
     * callback/iterator providing a shortcut syntax.
     */
    function makeIterator(src, thisObj){
        if (src == null) {
            return identity;
        }
        switch(typeof src) {
            case 'function':
                // function is the first to improve perf (most common case)
                // also avoid using `Function#call` if not needed, which boosts
                // perf a lot in some cases
                return (typeof thisObj !== 'undefined')? function(val, i, arr){
                    return src.call(thisObj, val, i, arr);
                } : src;
            case 'object':
                return function(val){
                    return deepMatches(val, src);
                };
            case 'string':
            case 'number':
                return prop(src);
        }
    }

    module.exports = makeIterator;




/***/ }),

/***/ "../node_modules/mout/function/prop.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/function/prop.js ***!
  \*********************************************/
/***/ (function(module) {



    /**
     * Returns a function that gets a property of the passed object
     */
    function prop(name){
        return function(obj){
            return obj[name];
        };
    }

    module.exports = prop;




/***/ }),

/***/ "../node_modules/mout/lang/clone.js":
/*!******************************************!*\
  !*** ../node_modules/mout/lang/clone.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var kindOf = __webpack_require__(/*! ./kindOf */ "../node_modules/mout/lang/kindOf.js");
var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "../node_modules/mout/lang/isPlainObject.js");
var mixIn = __webpack_require__(/*! ../object/mixIn */ "../node_modules/mout/object/mixIn.js");

    /**
     * Clone native types.
     */
    function clone(val){
        switch (kindOf(val)) {
            case 'Object':
                return cloneObject(val);
            case 'Array':
                return cloneArray(val);
            case 'RegExp':
                return cloneRegExp(val);
            case 'Date':
                return cloneDate(val);
            default:
                return val;
        }
    }

    function cloneObject(source) {
        if (isPlainObject(source)) {
            return mixIn({}, source);
        } else {
            return source;
        }
    }

    function cloneRegExp(r) {
        var flags = '';
        flags += r.multiline ? 'm' : '';
        flags += r.global ? 'g' : '';
        flags += r.ignoreCase ? 'i' : '';
        return new RegExp(r.source, flags);
    }

    function cloneDate(date) {
        return new Date(+date);
    }

    function cloneArray(arr) {
        return arr.slice();
    }

    module.exports = clone;




/***/ }),

/***/ "../node_modules/mout/lang/deepClone.js":
/*!**********************************************!*\
  !*** ../node_modules/mout/lang/deepClone.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var clone = __webpack_require__(/*! ./clone */ "../node_modules/mout/lang/clone.js");
var forOwn = __webpack_require__(/*! ../object/forOwn */ "../node_modules/mout/object/forOwn.js");
var kindOf = __webpack_require__(/*! ./kindOf */ "../node_modules/mout/lang/kindOf.js");
var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "../node_modules/mout/lang/isPlainObject.js");

    /**
     * Recursively clone native types.
     */
    function deepClone(val, instanceClone) {
        switch ( kindOf(val) ) {
            case 'Object':
                return cloneObject(val, instanceClone);
            case 'Array':
                return cloneArray(val, instanceClone);
            default:
                return clone(val);
        }
    }

    function cloneObject(source, instanceClone) {
        if (isPlainObject(source)) {
            var out = {};
            forOwn(source, function(val, key) {
                this[key] = deepClone(val, instanceClone);
            }, out);
            return out;
        } else if (instanceClone) {
            return instanceClone(source);
        } else {
            return source;
        }
    }

    function cloneArray(arr, instanceClone) {
        var out = [],
            i = -1,
            n = arr.length,
            val;
        while (++i < n) {
            out[i] = deepClone(arr[i], instanceClone);
        }
        return out;
    }

    module.exports = deepClone;





/***/ }),

/***/ "../node_modules/mout/lang/is.js":
/*!***************************************!*\
  !*** ../node_modules/mout/lang/is.js ***!
  \***************************************/
/***/ (function(module) {



    /**
     * Check if both arguments are egal.
     */
    function is(x, y){
        // implementation borrowed from harmony:egal spec
        if (x === y) {
          // 0 === -0, but they are not identical
          return x !== 0 || 1 / x === 1 / y;
        }

        // NaN !== NaN, but they are identical.
        // NaNs are the only non-reflexive value, i.e., if x !== x,
        // then x is a NaN.
        // isNaN is broken: it converts its argument to number, so
        // isNaN("foo") => true
        return x !== x && y !== y;
    }

    module.exports = is;




/***/ }),

/***/ "../node_modules/mout/lang/isArray.js":
/*!********************************************!*\
  !*** ../node_modules/mout/lang/isArray.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isKind = __webpack_require__(/*! ./isKind */ "../node_modules/mout/lang/isKind.js");
    /**
     */
    var isArray = Array.isArray || function (val) {
        return isKind(val, 'Array');
    };
    module.exports = isArray;



/***/ }),

/***/ "../node_modules/mout/lang/isFunction.js":
/*!***********************************************!*\
  !*** ../node_modules/mout/lang/isFunction.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isKind = __webpack_require__(/*! ./isKind */ "../node_modules/mout/lang/isKind.js");
    /**
     */
    function isFunction(val) {
        return isKind(val, 'Function');
    }
    module.exports = isFunction;



/***/ }),

/***/ "../node_modules/mout/lang/isKind.js":
/*!*******************************************!*\
  !*** ../node_modules/mout/lang/isKind.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var kindOf = __webpack_require__(/*! ./kindOf */ "../node_modules/mout/lang/kindOf.js");
    /**
     * Check if value is from a specific "kind".
     */
    function isKind(val, kind){
        return kindOf(val) === kind;
    }
    module.exports = isKind;



/***/ }),

/***/ "../node_modules/mout/lang/isObject.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/lang/isObject.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isKind = __webpack_require__(/*! ./isKind */ "../node_modules/mout/lang/isKind.js");
    /**
     */
    function isObject(val) {
        return isKind(val, 'Object');
    }
    module.exports = isObject;



/***/ }),

/***/ "../node_modules/mout/lang/isPlainObject.js":
/*!**************************************************!*\
  !*** ../node_modules/mout/lang/isPlainObject.js ***!
  \**************************************************/
/***/ (function(module) {



    /**
     * Checks if the value is created by the `Object` constructor.
     */
    function isPlainObject(value) {
        return (!!value && typeof value === 'object' &&
            value.constructor === Object);
    }

    module.exports = isPlainObject;




/***/ }),

/***/ "../node_modules/mout/lang/isPrimitive.js":
/*!************************************************!*\
  !*** ../node_modules/mout/lang/isPrimitive.js ***!
  \************************************************/
/***/ (function(module) {



    /**
     * Checks if the object is a primitive
     */
    function isPrimitive(value) {
        // Using switch fallthrough because it's simple to read and is
        // generally fast: http://jsperf.com/testing-value-is-primitive/5
        switch (typeof value) {
            case "string":
            case "number":
            case "boolean":
                return true;
        }

        return value == null;
    }

    module.exports = isPrimitive;




/***/ }),

/***/ "../node_modules/mout/lang/kindOf.js":
/*!*******************************************!*\
  !*** ../node_modules/mout/lang/kindOf.js ***!
  \*******************************************/
/***/ (function(module) {



    var _rKind = /^\[object (.*)\]$/,
        _toString = Object.prototype.toString,
        UNDEF;

    /**
     * Gets the "kind" of value. (e.g. "String", "Number", etc)
     */
    function kindOf(val) {
        if (val === null) {
            return 'Null';
        } else if (val === UNDEF) {
            return 'Undefined';
        } else {
            return _rKind.exec( _toString.call(val) )[1];
        }
    }
    module.exports = kindOf;



/***/ }),

/***/ "../node_modules/mout/object.js":
/*!**************************************!*\
  !*** ../node_modules/mout/object.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



//automatically generated, do not edit!
//run `node build` instead
module.exports = {
    'bindAll' : __webpack_require__(/*! ./object/bindAll */ "../node_modules/mout/object/bindAll.js"),
    'contains' : __webpack_require__(/*! ./object/contains */ "../node_modules/mout/object/contains.js"),
    'deepFillIn' : __webpack_require__(/*! ./object/deepFillIn */ "../node_modules/mout/object/deepFillIn.js"),
    'deepMatches' : __webpack_require__(/*! ./object/deepMatches */ "../node_modules/mout/object/deepMatches.js"),
    'deepMixIn' : __webpack_require__(/*! ./object/deepMixIn */ "../node_modules/mout/object/deepMixIn.js"),
    'equals' : __webpack_require__(/*! ./object/equals */ "../node_modules/mout/object/equals.js"),
    'every' : __webpack_require__(/*! ./object/every */ "../node_modules/mout/object/every.js"),
    'fillIn' : __webpack_require__(/*! ./object/fillIn */ "../node_modules/mout/object/fillIn.js"),
    'filter' : __webpack_require__(/*! ./object/filter */ "../node_modules/mout/object/filter.js"),
    'find' : __webpack_require__(/*! ./object/find */ "../node_modules/mout/object/find.js"),
    'flatten' : __webpack_require__(/*! ./object/flatten */ "../node_modules/mout/object/flatten.js"),
    'forIn' : __webpack_require__(/*! ./object/forIn */ "../node_modules/mout/object/forIn.js"),
    'forOwn' : __webpack_require__(/*! ./object/forOwn */ "../node_modules/mout/object/forOwn.js"),
    'functions' : __webpack_require__(/*! ./object/functions */ "../node_modules/mout/object/functions.js"),
    'get' : __webpack_require__(/*! ./object/get */ "../node_modules/mout/object/get.js"),
    'has' : __webpack_require__(/*! ./object/has */ "../node_modules/mout/object/has.js"),
    'hasOwn' : __webpack_require__(/*! ./object/hasOwn */ "../node_modules/mout/object/hasOwn.js"),
    'keys' : __webpack_require__(/*! ./object/keys */ "../node_modules/mout/object/keys.js"),
    'map' : __webpack_require__(/*! ./object/map */ "../node_modules/mout/object/map.js"),
    'matches' : __webpack_require__(/*! ./object/matches */ "../node_modules/mout/object/matches.js"),
    'max' : __webpack_require__(/*! ./object/max */ "../node_modules/mout/object/max.js"),
    'merge' : __webpack_require__(/*! ./object/merge */ "../node_modules/mout/object/merge.js"),
    'min' : __webpack_require__(/*! ./object/min */ "../node_modules/mout/object/min.js"),
    'mixIn' : __webpack_require__(/*! ./object/mixIn */ "../node_modules/mout/object/mixIn.js"),
    'namespace' : __webpack_require__(/*! ./object/namespace */ "../node_modules/mout/object/namespace.js"),
    'omit' : __webpack_require__(/*! ./object/omit */ "../node_modules/mout/object/omit.js"),
    'pick' : __webpack_require__(/*! ./object/pick */ "../node_modules/mout/object/pick.js"),
    'pluck' : __webpack_require__(/*! ./object/pluck */ "../node_modules/mout/object/pluck.js"),
    'reduce' : __webpack_require__(/*! ./object/reduce */ "../node_modules/mout/object/reduce.js"),
    'reject' : __webpack_require__(/*! ./object/reject */ "../node_modules/mout/object/reject.js"),
    'result' : __webpack_require__(/*! ./object/result */ "../node_modules/mout/object/result.js"),
    'set' : __webpack_require__(/*! ./object/set */ "../node_modules/mout/object/set.js"),
    'size' : __webpack_require__(/*! ./object/size */ "../node_modules/mout/object/size.js"),
    'some' : __webpack_require__(/*! ./object/some */ "../node_modules/mout/object/some.js"),
    'unset' : __webpack_require__(/*! ./object/unset */ "../node_modules/mout/object/unset.js"),
    'values' : __webpack_require__(/*! ./object/values */ "../node_modules/mout/object/values.js")
};




/***/ }),

/***/ "../node_modules/mout/object/bindAll.js":
/*!**********************************************!*\
  !*** ../node_modules/mout/object/bindAll.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var functions = __webpack_require__(/*! ./functions */ "../node_modules/mout/object/functions.js");
var bind = __webpack_require__(/*! ../function/bind */ "../node_modules/mout/function/bind.js");
var forEach = __webpack_require__(/*! ../array/forEach */ "../node_modules/mout/array/forEach.js");
var slice = __webpack_require__(/*! ../array/slice */ "../node_modules/mout/array/slice.js");

    /**
     * Binds methods of the object to be run in it's own context.
     */
    function bindAll(obj, rest_methodNames){
        var keys = arguments.length > 1?
                    slice(arguments, 1) : functions(obj);
        forEach(keys, function(key){
            obj[key] = bind(obj[key], obj);
        });
    }

    module.exports = bindAll;




/***/ }),

/***/ "../node_modules/mout/object/contains.js":
/*!***********************************************!*\
  !*** ../node_modules/mout/object/contains.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var some = __webpack_require__(/*! ./some */ "../node_modules/mout/object/some.js");

    /**
     * Check if object contains value
     */
    function contains(obj, needle) {
        return some(obj, function(val) {
            return (val === needle);
        });
    }
    module.exports = contains;




/***/ }),

/***/ "../node_modules/mout/object/deepFillIn.js":
/*!*************************************************!*\
  !*** ../node_modules/mout/object/deepFillIn.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");
var isPlainObject = __webpack_require__(/*! ../lang/isPlainObject */ "../node_modules/mout/lang/isPlainObject.js");

    /**
     * Deeply copy missing properties in the target from the defaults.
     */
    function deepFillIn(target, defaults){
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n) {
            obj = arguments[i];
            if (obj) {
                // jshint loopfunc: true
                forOwn(obj, function(newValue, key) {
                    var curValue = target[key];
                    if (curValue == null) {
                        target[key] = newValue;
                    } else if (isPlainObject(curValue) &&
                               isPlainObject(newValue)) {
                        deepFillIn(curValue, newValue);
                    }
                });
            }
        }

        return target;
    }

    module.exports = deepFillIn;




/***/ }),

/***/ "../node_modules/mout/object/deepMatches.js":
/*!**************************************************!*\
  !*** ../node_modules/mout/object/deepMatches.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");
var isArray = __webpack_require__(/*! ../lang/isArray */ "../node_modules/mout/lang/isArray.js");

    function containsMatch(array, pattern) {
        var i = -1, length = array.length;
        while (++i < length) {
            if (deepMatches(array[i], pattern)) {
                return true;
            }
        }

        return false;
    }

    function matchArray(target, pattern) {
        var i = -1, patternLength = pattern.length;
        while (++i < patternLength) {
            if (!containsMatch(target, pattern[i])) {
                return false;
            }
        }

        return true;
    }

    function matchObject(target, pattern) {
        var result = true;
        forOwn(pattern, function(val, key) {
            if (!deepMatches(target[key], val)) {
                // Return false to break out of forOwn early
                return (result = false);
            }
        });

        return result;
    }

    /**
     * Recursively check if the objects match.
     */
    function deepMatches(target, pattern){
        if (target && typeof target === 'object') {
            if (isArray(target) && isArray(pattern)) {
                return matchArray(target, pattern);
            } else {
                return matchObject(target, pattern);
            }
        } else {
            return target === pattern;
        }
    }

    module.exports = deepMatches;




/***/ }),

/***/ "../node_modules/mout/object/deepMixIn.js":
/*!************************************************!*\
  !*** ../node_modules/mout/object/deepMixIn.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");
var isPlainObject = __webpack_require__(/*! ../lang/isPlainObject */ "../node_modules/mout/lang/isPlainObject.js");

    /**
     * Mixes objects into the target object, recursively mixing existing child
     * objects.
     */
    function deepMixIn(target, objects) {
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n){
            obj = arguments[i];
            if (obj) {
                forOwn(obj, copyProp, target);
            }
        }

        return target;
    }

    function copyProp(val, key) {
        var existing = this[key];
        if (isPlainObject(val) && isPlainObject(existing)) {
            deepMixIn(existing, val);
        } else {
            this[key] = val;
        }
    }

    module.exports = deepMixIn;




/***/ }),

/***/ "../node_modules/mout/object/equals.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/object/equals.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ./hasOwn */ "../node_modules/mout/object/hasOwn.js");
var every = __webpack_require__(/*! ./every */ "../node_modules/mout/object/every.js");
var isObject = __webpack_require__(/*! ../lang/isObject */ "../node_modules/mout/lang/isObject.js");
var is = __webpack_require__(/*! ../lang/is */ "../node_modules/mout/lang/is.js");

    // Makes a function to compare the object values from the specified compare
    // operation callback.
    function makeCompare(callback) {
        return function(value, key) {
            return hasOwn(this, key) && callback(value, this[key]);
        };
    }

    function checkProperties(value, key) {
        return hasOwn(this, key);
    }

    /**
     * Checks if two objects have the same keys and values.
     */
    function equals(a, b, callback) {
        callback = callback || is;

        if (!isObject(a) || !isObject(b)) {
            return callback(a, b);
        }

        return (every(a, makeCompare(callback), b) &&
                every(b, checkProperties, a));
    }

    module.exports = equals;



/***/ }),

/***/ "../node_modules/mout/object/every.js":
/*!********************************************!*\
  !*** ../node_modules/mout/object/every.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "../node_modules/mout/function/makeIterator_.js");

    /**
     * Object every
     */
    function every(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result = true;
        forOwn(obj, function(val, key) {
            // we consider any falsy values as "false" on purpose so shorthand
            // syntax can be used to check property existence
            if (!callback(val, key, obj)) {
                result = false;
                return false; // break
            }
        });
        return result;
    }

    module.exports = every;




/***/ }),

/***/ "../node_modules/mout/object/fillIn.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/object/fillIn.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forEach = __webpack_require__(/*! ../array/forEach */ "../node_modules/mout/array/forEach.js");
var slice = __webpack_require__(/*! ../array/slice */ "../node_modules/mout/array/slice.js");
var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");

    /**
     * Copy missing properties in the obj from the defaults.
     */
    function fillIn(obj, var_defaults){
        forEach(slice(arguments, 1), function(base){
            forOwn(base, function(val, key){
                if (obj[key] == null) {
                    obj[key] = val;
                }
            });
        });
        return obj;
    }

    module.exports = fillIn;




/***/ }),

/***/ "../node_modules/mout/object/filter.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/object/filter.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "../node_modules/mout/function/makeIterator_.js");

    /**
     * Creates a new object with all the properties where the callback returns
     * true.
     */
    function filterValues(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var output = {};
        forOwn(obj, function(value, key, obj) {
            if (callback(value, key, obj)) {
                output[key] = value;
            }
        });

        return output;
    }
    module.exports = filterValues;



/***/ }),

/***/ "../node_modules/mout/object/find.js":
/*!*******************************************!*\
  !*** ../node_modules/mout/object/find.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var some = __webpack_require__(/*! ./some */ "../node_modules/mout/object/some.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "../node_modules/mout/function/makeIterator_.js");

    /**
     * Returns first item that matches criteria
     */
    function find(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result;
        some(obj, function(value, key, obj) {
            if (callback(value, key, obj)) {
                result = value;
                return true; //break
            }
        });
        return result;
    }

    module.exports = find;




/***/ }),

/***/ "../node_modules/mout/object/flatten.js":
/*!**********************************************!*\
  !*** ../node_modules/mout/object/flatten.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");
var isPlainObject = __webpack_require__(/*! ../lang/isPlainObject */ "../node_modules/mout/lang/isPlainObject.js");

    /*
     * Helper function to flatten to a destination object.
     * Used to remove the need to create intermediate objects while flattening.
     */
    function flattenTo(obj, result, prefix, level) {
        forOwn(obj, function (value, key) {
            var nestedPrefix = prefix ? prefix + '.' + key : key;

            if (level !== 0 && isPlainObject(value)) {
                flattenTo(value, result, nestedPrefix, level - 1);
            } else {
                result[nestedPrefix] = value;
            }
        });

        return result;
    }

    /**
     * Recursively flattens an object.
     * A new object containing all the elements is returned.
     * If level is specified, it will only flatten up to that level.
     */
    function flatten(obj, level) {
        if (obj == null) {
            return {};
        }

        level = level == null ? -1 : level;
        return flattenTo(obj, {}, '', level);
    }

    module.exports = flatten;




/***/ }),

/***/ "../node_modules/mout/object/forIn.js":
/*!********************************************!*\
  !*** ../node_modules/mout/object/forIn.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ./hasOwn */ "../node_modules/mout/object/hasOwn.js");

    var _hasDontEnumBug,
        _dontEnums;

    function checkDontEnum(){
        _dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ];

        _hasDontEnumBug = true;

        for (var key in {'toString': null}) {
            _hasDontEnumBug = false;
        }
    }

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forIn(obj, fn, thisObj){
        var key, i = 0;
        // no need to check if argument is a real object that way we can use
        // it for arrays, functions, date, etc.

        //post-pone check till needed
        if (_hasDontEnumBug == null) checkDontEnum();

        for (key in obj) {
            if (exec(fn, obj, key, thisObj) === false) {
                break;
            }
        }


        if (_hasDontEnumBug) {
            var ctor = obj.constructor,
                isProto = !!ctor && obj === ctor.prototype;

            while (key = _dontEnums[i++]) {
                // For constructor, if it is a prototype object the constructor
                // is always non-enumerable unless defined otherwise (and
                // enumerated above).  For non-prototype objects, it will have
                // to be defined on this object, since it cannot be defined on
                // any prototype objects.
                //
                // For other [[DontEnum]] properties, check if the value is
                // different than Object prototype value.
                if (
                    (key !== 'constructor' ||
                        (!isProto && hasOwn(obj, key))) &&
                    obj[key] !== Object.prototype[key]
                ) {
                    if (exec(fn, obj, key, thisObj) === false) {
                        break;
                    }
                }
            }
        }
    }

    function exec(fn, obj, key, thisObj){
        return fn.call(thisObj, obj[key], key, obj);
    }

    module.exports = forIn;




/***/ }),

/***/ "../node_modules/mout/object/forOwn.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/object/forOwn.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ./hasOwn */ "../node_modules/mout/object/hasOwn.js");
var forIn = __webpack_require__(/*! ./forIn */ "../node_modules/mout/object/forIn.js");

    /**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    function forOwn(obj, fn, thisObj){
        forIn(obj, function(val, key){
            if (hasOwn(obj, key)) {
                return fn.call(thisObj, obj[key], key, obj);
            }
        });
    }

    module.exports = forOwn;




/***/ }),

/***/ "../node_modules/mout/object/functions.js":
/*!************************************************!*\
  !*** ../node_modules/mout/object/functions.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forIn = __webpack_require__(/*! ./forIn */ "../node_modules/mout/object/forIn.js");

    /**
     * return a list of all enumerable properties that have function values
     */
    function functions(obj){
        var keys = [];
        forIn(obj, function(val, key){
            if (typeof val === 'function'){
                keys.push(key);
            }
        });
        return keys.sort();
    }

    module.exports = functions;




/***/ }),

/***/ "../node_modules/mout/object/get.js":
/*!******************************************!*\
  !*** ../node_modules/mout/object/get.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrimitive = __webpack_require__(/*! ../lang/isPrimitive */ "../node_modules/mout/lang/isPrimitive.js");

    /**
     * get "nested" object property
     */
    function get(obj, prop){
        var parts = prop.split('.'),
            last = parts.pop();

        while (prop = parts.shift()) {
            obj = obj[prop];
            if (obj == null) return;
        }

        return obj[last];
    }

    module.exports = get;




/***/ }),

/***/ "../node_modules/mout/object/has.js":
/*!******************************************!*\
  !*** ../node_modules/mout/object/has.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var get = __webpack_require__(/*! ./get */ "../node_modules/mout/object/get.js");

    var UNDEF;

    /**
     * Check if object has nested property.
     */
    function has(obj, prop){
        return get(obj, prop) !== UNDEF;
    }

    module.exports = has;





/***/ }),

/***/ "../node_modules/mout/object/hasOwn.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/object/hasOwn.js ***!
  \*********************************************/
/***/ (function(module) {



    /**
     * Safer Object.hasOwnProperty
     */
     function hasOwn(obj, prop){
         return Object.prototype.hasOwnProperty.call(obj, prop);
     }

     module.exports = hasOwn;




/***/ }),

/***/ "../node_modules/mout/object/keys.js":
/*!*******************************************!*\
  !*** ../node_modules/mout/object/keys.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");

    /**
     * Get object keys
     */
     var keys = Object.keys || function (obj) {
            var keys = [];
            forOwn(obj, function(val, key){
                keys.push(key);
            });
            return keys;
        };

    module.exports = keys;




/***/ }),

/***/ "../node_modules/mout/object/map.js":
/*!******************************************!*\
  !*** ../node_modules/mout/object/map.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "../node_modules/mout/function/makeIterator_.js");

    /**
     * Creates a new object where all the values are the result of calling
     * `callback`.
     */
    function mapValues(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var output = {};
        forOwn(obj, function(val, key, obj) {
            output[key] = callback(val, key, obj);
        });

        return output;
    }
    module.exports = mapValues;



/***/ }),

/***/ "../node_modules/mout/object/matches.js":
/*!**********************************************!*\
  !*** ../node_modules/mout/object/matches.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");

    /**
     * checks if a object contains all given properties/values
     */
    function matches(target, props){
        // can't use "object/every" because of circular dependency
        var result = true;
        forOwn(props, function(val, key){
            if (target[key] !== val) {
                // break loop at first difference
                return (result = false);
            }
        });
        return result;
    }

    module.exports = matches;




/***/ }),

/***/ "../node_modules/mout/object/max.js":
/*!******************************************!*\
  !*** ../node_modules/mout/object/max.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrMax = __webpack_require__(/*! ../array/max */ "../node_modules/mout/array/max.js");
var values = __webpack_require__(/*! ./values */ "../node_modules/mout/object/values.js");

    /**
     * Returns maximum value inside object.
     */
    function max(obj, compareFn) {
        return arrMax(values(obj), compareFn);
    }

    module.exports = max;



/***/ }),

/***/ "../node_modules/mout/object/merge.js":
/*!********************************************!*\
  !*** ../node_modules/mout/object/merge.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ./hasOwn */ "../node_modules/mout/object/hasOwn.js");
var deepClone = __webpack_require__(/*! ../lang/deepClone */ "../node_modules/mout/lang/deepClone.js");
var isObject = __webpack_require__(/*! ../lang/isObject */ "../node_modules/mout/lang/isObject.js");

    /**
     * Deep merge objects.
     */
    function merge() {
        var i = 1,
            key, val, obj, target;

        // make sure we don't modify source element and it's properties
        // objects are passed by reference
        target = deepClone( arguments[0] );

        while (obj = arguments[i++]) {
            for (key in obj) {
                if ( ! hasOwn(obj, key) ) {
                    continue;
                }

                val = obj[key];

                if ( isObject(val) && isObject(target[key]) ){
                    // inception, deep merge objects
                    target[key] = merge(target[key], val);
                } else {
                    // make sure arrays, regexp, date, objects are cloned
                    target[key] = deepClone(val);
                }

            }
        }

        return target;
    }

    module.exports = merge;




/***/ }),

/***/ "../node_modules/mout/object/min.js":
/*!******************************************!*\
  !*** ../node_modules/mout/object/min.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrMin = __webpack_require__(/*! ../array/min */ "../node_modules/mout/array/min.js");
var values = __webpack_require__(/*! ./values */ "../node_modules/mout/object/values.js");

    /**
     * Returns minimum value inside object.
     */
    function min(obj, iterator) {
        return arrMin(values(obj), iterator);
    }

    module.exports = min;



/***/ }),

/***/ "../node_modules/mout/object/mixIn.js":
/*!********************************************!*\
  !*** ../node_modules/mout/object/mixIn.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");

    /**
    * Combine properties from all the objects into first one.
    * - This method affects target object in place, if you want to create a new Object pass an empty object as first param.
    * @param {object} target    Target Object
    * @param {...object} objects    Objects to be combined (0...n objects).
    * @return {object} Target Object.
    */
    function mixIn(target, objects){
        var i = 0,
            n = arguments.length,
            obj;
        while(++i < n){
            obj = arguments[i];
            if (obj != null) {
                forOwn(obj, copyProp, target);
            }
        }
        return target;
    }

    function copyProp(val, key){
        this[key] = val;
    }

    module.exports = mixIn;



/***/ }),

/***/ "../node_modules/mout/object/namespace.js":
/*!************************************************!*\
  !*** ../node_modules/mout/object/namespace.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forEach = __webpack_require__(/*! ../array/forEach */ "../node_modules/mout/array/forEach.js");

    /**
     * Create nested object if non-existent
     */
    function namespace(obj, path){
        if (!path) return obj;
        forEach(path.split('.'), function(key){
            if (!obj[key]) {
                obj[key] = {};
            }
            obj = obj[key];
        });
        return obj;
    }

    module.exports = namespace;




/***/ }),

/***/ "../node_modules/mout/object/omit.js":
/*!*******************************************!*\
  !*** ../node_modules/mout/object/omit.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var slice = __webpack_require__(/*! ../array/slice */ "../node_modules/mout/array/slice.js");
var contains = __webpack_require__(/*! ../array/contains */ "../node_modules/mout/array/contains.js");

    /**
     * Return a copy of the object, filtered to only contain properties except the blacklisted keys.
     */
    function omit(obj, var_keys){
        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),
            out = {};

        for (var property in obj) {
            if (obj.hasOwnProperty(property) && !contains(keys, property)) {
                out[property] = obj[property];
            }
        }
        return out;
    }

    module.exports = omit;




/***/ }),

/***/ "../node_modules/mout/object/pick.js":
/*!*******************************************!*\
  !*** ../node_modules/mout/object/pick.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var slice = __webpack_require__(/*! ../array/slice */ "../node_modules/mout/array/slice.js");

    /**
     * Return a copy of the object, filtered to only have values for the whitelisted keys.
     */
    function pick(obj, var_keys){
        var keys = typeof arguments[1] !== 'string'? arguments[1] : slice(arguments, 1),
            out = {},
            i = 0, key;
        while (key = keys[i++]) {
            out[key] = obj[key];
        }
        return out;
    }

    module.exports = pick;




/***/ }),

/***/ "../node_modules/mout/object/pluck.js":
/*!********************************************!*\
  !*** ../node_modules/mout/object/pluck.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = __webpack_require__(/*! ./map */ "../node_modules/mout/object/map.js");
var prop = __webpack_require__(/*! ../function/prop */ "../node_modules/mout/function/prop.js");

    /**
     * Extract a list of property values.
     */
    function pluck(obj, propName){
        return map(obj, prop(propName));
    }

    module.exports = pluck;




/***/ }),

/***/ "../node_modules/mout/object/reduce.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/object/reduce.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");
var size = __webpack_require__(/*! ./size */ "../node_modules/mout/object/size.js");

    /**
     * Object reduce
     */
    function reduce(obj, callback, memo, thisObj) {
        var initial = arguments.length > 2;

        if (!size(obj) && !initial) {
            throw new Error('reduce of empty object with no initial value');
        }

        forOwn(obj, function(value, key, list) {
            if (!initial) {
                memo = value;
                initial = true;
            }
            else {
                memo = callback.call(thisObj, memo, value, key, list);
            }
        });

        return memo;
    }

    module.exports = reduce;




/***/ }),

/***/ "../node_modules/mout/object/reject.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/object/reject.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var filter = __webpack_require__(/*! ./filter */ "../node_modules/mout/object/filter.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "../node_modules/mout/function/makeIterator_.js");

    /**
     * Object reject
     */
    function reject(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        return filter(obj, function(value, index, obj) {
            return !callback(value, index, obj);
        }, thisObj);
    }

    module.exports = reject;




/***/ }),

/***/ "../node_modules/mout/object/result.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/object/result.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ../lang/isFunction */ "../node_modules/mout/lang/isFunction.js");

    function result(obj, prop) {
        var property = obj[prop];

        if(property === undefined) {
            return;
        }

        return isFunction(property) ? property.call(obj) : property;
    }

    module.exports = result;



/***/ }),

/***/ "../node_modules/mout/object/set.js":
/*!******************************************!*\
  !*** ../node_modules/mout/object/set.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var namespace = __webpack_require__(/*! ./namespace */ "../node_modules/mout/object/namespace.js");

    /**
     * set "nested" object property
     */
    function set(obj, prop, val){
        var parts = (/^(.+)\.(.+)$/).exec(prop);
        if (parts){
            namespace(obj, parts[1])[parts[2]] = val;
        } else {
            obj[prop] = val;
        }
    }

    module.exports = set;




/***/ }),

/***/ "../node_modules/mout/object/size.js":
/*!*******************************************!*\
  !*** ../node_modules/mout/object/size.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");

    /**
     * Get object size
     */
    function size(obj) {
        var count = 0;
        forOwn(obj, function(){
            count++;
        });
        return count;
    }

    module.exports = size;




/***/ }),

/***/ "../node_modules/mout/object/some.js":
/*!*******************************************!*\
  !*** ../node_modules/mout/object/some.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");
var makeIterator = __webpack_require__(/*! ../function/makeIterator_ */ "../node_modules/mout/function/makeIterator_.js");

    /**
     * Object some
     */
    function some(obj, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        var result = false;
        forOwn(obj, function(val, key) {
            if (callback(val, key, obj)) {
                result = true;
                return false; // break
            }
        });
        return result;
    }

    module.exports = some;




/***/ }),

/***/ "../node_modules/mout/object/unset.js":
/*!********************************************!*\
  !*** ../node_modules/mout/object/unset.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ./has */ "../node_modules/mout/object/has.js");

    /**
     * Unset object property.
     */
    function unset(obj, prop){
        if (has(obj, prop)) {
            var parts = prop.split('.'),
                last = parts.pop();
            while (prop = parts.shift()) {
                obj = obj[prop];
            }
            return (delete obj[last]);

        } else {
            // if property doesn't exist treat as deleted
            return true;
        }
    }

    module.exports = unset;




/***/ }),

/***/ "../node_modules/mout/object/values.js":
/*!*********************************************!*\
  !*** ../node_modules/mout/object/values.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var forOwn = __webpack_require__(/*! ./forOwn */ "../node_modules/mout/object/forOwn.js");

    /**
     * Get object values
     */
    function values(obj) {
        var vals = [];
        forOwn(obj, function(val, key){
            vals.push(val);
        });
        return vals;
    }

    module.exports = values;




/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/index.js":
/*!******************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v1": function() { return /* reexport safe */ _v1_js__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "v3": function() { return /* reexport safe */ _v3_js__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "v4": function() { return /* reexport safe */ _v4_js__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "v5": function() { return /* reexport safe */ _v5_js__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "NIL": function() { return /* reexport safe */ _nil_js__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "version": function() { return /* reexport safe */ _version_js__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "validate": function() { return /* reexport safe */ _validate_js__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "stringify": function() { return /* reexport safe */ _stringify_js__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "parse": function() { return /* reexport safe */ _parse_js__WEBPACK_IMPORTED_MODULE_8__.default; }
/* harmony export */ });
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "../node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "../node_modules/uuid/dist/esm-browser/v3.js");
/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "../node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "../node_modules/uuid/dist/esm-browser/v5.js");
/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "../node_modules/uuid/dist/esm-browser/nil.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "../node_modules/uuid/dist/esm-browser/version.js");
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "../node_modules/uuid/dist/esm-browser/validate.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "../node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "../node_modules/uuid/dist/esm-browser/parse.js");










/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/md5.js":
/*!****************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/md5.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/nil.js":
/*!****************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/nil.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/parse.js":
/*!******************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/parse.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "../node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/regex.js":
/*!******************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/regex.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/rng.js":
/*!****************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/rng.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rng; }
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/sha1.js":
/*!*****************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/sha1.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/stringify.js":
/*!**********************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/stringify.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "../node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/v1.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/v1.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "../node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/v3.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/v3.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "../node_modules/uuid/dist/esm-browser/md5.js");


var v3 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__.default)('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__.default);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/v35.js":
/*!****************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/v35.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DNS": function() { return /* binding */ DNS; },
/* harmony export */   "URL": function() { return /* binding */ URL; },
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "../node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse.js */ "../node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0,_parse_js__WEBPACK_IMPORTED_MODULE_0__.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/v4.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/v4.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "../node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "../node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/v5.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/v5.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "../node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "../node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = (0,_v35_js__WEBPACK_IMPORTED_MODULE_0__.default)('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__.default);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/validate.js":
/*!*********************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/validate.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "../node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/version.js":
/*!********************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/version.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "../node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9Ac3BlZWNobHkvYnJvd3Nlci1jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQHNwZWVjaGx5L2Jyb3dzZXItY2xpZW50L21pY3JvcGhvbmUvYXVkaW93b3JrbGV0LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BzcGVlY2hseS9icm93c2VyLWNsaWVudC9taWNyb3Bob25lL2Jyb3dzZXJfbWljcm9waG9uZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9Ac3BlZWNobHkvYnJvd3Nlci1jbGllbnQvbWljcm9waG9uZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9Ac3BlZWNobHkvYnJvd3Nlci1jbGllbnQvbWljcm9waG9uZS90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9Ac3BlZWNobHkvYnJvd3Nlci1jbGllbnQvc3BlZWNobHkvY2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BzcGVlY2hseS9icm93c2VyLWNsaWVudC9zcGVlY2hseS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9Ac3BlZWNobHkvYnJvd3Nlci1jbGllbnQvc3BlZWNobHkvcGFyc2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9Ac3BlZWNobHkvYnJvd3Nlci1jbGllbnQvc3BlZWNobHkvc2VnbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9Ac3BlZWNobHkvYnJvd3Nlci1jbGllbnQvc3BlZWNobHkvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQHNwZWVjaGx5L2Jyb3dzZXItY2xpZW50L3NwZWVjaGx5L3R5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BzcGVlY2hseS9icm93c2VyLWNsaWVudC9zdG9yYWdlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BzcGVlY2hseS9icm93c2VyLWNsaWVudC9zdG9yYWdlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQHNwZWVjaGx5L2Jyb3dzZXItY2xpZW50L3N0b3JhZ2UvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQHNwZWVjaGx5L2Jyb3dzZXItY2xpZW50L3dlYnNvY2tldC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9Ac3BlZWNobHkvYnJvd3Nlci1jbGllbnQvd2Vic29ja2V0L3Rva2VuLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BzcGVlY2hseS9icm93c2VyLWNsaWVudC93ZWJzb2NrZXQvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQHNwZWVjaGx5L2Jyb3dzZXItY2xpZW50L3dlYnNvY2tldC93ZWJXb3JrZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BzcGVlY2hseS9icm93c2VyLWNsaWVudC93ZWJzb2NrZXQvd29ya2VyLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL0BzcGVlY2hseS9zcGVlY2gtcmVjb2duaXRpb24tcG9seWZpbGwvZGlzdC9jcmVhdGVTcGVlY2hSZWNvZ25pdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9Ac3BlZWNobHkvc3BlZWNoLXJlY29nbml0aW9uLXBvbHlmaWxsL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQHNwZWVjaGx5L3NwZWVjaC1yZWNvZ25pdGlvbi1wb2x5ZmlsbC9kaXN0L3R5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2Jhc2UtNjQvYmFzZTY0LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL2lzby0zMTY2LTEtYWxwaGEtMi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9pc28tNjM5LTEtemgvc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvaXNvLTYzOS0xLXpoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9pc28tNjM5LTEvc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvaXNvLTYzOS0xL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9sb2NhbGUtY29kZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9hcnJheS9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L2FycmF5L2ZvckVhY2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9hcnJheS9pbmRleE9mLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvYXJyYXkvbWF4LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvYXJyYXkvbWluLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvYXJyYXkvc2xpY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9mdW5jdGlvbi9iaW5kLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvZnVuY3Rpb24vaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9mdW5jdGlvbi9tYWtlSXRlcmF0b3JfLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvZnVuY3Rpb24vcHJvcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L2xhbmcvY2xvbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9sYW5nL2RlZXBDbG9uZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L2xhbmcvaXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9sYW5nL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9sYW5nL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9sYW5nL2lzS2luZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L2xhbmcvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9sYW5nL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9sYW5nL2lzUHJpbWl0aXZlLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvbGFuZy9raW5kT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3QvYmluZEFsbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9jb250YWlucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9kZWVwRmlsbEluLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L2RlZXBNYXRjaGVzLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L2RlZXBNaXhJbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9lcXVhbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3QvZXZlcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3QvZmlsbEluLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9maW5kLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L2ZsYXR0ZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3QvZm9ySW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3QvZm9yT3duLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9nZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3QvaGFzLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L2hhc093bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L21hcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9tYXRjaGVzLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L21heC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9taW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3QvbWl4SW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3QvbmFtZXNwYWNlLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L29taXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3QvcGljay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9wbHVjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3QvcmVqZWN0LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L3Jlc3VsdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9zZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvbW91dC9vYmplY3Qvc2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9tb3V0L29iamVjdC9zb21lLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L3Vuc2V0LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL21vdXQvb2JqZWN0L3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9wYXJzZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y1LmpzIiwid2VicGFjazovL19OX0UvLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmVyc2lvbi5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlcyIsImFydGljbGVzIiwibGVmdEFydGljbGVzQ291bnQiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImxlZnRBcnRpY2xlcyIsInNsaWNlIiwicmlnaHRBcnRpY2xlcyIsInVzZVNwZWVjaFJlY29nbml0aW9uIiwidHJhbnNjcmlwdCIsImxpc3RlbmluZyIsImJyb3dzZXJTdXBwb3J0c1NwZWVjaFJlY29nbml0aW9uIiwic3RhcnRMaXN0ZW5pbmciLCJTcGVlY2hSZWNvZ25pdGlvbiIsImNvbnRpbnVvdXMiLCJtYXAiLCJhcnRpY2xlIiwiaSIsImF0dHJpYnV0ZXMiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDakMsTUFBTUMsaUJBQWlCLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxRQUFRLENBQUNJLE1BQVQsR0FBa0IsQ0FBNUIsQ0FBMUI7QUFDQSxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sS0FBVCxDQUFlLENBQWYsRUFBa0JMLGlCQUFsQixDQUFyQjtBQUNBLE1BQU1NLGFBQWEsR0FBR1AsUUFBUSxDQUFDTSxLQUFULENBQWVMLGlCQUFmLEVBQWtDRCxRQUFRLENBQUNJLE1BQTNDLENBQXRCOztBQUhpQyw4QkFRN0JJLDhFQUFvQixFQVJTO0FBQUEsTUFLL0JDLFVBTCtCLHlCQUsvQkEsVUFMK0I7QUFBQSxNQU0vQkMsU0FOK0IseUJBTS9CQSxTQU4rQjtBQUFBLE1BTy9CQyxnQ0FQK0IseUJBTy9CQSxnQ0FQK0I7O0FBU2pDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUFNQyw0RUFBQSxDQUFpQztBQUFFQyxnQkFBVSxFQUFFO0FBQWQsS0FBakMsQ0FBTjtBQUFBLEdBQXZCOztBQUVBLE1BQUksQ0FBQ0gsZ0NBQUwsRUFBdUM7QUFDckMsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUdELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQXNDLHNCQUFhLE1BQW5EO0FBQUEsOEJBQ0U7QUFBQSxrQkFDR04sWUFBWSxDQUFDVSxHQUFiLENBQWlCLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVixFQUFnQjtBQUNoQyw4QkFDRSw4REFBQywwQ0FBRDtBQUNFLG1CQUFPLEVBQUVEO0FBRFgsc0NBRXlCQSxPQUFPLENBQUNFLFVBQVIsQ0FBbUJDLElBRjVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFNRCxTQVBBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBV0U7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsb0NBQWY7QUFBb0QsOEJBQXBEO0FBQUEsb0JBQ0daLGFBQWEsQ0FBQ1EsR0FBZCxDQUFrQixVQUFDQyxPQUFELEVBQVVDLENBQVYsRUFBZ0I7QUFDakMsZ0NBQ0UsOERBQUMsMENBQUQ7QUFDRSxxQkFBTyxFQUFFRDtBQURYLHdDQUV5QkEsT0FBTyxDQUFDRSxVQUFSLENBQW1CQyxJQUY1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBTUQsV0FQQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2QkQsQ0E3Q0Q7O0dBQU1wQixRO1VBUUFTLDBFOzs7S0FSQVQsUTtBQStDTiwrREFBZUEsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRGE7QUFDYjtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQyxhQUFhLEVBQUUsRUFBRTtBQUN2RixDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsYUFBYSxtQkFBTyxDQUFDLDhFQUFZO0FBQ2pDLGFBQWEsbUJBQU8sQ0FBQyx3RkFBb0I7QUFDekMsYUFBYSxtQkFBTyxDQUFDLHNGQUFtQjtBQUN4QyxhQUFhLG1CQUFPLENBQUMsa0ZBQWlCO0FBQ3RDLGlDOzs7Ozs7Ozs7OztBQ2hCYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDOzs7Ozs7Ozs7OztBQ3hGYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHlCQUF5QjtBQUN6QixnQkFBZ0IsbUJBQU8sQ0FBQyw2RUFBUztBQUNqQyx1Q0FBdUMsbUJBQU8sQ0FBQywyRkFBZ0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLDBCQUEwQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLDhDOzs7Ozs7Ozs7OztBQ3JMYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxhQUFhLG1CQUFPLENBQUMsdUdBQXNCO0FBQzNDLGFBQWEsbUJBQU8sQ0FBQyw2RUFBUztBQUM5QixpQzs7Ozs7Ozs7Ozs7QUNkYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCx5Q0FBeUMsR0FBRyx5QkFBeUIsR0FBRyw2QkFBNkIsR0FBRyw2QkFBNkIsR0FBRyx5QkFBeUIsR0FBRyx5QkFBeUI7QUFDN0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsaUM7Ozs7Ozs7Ozs7O0FDakNhO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsY0FBYztBQUNkLHNDQUFzQyxtQkFBTyxDQUFDLDZEQUFhO0FBQzNELGVBQWUsbUJBQU8sQ0FBQyw0REFBTTtBQUM3QixnQkFBZ0IsbUJBQU8sQ0FBQyx1RkFBb0I7QUFDNUMscUJBQXFCLG1CQUFPLENBQUMsbUZBQWU7QUFDNUMsb0JBQW9CLG1CQUFPLENBQUMsaUZBQWM7QUFDMUMsa0JBQWtCLG1CQUFPLENBQUMsNkVBQVk7QUFDdEMsZ0JBQWdCLG1CQUFPLENBQUMsMkVBQVM7QUFDakMsZ0JBQWdCLG1CQUFPLENBQUMsMkVBQVM7QUFDakMsa0JBQWtCLG1CQUFPLENBQUMsK0VBQVc7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsK0VBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsc0NBQXNDO0FBQ3RDLDRDQUE0QztBQUM1QywwQ0FBMEM7QUFDMUMsd0NBQXdDO0FBQ3hDLG1DQUFtQztBQUNuQywrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0NBQWtDO0FBQ3JELGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5R0FBeUcseUJBQXlCO0FBQ2xJLDhEQUE4RCxTQUFTO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFFVTtBQUNaO0FBQ0EsRUFBRSxtQ0FBTztBQUNUO0FBQ0EsR0FBRztBQUFBLGtHQUFDO0FBQ0osRUFBRSxNQUFNLFlBVU47O0FBRUYsQ0FBQzs7Ozs7Ozs7Ozs7QUNwS0Q7QUFDQTs7QUFFQSxXQUFXLG1CQUFPLENBQUMsbURBQWE7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMxU0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTEY7QUFDVzs7QUFFNUIsd0JBQXdCLDhDQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esa0NBQWtDLDZDQUFrQjtBQUNwRDs7QUFFQTtBQUNBLHlCQUF5Qiw2Q0FBa0I7QUFDM0M7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVcsc0RBQVM7QUFDcEIsR0FBRzs7O0FBR0g7QUFDQSw2QkFBNkI7QUFDN0IsR0FBRyxlQUFlOzs7QUFHbEI7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUMvRDJCO0FBQ1k7O0FBRXZDO0FBQ0E7QUFDQSwrQ0FBK0MsNENBQUcsSUFBSTs7QUFFdEQ7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVMsc0RBQVM7QUFDbEI7O0FBRUEsK0RBQWUsRUFBRSxFOzs7Ozs7Ozs7Ozs7OztBQ3ZCVTtBQUNFO0FBQzdCLFNBQVMsZ0RBQUcsYUFBYSw2Q0FBSTtBQUM3QiwrREFBZSxFQUFFLEU7Ozs7Ozs7Ozs7Ozs7QUNIYzs7QUFFL0I7QUFDQSxxQ0FBcUMsbURBQVU7QUFDL0M7O0FBRUEsK0RBQWUsUUFBUSxFOzs7Ozs7Ozs7Ozs7O0FDTmM7O0FBRXJDO0FBQ0EsT0FBTyxxREFBUTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrREFBZSxPQUFPLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzQyNmM2NjMzYjhlNTEzNmQ4MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZFwiXG5pbXBvcnQgeyBjcmVhdGVTcGVlY2hseVNwZWVjaFJlY29nbml0aW9uIH0gZnJvbSAnQHNwZWVjaGx5L3NwZWVjaC1yZWNvZ25pdGlvbi1wb2x5ZmlsbCdcbmltcG9ydCBTcGVlY2hSZWNvZ25pdGlvbiwgeyB1c2VTcGVlY2hSZWNvZ25pdGlvbiB9IGZyb20gJ3JlYWN0LXNwZWVjaC1yZWNvZ25pdGlvbidcbmNvbnN0IEFydGljbGVzID0gKHsgYXJ0aWNsZXMgfSkgPT4ge1xuICBjb25zdCBsZWZ0QXJ0aWNsZXNDb3VudCA9IE1hdGguY2VpbChhcnRpY2xlcy5sZW5ndGggLyA1KVxuICBjb25zdCBsZWZ0QXJ0aWNsZXMgPSBhcnRpY2xlcy5zbGljZSgwLCBsZWZ0QXJ0aWNsZXNDb3VudClcbiAgY29uc3QgcmlnaHRBcnRpY2xlcyA9IGFydGljbGVzLnNsaWNlKGxlZnRBcnRpY2xlc0NvdW50LCBhcnRpY2xlcy5sZW5ndGgpXG4gIGNvbnN0IHtcbiAgICB0cmFuc2NyaXB0LFxuICAgIGxpc3RlbmluZyxcbiAgICBicm93c2VyU3VwcG9ydHNTcGVlY2hSZWNvZ25pdGlvblxuICB9ID0gdXNlU3BlZWNoUmVjb2duaXRpb24oKTtcbiAgY29uc3Qgc3RhcnRMaXN0ZW5pbmcgPSAoKSA9PiBTcGVlY2hSZWNvZ25pdGlvbi5zdGFydExpc3RlbmluZyh7IGNvbnRpbnVvdXM6IHRydWUgfSk7XG5cbiAgaWYgKCFicm93c2VyU3VwcG9ydHNTcGVlY2hSZWNvZ25pdGlvbikge1xuICAgIHJldHVybiA8c3Bhbj5Ccm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBzcGVlY2ggcmVjb2duaXRpb24uPC9zcGFuPjtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPmFsbzwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNoaWxkLXdpZHRoLTEtMkBzXCIgZGF0YS11ay1ncmlkPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtsZWZ0QXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGFydGljbGU9e2FydGljbGV9XG4gICAgICAgICAgICAgICAga2V5PXtgYXJ0aWNsZV9fbGVmdF9fJHthcnRpY2xlLmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNoaWxkLXdpZHRoLTEtMkBtIHVrLWdyaWQtbWF0Y2hcIiBkYXRhLXVrLWdyaWQ+XG4gICAgICAgICAgICB7cmlnaHRBcnRpY2xlcy5tYXAoKGFydGljbGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgYXJ0aWNsZT17YXJ0aWNsZX1cbiAgICAgICAgICAgICAgICAgIGtleT17YGFydGljbGVfX2xlZnRfXyR7YXJ0aWNsZS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zcGVlY2hseVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbWljcm9waG9uZS90eXBlc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vd2Vic29ja2V0L3R5cGVzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zdG9yYWdlL3R5cGVzXCIpLCBleHBvcnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYFxuLy8gSW5kaWNlcyBmb3IgdGhlIENvbnRyb2wgU0FCLlxuY29uc3QgQ09OVFJPTCA9IHtcbiAgJ1dSSVRFX0lOREVYJzogMCxcbiAgJ0ZSQU1FU19BVkFJTEFCTEUnOiAxLFxuICAnTE9DSyc6IDIsXG59O1xuXG5jbGFzcyBTcGVlY2hseVByb2Nlc3NvciBleHRlbmRzIEF1ZGlvV29ya2xldFByb2Nlc3NvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVidWcgPSBmYWxzZTtcbiAgICB0aGlzLnBvcnQub25tZXNzYWdlID0gdGhpcy5faW5pdGlhbGl6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2luaXRpYWxpemUoZXZlbnQpIHtcbiAgICB0aGlzLmNvbnRyb2xTQUIgPSBuZXcgSW50MzJBcnJheShldmVudC5kYXRhLmNvbnRyb2xTQUIpO1xuICAgIHRoaXMuZGF0YVNBQiA9IG5ldyBGbG9hdDMyQXJyYXkoZXZlbnQuZGF0YS5kYXRhU0FCKTtcbiAgICB0aGlzLmRlYnVnID0gZXZlbnQuZGF0YS5kZWJ1ZztcbiAgICB0aGlzLnNoYXJlZEJ1ZmZlclNpemUgPSB0aGlzLmRhdGFTQUIubGVuZ3RoO1xuICAgIHRoaXMuYnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheSgwKTtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICBfdHJhbnNmZXJEYXRhVG9TaGFyZWRCdWZmZXIoZGF0YSkge1xuICAgIHRoaXMuY29udHJvbFNBQltDT05UUk9MLkxPQ0tdID0gMVxuICAgIGxldCBpbnB1dFdyaXRlSW5kZXggPSB0aGlzLmNvbnRyb2xTQUJbQ09OVFJPTC5XUklURV9JTkRFWF1cbiAgICBpZiAodGhpcy5jb250cm9sU0FCW0NPTlRST0wuRlJBTUVTX0FWQUlMQUJMRV0gPiAwKSB7XG4gICAgICBpZiAoaW5wdXRXcml0ZUluZGV4ICsgZGF0YS5sZW5ndGggPiB0aGlzLnNoYXJlZEJ1ZmZlclNpemUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2J1ZmZlciBvdmVyZmxvdycpXG4gICAgICAgIGlucHV0V3JpdGVJbmRleCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kYXRhU0FCLnNldChkYXRhLCBpbnB1dFdyaXRlSW5kZXgpXG4gICAgdGhpcy5jb250cm9sU0FCW0NPTlRST0wuV1JJVEVfSU5ERVhdID0gaW5wdXRXcml0ZUluZGV4ICsgZGF0YS5sZW5ndGhcbiAgICB0aGlzLmNvbnRyb2xTQUJbQ09OVFJPTC5GUkFNRVNfQVZBSUxBQkxFXSA9IGlucHV0V3JpdGVJbmRleCArIGRhdGEubGVuZ3RoXG4gICAgdGhpcy5jb250cm9sU0FCW0NPTlRST0wuTE9DS10gPSAwXG4gIH1cblxuICBfcHVzaERhdGEoZGF0YSkge1xuICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICBjb25zdCBzaWduYWxFbmVyZ3kgPSBnZXRTdGFuZGFyZERldmlhdGlvbihkYXRhKVxuICAgICAgdGhpcy5wb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ1NUQVRTJyxcbiAgICAgICAgc2lnbmFsRW5lcmd5OiBzaWduYWxFbmVyZ3lcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPiB0aGlzLnNoYXJlZEJ1ZmZlclNpemUpIHtcbiAgICAgIGNvbnN0IGRhdGFUb1RyYW5zZmVyID0gdGhpcy5idWZmZXIuc3ViYXJyYXkoMCwgdGhpcy5zaGFyZWRCdWZmZXJTaXplKVxuICAgICAgdGhpcy5fdHJhbnNmZXJEYXRhVG9TaGFyZWRCdWZmZXIoZGF0YVRvVHJhbnNmZXIpXG4gICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLnN1YmFycmF5KHRoaXMuc2hhcmVkQnVmZmVyU2l6ZSlcbiAgICB9XG4gICAgbGV0IGNvbmNhdCA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5idWZmZXIubGVuZ3RoICsgZGF0YS5sZW5ndGgpXG4gICAgY29uY2F0LnNldCh0aGlzLmJ1ZmZlcilcbiAgICBjb25jYXQuc2V0KGRhdGEsIHRoaXMuYnVmZmVyLmxlbmd0aClcbiAgICB0aGlzLmJ1ZmZlciA9IGNvbmNhdFxuICB9XG5cbiAgcHJvY2VzcyhpbnB1dHMsIG91dHB1dHMsIHBhcmFtZXRlcnMpIHtcbiAgICBjb25zdCBpbnB1dENoYW5uZWxEYXRhID0gaW5wdXRzWzBdWzBdO1xuICAgICAgaWYgKGlucHV0Q2hhbm5lbERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodGhpcy5jb250cm9sU0FCICYmIHRoaXMuZGF0YVNBQikge1xuICAgICAgICAgIHRoaXMuX3B1c2hEYXRhKGlucHV0Q2hhbm5lbERhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnREFUQScsXG4gICAgICAgICAgICBmcmFtZXM6IGlucHV0Q2hhbm5lbERhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdGFuZGFyZERldmlhdGlvbihhcnJheSkge1xuICBjb25zdCBuID0gYXJyYXkubGVuZ3RoXG4gIGNvbnN0IG1lYW4gPSBhcnJheS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSAvIG5cbiAgcmV0dXJuIE1hdGguc3FydChhcnJheS5tYXAoeCA9PiBNYXRoLnBvdyh4IC0gbWVhbiwgMikpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC8gbilcbn1cblxucmVnaXN0ZXJQcm9jZXNzb3IoJ3NwZWVjaGx5LXdvcmtsZXQnLCBTcGVlY2hseVByb2Nlc3Nvcik7XG5gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXVkaW93b3JrbGV0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJyb3dzZXJNaWNyb3Bob25lID0gdm9pZCAwO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuY29uc3QgYXVkaW93b3JrbGV0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYXVkaW93b3JrbGV0XCIpKTtcbmNvbnN0IGF1ZGlvUHJvY2Vzc0V2ZW50ID0gJ2F1ZGlvcHJvY2Vzcyc7XG5jb25zdCBiYXNlQnVmZmVyU2l6ZSA9IDQwOTY7XG5jbGFzcyBCcm93c2VyTWljcm9waG9uZSB7XG4gICAgY29uc3RydWN0b3IoaXNXZWJraXQsIHNhbXBsZVJhdGUsIGFwaUNsaWVudCwgZGVidWcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0cyA9IHtcbiAgICAgICAgICAgIG1heFNpZ25hbEVuZXJneTogMC4wLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUF1ZGlvID0gKGFycmF5KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5tdXRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcGlDbGllbnQuc2VuZEF1ZGlvKGFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc1dlYmtpdCA9IGlzV2Via2l0O1xuICAgICAgICB0aGlzLmFwaUNsaWVudCA9IGFwaUNsaWVudDtcbiAgICAgICAgdGhpcy5zYW1wbGVSYXRlID0gc2FtcGxlUmF0ZTtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICAgIH1cbiAgICBpbml0aWFsaXplKGF1ZGlvQ29udGV4dCwgbWVkaWFTdHJlYW1Db25zdHJhaW50cykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoKChfYSA9IHdpbmRvdy5uYXZpZ2F0b3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZWRpYURldmljZXMpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB0eXBlc18xLkVyckRldmljZU5vdFN1cHBvcnRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xuICAgICAgICAgICAgdGhpcy5yZXNhbXBsZVJhdGlvID0gdGhpcy5hdWRpb0NvbnRleHQuc2FtcGxlUmF0ZSAvIHRoaXMuc2FtcGxlUmF0ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYVN0cmVhbSA9IHlpZWxkIHdpbmRvdy5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShtZWRpYVN0cmVhbUNvbnN0cmFpbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYikge1xuICAgICAgICAgICAgICAgIHRocm93IHR5cGVzXzEuRXJyTm9BdWRpb0NvbnNlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmF1ZGlvVHJhY2sgPSB0aGlzLm1lZGlhU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF07XG4gICAgICAgICAgICAvLyBTdGFydCBhdWRpbyBjb250ZXh0IGlmIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBub24tV2ViS2l0IGJyb3dzZXIuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gTm9uLXdlYmtpdCBicm93c2VycyAoY3VycmVudGx5IG9ubHkgQ2hyb21lIG9uIEFuZHJvaWQpXG4gICAgICAgICAgICAvLyByZXF1aXJlIHRoYXQgdXNlciBtZWRpYSBpcyBvYnRhaW5lZCBiZWZvcmUgcmVzdW1pbmcgdGhlIGF1ZGlvIGNvbnRleHQuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSWYgYXVkaW8gY29udGV4dCBpcyBhdHRlbXB0ZWQgdG8gYmUgcmVzdW1lZCBiZWZvcmUgYG1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWFgLFxuICAgICAgICAgICAgLy8gYGF1ZGlvQ29udGV4dC5yZXN1bWUoKWAgd2lsbCBoYW5nIGluZGVmaW5pdGVseSwgd2l0aG91dCBiZWluZyByZXNvbHZlZCBvciByZWplY3RlZC5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dlYmtpdCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuYXVkaW9Db250ZXh0LnJlc3VtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5BdWRpb1dvcmtsZXROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2F1ZGlvd29ya2xldF8xLmRlZmF1bHRdLCB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2JVUkwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmF1ZGlvQ29udGV4dC5hdWRpb1dvcmtsZXQuYWRkTW9kdWxlKGJsb2JVUkwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwZWVjaGx5Tm9kZSA9IG5ldyBBdWRpb1dvcmtsZXROb2RlKHRoaXMuYXVkaW9Db250ZXh0LCAnc3BlZWNobHktd29ya2xldCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHRoaXMubWVkaWFTdHJlYW0pLmNvbm5lY3Qoc3BlZWNobHlOb2RlKTtcbiAgICAgICAgICAgICAgICBzcGVlY2hseU5vZGUuY29ubmVjdCh0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuU2hhcmVkQXJyYXlCdWZmZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaHJvbWUsIEVkZ2UsIEZpcmVmb3gsIEZpcmVmb3ggQW5kcm9pZFxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xTQUIgPSBuZXcgd2luZG93LlNoYXJlZEFycmF5QnVmZmVyKDQgKiBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhU0FCID0gbmV3IHdpbmRvdy5TaGFyZWRBcnJheUJ1ZmZlcigxMDI0ICogRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlDbGllbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9TSEFSRURfQVJSQVlfQlVGRkVSUycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sU0FCLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNBQixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNwZWVjaGx5Tm9kZS5wb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfU0hBUkVEX0FSUkFZX0JVRkZFUlMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbFNBQixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTQUIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZzogdGhpcy5kZWJ1ZyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSwgQ2hyb21lIEFuZHJvaWQsIFdlYnZpZXcgQW5yb2lkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1NwZWVjaGx5Q2xpZW50XScsICdjYW4gbm90IHVzZSBTaGFyZWRBcnJheUJ1ZmZlcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwZWVjaGx5Tm9kZS5wb3J0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnU1RBVFMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnNpZ25hbEVuZXJneSA+IHRoaXMuc3RhdHMubWF4U2lnbmFsRW5lcmd5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHMubWF4U2lnbmFsRW5lcmd5ID0gZXZlbnQuZGF0YS5zaWduYWxFbmVyZ3k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnREFUQSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdWRpbyhldmVudC5kYXRhLmZyYW1lcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3BlZWNobHlDbGllbnRdJywgJ2NhbiBub3QgdXNlIEF1ZGlvV29ya2xldE5vZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2FmYXJpLCBpT1MgU2FmYXJpIGFuZCBJbnRlcm5ldCBFeHBsb3JlclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzV2Via2l0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE11bHRpcGx5IGJhc2UgYnVmZmVyIHNpemUgb2YgNCBrQiBieSB0aGUgcmVzYW1wbGUgcmF0aW8gcm91bmRlZCB1cCB0byB0aGUgbmV4dCBwb3dlciBvZiAyLlxuICAgICAgICAgICAgICAgICAgICAvLyBpLmUuIGZvciA0OCBrSHogdG8gMTYga0h6IGRvd25zYW1wbGluZywgdGhpcyB3aWxsIGJlIDQwOTYgKGJhc2UpICogNCA9IDE2Mzg0LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidWZTaXplID0gYmFzZUJ1ZmZlclNpemUgKiBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2codGhpcy5yZXNhbXBsZVJhdGlvKSAvIE1hdGgubG9nKDIpKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Qcm9jZXNzb3IgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoYnVmU2l6ZSwgMSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKHVuZGVmaW5lZCwgMSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHRoaXMubWVkaWFTdHJlYW0pLmNvbm5lY3QodGhpcy5hdWRpb1Byb2Nlc3Nvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb1Byb2Nlc3Nvci5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yLmFkZEV2ZW50TGlzdGVuZXIoYXVkaW9Qcm9jZXNzRXZlbnQsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF1ZGlvKGV2ZW50LmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tdXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRoaXMubXV0ZSgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdHlwZXNfMS5FcnJOb3RJbml0aWFsaXplZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLmF1ZGlvVHJhY2s7XG4gICAgICAgICAgICB0LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFN0b3AgYWxsIG1lZGlhIHRyYWNrc1xuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5tZWRpYVN0cmVhbTtcbiAgICAgICAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHQgPT4gdC5zdG9wKCkpO1xuICAgICAgICAgICAgLy8gRGlzY29ubmVjdCBhbmQgc3RvcCBTY3JpcHRQcm9jZXNzb3JOb2RlXG4gICAgICAgICAgICBpZiAodGhpcy5hdWRpb1Byb2Nlc3NvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvYyA9IHRoaXMuYXVkaW9Qcm9jZXNzb3I7XG4gICAgICAgICAgICAgICAgcHJvYy5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVbnNldCBhbGwgYXVkaW8gaW5mcmFzdHJ1Y3R1cmVcbiAgICAgICAgICAgIHRoaXMubWVkaWFTdHJlYW0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvVHJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvUHJvY2Vzc29yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbXV0ZSgpIHtcbiAgICAgICAgdGhpcy5tdXRlZCA9IHRydWU7XG4gICAgfVxuICAgIHVubXV0ZSgpIHtcbiAgICAgICAgdGhpcy5tdXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBwcmludCBzdGF0aXN0aWNzIHRvIGNvbnNvbGVcbiAgICAgKi9cbiAgICBwcmludFN0YXRzKCkge1xuICAgICAgICBpZiAodGhpcy5hdWRpb1RyYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5hdWRpb1RyYWNrLmdldFNldHRpbmdzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF1ZGlvVHJhY2subGFiZWwsIHRoaXMuYXVkaW9UcmFjay5yZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFubmVsQ291bnQnLCBzZXR0aW5ncy5jaGFubmVsQ291bnQpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xhdGVuY3knLCBzZXR0aW5ncy5sYXRlbmN5KTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdXRvR2FpbkNvbnRyb2wnLCBzZXR0aW5ncy5hdXRvR2FpbkNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXhTaWduYWxFbmVyZ3knLCB0aGlzLnN0YXRzLm1heFNpZ25hbEVuZXJneSk7XG4gICAgfVxufVxuZXhwb3J0cy5Ccm93c2VyTWljcm9waG9uZSA9IEJyb3dzZXJNaWNyb3Bob25lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlcl9taWNyb3Bob25lLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vYnJvd3Nlcl9taWNyb3Bob25lXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXJyQXBwSWRDaGFuZ2VXaXRob3V0UHJvamVjdExvZ2luID0gZXhwb3J0cy5FcnJOb0F1ZGlvQ29uc2VudCA9IGV4cG9ydHMuRXJyRGV2aWNlTm90U3VwcG9ydGVkID0gZXhwb3J0cy5FcnJBbHJlYWR5SW5pdGlhbGl6ZWQgPSBleHBvcnRzLkVyck5vdEluaXRpYWxpemVkID0gZXhwb3J0cy5EZWZhdWx0U2FtcGxlUmF0ZSA9IHZvaWQgMDtcbi8qKlxuICogRGVmYXVsdCBzYW1wbGUgcmF0ZSBmb3IgbWljcm9waG9uZSBzdHJlYW1zLlxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLkRlZmF1bHRTYW1wbGVSYXRlID0gMTYwMDA7XG4vKipcbiAqIEVycm9yIHRvIGJlIHRocm93biB3aGVuIHRoZSBtaWNyb3Bob25lIHdhcyBhY2Nlc3NlZCBiZWZvcmUgaXQgd2FzIGluaXRpYWxpemVkLlxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLkVyck5vdEluaXRpYWxpemVkID0gbmV3IEVycm9yKCdNaWNyb3Bob25lIGlzIG5vdCBpbml0aWFsaXplZCcpO1xuLyoqXG4gKiBFcnJvciB0byBiZSB0aHJvd24gd2hlbiB0aGUgaW5pdGlhbGl6ZSBtZXRob2Qgb2YgYSBNaWNyb3Bob25lIGluc3RhbmNlIGlzIGNhbGxlZCBtb3JlIHRoYW4gb25jZS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0cy5FcnJBbHJlYWR5SW5pdGlhbGl6ZWQgPSBuZXcgRXJyb3IoJ01pY3JvcGhvbmUgaXMgYWxyZWFkeSBpbml0aWFsaXplZCcpO1xuLyoqXG4gKiBFcnJvciB0byBiZSB0aHJvd24gd2hlbiB0aGUgZGV2aWNlIGRvZXMgbm90IHN1cHBvcnQgdGhlIE1pY3JvcGhvbmUgaW5zdGFuY2UncyB0YXJnZXQgYXVkaW8gQVBJcy5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0cy5FcnJEZXZpY2VOb3RTdXBwb3J0ZWQgPSBuZXcgRXJyb3IoJ0N1cnJlbnQgZGV2aWNlIGRvZXMgbm90IHN1cHBvcnQgbWljcm9waG9uZSBBUEknKTtcbi8qKlxuICogRXJyb3IgdG8gYmUgdGhyb3duIHdoZW4gdXNlciBkaWQgbm90IGdpdmUgY29uc2VudCB0byB0aGUgYXBwbGljYXRpb24gdG8gcmVjb3JkIGF1ZGlvLlxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLkVyck5vQXVkaW9Db25zZW50ID0gbmV3IEVycm9yKCdNaWNyb3Bob25lIGNvbnNlbnQgaXMgbm8gZ2l2ZW4nKTtcbi8qKlxuICogRXJyb3IgdG8gYmUgdGhyb3duIHdoZW4gdXNlciB0cmllcyB0byBjaGFuZ2UgYXBwSWQgd2l0aG91dCBwcm9qZWN0IGxvZ2luLlxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLkVyckFwcElkQ2hhbmdlV2l0aG91dFByb2plY3RMb2dpbiA9IG5ldyBFcnJvcignQXBwSWQgY2hhbmdlZCB3aXRob3V0IHByb2plY3QgbG9naW4nKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNsaWVudCA9IHZvaWQgMDtcbmNvbnN0IGxvY2FsZV9jb2RlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvY2FsZS1jb2RlXCIpKTtcbmNvbnN0IHV1aWRfMSA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgdG9rZW5fMSA9IHJlcXVpcmUoXCIuLi93ZWJzb2NrZXQvdG9rZW5cIik7XG5jb25zdCBtaWNyb3Bob25lXzEgPSByZXF1aXJlKFwiLi4vbWljcm9waG9uZVwiKTtcbmNvbnN0IHdlYnNvY2tldF8xID0gcmVxdWlyZShcIi4uL3dlYnNvY2tldFwiKTtcbmNvbnN0IHN0b3JhZ2VfMSA9IHJlcXVpcmUoXCIuLi9zdG9yYWdlXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuY29uc3Qgc3RhdGVfMSA9IHJlcXVpcmUoXCIuL3N0YXRlXCIpO1xuY29uc3Qgc2VnbWVudF8xID0gcmVxdWlyZShcIi4vc2VnbWVudFwiKTtcbmNvbnN0IHBhcnNlcnNfMSA9IHJlcXVpcmUoXCIuL3BhcnNlcnNcIik7XG5jb25zdCBkZXZpY2VJZFN0b3JhZ2VLZXkgPSAnc3BlZWNobHktZGV2aWNlLWlkJztcbmNvbnN0IGF1dGhUb2tlbktleSA9ICdzcGVlY2hseS1hdXRoLXRva2VuJztcbmNvbnN0IGRlZmF1bHRBcGlVcmwgPSAnd3NzOi8vYXBpLnNwZWVjaGx5LmNvbS93cy92MSc7XG5jb25zdCBkZWZhdWx0TG9naW5VcmwgPSAnaHR0cHM6Ly9hcGkuc3BlZWNobHkuY29tL2xvZ2luJztcbmNvbnN0IGRlZmF1bHRMYW5ndWFnZSA9ICdlbi1VUyc7XG4vKipcbiAqIEEgY2xpZW50IGZvciBTcGVlY2hseSBTcG9rZW4gTGFuZ3VhZ2UgVW5kZXJzdGFuZGluZyAoU0xVKSBBUEkuIFRoZSBjbGllbnQgaGFuZGxlcyBpbml0aWFsaXppbmcgdGhlIG1pY3JvcGhvbmVcbiAqIGFuZCB3ZWJzb2NrZXQgY29ubmVjdGlvbiB0byBTcGVlY2hseSBBUEksIHBhc3NpbmcgY29udHJvbCBldmVudHMgYW5kIGF1ZGlvIHN0cmVhbSB0byB0aGUgQVBJLCByZWFkaW5nIHRoZSByZXNwb25zZXNcbiAqIGFuZCBkaXNwYXRjaGluZyB0aGVtLCBhcyB3ZWxsIGFzIHByb3ZpZGluZyBhIGhpZ2gtbGV2ZWwgQVBJIGZvciBpbnRlcmFjdGluZyB3aXRoIHNvLWNhbGxlZCBzcGVlY2ggc2VnbWVudHMuXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIENsaWVudCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2ssIF9sLCBfbTtcbiAgICAgICAgdGhpcy5hY3RpdmVDb250ZXh0cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZWNvbm5lY3RBdHRlbXB0Q291bnQgPSA1O1xuICAgICAgICB0aGlzLnJlY29ubmVjdE1pbkRlbGF5ID0gMTAwMDtcbiAgICAgICAgdGhpcy5jb250ZXh0U3RvcERlbGF5ID0gMjUwO1xuICAgICAgICB0aGlzLnN0YXRlID0gdHlwZXNfMS5DbGllbnRTdGF0ZS5EaXNjb25uZWN0ZWQ7XG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VDYiA9ICgpID0+IHsgfTtcbiAgICAgICAgdGhpcy5zZWdtZW50Q2hhbmdlQ2IgPSAoKSA9PiB7IH07XG4gICAgICAgIHRoaXMudGVudGF0aXZlVHJhbnNjcmlwdENiID0gKCkgPT4geyB9O1xuICAgICAgICB0aGlzLnRlbnRhdGl2ZUVudGl0aWVzQ2IgPSAoKSA9PiB7IH07XG4gICAgICAgIHRoaXMudGVudGF0aXZlSW50ZW50Q2IgPSAoKSA9PiB7IH07XG4gICAgICAgIHRoaXMudHJhbnNjcmlwdENiID0gKCkgPT4geyB9O1xuICAgICAgICB0aGlzLmVudGl0eUNiID0gKCkgPT4geyB9O1xuICAgICAgICB0aGlzLmludGVudENiID0gKCkgPT4geyB9O1xuICAgICAgICB0aGlzLmhhbmRsZVdlYnNvY2tldFJlc3BvbnNlID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3BlZWNobHlDbGllbnRdJywgJ1JlY2VpdmVkIHJlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBhdWRpb19jb250ZXh0LCBzZWdtZW50X2lkLCB0eXBlIH0gPSByZXNwb25zZTtcbiAgICAgICAgICAgIGxldCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuYWN0aXZlQ29udGV4dHMuZ2V0KGF1ZGlvX2NvbnRleHQpO1xuICAgICAgICAgICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignW1NwZWVjaGx5Q2xpZW50XScsICdSZWNlaXZlZCByZXNwb25zZSBmb3Igbm9uLWV4aXN0ZW50IGNvbnRleHQnLCBhdWRpb19jb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2VnbWVudFN0YXRlID0gKF9hID0gY29udGV4dC5nZXQoc2VnbWVudF9pZCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5ldyBzZWdtZW50XzEuU2VnbWVudFN0YXRlKGF1ZGlvX2NvbnRleHQsIHNlZ21lbnRfaWQpO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB3ZWJzb2NrZXRfMS5XZWJzb2NrZXRSZXNwb25zZVR5cGUuVGVudGF0aXZlVHJhbnNjcmlwdDpcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmRzID0gKDAsIHBhcnNlcnNfMS5wYXJzZVRlbnRhdGl2ZVRyYW5zY3JpcHQpKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbnRhdGl2ZVRyYW5zY3JpcHRDYihhdWRpb19jb250ZXh0LCBzZWdtZW50X2lkLCB3b3JkcywgZGF0YS50cmFuc2NyaXB0KTtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudFN0YXRlID0gc2VnbWVudFN0YXRlLnVwZGF0ZVRyYW5zY3JpcHQod29yZHMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHdlYnNvY2tldF8xLldlYnNvY2tldFJlc3BvbnNlVHlwZS5UcmFuc2NyaXB0OlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29yZCA9ICgwLCBwYXJzZXJzXzEucGFyc2VUcmFuc2NyaXB0KShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2NyaXB0Q2IoYXVkaW9fY29udGV4dCwgc2VnbWVudF9pZCwgd29yZCk7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRTdGF0ZSA9IHNlZ21lbnRTdGF0ZS51cGRhdGVUcmFuc2NyaXB0KFt3b3JkXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugd2Vic29ja2V0XzEuV2Vic29ja2V0UmVzcG9uc2VUeXBlLlRlbnRhdGl2ZUVudGl0aWVzOlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50aXRpZXMgPSAoMCwgcGFyc2Vyc18xLnBhcnNlVGVudGF0aXZlRW50aXRpZXMpKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbnRhdGl2ZUVudGl0aWVzQ2IoYXVkaW9fY29udGV4dCwgc2VnbWVudF9pZCwgZW50aXRpZXMpO1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50U3RhdGUgPSBzZWdtZW50U3RhdGUudXBkYXRlRW50aXRpZXMoZW50aXRpZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHdlYnNvY2tldF8xLldlYnNvY2tldFJlc3BvbnNlVHlwZS5FbnRpdHk6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRpdHkgPSAoMCwgcGFyc2Vyc18xLnBhcnNlRW50aXR5KShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRpdHlDYihhdWRpb19jb250ZXh0LCBzZWdtZW50X2lkLCBlbnRpdHkpO1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50U3RhdGUgPSBzZWdtZW50U3RhdGUudXBkYXRlRW50aXRpZXMoW2VudGl0eV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHdlYnNvY2tldF8xLldlYnNvY2tldFJlc3BvbnNlVHlwZS5UZW50YXRpdmVJbnRlbnQ6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW50YXRpdmVJbnRlbnQgPSAoMCwgcGFyc2Vyc18xLnBhcnNlSW50ZW50KShkYXRhLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVudGF0aXZlSW50ZW50Q2IoYXVkaW9fY29udGV4dCwgc2VnbWVudF9pZCwgdGVudGF0aXZlSW50ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudFN0YXRlID0gc2VnbWVudFN0YXRlLnVwZGF0ZUludGVudCh0ZW50YXRpdmVJbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHdlYnNvY2tldF8xLldlYnNvY2tldFJlc3BvbnNlVHlwZS5JbnRlbnQ6XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnRlbnQgPSAoMCwgcGFyc2Vyc18xLnBhcnNlSW50ZW50KShkYXRhLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlbnRDYihhdWRpb19jb250ZXh0LCBzZWdtZW50X2lkLCBpbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50U3RhdGUgPSBzZWdtZW50U3RhdGUudXBkYXRlSW50ZW50KGludGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugd2Vic29ja2V0XzEuV2Vic29ja2V0UmVzcG9uc2VUeXBlLlNlZ21lbnRFbmQ6XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnRTdGF0ZSA9IHNlZ21lbnRTdGF0ZS5maW5hbGl6ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGhhbmRsZSB1bmV4cGVjdGVkIHJlc3BvbnNlIHR5cGVzLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBzZWdtZW50IGluIGN1cnJlbnQgY29udGV4dC5cbiAgICAgICAgICAgIGNvbnRleHQuc2V0KHNlZ21lbnRfaWQsIHNlZ21lbnRTdGF0ZSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgY3VycmVudCBjb250ZXh0cy5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29udGV4dHMuc2V0KGF1ZGlvX2NvbnRleHQsIGNvbnRleHQpO1xuICAgICAgICAgICAgLy8gTG9nIHNlZ21lbnQgdG8gY29uc29sZVxuICAgICAgICAgICAgaWYgKHRoaXMubG9nU2VnbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oc2VnbWVudFN0YXRlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyZSBzZWdtZW50IGNoYW5nZSBldmVudC5cbiAgICAgICAgICAgIHRoaXMuc2VnbWVudENoYW5nZUNiKHNlZ21lbnRTdGF0ZS50b1NlZ21lbnQoKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlV2Vic29ja2V0Q2xvc3VyZSA9IChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlYnVnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1NwZWVjaGx5Q2xpZW50XScsICdTZXJ2ZXIgY29ubmVjdGlvbiBjbG9zZWQnLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgZm9yIHNvbWUgcmVhc29uIGRldmljZUlkIGlzIG1pc3NpbmcsIHRoZXJlJ3Mgbm90aGluZyBlbHNlIHdlIGNhbiBkbyBidXQgZmFpbCBjb21wbGV0ZWx5LlxuICAgICAgICAgICAgaWYgKHRoaXMuZGV2aWNlSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodHlwZXNfMS5DbGllbnRTdGF0ZS5GYWlsZWQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBoYXZlIGNvbmN1cnJlbnQgcmVjb25uZWN0aW9uIHByb2NlZHVyZXMgb3IgYXR0ZW1wdCB0byByZWNvbm5lY3QgZnJvbSBhIGZhaWxlZCBzdGF0ZS5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSB0eXBlc18xLkNsaWVudFN0YXRlLkNvbm5lY3RpbmcgfHwgdGhpcy5zdGF0ZSA9PT0gdHlwZXNfMS5DbGllbnRTdGF0ZS5GYWlsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHR5cGVzXzEuQ2xpZW50U3RhdGUuQ29ubmVjdGluZyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2FtcGxlUmF0ZSA9IChfYSA9IG9wdGlvbnMuc2FtcGxlUmF0ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbWljcm9waG9uZV8xLkRlZmF1bHRTYW1wbGVSYXRlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSB3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRTdXBwb3J0ZWRDb25zdHJhaW50cygpO1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVSZXNhbXBsaW5nU3VwcG9ydGVkID0gY29uc3RyYWludHMuc2FtcGxlUmF0ZSA9PT0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmF1dG9HYWluQ29udHJvbCAhPSBudWxsICYmIG9wdGlvbnMuYXV0b0dhaW5Db250cm9sKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b0dhaW5Db250cm9sID0gY29uc3RyYWludHMuYXV0b0dhaW5Db250cm9sID09PSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvR2FpbkNvbnRyb2wgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX28pIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlUmVzYW1wbGluZ1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdXRvR2FpbkNvbnRyb2wgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYW5ndWFnZSA9IChfYiA9IG9wdGlvbnMubGFuZ3VhZ2UpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGRlZmF1bHRMYW5ndWFnZTtcbiAgICAgICAgaWYgKCEobG9jYWxlX2NvZGVfMS5kZWZhdWx0LnZhbGlkYXRlKGxhbmd1YWdlKSB8fCAobG9jYWxlX2NvZGVfMS5kZWZhdWx0LnZhbGlkYXRlTGFuZ3VhZ2VDb2RlKGAke2xhbmd1YWdlLnN1YnN0cmluZygwLCAyKX0tWFhgKSAmJiAvXi4uLVxcZFxcZFxcZCQvLnRlc3QobGFuZ3VhZ2UpKSkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBbU3BlZWNobHlDbGllbnRdIEludmFsaWQgbGFuZ3VhZ2UgXCIke2xhbmd1YWdlfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWJ1ZyA9IChfYyA9IG9wdGlvbnMuZGVidWcpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGZhbHNlO1xuICAgICAgICB0aGlzLmxvZ1NlZ21lbnRzID0gKF9kID0gb3B0aW9ucy5sb2dTZWdtZW50cykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogZmFsc2U7XG4gICAgICAgIHRoaXMubG9naW5VcmwgPSAoX2UgPSBvcHRpb25zLmxvZ2luVXJsKSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiBkZWZhdWx0TG9naW5Vcmw7XG4gICAgICAgIHRoaXMuYXBwSWQgPSAoX2YgPSBvcHRpb25zLmFwcElkKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucHJvamVjdElkID0gKF9nID0gb3B0aW9ucy5wcm9qZWN0SWQpICE9PSBudWxsICYmIF9nICE9PSB2b2lkIDAgPyBfZyA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgYXBpVXJsID0gZ2VuZXJhdGVXc1VybCgoX2ggPSBvcHRpb25zLmFwaVVybCkgIT09IG51bGwgJiYgX2ggIT09IHZvaWQgMCA/IF9oIDogZGVmYXVsdEFwaVVybCwgbGFuZ3VhZ2UsIChfaiA9IG9wdGlvbnMuc2FtcGxlUmF0ZSkgIT09IG51bGwgJiYgX2ogIT09IHZvaWQgMCA/IF9qIDogbWljcm9waG9uZV8xLkRlZmF1bHRTYW1wbGVSYXRlKTtcbiAgICAgICAgdGhpcy5hcGlDbGllbnQgPSAoX2sgPSBvcHRpb25zLmFwaUNsaWVudCkgIT09IG51bGwgJiYgX2sgIT09IHZvaWQgMCA/IF9rIDogbmV3IHdlYnNvY2tldF8xLldlYldvcmtlckNvbnRyb2xsZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuYXBwSWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb2plY3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignW1NwZWVjaGx5Q2xpZW50XSBZb3UgY2Fubm90IHVzZSBib3RoIGFwcElkIGFuZCBwcm9qZWN0SWQgYXQgdGhlIHNhbWUgdGltZScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IChfbCA9IG9wdGlvbnMuc3RvcmFnZSkgIT09IG51bGwgJiYgX2wgIT09IHZvaWQgMCA/IF9sIDogbmV3IHN0b3JhZ2VfMS5Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy5kZXZpY2VJZCA9IHRoaXMuc3RvcmFnZS5nZXRPclNldChkZXZpY2VJZFN0b3JhZ2VLZXksIHV1aWRfMS52NCk7XG4gICAgICAgIGNvbnN0IHN0b3JlZFRva2VuID0gdGhpcy5zdG9yYWdlLmdldChhdXRoVG9rZW5LZXkpO1xuICAgICAgICAvLyAyLiBGZXRjaCBhdXRoIHRva2VuLiBJdCBkb2Vzbid0IG1hdHRlciBpZiBpdCdzIG5vdCBwcmVzZW50LlxuICAgICAgICB0aGlzLmluaXRpYWxpemVBcGlDbGllbnRQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmVJbml0aWFsaXphdGlvbiA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3RvcmVkVG9rZW4gPT0gbnVsbCB8fCAhKDAsIHRva2VuXzEudmFsaWRhdGVUb2tlbikoc3RvcmVkVG9rZW4sIHRoaXMucHJvamVjdElkLCB0aGlzLmFwcElkLCB0aGlzLmRldmljZUlkKSkge1xuICAgICAgICAgICAgKDAsIHRva2VuXzEuZmV0Y2hUb2tlbikodGhpcy5sb2dpblVybCwgdGhpcy5wcm9qZWN0SWQsIHRoaXMuYXBwSWQsIHRoaXMuZGV2aWNlSWQpXG4gICAgICAgICAgICAgICAgLnRoZW4odG9rZW4gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgLy8gQ2FjaGUgdGhlIGF1dGggdG9rZW4gaW4gbG9jYWwgc3RvcmFnZSBmb3IgZnV0dXJlIHVzZS5cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGF1dGhUb2tlbktleSwgdGhpcy5hdXRoVG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdChhcGlVcmwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHR5cGVzXzEuQ2xpZW50U3RhdGUuRmFpbGVkKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFRva2VuID0gc3RvcmVkVG9rZW47XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoYXBpVXJsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LkF1ZGlvQ29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzV2Via2l0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzV2Via2l0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG1pY3JvcGhvbmVfMS5FcnJEZXZpY2VOb3RTdXBwb3J0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5taWNyb3Bob25lID0gKF9tID0gb3B0aW9ucy5taWNyb3Bob25lKSAhPT0gbnVsbCAmJiBfbSAhPT0gdm9pZCAwID8gX20gOiBuZXcgbWljcm9waG9uZV8xLkJyb3dzZXJNaWNyb3Bob25lKHRoaXMuaXNXZWJraXQsIHRoaXMuc2FtcGxlUmF0ZSwgdGhpcy5hcGlDbGllbnQsIHRoaXMuZGVidWcpO1xuICAgICAgICB0aGlzLmFwaUNsaWVudC5vblJlc3BvbnNlKHRoaXMuaGFuZGxlV2Vic29ja2V0UmVzcG9uc2UpO1xuICAgICAgICB0aGlzLmFwaUNsaWVudC5vbkNsb3NlKHRoaXMuaGFuZGxlV2Vic29ja2V0Q2xvc3VyZSk7XG4gICAgICAgIHdpbmRvdy5TcGVlY2hseUNsaWVudCA9IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVzdGVibGlzaCB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgICAqL1xuICAgIGNvbm5lY3QoYXBpVXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dGhUb2tlbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFwaUNsaWVudC5pbml0aWFsaXplKGFwaVVybCwgdGhpcy5hdXRoVG9rZW4sIHRoaXMuc2FtcGxlUmF0ZSwgdGhpcy5kZWJ1ZykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2ZUluaXRpYWxpemF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlSW5pdGlhbGl6YXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBjbGllbnQsIGJ5IGluaXRpYWxpemluZyB0aGUgbWljcm9waG9uZSBhbmQgZXN0YWJsaXNoaW5nIGNvbm5lY3Rpb24gdG8gdGhlIEFQSS5cbiAgICAgKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gSEFTIHRvIGJlIGludm9rZWQgYnkgYSB1c2VyIGJ5IGUuZy4gYmluZGluZyBpdCB0byBhIGJ1dHRvbiBwcmVzcyxcbiAgICAgKiBvciBzb21lIG90aGVyIHVzZXItcGVyZm9ybWVkIGFjdGlvbi5cbiAgICAgKlxuICAgICAqIElmIHRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRob3V0IGEgdXNlciBpbnRlcmFjdGlvbixcbiAgICAgKiB0aGUgbWljcm9waG9uZSBmdW5jdGlvbmFsaXR5IHdpbGwgbm90IHdvcmsgZHVlIHRvIHNlY3VyaXR5IHJlc3RyaWN0aW9ucyBieSB0aGUgYnJvd3Nlci5cbiAgICAgKi9cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5pbml0aWFsaXplQXBpQ2xpZW50UHJvbWlzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSB0eXBlc18xLkNsaWVudFN0YXRlLkRpc2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdDYW5ub3QgaW5pdGlhbGl6ZSBjbGllbnQgLSBjbGllbnQgaXMgbm90IGluIERpc2Nvbm5lY3RlZCBzdGF0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0eXBlc18xLkNsaWVudFN0YXRlLkNvbm5lY3RpbmcpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyAxLiBJbml0aWFsaXNlIHRoZSBzdG9yYWdlIGFuZCBmZXRjaCBkZXZpY2VJZCAob3IgZ2VuZXJhdGUgbmV3IG9uZSBhbmQgc3RvcmUgaXQpLlxuICAgICAgICAgICAgICAgIC8vIGF3YWl0IHRoaXMuc3RvcmFnZS5pbml0aWFsaXplKClcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRldmljZUlkID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldE9yU2V0KGRldmljZUlkU3RvcmFnZUtleSwgdXVpZHY0KVxuICAgICAgICAgICAgICAgIC8vIDIuIEluaXRpYWxpc2UgdGhlIG1pY3JvcGhvbmUgc3RhY2suXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNXZWJraXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5uYXRpdmVSZXNhbXBsaW5nU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnNhbXBsZVJhdGUgPSB0aGlzLnNhbXBsZVJhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdWRpb0NvbnRleHQgPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dChvcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbWVkaWFTdHJlYW1Db25zdHJhaW50cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW86IGZhbHNlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmF0aXZlUmVzYW1wbGluZ1N1cHBvcnRlZCB8fCB0aGlzLmF1dG9HYWluQ29udHJvbCkge1xuICAgICAgICAgICAgICAgICAgICBtZWRpYVN0cmVhbUNvbnN0cmFpbnRzLmF1ZGlvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlUmF0ZTogdGhpcy5zYW1wbGVSYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0dhaW5Db250cm9sOiB0aGlzLmF1dG9HYWluQ29udHJvbCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lZGlhU3RyZWFtQ29uc3RyYWludHMuYXVkaW8gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdWRpb0NvbnRleHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdGFydCBhdWRpbyBjb250ZXh0IGlmIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBXZWJLaXQgYnJvd3Nlci5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gV2ViS2l0IGJyb3dzZXJzIChlLmcuIFNhZmFyaSkgcmVxdWlyZSB0byByZXN1bWUgdGhlIGNvbnRleHQgZmlyc3QsXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlZm9yZSBvYnRhaW5pbmcgdXNlciBtZWRpYSBieSBjYWxsaW5nIGBtZWRpYURldmljZXMuZ2V0VXNlck1lZGlhYC5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZG9uZSBpbiBhIGRpZmZlcmVudCBvcmRlciwgdGhlIGF1ZGlvIGNvbnRleHQgd2lsbCByZXN1bWUgc3VjY2Vzc2Z1bGx5LFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgd2lsbCBlbWl0IGVtcHR5IGF1ZGlvIGJ1ZmZlcnMuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzV2Via2l0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmF1ZGlvQ29udGV4dC5yZXN1bWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAzLiBJbml0aWFsaXNlIHdlYnNvY2tldC5cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5hcGlDbGllbnQuc2V0U291cmNlU2FtcGxlUmF0ZSh0aGlzLmF1ZGlvQ29udGV4dC5zYW1wbGVSYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplTWljcm9waG9uZVByb21pc2UgPSB0aGlzLm1pY3JvcGhvbmUuaW5pdGlhbGl6ZSh0aGlzLmF1ZGlvQ29udGV4dCwgbWVkaWFTdHJlYW1Db25zdHJhaW50cyk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuaW5pdGlhbGl6ZU1pY3JvcGhvbmVQcm9taXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbWljcm9waG9uZV8xLkVyckRldmljZU5vdFN1cHBvcnRlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBtaWNyb3Bob25lXzEuRXJyRGV2aWNlTm90U3VwcG9ydGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0eXBlc18xLkNsaWVudFN0YXRlLk5vQnJvd3NlclN1cHBvcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgbWljcm9waG9uZV8xLkVyck5vQXVkaW9Db25zZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0eXBlc18xLkNsaWVudFN0YXRlLk5vQXVkaW9Db25zZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0eXBlc18xLkNsaWVudFN0YXRlLkZhaWxlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodHlwZXNfMS5DbGllbnRTdGF0ZS5Db25uZWN0ZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBjbGllbnQgYnkgY2xvc2luZyB0aGUgQVBJIGNvbm5lY3Rpb24gYW5kIGRpc2FibGluZyB0aGUgbWljcm9waG9uZS5cbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycnMgPSBbXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5taWNyb3Bob25lLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGVycnMucHVzaChlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuYXBpQ2xpZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGVycnMucHVzaChlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvbnRleHRzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHR5cGVzXzEuQ2xpZW50U3RhdGUuRGlzY29ubmVjdGVkKTtcbiAgICAgICAgICAgIGlmIChlcnJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihlcnJzLmpvaW4oJywnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdG9wcyBjdXJyZW50IGNvbnRleHQgYW5kIGltbWVkaWF0ZWx5IHN0YXJ0cyBhIG5ldyBTTFUgY29udGV4dFxuICAgICAqIGJ5IHNlbmRpbmcgYSBzdGFydCBjb250ZXh0IGV2ZW50IHRvIHRoZSBBUEkgYW5kIHVubXV0aW5nIHRoZSBtaWNyb3Bob25lLlxuICAgICAqIEBwYXJhbSBhcHBJZCAtIHVuaXF1ZSBpZGVudGlmaWVyIG9mIGFuIGFwcCBpbiB0aGUgZGFzaGJvYXJkLlxuICAgICAqL1xuICAgIHN3aXRjaENvbnRleHQoYXBwSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSB0eXBlc18xLkNsaWVudFN0YXRlLlJlY29yZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVN0b3BDb250ZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHRJZCA9IHlpZWxkIHRoaXMuYXBpQ2xpZW50LnN3aXRjaENvbnRleHQoYXBwSWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29udGV4dHMuc2V0KGNvbnRleHRJZCwgbmV3IE1hcCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBhIG5ldyBTTFUgY29udGV4dCBieSBzZW5kaW5nIGEgc3RhcnQgY29udGV4dCBldmVudCB0byB0aGUgQVBJIGFuZCB1bm11dGluZyB0aGUgbWljcm9waG9uZS5cbiAgICAgKiBAcGFyYW0gY2IgLSB0aGUgY2FsbGJhY2sgd2hpY2ggaXMgaW52b2tlZCB3aGVuIHRoZSBjb250ZXh0IHN0YXJ0IHdhcyBhY2tub3dsZWRnZWQgYnkgdGhlIEFQSS5cbiAgICAgKi9cbiAgICBzdGFydENvbnRleHQoYXBwSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc29sdmVTdG9wQ29udGV4dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlU3RvcENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnN0b3BwZWRDb250ZXh0SWRQcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IHR5cGVzXzEuQ2xpZW50U3RhdGUuRGlzY29ubmVjdGVkIHx8IHRoaXMuc3RhdGUgPT09IHR5cGVzXzEuQ2xpZW50U3RhdGUuQ29ubmVjdGluZykge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdDYW5ub3Qgc3RhcnQgY29udGV4dCAtIGNsaWVudCBpcyBub3QgY29ubmVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHR5cGVzXzEuQ2xpZW50U3RhdGUuU3RhcnRpbmcpO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dElkID0geWllbGQgdGhpcy5fc3RhcnRDb250ZXh0KGFwcElkKTtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0SWQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc3RhcnRDb250ZXh0KGFwcElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgY29udGV4dElkO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9qZWN0SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0SWQgPSB5aWVsZCB0aGlzLmFwaUNsaWVudC5zdGFydENvbnRleHQoYXBwSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcElkICE9IG51bGwgJiYgdGhpcy5hcHBJZCAhPT0gYXBwSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG1pY3JvcGhvbmVfMS5FcnJBcHBJZENoYW5nZVdpdGhvdXRQcm9qZWN0TG9naW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dElkID0geWllbGQgdGhpcy5hcGlDbGllbnQuc3RhcnRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgbWljcm9waG9uZV8xLkVyckFwcElkQ2hhbmdlV2l0aG91dFByb2plY3RMb2dpbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodHlwZXNfMS5DbGllbnRTdGF0ZS5GYWlsZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHR5cGVzXzEuQ2xpZW50U3RhdGUuQ29ubmVjdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0eXBlc18xLkNsaWVudFN0YXRlLlJlY29yZGluZyk7XG4gICAgICAgICAgICB0aGlzLm1pY3JvcGhvbmUudW5tdXRlKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvbnRleHRzLnNldChjb250ZXh0SWQsIG5ldyBNYXAoKSk7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dElkO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RvcHMgY3VycmVudCBTTFUgY29udGV4dCBieSBzZW5kaW5nIGEgc3RvcCBjb250ZXh0IGV2ZW50IHRvIHRoZSBBUEkgYW5kIG11dGluZyB0aGUgbWljcm9waG9uZVxuICAgICAqIGRlbGF5ZWQgYnkgY29udGV4dFN0b3BEZWxheSA9IDI1MCBtc1xuICAgICAqL1xuICAgIHN0b3BDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IHR5cGVzXzEuQ2xpZW50U3RhdGUuUmVjb3JkaW5nICYmIHRoaXMuc3RhdGUgIT09IHR5cGVzXzEuQ2xpZW50U3RhdGUuU3RhcnRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignQ2Fubm90IHN0b3AgY29udGV4dCAtIGNsaWVudCBpcyBub3QgcmVjb3JkaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHR5cGVzXzEuQ2xpZW50U3RhdGUuU3RvcHBpbmcpO1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkQ29udGV4dElkUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIFByb21pc2UucmFjZShbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aGlzLmNvbnRleHRTdG9wRGVsYXkpKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVTdG9wQ29udGV4dCA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RvcENvbnRleHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpZCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgY29udGV4dElkID0geWllbGQgdGhpcy5zdG9wcGVkQ29udGV4dElkUHJvbWlzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodHlwZXNfMS5DbGllbnRTdGF0ZS5Db25uZWN0ZWQpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb250ZXh0cy5kZWxldGUoY29udGV4dElkKTtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0SWQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc3RvcENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0aGlzLm1pY3JvcGhvbmUubXV0ZSgpO1xuICAgICAgICAgICAgbGV0IGNvbnRleHRJZDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29udGV4dElkID0geWllbGQgdGhpcy5hcGlDbGllbnQuc3RvcENvbnRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHR5cGVzXzEuQ2xpZW50U3RhdGUuRmFpbGVkKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dElkO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIGZvciBjbGllbnQgc3RhdGUgY2hhbmdlIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gY2IgLSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIG9uIHN0YXRlIGNoYW5nZSBldmVudHMuXG4gICAgICovXG4gICAgb25TdGF0ZUNoYW5nZShjYikge1xuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlQ2IgPSBjYjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIGZvciBjdXJyZW50IHNlZ21lbnQgY2hhbmdlIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gY2IgLSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIG9uIHNlZ21lbnQgY2hhbmdlIGV2ZW50cy5cbiAgICAgKi9cbiAgICBvblNlZ21lbnRDaGFuZ2UoY2IpIHtcbiAgICAgICAgdGhpcy5zZWdtZW50Q2hhbmdlQ2IgPSBjYjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIGZvciB0ZW50YXRpdmUgdHJhbnNjcmlwdCByZXNwb25zZXMgZnJvbSB0aGUgQVBJLlxuICAgICAqIEBwYXJhbSBjYiAtIHRoZSBjYWxsYmFjayB0byBpbnZva2Ugb24gYSB0ZW50YXRpdmUgdHJhbnNjcmlwdCByZXNwb25zZS5cbiAgICAgKi9cbiAgICBvblRlbnRhdGl2ZVRyYW5zY3JpcHQoY2IpIHtcbiAgICAgICAgdGhpcy50ZW50YXRpdmVUcmFuc2NyaXB0Q2IgPSBjYjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIGZvciB0cmFuc2NyaXB0IHJlc3BvbnNlcyBmcm9tIHRoZSBBUEkuXG4gICAgICogQHBhcmFtIGNiIC0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSBvbiBhIHRyYW5zY3JpcHQgcmVzcG9uc2UuXG4gICAgICovXG4gICAgb25UcmFuc2NyaXB0KGNiKSB7XG4gICAgICAgIHRoaXMudHJhbnNjcmlwdENiID0gY2I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciBmb3IgdGVudGF0aXZlIGVudGl0aWVzIHJlc3BvbnNlcyBmcm9tIHRoZSBBUEkuXG4gICAgICogQHBhcmFtIGNiIC0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSBvbiBhIHRlbnRhdGl2ZSBlbnRpdGllcyByZXNwb25zZS5cbiAgICAgKi9cbiAgICBvblRlbnRhdGl2ZUVudGl0aWVzKGNiKSB7XG4gICAgICAgIHRoaXMudGVudGF0aXZlRW50aXRpZXNDYiA9IGNiO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgZm9yIGVudGl0eSByZXNwb25zZXMgZnJvbSB0aGUgQVBJLlxuICAgICAqIEBwYXJhbSBjYiAtIHRoZSBjYWxsYmFjayB0byBpbnZva2Ugb24gYW4gZW50aXR5IHJlc3BvbnNlLlxuICAgICAqL1xuICAgIG9uRW50aXR5KGNiKSB7XG4gICAgICAgIHRoaXMuZW50aXR5Q2IgPSBjYjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIGZvciB0ZW50YXRpdmUgaW50ZW50IHJlc3BvbnNlcyBmcm9tIHRoZSBBUEkuXG4gICAgICogQHBhcmFtIGNiIC0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSBvbiBhIHRlbnRhdGl2ZSBpbnRlbnQgcmVzcG9uc2UuXG4gICAgICovXG4gICAgb25UZW50YXRpdmVJbnRlbnQoY2IpIHtcbiAgICAgICAgdGhpcy50ZW50YXRpdmVJbnRlbnRDYiA9IGNiO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbGlzdGVuZXIgZm9yIGludGVudCByZXNwb25zZXMgZnJvbSB0aGUgQVBJLlxuICAgICAqIEBwYXJhbSBjYiAtIHRoZSBjYWxsYmFjayB0byBpbnZva2Ugb24gYW4gaW50ZW50IHJlc3BvbnNlLlxuICAgICAqL1xuICAgIG9uSW50ZW50KGNiKSB7XG4gICAgICAgIHRoaXMuaW50ZW50Q2IgPSBjYjtcbiAgICB9XG4gICAgc2V0U3RhdGUobmV3U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IG5ld1N0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3BlZWNobHlDbGllbnRdJywgJ1N0YXRlIHRyYW5zaXRpb24nLCAoMCwgc3RhdGVfMS5zdGF0ZVRvU3RyaW5nKSh0aGlzLnN0YXRlKSwgKDAsIHN0YXRlXzEuc3RhdGVUb1N0cmluZykobmV3U3RhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VDYihuZXdTdGF0ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHByaW50IHN0YXRpc3RpY3MgdG8gY29uc29sZVxuICAgICAqL1xuICAgIHByaW50U3RhdHMoKSB7XG4gICAgICAgIHRoaXMubWljcm9waG9uZS5wcmludFN0YXRzKCk7XG4gICAgfVxufVxuZXhwb3J0cy5DbGllbnQgPSBDbGllbnQ7XG5mdW5jdGlvbiBnZW5lcmF0ZVdzVXJsKGJhc2VVcmwsIGxhbmd1YWdlQ29kZSwgc2FtcGxlUmF0ZSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKCdsYW5ndWFnZUNvZGUnLCBsYW5ndWFnZUNvZGUpO1xuICAgIHBhcmFtcy5hcHBlbmQoJ3NhbXBsZVJhdGUnLCBzYW1wbGVSYXRlLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBgJHtiYXNlVXJsfT8ke3BhcmFtcy50b1N0cmluZygpfWA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGllbnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2xpZW50ID0gZXhwb3J0cy5zdGF0ZVRvU3RyaW5nID0gdm9pZCAwO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLCBleHBvcnRzKTtcbnZhciBzdGF0ZV8xID0gcmVxdWlyZShcIi4vc3RhdGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdGF0ZVRvU3RyaW5nXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0ZV8xLnN0YXRlVG9TdHJpbmc7IH0gfSk7XG52YXIgY2xpZW50XzEgPSByZXF1aXJlKFwiLi9jbGllbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDbGllbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudF8xLkNsaWVudDsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZUludGVudCA9IGV4cG9ydHMucGFyc2VFbnRpdHkgPSBleHBvcnRzLnBhcnNlVGVudGF0aXZlRW50aXRpZXMgPSBleHBvcnRzLnBhcnNlVHJhbnNjcmlwdCA9IGV4cG9ydHMucGFyc2VUZW50YXRpdmVUcmFuc2NyaXB0ID0gdm9pZCAwO1xuZnVuY3Rpb24gcGFyc2VUZW50YXRpdmVUcmFuc2NyaXB0KGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS53b3Jkcy5tYXAoKHsgd29yZCwgaW5kZXgsIHN0YXJ0X3RpbWVzdGFtcCwgZW5kX3RpbWVzdGFtcCB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogd29yZCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHN0YXJ0VGltZXN0YW1wOiBzdGFydF90aW1lc3RhbXAsXG4gICAgICAgICAgICBlbmRUaW1lc3RhbXA6IGVuZF90aW1lc3RhbXAsXG4gICAgICAgICAgICBpc0ZpbmFsOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucGFyc2VUZW50YXRpdmVUcmFuc2NyaXB0ID0gcGFyc2VUZW50YXRpdmVUcmFuc2NyaXB0O1xuZnVuY3Rpb24gcGFyc2VUcmFuc2NyaXB0KGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogZGF0YS53b3JkLFxuICAgICAgICBpbmRleDogZGF0YS5pbmRleCxcbiAgICAgICAgc3RhcnRUaW1lc3RhbXA6IGRhdGEuc3RhcnRfdGltZXN0YW1wLFxuICAgICAgICBlbmRUaW1lc3RhbXA6IGRhdGEuZW5kX3RpbWVzdGFtcCxcbiAgICAgICAgaXNGaW5hbDogdHJ1ZSxcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJzZVRyYW5zY3JpcHQgPSBwYXJzZVRyYW5zY3JpcHQ7XG5mdW5jdGlvbiBwYXJzZVRlbnRhdGl2ZUVudGl0aWVzKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5lbnRpdGllcy5tYXAoKHsgZW50aXR5LCB2YWx1ZSwgc3RhcnRfcG9zaXRpb24sIGVuZF9wb3NpdGlvbiB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBlbnRpdHksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uOiBzdGFydF9wb3NpdGlvbixcbiAgICAgICAgICAgIGVuZFBvc2l0aW9uOiBlbmRfcG9zaXRpb24sXG4gICAgICAgICAgICBpc0ZpbmFsOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucGFyc2VUZW50YXRpdmVFbnRpdGllcyA9IHBhcnNlVGVudGF0aXZlRW50aXRpZXM7XG5mdW5jdGlvbiBwYXJzZUVudGl0eShkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogZGF0YS5lbnRpdHksXG4gICAgICAgIHZhbHVlOiBkYXRhLnZhbHVlLFxuICAgICAgICBzdGFydFBvc2l0aW9uOiBkYXRhLnN0YXJ0X3Bvc2l0aW9uLFxuICAgICAgICBlbmRQb3NpdGlvbjogZGF0YS5lbmRfcG9zaXRpb24sXG4gICAgICAgIGlzRmluYWw6IHRydWUsXG4gICAgfTtcbn1cbmV4cG9ydHMucGFyc2VFbnRpdHkgPSBwYXJzZUVudGl0eTtcbmZ1bmN0aW9uIHBhcnNlSW50ZW50KGRhdGEsIGlzRmluYWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnRlbnQ6IGRhdGEuaW50ZW50LFxuICAgICAgICBpc0ZpbmFsOiBpc0ZpbmFsLFxuICAgIH07XG59XG5leHBvcnRzLnBhcnNlSW50ZW50ID0gcGFyc2VJbnRlbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZXJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TZWdtZW50U3RhdGUgPSB2b2lkIDA7XG5jbGFzcyBTZWdtZW50U3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKGN0eElkLCBzSWQpIHtcbiAgICAgICAgdGhpcy5pc0ZpbmFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLndvcmRzID0gW107XG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaW50ZW50ID0geyBpbnRlbnQ6ICcnLCBpc0ZpbmFsOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLmNvbnRleHRJZCA9IGN0eElkO1xuICAgICAgICB0aGlzLmlkID0gc0lkO1xuICAgIH1cbiAgICB0b1NlZ21lbnQoKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgZW50aXRpZXMgPSBuZXcgQXJyYXkodGhpcy5lbnRpdGllcy5zaXplKTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgZW50aXRpZXNbaV0gPSB2O1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgY29udGV4dElkOiB0aGlzLmNvbnRleHRJZCxcbiAgICAgICAgICAgIGlzRmluYWw6IHRoaXMuaXNGaW5hbGl6ZWQsXG4gICAgICAgICAgICB3b3JkczogdGhpcy53b3JkcyxcbiAgICAgICAgICAgIGVudGl0aWVzOiBlbnRpdGllcyxcbiAgICAgICAgICAgIGludGVudDogdGhpcy5pbnRlbnQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBjb25zdCBzZWdtZW50ID0gdGhpcy50b1NlZ21lbnQoKTtcbiAgICAgICAgY29uc3Qgd29yZHMgPSBzZWdtZW50LndvcmRzLmZpbHRlcigodykgPT4gdy52YWx1ZSkubWFwKCh3KSA9PiAoeyB2YWx1ZTogdy52YWx1ZSwgaW5kZXg6IHcuaW5kZXggfSkpO1xuICAgICAgICBjb25zdCBjbGVhblNlZ21lbnQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHNlZ21lbnQpLCB7IHdvcmRzIH0pO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY2xlYW5TZWdtZW50LCBudWxsLCAyKTtcbiAgICB9XG4gICAgdXBkYXRlVHJhbnNjcmlwdCh3b3Jkcykge1xuICAgICAgICB3b3Jkcy5mb3JFYWNoKHcgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBhY2NlcHQgdGVudGF0aXZlIHdvcmRzIGlmIHRoZSBzZWdtZW50IGlzIHRlbnRhdGl2ZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpbmFsaXplZCB8fCB3LmlzRmluYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndvcmRzW3cuaW5kZXhdID0gdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB1cGRhdGVFbnRpdGllcyhlbnRpdGllcykge1xuICAgICAgICBlbnRpdGllcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBhY2NlcHQgdGVudGF0aXZlIGVudGl0aWVzIGlmIHRoZSBzZWdtZW50IGlzIHRlbnRhdGl2ZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpbmFsaXplZCB8fCBlLmlzRmluYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0aWVzLnNldChlbnRpdHlNYXBLZXkoZSksIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHVwZGF0ZUludGVudChpbnRlbnQpIHtcbiAgICAgICAgLy8gT25seSBhY2NlcHQgdGVudGF0aXZlIGludGVudCBpZiB0aGUgc2VnbWVudCBpcyB0ZW50YXRpdmUuXG4gICAgICAgIGlmICghdGhpcy5pc0ZpbmFsaXplZCB8fCBpbnRlbnQuaXNGaW5hbCkge1xuICAgICAgICAgICAgdGhpcy5pbnRlbnQgPSBpbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpbmFsaXplKCkge1xuICAgICAgICAvLyBGaWx0ZXIgYXdheSBhbnkgZW50aXRpZXMgd2hpY2ggd2VyZSBub3QgZmluYWxpemVkLlxuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXZhbC5pc0ZpbmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdGllcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEZpbHRlciBhd2F5IGFueSB0cmFuc2NyaXB0cyB3aGljaCB3ZXJlIG5vdCBmaW5hbGl6ZWQuXG4gICAgICAgIHRoaXMud29yZHMgPSB0aGlzLndvcmRzLmZpbHRlcih3ID0+IHcuaXNGaW5hbCk7XG4gICAgICAgIGlmICghdGhpcy5pbnRlbnQuaXNGaW5hbCkge1xuICAgICAgICAgICAgdGhpcy5pbnRlbnQuaW50ZW50ID0gJyc7XG4gICAgICAgICAgICB0aGlzLmludGVudC5pc0ZpbmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNYXJrIGFzIGZpbmFsLlxuICAgICAgICB0aGlzLmlzRmluYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZXhwb3J0cy5TZWdtZW50U3RhdGUgPSBTZWdtZW50U3RhdGU7XG5mdW5jdGlvbiBlbnRpdHlNYXBLZXkoZSkge1xuICAgIHJldHVybiBgJHtlLnN0YXJ0UG9zaXRpb24udG9TdHJpbmcoKX06JHtlLmVuZFBvc2l0aW9uLnRvU3RyaW5nKCl9YDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlZ21lbnQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXRlVG9TdHJpbmcgPSB2b2lkIDA7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG4vKipcbiAqIENvbnZlcnRzIGNsaWVudCBzdGF0ZSB2YWx1ZSB0byBhIHN0cmluZywgd2hpY2ggY291bGQgYmUgdXNlZnVsIGZvciBkZWJ1Z2dpbmcgb3IgbWV0cmljcy5cbiAqIEBwYXJhbSBzdGF0ZSAtIHRoZSBzdGF0ZSBvZiB0aGUgY2xpZW50XG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHN0YXRlVG9TdHJpbmcoc3RhdGUpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIChfYSA9IHN0YXRlcy5nZXQoc3RhdGUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB1bmtub3duO1xufVxuZXhwb3J0cy5zdGF0ZVRvU3RyaW5nID0gc3RhdGVUb1N0cmluZztcbi8vIFRPRE86IGdlbmVyYXRlIHRoaXMgZnJvbSB0aGUgZW51bS5cbmNvbnN0IHVua25vd24gPSAnVW5rbm93bic7XG5jb25zdCBzdGF0ZXMgPSBuZXcgTWFwKFtcbiAgICBbdHlwZXNfMS5DbGllbnRTdGF0ZS5GYWlsZWQsICdGYWlsZWQnXSxcbiAgICBbdHlwZXNfMS5DbGllbnRTdGF0ZS5Ob0Jyb3dzZXJTdXBwb3J0LCAnTm9Ccm93c2VyU3VwcG9ydCddLFxuICAgIFt0eXBlc18xLkNsaWVudFN0YXRlLk5vQXVkaW9Db25zZW50LCAnTm9BdWRpb0NvbnNlbnQnXSxcbiAgICBbdHlwZXNfMS5DbGllbnRTdGF0ZS5EaXNjb25uZWN0aW5nLCAnRGlzY29ubmVjdGluZyddLFxuICAgIFt0eXBlc18xLkNsaWVudFN0YXRlLkRpc2Nvbm5lY3RlZCwgJ0Rpc2Nvbm5lY3RlZCddLFxuICAgIFt0eXBlc18xLkNsaWVudFN0YXRlLkNvbm5lY3RpbmcsICdDb25uZWN0aW5nJ10sXG4gICAgW3R5cGVzXzEuQ2xpZW50U3RhdGUuQ29ubmVjdGVkLCAnQ29ubmVjdGVkJ10sXG4gICAgW3R5cGVzXzEuQ2xpZW50U3RhdGUuU3RhcnRpbmcsICdTdGFydGluZyddLFxuICAgIFt0eXBlc18xLkNsaWVudFN0YXRlLlN0b3BwaW5nLCAnU3RvcHBpbmcnXSxcbiAgICBbdHlwZXNfMS5DbGllbnRTdGF0ZS5SZWNvcmRpbmcsICdSZWNvcmRpbmcnXSxcbl0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNsaWVudFN0YXRlID0gdm9pZCAwO1xuLyoqXG4gKiBBbGwgcG9zc2libGUgc3RhdGVzIG9mIGEgU3BlZWNobHkgQVBJIGNsaWVudC4gRmFpbGVkLCBOb0Jyb3dzZXJTdXBwb3J0IGFuZCBOb0F1ZGlvQ29uc2VudCBzdGF0ZXMgYXJlIG5vbi1yZWNvdmVyYWJsZVxuICogZXJyb25lb3VzIHN0YXRlcywgd2hpY2ggc2hvdWxkIGJlIGhhbmRsZWQgYnkgdGhlIGVuZCB1c2VyLCBhY2NvcmRpbmcgdG8gdGhlIHNlbWFudGljcyBvZiBhbiBhcHBsaWNhdGlvbi5cbiAqIE90aGVyIHN0YXRlcyBjYW4gYWxzbyBiZSB1dGlsaXplZCBmb3IgZS5nLiBlbmFibGluZyBhbmQgZGlzYWJsaW5nIHJlY29yZGluZyBidXR0b25zIG9yIHNob3dpbmcgdGhlIHN0YXR1cyBpbiB0aGUgYXBwLlxuICogSXQgaXMgYWxzbyBwb3NzaWJsZSB0byB1c2UgYXJpdGhtZXRpY3MgZm9yIHN0YXRlIGNvbXBhcmlzb24sIGUuZy4gYGlmIChzdGF0ZSA8IHNwZWVjaGx5LkNsaWVudFN0YXRlLkRpc2Nvbm5lY3RlZClgLFxuICogdG8gcmVhY3QgdG8gbm9uLXJlY292ZXJhYmxlIHN0YXRlcy5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIENsaWVudFN0YXRlO1xuKGZ1bmN0aW9uIChDbGllbnRTdGF0ZSkge1xuICAgIENsaWVudFN0YXRlW0NsaWVudFN0YXRlW1wiRmFpbGVkXCJdID0gMF0gPSBcIkZhaWxlZFwiO1xuICAgIENsaWVudFN0YXRlW0NsaWVudFN0YXRlW1wiTm9Ccm93c2VyU3VwcG9ydFwiXSA9IDFdID0gXCJOb0Jyb3dzZXJTdXBwb3J0XCI7XG4gICAgQ2xpZW50U3RhdGVbQ2xpZW50U3RhdGVbXCJOb0F1ZGlvQ29uc2VudFwiXSA9IDJdID0gXCJOb0F1ZGlvQ29uc2VudFwiO1xuICAgIENsaWVudFN0YXRlW0NsaWVudFN0YXRlW1wiRGlzY29ubmVjdGVkXCJdID0gM10gPSBcIkRpc2Nvbm5lY3RlZFwiO1xuICAgIENsaWVudFN0YXRlW0NsaWVudFN0YXRlW1wiRGlzY29ubmVjdGluZ1wiXSA9IDRdID0gXCJEaXNjb25uZWN0aW5nXCI7XG4gICAgQ2xpZW50U3RhdGVbQ2xpZW50U3RhdGVbXCJDb25uZWN0aW5nXCJdID0gNV0gPSBcIkNvbm5lY3RpbmdcIjtcbiAgICBDbGllbnRTdGF0ZVtDbGllbnRTdGF0ZVtcIkNvbm5lY3RlZFwiXSA9IDZdID0gXCJDb25uZWN0ZWRcIjtcbiAgICBDbGllbnRTdGF0ZVtDbGllbnRTdGF0ZVtcIlN0YXJ0aW5nXCJdID0gN10gPSBcIlN0YXJ0aW5nXCI7XG4gICAgQ2xpZW50U3RhdGVbQ2xpZW50U3RhdGVbXCJTdG9wcGluZ1wiXSA9IDhdID0gXCJTdG9wcGluZ1wiO1xuICAgIENsaWVudFN0YXRlW0NsaWVudFN0YXRlW1wiUmVjb3JkaW5nXCJdID0gOV0gPSBcIlJlY29yZGluZ1wiO1xufSkoQ2xpZW50U3RhdGUgPSBleHBvcnRzLkNsaWVudFN0YXRlIHx8IChleHBvcnRzLkNsaWVudFN0YXRlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc3RvcmFnZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxvY2FsU3RvcmFnZSA9IHZvaWQgMDtcbmNsYXNzIExvY2FsU3RvcmFnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgdmFsID0gdGhpcy5zdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsKTtcbiAgICB9XG4gICAgZ2V0T3JTZXQoa2V5LCBnZW5Gbikge1xuICAgICAgICBsZXQgdmFsID0gdGhpcy5zdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsID0gZ2VuRm4oKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbn1cbmV4cG9ydHMuTG9jYWxTdG9yYWdlID0gTG9jYWxTdG9yYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RvcmFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRXJyS2V5Tm90Rm91bmQgPSBleHBvcnRzLkVyck5vU3RvcmFnZVN1cHBvcnQgPSB2b2lkIDA7XG4vKipcbiAqIEVycm9yIHRvIGJlIHRocm93biBpZiBzdG9yYWdlIEFQSSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBkZXZpY2UuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMuRXJyTm9TdG9yYWdlU3VwcG9ydCA9IG5ldyBFcnJvcignQ3VycmVudCBkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCBzdG9yYWdlIEFQSScpO1xuLyoqXG4gKiBFcnJvciB0byBiZSB0aHJvd24gaWYgcmVxdWVzdGVkIGtleSB3YXMgbm90IGZvdW5kIGluIHRoZSBzdG9yYWdlLlxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLkVycktleU5vdEZvdW5kID0gbmV3IEVycm9yKCdSZXF1ZXN0ZWQga2V5IHdhcyBub3QgcHJlc2VudCBpbiBzdG9yYWdlJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3dlYldvcmtlckNvbnRyb2xsZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLCBleHBvcnRzKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlY29kZVRva2VuID0gZXhwb3J0cy52YWxpZGF0ZVRva2VuID0gZXhwb3J0cy5mZXRjaFRva2VuID0gZXhwb3J0cy5taW5Ub2tlblZhbGlkVGltZSA9IHZvaWQgMDtcbmNvbnN0IGJhc2VfNjRfMSA9IHJlcXVpcmUoXCJiYXNlLTY0XCIpO1xuZXhwb3J0cy5taW5Ub2tlblZhbGlkVGltZSA9IDYwICogNjAgKiAxMDAwOyAvLyAxIGhvdXJcbmZ1bmN0aW9uIGZldGNoVG9rZW4oYmFzZVVybCwgcHJvamVjdElkLCBhcHBJZCwgZGV2aWNlSWQsIGZldGNoZXIgPSBmZXRjaCwgbm93Rm4gPSBEYXRlLm5vdykge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgYm9keTtcbiAgICAgICAgaWYgKHByb2plY3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBib2R5ID0geyBwcm9qZWN0SWQsIGRldmljZUlkIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib2R5ID0geyBhcHBJZCwgZGV2aWNlSWQgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoZXIoYmFzZVVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGpzb24gPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoKF9hID0ganNvbi5lcnJvcikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogYFNwZWVjaGx5IEFQSSBsb2dpbiByZXF1ZXN0IGZhaWxlZCB3aXRoICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChqc29uLmFjY2Vzc190b2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBsb2dpbiByZXNwb25zZSBmcm9tIFNwZWVjaGx5IEFQSScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdmFsaWRhdGVUb2tlbihqc29uLmFjY2Vzc190b2tlbiwgcHJvamVjdElkLCBhcHBJZCwgZGV2aWNlSWQsIG5vd0ZuKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgdG9rZW4gcmVjZWl2ZWQgZnJvbSBTcGVlY2hseSBBUEknKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ganNvbi5hY2Nlc3NfdG9rZW47XG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoVG9rZW4gPSBmZXRjaFRva2VuO1xuZnVuY3Rpb24gdmFsaWRhdGVUb2tlbih0b2tlbiwgcHJvamVjdElkLCBhcHBJZCwgZGV2aWNlSWQsIG5vdyA9IERhdGUubm93KSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGRlY29kZVRva2VuKHRva2VuKTtcbiAgICBpZiAoZGVjb2RlZC5leHBpcmVzQXRNcyAtIG5vdygpIDwgZXhwb3J0cy5taW5Ub2tlblZhbGlkVGltZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChkZWNvZGVkLmFwcElkICE9PSBhcHBJZCB8fCBkZWNvZGVkLnByb2plY3RJZCAhPT0gcHJvamVjdElkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRlY29kZWQuZGV2aWNlSWQgIT09IGRldmljZUlkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLnZhbGlkYXRlVG9rZW4gPSB2YWxpZGF0ZVRva2VuO1xuZnVuY3Rpb24gZGVjb2RlVG9rZW4odG9rZW4pIHtcbiAgICBjb25zdCBiID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICBsZXQgYm9keTtcbiAgICB0cnkge1xuICAgICAgICBib2R5ID0gSlNPTi5wYXJzZSgoMCwgYmFzZV82NF8xLmRlY29kZSkoYikpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGRlY29kaW5nIFNwZWVjaGx5IHRva2VuIScpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBhcHBJZDogYm9keS5hcHBJZCxcbiAgICAgICAgcHJvamVjdElkOiBib2R5LnByb2plY3RJZCxcbiAgICAgICAgZGV2aWNlSWQ6IGJvZHkuZGV2aWNlSWQsXG4gICAgICAgIGNvbmZpZ0lkOiBib2R5LmNvbmZpZ0lkLFxuICAgICAgICBzY29wZXM6IGJvZHkuc2NvcGUuc3BsaXQoJyAnKSxcbiAgICAgICAgaXNzdWVyOiBib2R5LmlzcyxcbiAgICAgICAgYXVkaWVuY2U6IGJvZHkuYXVkLFxuICAgICAgICBleHBpcmVzQXRNczogYm9keS5leHAgKiAxMDAwLCAvLyBKV1QgZXhwIGlzIGluIHNlY29uZHMsIGNvbnZlcnQgdG8gbXMsIHNpbmNlIHRoYXQncyB3aGF0IEpTIHdvcmtzIHdpdGguXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVjb2RlVG9rZW4gPSBkZWNvZGVUb2tlbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRva2VuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5XZWJzb2NrZXRSZXNwb25zZVR5cGUgPSB2b2lkIDA7XG4vKipcbiAqIEtub3duIFdlYlNvY2tldCByZXNwb25zZSB0eXBlcy5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIFdlYnNvY2tldFJlc3BvbnNlVHlwZTtcbihmdW5jdGlvbiAoV2Vic29ja2V0UmVzcG9uc2VUeXBlKSB7XG4gICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlW1wiT3BlbmVkXCJdID0gXCJXRUJTT0NLRVRfT1BFTlwiO1xuICAgIFdlYnNvY2tldFJlc3BvbnNlVHlwZVtcIlNvdXJjZVNhbXBsZVJhdGVTZXRTdWNjZXNzXCJdID0gXCJTT1VSU0VfU0FNUExFX1JBVEVfU0VUX1NVQ0NFU1NcIjtcbiAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbXCJTdGFydGVkXCJdID0gXCJzdGFydGVkXCI7XG4gICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlW1wiU3RvcHBlZFwiXSA9IFwic3RvcHBlZFwiO1xuICAgIFdlYnNvY2tldFJlc3BvbnNlVHlwZVtcIlNlZ21lbnRFbmRcIl0gPSBcInNlZ21lbnRfZW5kXCI7XG4gICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlW1wiVHJhbnNjcmlwdFwiXSA9IFwidHJhbnNjcmlwdFwiO1xuICAgIFdlYnNvY2tldFJlc3BvbnNlVHlwZVtcIkVudGl0eVwiXSA9IFwiZW50aXR5XCI7XG4gICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlW1wiSW50ZW50XCJdID0gXCJpbnRlbnRcIjtcbiAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbXCJUZW50YXRpdmVUcmFuc2NyaXB0XCJdID0gXCJ0ZW50YXRpdmVfdHJhbnNjcmlwdFwiO1xuICAgIFdlYnNvY2tldFJlc3BvbnNlVHlwZVtcIlRlbnRhdGl2ZUVudGl0aWVzXCJdID0gXCJ0ZW50YXRpdmVfZW50aXRpZXNcIjtcbiAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbXCJUZW50YXRpdmVJbnRlbnRcIl0gPSBcInRlbnRhdGl2ZV9pbnRlbnRcIjtcbn0pKFdlYnNvY2tldFJlc3BvbnNlVHlwZSA9IGV4cG9ydHMuV2Vic29ja2V0UmVzcG9uc2VUeXBlIHx8IChleHBvcnRzLldlYnNvY2tldFJlc3BvbnNlVHlwZSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5XZWJXb3JrZXJDb250cm9sbGVyID0gdm9pZCAwO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuY29uc3Qgd29ya2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vd29ya2VyXCIpKTtcbmNsYXNzIFdlYldvcmtlckNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0Q2JzID0gW107XG4gICAgICAgIHRoaXMuc3RvcENicyA9IFtdO1xuICAgICAgICB0aGlzLm9uUmVzcG9uc2VDYiA9ICgpID0+IHsgfTtcbiAgICAgICAgdGhpcy5vbkNsb3NlQ2IgPSAoKSA9PiB7IH07XG4gICAgICAgIHRoaXMub25XZWJzb2NrZXRNZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVzXzEuV2Vic29ja2V0UmVzcG9uc2VUeXBlLk9wZW5lZDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2ZUluaXRpYWxpemF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZUluaXRpYWxpemF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlc18xLldlYnNvY2tldFJlc3BvbnNlVHlwZS5Tb3VyY2VTYW1wbGVSYXRlU2V0U3VjY2VzczpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzb2x2ZVNvdXJjZVNhbXBsZVJhdGVTZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlU291cmNlU2FtcGxlUmF0ZVNldCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdHlwZXNfMS5XZWJzb2NrZXRSZXNwb25zZVR5cGUuU3RhcnRlZDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydENicy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IodW5kZWZpbmVkLCByZXNwb25zZS5hdWRpb19jb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1NwZWVjaGx5Q2xpZW50XSBFcnJvciB3aGlsZSBpbnZva2luZyBcIm9uU3RhcnRcIiBjYWxsYmFjazonLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDYnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlc18xLldlYnNvY2tldFJlc3BvbnNlVHlwZS5TdG9wcGVkOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BDYnMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiKHVuZGVmaW5lZCwgcmVzcG9uc2UuYXVkaW9fY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tTcGVlY2hseUNsaWVudF0gRXJyb3Igd2hpbGUgaW52b2tpbmcgXCJvblN0b3BcIiBjYWxsYmFjazonLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcENicy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUmVzcG9uc2VDYihyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbd29ya2VyXzEuZGVmYXVsdF0sIHsgdHlwZTogJ3RleHQvamF2YXNjcmlwdCcgfSk7XG4gICAgICAgIGNvbnN0IGJsb2JVUkwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgdGhpcy53b3JrZXIgPSBuZXcgV29ya2VyKGJsb2JVUkwpO1xuICAgICAgICB0aGlzLndvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vbldlYnNvY2tldE1lc3NhZ2UpO1xuICAgIH1cbiAgICBvblJlc3BvbnNlKGNiKSB7XG4gICAgICAgIHRoaXMub25SZXNwb25zZUNiID0gY2I7XG4gICAgfVxuICAgIG9uQ2xvc2UoY2IpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlQ2IgPSBjYjtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZShhcGlVcmwsIGF1dGhUb2tlbiwgdGFyZ2V0U2FtcGxlUmF0ZSwgZGVidWcpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSU5JVCcsXG4gICAgICAgICAgICAgICAgYXBpVXJsLFxuICAgICAgICAgICAgICAgIGF1dGhUb2tlbixcbiAgICAgICAgICAgICAgICB0YXJnZXRTYW1wbGVSYXRlLFxuICAgICAgICAgICAgICAgIGRlYnVnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlSW5pdGlhbGl6YXRpb24gPSByZXNvbHZlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRTb3VyY2VTYW1wbGVSYXRlKHNvdXJjZVNhbXBsZVJhdGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1NPVVJTRV9TQU1QTEVfUkFURScsXG4gICAgICAgICAgICAgICAgc291cmNlU2FtcGxlUmF0ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVNvdXJjZVNhbXBsZVJhdGVTZXQgPSByZXNvbHZlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQ0xPU0UnLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ2xpZW50IGhhcyBlbmRlZCB0aGUgc2Vzc2lvbicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydENvbnRleHQoYXBwSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydENicy5wdXNoKChlcnIsIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChhcHBJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NUQVJUX0NPTlRFWFQnLCBhcHBJZCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NUQVJUX0NPTlRFWFQnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RvcENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcENicy5wdXNoKChlcnIsIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NUT1BfQ09OVEVYVCcgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN3aXRjaENvbnRleHQoYXBwSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydENicy5wdXNoKChlcnIsIGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NXSVRDSF9DT05URVhUJywgYXBwSWQgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBvc3RNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuICAgIHNlbmRBdWRpbyhhdWRpb0NodW5rKSB7XG4gICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHsgdHlwZTogJ0FVRElPJywgcGF5bG9hZDogYXVkaW9DaHVuayB9KTtcbiAgICB9XG59XG5leHBvcnRzLldlYldvcmtlckNvbnRyb2xsZXIgPSBXZWJXb3JrZXJDb250cm9sbGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2ViV29ya2VyQ29udHJvbGxlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGAvKipcbiAqIEtub3duIFdlYlNvY2tldCByZXNwb25zZSB0eXBlcy5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIFdlYnNvY2tldFJlc3BvbnNlVHlwZTtcbihmdW5jdGlvbiAoV2Vic29ja2V0UmVzcG9uc2VUeXBlKSB7XG4gICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlW1wiT3BlbmVkXCJdID0gXCJXRUJTT0NLRVRfT1BFTlwiO1xuICAgIFdlYnNvY2tldFJlc3BvbnNlVHlwZVtcIlNvdXJjZVNhbXBsZVJhdGVTZXRTdWNjZXNzXCJdID0gXCJTT1VSU0VfU0FNUExFX1JBVEVfU0VUX1NVQ0NFU1NcIjtcbiAgICBXZWJzb2NrZXRSZXNwb25zZVR5cGVbXCJTdGFydGVkXCJdID0gXCJzdGFydGVkXCI7XG4gICAgV2Vic29ja2V0UmVzcG9uc2VUeXBlW1wiU3RvcHBlZFwiXSA9IFwic3RvcHBlZFwiO1xufSkoV2Vic29ja2V0UmVzcG9uc2VUeXBlIHx8IChXZWJzb2NrZXRSZXNwb25zZVR5cGUgPSB7fSkpO1xudmFyIENPTlRST0wgPSB7XG4gICAgV1JJVEVfSU5ERVg6IDAsXG4gICAgRlJBTUVTX0FWQUlMQUJMRTogMSxcbiAgICBMT0NLOiAyXG59O1xudmFyIFdlYnNvY2tldENsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXZWJzb2NrZXRDbGllbnQoY3R4KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaXNDb250ZXh0U3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU3RhcnRDb250ZXh0Q29uZmlybWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvdWxkUmVzZW5kTGFzdEZyYW1lc1NlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KDApO1xuICAgICAgICB0aGlzLmxhc3RGcmFtZXNTZW50ID0gbmV3IEludDE2QXJyYXkoMCk7IC8vIHRvIHJlLXNlbmQgYWZ0ZXIgc3dpdGNoIGNvbnRleHRcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25XZWJzb2NrZXRDbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgX3RoaXMud2Vic29ja2V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgX3RoaXMuY29ubmVjdCgwKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbldlYnNvY2tldE9wZW4gPSBmdW5jdGlvbiAoX2V2ZW50KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZGVidWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1NwZWVjaGx5Q2xpZW50XScsICd3ZWJzb2NrZXQgb3BlbmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNDb250ZXh0U3RhcnRlZCAmJiAhX3RoaXMuaXNTdGFydENvbnRleHRDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZW5kKF90aGlzLm91dGJveCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy53b3JrZXJDdHgucG9zdE1lc3NhZ2UoeyB0eXBlOiAnV0VCU09DS0VUX09QRU4nIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uV2Vic29ja2V0RXJyb3IgPSBmdW5jdGlvbiAoX2V2ZW50KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZGVidWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1NwZWVjaGx5Q2xpZW50XScsICd3ZWJzb2NrZXQgZXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmNsb3NlV2Vic29ja2V0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25XZWJzb2NrZXRNZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignW1NwZWVjaGx5Q2xpZW50XSBFcnJvciBwYXJzaW5nIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlcjonLCBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UudHlwZSA9PT0gV2Vic29ja2V0UmVzcG9uc2VUeXBlLlN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pc1N0YXJ0Q29udGV4dENvbmZpcm1lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnNob3VsZFJlc2VuZExhc3RGcmFtZXNTZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc2VuZExhc3RGcmFtZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2hvdWxkUmVzZW5kTGFzdEZyYW1lc1NlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy53b3JrZXJDdHgucG9zdE1lc3NhZ2UocmVzcG9uc2UpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLndvcmtlckN0eCA9IGN0eDtcbiAgICB9XG4gICAgV2Vic29ja2V0Q2xpZW50LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGFwaVVybCwgYXV0aFRva2VuLCB0YXJnZXRTYW1wbGVSYXRlLCBkZWJ1Zykge1xuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTcGVlY2hseUNsaWVudF0nLCAnYWxyZWFkeSBpbml0aWFsaXplZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgICAgICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3BlZWNobHlDbGllbnRdJywgJ2luaXRpYWxpemUgd29ya2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcGlVcmwgPSBhcGlVcmw7XG4gICAgICAgIHRoaXMuYXV0aFRva2VuID0gYXV0aFRva2VuO1xuICAgICAgICB0aGlzLnRhcmdldFNhbXBsZVJhdGUgPSB0YXJnZXRTYW1wbGVSYXRlO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb25uZWN0KDApO1xuICAgIH07XG4gICAgV2Vic29ja2V0Q2xpZW50LnByb3RvdHlwZS5zZXRTb3VyY2VTYW1wbGVSYXRlID0gZnVuY3Rpb24gKHNvdXJjZVNhbXBsZVJhdGUpIHtcbiAgICAgICAgdGhpcy5zb3VyY2VTYW1wbGVSYXRlID0gc291cmNlU2FtcGxlUmF0ZTtcbiAgICAgICAgdGhpcy5yZXNhbXBsZVJhdGlvID0gdGhpcy5zb3VyY2VTYW1wbGVSYXRlIC8gdGhpcy50YXJnZXRTYW1wbGVSYXRlO1xuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTcGVlY2hseUNsaWVudF0nLCAncmVzYW1wbGVSYXRpbycsIHRoaXMucmVzYW1wbGVSYXRpbyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmVzYW1wbGVSYXRpbyA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyID0gZ2VuZXJhdGVGaWx0ZXIodGhpcy5zb3VyY2VTYW1wbGVSYXRlLCB0aGlzLnRhcmdldFNhbXBsZVJhdGUsIDEyNyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53b3JrZXJDdHgucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU09VUlNFX1NBTVBMRV9SQVRFX1NFVF9TVUNDRVNTJyB9KTtcbiAgICAgICAgaWYgKGlzTmFOKHRoaXMucmVzYW1wbGVSYXRpbykpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwicmVzYW1wbGVSYXRpbyBpcyBOYU4gc291cmNlIHJhdGUgaXMgXCIgKyB0aGlzLnNvdXJjZVNhbXBsZVJhdGUgKyBcIiBhbmQgdGFyZ2V0IHJhdGUgaXMgXCIgKyB0aGlzLnRhcmdldFNhbXBsZVJhdGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXZWJzb2NrZXRDbGllbnQucHJvdG90eXBlLnNldFNoYXJlZEFycmF5QnVmZmVycyA9IGZ1bmN0aW9uIChjb250cm9sU0FCLCBkYXRhU0FCKSB7XG4gICAgICAgIHRoaXMuY29udHJvbFNBQiA9IG5ldyBJbnQzMkFycmF5KGNvbnRyb2xTQUIpO1xuICAgICAgICB0aGlzLmRhdGFTQUIgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGFTQUIpO1xuICAgICAgICB2YXIgYXVkaW9IYW5kbGVJbnRlcnZhbCA9IHRoaXMuZGF0YVNBQi5sZW5ndGggLyAzMjsgLy8gbXNcbiAgICAgICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3BlZWNobHlDbGllbnRdJywgJ0F1ZGlvIGhhbmRsZSBpbnRlcnZhbCcsIGF1ZGlvSGFuZGxlSW50ZXJ2YWwsICdtcycpO1xuICAgICAgICB9XG4gICAgICAgIHNldEludGVydmFsKHRoaXMuc2VuZEF1ZGlvRnJvbVNBQi5iaW5kKHRoaXMpLCBhdWRpb0hhbmRsZUludGVydmFsKTtcbiAgICB9O1xuICAgIFdlYnNvY2tldENsaWVudC5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gICAgICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHsgdGltZW91dCA9IDEwMDA7IH1cbiAgICAgICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3BlZWNobHlDbGllbnRdJywgJ2Nvbm5lY3QgaW4gJywgdGltZW91dCAvIDEwMDAsICdzZWMnKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuaW5pdGlhbGl6ZVdlYnNvY2tldC5iaW5kKHRoaXMpLCB0aW1lb3V0KTtcbiAgICB9O1xuICAgIFdlYnNvY2tldENsaWVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZVdlYnNvY2tldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU3BlZWNobHlDbGllbnRdJywgJ2Nvbm5lY3RpbmcgdG8gJywgdGhpcy5hcGlVcmwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2Vic29ja2V0ID0gbmV3IFdlYlNvY2tldCh0aGlzLmFwaVVybCwgdGhpcy5hdXRoVG9rZW4pO1xuICAgICAgICB0aGlzLndlYnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgdGhpcy5vbldlYnNvY2tldE9wZW4pO1xuICAgICAgICB0aGlzLndlYnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vbldlYnNvY2tldE1lc3NhZ2UpO1xuICAgICAgICB0aGlzLndlYnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMub25XZWJzb2NrZXRFcnJvcik7XG4gICAgICAgIHRoaXMud2Vic29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbldlYnNvY2tldENsb3NlKTtcbiAgICB9O1xuICAgIFdlYnNvY2tldENsaWVudC5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53ZWJzb2NrZXQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLndlYnNvY2tldC5yZWFkeVN0YXRlID09PSB0aGlzLndlYnNvY2tldC5PUEVOO1xuICAgIH07XG4gICAgV2Vic29ja2V0Q2xpZW50LnByb3RvdHlwZS5yZXNlbmRMYXN0RnJhbWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0RnJhbWVzU2VudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmQodGhpcy5sYXN0RnJhbWVzU2VudCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZXNTZW50ID0gbmV3IEludDE2QXJyYXkoMCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlYnNvY2tldENsaWVudC5wcm90b3R5cGUuc2VuZEF1ZGlvID0gZnVuY3Rpb24gKGF1ZGlvQ2h1bmspIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29udGV4dFN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXVkaW9DaHVuay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNhbXBsZVJhdGlvID4gMSkge1xuICAgICAgICAgICAgICAgIC8vIERvd25zYW1wbGluZ1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZCh0aGlzLmRvd25zYW1wbGUoYXVkaW9DaHVuaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kKGZsb2F0MzJUb0ludDE2KGF1ZGlvQ2h1bmspKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgV2Vic29ja2V0Q2xpZW50LnByb3RvdHlwZS5zZW5kQXVkaW9Gcm9tU0FCID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDb250ZXh0U3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sU0FCW0NPTlRST0wuRlJBTUVTX0FWQUlMQUJMRV0gPSAwO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sU0FCW0NPTlRST0wuV1JJVEVfSU5ERVhdID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb250cm9sU0FCID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmcmFtZXNBdmFpbGFibGUgPSB0aGlzLmNvbnRyb2xTQUJbQ09OVFJPTC5GUkFNRVNfQVZBSUxBQkxFXTtcbiAgICAgICAgdmFyIGxvY2sgPSB0aGlzLmNvbnRyb2xTQUJbQ09OVFJPTC5MT0NLXTtcbiAgICAgICAgaWYgKGxvY2sgPT0gMCAmJiBmcmFtZXNBdmFpbGFibGUgPiAwKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YVNBQi5zdWJhcnJheSgwLCBmcmFtZXNBdmFpbGFibGUpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sU0FCW0NPTlRST0wuRlJBTUVTX0FWQUlMQUJMRV0gPSAwO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sU0FCW0NPTlRST0wuV1JJVEVfSU5ERVhdID0gMDtcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJhbWVzXzE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzYW1wbGVSYXRpbyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVzXzEgPSB0aGlzLmRvd25zYW1wbGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZXNfMSA9IGZsb2F0MzJUb0ludDE2KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbmQoZnJhbWVzXzEpO1xuICAgICAgICAgICAgICAgIC8vIDE2MDAwIHBlciBzZWNvbmQsIDEwMDAgaW4gMTAwIG1zXG4gICAgICAgICAgICAgICAgLy8gc2F2ZSBsYXN0IDI1MCBtc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhc3RGcmFtZXNTZW50Lmxlbmd0aCA+IDEwMjQgKiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEZyYW1lc1NlbnQgPSBmcmFtZXNfMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jYXQgPSBuZXcgSW50MTZBcnJheSh0aGlzLmxhc3RGcmFtZXNTZW50Lmxlbmd0aCArIGZyYW1lc18xLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNhdC5zZXQodGhpcy5sYXN0RnJhbWVzU2VudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNhdC5zZXQoZnJhbWVzXzEsIHRoaXMubGFzdEZyYW1lc1NlbnQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWVzU2VudCA9IGNvbmNhdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdlYnNvY2tldENsaWVudC5wcm90b3R5cGUuc3RhcnRDb250ZXh0ID0gZnVuY3Rpb24gKGFwcElkKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29udGV4dFN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW50IHN0YXJ0IGNvbnRleHQ6IGl0IGhhcyBiZWVuIGFscmVhZHkgc3RhcnRlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNDb250ZXh0U3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNTdGFydENvbnRleHRDb25maXJtZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGFwcElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3V0Ym94ID0gSlNPTi5zdHJpbmdpZnkoeyBldmVudDogJ3N0YXJ0JywgYXBwSWQ6IGFwcElkIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vdXRib3ggPSBKU09OLnN0cmluZ2lmeSh7IGV2ZW50OiAnc3RhcnQnIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VuZCh0aGlzLm91dGJveCk7XG4gICAgfTtcbiAgICBXZWJzb2NrZXRDbGllbnQucHJvdG90eXBlLnN0b3BDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy53ZWJzb2NrZXQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignQ2FudCBzdGFydCBjb250ZXh0OiB3ZWJzb2NrZXQgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzQ29udGV4dFN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW50IHN0b3AgY29udGV4dDogaXQgaXMgbm90IHN0YXJ0ZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQ29udGV4dFN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0Q29udGV4dENvbmZpcm1lZCA9IGZhbHNlO1xuICAgICAgICB2YXIgU3RvcEV2ZW50SlNPTiA9IEpTT04uc3RyaW5naWZ5KHsgZXZlbnQ6ICdzdG9wJyB9KTtcbiAgICAgICAgdGhpcy5zZW5kKFN0b3BFdmVudEpTT04pO1xuICAgIH07XG4gICAgV2Vic29ja2V0Q2xpZW50LnByb3RvdHlwZS5zd2l0Y2hDb250ZXh0ID0gZnVuY3Rpb24gKG5ld0FwcElkKSB7XG4gICAgICAgIGlmICh0aGlzLndlYnNvY2tldCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdDYW50IHN3aXRjaCBjb250ZXh0OiB3ZWJzb2NrZXQgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzQ29udGV4dFN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW50IHN3aXRjaCBjb250ZXh0OiBpdCBpcyBub3Qgc3RhcnRlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdBcHBJZCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW50IHN3aXRjaCBjb250ZXh0OiBuZXcgYXBwIGlkIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdGFydENvbnRleHRDb25maXJtZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIFN0b3BFdmVudEpTT04gPSBKU09OLnN0cmluZ2lmeSh7IGV2ZW50OiAnc3RvcCcgfSk7XG4gICAgICAgIHRoaXMuc2VuZChTdG9wRXZlbnRKU09OKTtcbiAgICAgICAgdGhpcy5zaG91bGRSZXNlbmRMYXN0RnJhbWVzU2VudCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VuZChKU09OLnN0cmluZ2lmeSh7IGV2ZW50OiAnc3RhcnQnLCBhcHBJZDogbmV3QXBwSWQgfSkpO1xuICAgIH07XG4gICAgV2Vic29ja2V0Q2xpZW50LnByb3RvdHlwZS5jbG9zZVdlYnNvY2tldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMud2Vic29ja2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdXZWJzb2NrZXQgaXMgbm90IG9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndlYnNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuJywgdGhpcy5vbldlYnNvY2tldE9wZW4pO1xuICAgICAgICB0aGlzLndlYnNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vbldlYnNvY2tldE1lc3NhZ2UpO1xuICAgICAgICB0aGlzLndlYnNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMub25XZWJzb2NrZXRFcnJvcik7XG4gICAgICAgIHRoaXMud2Vic29ja2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbldlYnNvY2tldENsb3NlKTtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuY2xvc2UoKTtcbiAgICB9O1xuICAgIFdlYnNvY2tldENsaWVudC5wcm90b3R5cGUuZG93bnNhbXBsZSA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICB2YXIgaW5wdXRCdWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuYnVmZmVyLmxlbmd0aCArIGlucHV0Lmxlbmd0aCk7XG4gICAgICAgIGlucHV0QnVmZmVyLnNldCh0aGlzLmJ1ZmZlciwgMCk7XG4gICAgICAgIGlucHV0QnVmZmVyLnNldChpbnB1dCwgdGhpcy5idWZmZXIubGVuZ3RoKTtcbiAgICAgICAgdmFyIG91dHB1dExlbmd0aCA9IE1hdGguY2VpbCgoaW5wdXRCdWZmZXIubGVuZ3RoIC0gdGhpcy5maWx0ZXIubGVuZ3RoKSAvIHRoaXMucmVzYW1wbGVSYXRpbyk7XG4gICAgICAgIHZhciBvdXRwdXRCdWZmZXIgPSBuZXcgSW50MTZBcnJheShvdXRwdXRMZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG91dHB1dExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gTWF0aC5yb3VuZCh0aGlzLnJlc2FtcGxlUmF0aW8gKiBpKTtcbiAgICAgICAgICAgIHZhciB2YWwgPSAwLjA7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZmlsdGVyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFsICs9IGlucHV0QnVmZmVyW29mZnNldCArIGpdICogdGhpcy5maWx0ZXJbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvdXRwdXRCdWZmZXJbaV0gPSB2YWwgKiAodmFsIDwgMCA/IDB4ODAwMCA6IDB4N2ZmZik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlbWFpbmluZ09mZnNldCA9IE1hdGgucm91bmQodGhpcy5yZXNhbXBsZVJhdGlvICogb3V0cHV0TGVuZ3RoKTtcbiAgICAgICAgaWYgKHJlbWFpbmluZ09mZnNldCA8IGlucHV0QnVmZmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBpbnB1dEJ1ZmZlci5zdWJhcnJheShyZW1haW5pbmdPZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXRCdWZmZXI7XG4gICAgfTtcbiAgICBXZWJzb2NrZXRDbGllbnQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdDYW50IHNlbmQgZGF0YTogd2Vic29ja2V0IGlzIGluYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1NwZWVjaGx5Q2xpZW50XScsICdTZXJ2ZXIgY29ubmVjdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFdlYnNvY2tldENsaWVudDtcbn0oKSk7XG52YXIgY3R4ID0gc2VsZjtcbnZhciB3ZWJzb2NrZXRDbGllbnQgPSBuZXcgV2Vic29ja2V0Q2xpZW50KGN0eCk7XG5jdHgub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBzd2l0Y2ggKGUuZGF0YS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0lOSVQnOlxuICAgICAgICAgICAgd2Vic29ja2V0Q2xpZW50LmluaXQoZS5kYXRhLmFwaVVybCwgZS5kYXRhLmF1dGhUb2tlbiwgZS5kYXRhLnRhcmdldFNhbXBsZVJhdGUsIGUuZGF0YS5kZWJ1Zyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU0VUX1NPVVJTRV9TQU1QTEVfUkFURSc6XG4gICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc2V0U291cmNlU2FtcGxlUmF0ZShlLmRhdGEuc291cmNlU2FtcGxlUmF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU0VUX1NIQVJFRF9BUlJBWV9CVUZGRVJTJzpcbiAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5zZXRTaGFyZWRBcnJheUJ1ZmZlcnMoZS5kYXRhLmNvbnRyb2xTQUIsIGUuZGF0YS5kYXRhU0FCKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDTE9TRSc6XG4gICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuY2xvc2VXZWJzb2NrZXQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTVEFSVF9DT05URVhUJzpcbiAgICAgICAgICAgIHdlYnNvY2tldENsaWVudC5zdGFydENvbnRleHQoZS5kYXRhLmFwcElkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTV0lUQ0hfQ09OVEVYVCc6XG4gICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc3dpdGNoQ29udGV4dChlLmRhdGEuYXBwSWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NUT1BfQ09OVEVYVCc6XG4gICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc3RvcENvbnRleHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBVURJTyc6XG4gICAgICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc2VuZEF1ZGlvKGUuZGF0YS5wYXlsb2FkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dPUktFUicsIGUpO1xuICAgIH1cbn07XG5mdW5jdGlvbiBmbG9hdDMyVG9JbnQxNihidWZmZXIpIHtcbiAgICB2YXIgYnVmID0gbmV3IEludDE2QXJyYXkoYnVmZmVyLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgbCA9IDA7IGwgPCBidWZmZXIubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgYnVmW2xdID0gYnVmZmVyW2xdICogKGJ1ZmZlcltsXSA8IDAgPyAweDgwMDAgOiAweDdmZmYpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVGaWx0ZXIoc291cmNlU2FtcGxlUmF0ZSwgdGFyZ2V0U2FtcGxlUmF0ZSwgbGVuZ3RoKSB7XG4gICAgaWYgKGxlbmd0aCAlIDIgPT09IDApIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ZpbHRlciBsZW5ndGggbXVzdCBiZSBvZGQnKTtcbiAgICB9XG4gICAgdmFyIGN1dG9mZiA9IHRhcmdldFNhbXBsZVJhdGUgLyAyO1xuICAgIHZhciBmaWx0ZXIgPSBuZXcgRmxvYXQzMkFycmF5KGxlbmd0aCk7XG4gICAgdmFyIHN1bSA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgeCA9IHNpbmMoKCgyICogY3V0b2ZmKSAvIHNvdXJjZVNhbXBsZVJhdGUpICogKGkgLSAobGVuZ3RoIC0gMSkgLyAyKSk7XG4gICAgICAgIHN1bSArPSB4O1xuICAgICAgICBmaWx0ZXJbaV0gPSB4O1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbHRlcltpXSA9IGZpbHRlcltpXSAvIHN1bTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcjtcbn1cbmZ1bmN0aW9uIHNpbmMoeCkge1xuICAgIGlmICh4ID09PSAwLjApIHtcbiAgICAgICAgcmV0dXJuIDEuMDtcbiAgICB9XG4gICAgdmFyIHBpWCA9IE1hdGguUEkgKiB4O1xuICAgIHJldHVybiBNYXRoLnNpbihwaVgpIC8gcGlYO1xufVxuYDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdvcmtlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVTcGVlY2hseVNwZWVjaFJlY29nbml0aW9uID0gdm9pZCAwO1xuY29uc3QgYnJvd3Nlcl9jbGllbnRfMSA9IHJlcXVpcmUoXCJAc3BlZWNobHkvYnJvd3Nlci1jbGllbnRcIik7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG4vKipcbiAqIFJldHVybnMgYSBTcGVlY2hSZWNvZ25pdGlvbiBpbXBsZW1lbnRhdGlvbiB0aGF0IHVzZXMgYSBnaXZlbiBTcGVlY2hseSBhcHAgSURcbiAqIHRvIGdlbmVyYXRlIHRyYW5zY3JpcHRpb25zIHVzaW5nIHRoZSBTcGVlY2hseSBBUElcbiAqXG4gKiBAcGFyYW0gYXBwSWQgLSBTcGVlY2hseSBhcHAgSURcbiAqIEByZXR1cm5zIENsYXNzIHRoYXQgaW1wbGVtZW50cyB0aGUgU3BlZWNoUmVjb2duaXRpb24gaW50ZXJmYWNlXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IGNyZWF0ZVNwZWVjaGx5U3BlZWNoUmVjb2duaXRpb24gPSAoYXBwSWQpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIF9iO1xuICAgIGNvbnN0IGJyb3dzZXJTdXBwb3J0c0F1ZGlvQXBpcyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICgoX2EgPSB3aW5kb3cubmF2aWdhdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWVkaWFEZXZpY2VzKSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICh3aW5kb3cuQXVkaW9Db250ZXh0ICE9PSB1bmRlZmluZWQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCAhPT0gdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gX2IgPSBjbGFzcyBTcGVlY2hseVNwZWVjaFJlY29nbml0aW9uIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50SW5pdGlhbGlzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFib3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zY3JpYmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGludW91cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJpbVJlc3VsdHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9ucmVzdWx0ID0gKCkgPT4geyB9O1xuICAgICAgICAgICAgICAgIHRoaXMub25lbmQgPSAoKSA9PiB7IH07XG4gICAgICAgICAgICAgICAgdGhpcy5vbmVycm9yID0gKCkgPT4geyB9O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFib3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuaW5pdGlhbGlzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5jbGllbnQuc3RhcnRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zY3JpYmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlID09PSBicm93c2VyX2NsaWVudF8xLkVyck5vQXVkaW9Db25zZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmVycm9yKHR5cGVzXzEuTWljcm9waG9uZU5vdEFsbG93ZWRFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uZXJyb3IodHlwZXNfMS5TcGVlY2hSZWNvZ25pdGlvbkZhaWxlZEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5fc3RvcCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWJvcnQgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuX3N0b3AoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpc2UgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jbGllbnRJbml0aWFsaXNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5jbGllbnQuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRJbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9wID0gKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudHJhbnNjcmliaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5pbml0aWFsaXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmNsaWVudC5zdG9wQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2NyaWJpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25lbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0ID0gKHNlZ21lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWJvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pbnRlcmltUmVzdWx0cyAmJiAhc2VnbWVudC5pc0ZpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNjcmlwdCA9IHNlZ21lbnQud29yZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoeCA9PiB4LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcih4ID0+IHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNjcmlwdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlkZW5jZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmluYWw6IHNlZ21lbnQuaXNGaW5hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25yZXN1bHQoeyByZXN1bHRzLCByZXN1bHRJbmRleDogMCB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRpbnVvdXMgJiYgc2VnbWVudC5pc0ZpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFib3J0KCkuY2F0Y2goKCkgPT4geyB9KTsgLy8gc3dhbGxvdyBlcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnQgPSBuZXcgYnJvd3Nlcl9jbGllbnRfMS5DbGllbnQoeyBhcHBJZCB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudC5vblNlZ21lbnRDaGFuZ2UodGhpcy5oYW5kbGVSZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfYi5oYXNCcm93c2VyU3VwcG9ydCA9IGJyb3dzZXJTdXBwb3J0c0F1ZGlvQXBpcyxcbiAgICAgICAgX2I7XG59O1xuZXhwb3J0cy5jcmVhdGVTcGVlY2hseVNwZWVjaFJlY29nbml0aW9uID0gY3JlYXRlU3BlZWNobHlTcGVlY2hSZWNvZ25pdGlvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuY3JlYXRlU3BlZWNobHlTcGVlY2hSZWNvZ25pdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZVNwZWVjaFJlY29nbml0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBBIHBvbHlmaWxsIChhIFwie0BsaW5rIGh0dHBzOi8vcG9ueWZvby5jb20vYXJ0aWNsZXMvcG9seWZpbGxzLW9yLXBvbnlmaWxscyB8IHBvbnlmaWxsfVwiIHRvIGJlIG1vcmUgcHJlY2lzZSkgZm9yIHRoZVxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TcGVlY2hSZWNvZ25pdGlvbiB8IFNwZWVjaFJlY29nbml0aW9uIEFQSX0gdGhhdCB1c2VzXG4gKiB7QGxpbmsgaHR0cHM6Ly93d3cuc3BlZWNobHkuY29tLyB8IFNwZWVjaGx5fSB0byBpbXBsZW1lbnQgdGhlIHRyYW5zY3JpcHRpb24gZnVuY3Rpb25hbGl0eVxuICpcbiAqIEByZW1hcmtzXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU3BlZWNoUmVjb2duaXRpb24gfCBTcGVlY2hSZWNvZ25pdGlvbiBzcGVjfVxuICogaXMgaW5jb21wbGV0ZSwgYnV0IHNob3VsZCBlbmFibGUgdGhlIG1ham9yaXR5IG9mIHVzZSBjYXNlc1xuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jcmVhdGVTcGVlY2hSZWNvZ25pdGlvblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNwZWVjaFJlY29nbml0aW9uRmFpbGVkRXJyb3IgPSBleHBvcnRzLk1pY3JvcGhvbmVOb3RBbGxvd2VkRXJyb3IgPSB2b2lkIDA7XG4vKipcbiAqIEVycm9yIGVtaXR0ZWQgd2hlbiB0aGUgdXNlciBkb2VzIG5vdCBnaXZlIHBlcm1pc3Npb24gdG8gdXNlIHRoZSBtaWNyb3Bob25lXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMuTWljcm9waG9uZU5vdEFsbG93ZWRFcnJvciA9IHtcbiAgICBlcnJvcjogJ25vdC1hbGxvd2VkJyxcbiAgICBtZXNzYWdlOiAnVXNlciBkaWQgbm90IGdpdmUgcGVybWlzc2lvbiB0byB1c2UgdGhlIG1pY3JvcGhvbmUnLFxufTtcbi8qKlxuICogR2VuZXJpYyBlcnJvciB3aGVuIHNwZWVjaCByZWNvZ25pdGlvbiBmYWlscyBkdWUgdG8gYW4gdW5rbm93biBjYXVzZVxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLlNwZWVjaFJlY29nbml0aW9uRmFpbGVkRXJyb3IgPSB7XG4gICAgZXJyb3I6ICdhdWRpby1jYXB0dXJlJyxcbiAgICBtZXNzYWdlOiAnU3BlZWNoIHJlY29nbml0aW9uIGZhaWxlZCcsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZXMuanMubWFwIiwiLyohIGh0dHA6Ly9tdGhzLmJlL2Jhc2U2NCB2MC4xLjAgYnkgQG1hdGhpYXMgfCBNSVQgbGljZW5zZSAqL1xuOyhmdW5jdGlvbihyb290KSB7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGVzIGBleHBvcnRzYC5cblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cztcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC5cblx0dmFyIGZyZWVNb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJlxuXHRcdG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzICYmIG1vZHVsZTtcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCwgZnJvbSBOb2RlLmpzIG9yIEJyb3dzZXJpZmllZCBjb2RlLCBhbmQgdXNlXG5cdC8vIGl0IGFzIGByb290YC5cblx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcblx0aWYgKGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsKSB7XG5cdFx0cm9vdCA9IGZyZWVHbG9iYWw7XG5cdH1cblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHR2YXIgSW52YWxpZENoYXJhY3RlckVycm9yID0gZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH07XG5cdEludmFsaWRDaGFyYWN0ZXJFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5cdEludmFsaWRDaGFyYWN0ZXJFcnJvci5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5cdHZhciBlcnJvciA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHQvLyBOb3RlOiB0aGUgZXJyb3IgbWVzc2FnZXMgdXNlZCB0aHJvdWdob3V0IHRoaXMgZmlsZSBtYXRjaCB0aG9zZSB1c2VkIGJ5XG5cdFx0Ly8gdGhlIG5hdGl2ZSBgYXRvYmAvYGJ0b2FgIGltcGxlbWVudGF0aW9uIGluIENocm9taXVtLlxuXHRcdHRocm93IG5ldyBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IobWVzc2FnZSk7XG5cdH07XG5cblx0dmFyIFRBQkxFID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXHQvLyBodHRwOi8vd2hhdHdnLm9yZy9odG1sL2NvbW1vbi1taWNyb3N5bnRheGVzLmh0bWwjc3BhY2UtY2hhcmFjdGVyXG5cdHZhciBSRUdFWF9TUEFDRV9DSEFSQUNURVJTID0gL1tcXHRcXG5cXGZcXHIgXS9nO1xuXG5cdC8vIGBkZWNvZGVgIGlzIGRlc2lnbmVkIHRvIGJlIGZ1bGx5IGNvbXBhdGlibGUgd2l0aCBgYXRvYmAgYXMgZGVzY3JpYmVkIGluIHRoZVxuXHQvLyBIVE1MIFN0YW5kYXJkLiBodHRwOi8vd2hhdHdnLm9yZy9odG1sL3dlYmFwcGFwaXMuaHRtbCNkb20td2luZG93YmFzZTY0LWF0b2Jcblx0Ly8gVGhlIG9wdGltaXplZCBiYXNlNjQtZGVjb2RpbmcgYWxnb3JpdGhtIHVzZWQgaXMgYmFzZWQgb24gQGF0a+KAmXMgZXhjZWxsZW50XG5cdC8vIGltcGxlbWVudGF0aW9uLiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9hdGsvMTAyMDM5NlxuXHR2YXIgZGVjb2RlID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0XHRpbnB1dCA9IFN0cmluZyhpbnB1dClcblx0XHRcdC5yZXBsYWNlKFJFR0VYX1NQQUNFX0NIQVJBQ1RFUlMsICcnKTtcblx0XHR2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXHRcdGlmIChsZW5ndGggJSA0ID09IDApIHtcblx0XHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZSgvPT0/JC8sICcnKTtcblx0XHRcdGxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblx0XHR9XG5cdFx0aWYgKFxuXHRcdFx0bGVuZ3RoICUgNCA9PSAxIHx8XG5cdFx0XHQvLyBodHRwOi8vd2hhdHdnLm9yZy9DI2FscGhhbnVtZXJpYy1hc2NpaS1jaGFyYWN0ZXJzXG5cdFx0XHQvW14rYS16QS1aMC05L10vLnRlc3QoaW5wdXQpXG5cdFx0KSB7XG5cdFx0XHRlcnJvcihcblx0XHRcdFx0J0ludmFsaWQgY2hhcmFjdGVyOiB0aGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLidcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHZhciBiaXRDb3VudGVyID0gMDtcblx0XHR2YXIgYml0U3RvcmFnZTtcblx0XHR2YXIgYnVmZmVyO1xuXHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHR2YXIgcG9zaXRpb24gPSAtMTtcblx0XHR3aGlsZSAoKytwb3NpdGlvbiA8IGxlbmd0aCkge1xuXHRcdFx0YnVmZmVyID0gVEFCTEUuaW5kZXhPZihpbnB1dC5jaGFyQXQocG9zaXRpb24pKTtcblx0XHRcdGJpdFN0b3JhZ2UgPSBiaXRDb3VudGVyICUgNCA/IGJpdFN0b3JhZ2UgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlcjtcblx0XHRcdC8vIFVubGVzcyB0aGlzIGlzIHRoZSBmaXJzdCBvZiBhIGdyb3VwIG9mIDQgY2hhcmFjdGVyc+KAplxuXHRcdFx0aWYgKGJpdENvdW50ZXIrKyAlIDQpIHtcblx0XHRcdFx0Ly8g4oCmY29udmVydCB0aGUgZmlyc3QgOCBiaXRzIHRvIGEgc2luZ2xlIEFTQ0lJIGNoYXJhY3Rlci5cblx0XHRcdFx0b3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG5cdFx0XHRcdFx0MHhGRiAmIGJpdFN0b3JhZ2UgPj4gKC0yICogYml0Q291bnRlciAmIDYpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH07XG5cblx0Ly8gYGVuY29kZWAgaXMgZGVzaWduZWQgdG8gYmUgZnVsbHkgY29tcGF0aWJsZSB3aXRoIGBidG9hYCBhcyBkZXNjcmliZWQgaW4gdGhlXG5cdC8vIEhUTUwgU3RhbmRhcmQ6IGh0dHA6Ly93aGF0d2cub3JnL2h0bWwvd2ViYXBwYXBpcy5odG1sI2RvbS13aW5kb3diYXNlNjQtYnRvYVxuXHR2YXIgZW5jb2RlID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0XHRpbnB1dCA9IFN0cmluZyhpbnB1dCk7XG5cdFx0aWYgKC9bXlxcMC1cXHhGRl0vLnRlc3QoaW5wdXQpKSB7XG5cdFx0XHQvLyBOb3RlOiBubyBuZWVkIHRvIHNwZWNpYWwtY2FzZSBhc3RyYWwgc3ltYm9scyBoZXJlLCBhcyBzdXJyb2dhdGVzIGFyZVxuXHRcdFx0Ly8gbWF0Y2hlZCwgYW5kIHRoZSBpbnB1dCBpcyBzdXBwb3NlZCB0byBvbmx5IGNvbnRhaW4gQVNDSUkgYW55d2F5LlxuXHRcdFx0ZXJyb3IoXG5cdFx0XHRcdCdUaGUgc3RyaW5nIHRvIGJlIGVuY29kZWQgY29udGFpbnMgY2hhcmFjdGVycyBvdXRzaWRlIG9mIHRoZSAnICtcblx0XHRcdFx0J0xhdGluMSByYW5nZS4nXG5cdFx0XHQpO1xuXHRcdH1cblx0XHR2YXIgcGFkZGluZyA9IGlucHV0Lmxlbmd0aCAlIDM7XG5cdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdHZhciBwb3NpdGlvbiA9IC0xO1xuXHRcdHZhciBhO1xuXHRcdHZhciBiO1xuXHRcdHZhciBjO1xuXHRcdHZhciBkO1xuXHRcdHZhciBidWZmZXI7XG5cdFx0Ly8gTWFrZSBzdXJlIGFueSBwYWRkaW5nIGlzIGhhbmRsZWQgb3V0c2lkZSBvZiB0aGUgbG9vcC5cblx0XHR2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoIC0gcGFkZGluZztcblxuXHRcdHdoaWxlICgrK3Bvc2l0aW9uIDwgbGVuZ3RoKSB7XG5cdFx0XHQvLyBSZWFkIHRocmVlIGJ5dGVzLCBpLmUuIDI0IGJpdHMuXG5cdFx0XHRhID0gaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbikgPDwgMTY7XG5cdFx0XHRiID0gaW5wdXQuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKSA8PCA4O1xuXHRcdFx0YyA9IGlucHV0LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG5cdFx0XHRidWZmZXIgPSBhICsgYiArIGM7XG5cdFx0XHQvLyBUdXJuIHRoZSAyNCBiaXRzIGludG8gZm91ciBjaHVua3Mgb2YgNiBiaXRzIGVhY2gsIGFuZCBhcHBlbmQgdGhlXG5cdFx0XHQvLyBtYXRjaGluZyBjaGFyYWN0ZXIgZm9yIGVhY2ggb2YgdGhlbSB0byB0aGUgb3V0cHV0LlxuXHRcdFx0b3V0cHV0ICs9IChcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiAxOCAmIDB4M0YpICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiAxMiAmIDB4M0YpICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiA2ICYgMHgzRikgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyICYgMHgzRilcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKHBhZGRpbmcgPT0gMikge1xuXHRcdFx0YSA9IGlucHV0LmNoYXJDb2RlQXQocG9zaXRpb24pIDw8IDg7XG5cdFx0XHRiID0gaW5wdXQuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcblx0XHRcdGJ1ZmZlciA9IGEgKyBiO1xuXHRcdFx0b3V0cHV0ICs9IChcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiAxMCkgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoKGJ1ZmZlciA+PiA0KSAmIDB4M0YpICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KChidWZmZXIgPDwgMikgJiAweDNGKSArXG5cdFx0XHRcdCc9J1xuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHBhZGRpbmcgPT0gMSkge1xuXHRcdFx0YnVmZmVyID0gaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbik7XG5cdFx0XHRvdXRwdXQgKz0gKFxuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyID4+IDIpICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KChidWZmZXIgPDwgNCkgJiAweDNGKSArXG5cdFx0XHRcdCc9PSdcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fTtcblxuXHR2YXIgYmFzZTY0ID0ge1xuXHRcdCdlbmNvZGUnOiBlbmNvZGUsXG5cdFx0J2RlY29kZSc6IGRlY29kZSxcblx0XHQndmVyc2lvbic6ICcwLjEuMCdcblx0fTtcblxuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBiYXNlNjQ7XG5cdFx0fSk7XG5cdH1cdGVsc2UgaWYgKGZyZWVFeHBvcnRzICYmICFmcmVlRXhwb3J0cy5ub2RlVHlwZSkge1xuXHRcdGlmIChmcmVlTW9kdWxlKSB7IC8vIGluIE5vZGUuanMgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBiYXNlNjQ7XG5cdFx0fSBlbHNlIHsgLy8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdGZvciAodmFyIGtleSBpbiBiYXNlNjQpIHtcblx0XHRcdFx0YmFzZTY0Lmhhc093blByb3BlcnR5KGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSBiYXNlNjRba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgeyAvLyBpbiBSaGlubyBvciBhIHdlYiBicm93c2VyXG5cdFx0cm9vdC5iYXNlNjQgPSBiYXNlNjQ7XG5cdH1cblxufSh0aGlzKSk7XG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgSXNvMzE2NjFhMiwgbW91dCwgc2luZ2xldG9uO1xyXG5cclxuICAgIG1vdXQgPSByZXF1aXJlKCdtb3V0L29iamVjdCcpO1xyXG5cclxuICAgIElzbzMxNjYxYTIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gSXNvMzE2NjFhMigpIHt9XHJcblxyXG4gICAgICAgIElzbzMxNjYxYTIucHJvdG90eXBlLmdldENvdW50cnkgPSBmdW5jdGlvbihjb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBJc28zMTY2MWEyLnByb3RvdHlwZS5jb3VudHJpZXNbY29kZV07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgSXNvMzE2NjFhMi5wcm90b3R5cGUuZ2V0Q29kZSA9IGZ1bmN0aW9uKGNvdW50cnkpIHtcclxuICAgICAgICAgICAgdmFyIGlkeCwgcmV0O1xyXG4gICAgICAgICAgICByZXQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoY291bnRyeSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZHggPSBtb3V0LnZhbHVlcyhJc28zMTY2MWEyLnByb3RvdHlwZS5jb3VudHJpZXMpLmluZGV4T2YoY291bnRyeSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCA9IE9iamVjdC5rZXlzKElzbzMxNjYxYTIucHJvdG90eXBlLmNvdW50cmllcylbaWR4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIElzbzMxNjYxYTIucHJvdG90eXBlLmdldENvdW50cmllcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW91dC52YWx1ZXMoSXNvMzE2NjFhMi5wcm90b3R5cGUuY291bnRyaWVzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBJc28zMTY2MWEyLnByb3RvdHlwZS5nZXRDb2RlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoSXNvMzE2NjFhMi5wcm90b3R5cGUuY291bnRyaWVzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBJc28zMTY2MWEyLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBJc28zMTY2MWEyLnByb3RvdHlwZS5jb3VudHJpZXM7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgSXNvMzE2NjFhMi5wcm90b3R5cGUuY291bnRyaWVzID0ge1xyXG4gICAgICAgICAgICBBRjogXCJBZmdoYW5pc3RhblwiLFxyXG4gICAgICAgICAgICBBWDogXCLDhWxhbmQgSXNsYW5kc1wiLFxyXG4gICAgICAgICAgICBBTDogXCJBbGJhbmlhXCIsXHJcbiAgICAgICAgICAgIERaOiBcIkFsZ2VyaWFcIixcclxuICAgICAgICAgICAgQVM6IFwiQW1lcmljYW4gU2Ftb2FcIixcclxuICAgICAgICAgICAgQUQ6IFwiQW5kb3JyYVwiLFxyXG4gICAgICAgICAgICBBTzogXCJBbmdvbGFcIixcclxuICAgICAgICAgICAgQUk6IFwiQW5ndWlsbGFcIixcclxuICAgICAgICAgICAgQVE6IFwiQW50YXJjdGljYVwiLFxyXG4gICAgICAgICAgICBBRzogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsXHJcbiAgICAgICAgICAgIEFSOiBcIkFyZ2VudGluYVwiLFxyXG4gICAgICAgICAgICBBTTogXCJBcm1lbmlhXCIsXHJcbiAgICAgICAgICAgIEFXOiBcIkFydWJhXCIsXHJcbiAgICAgICAgICAgIEFVOiBcIkF1c3RyYWxpYVwiLFxyXG4gICAgICAgICAgICBBVDogXCJBdXN0cmlhXCIsXHJcbiAgICAgICAgICAgIEFaOiBcIkF6ZXJiYWlqYW5cIixcclxuICAgICAgICAgICAgQlM6IFwiQmFoYW1hc1wiLFxyXG4gICAgICAgICAgICBCSDogXCJCYWhyYWluXCIsXHJcbiAgICAgICAgICAgIEJEOiBcIkJhbmdsYWRlc2hcIixcclxuICAgICAgICAgICAgQkI6IFwiQmFyYmFkb3NcIixcclxuICAgICAgICAgICAgQlk6IFwiQmVsYXJ1c1wiLFxyXG4gICAgICAgICAgICBCRTogXCJCZWxnaXVtXCIsXHJcbiAgICAgICAgICAgIEJaOiBcIkJlbGl6ZVwiLFxyXG4gICAgICAgICAgICBCSjogXCJCZW5pblwiLFxyXG4gICAgICAgICAgICBCTTogXCJCZXJtdWRhXCIsXHJcbiAgICAgICAgICAgIEJUOiBcIkJodXRhblwiLFxyXG4gICAgICAgICAgICBCTzogXCJCb2xpdmlhLCBQbHVyaW5hdGlvbmFsIFN0YXRlIG9mXCIsXHJcbiAgICAgICAgICAgIEJROiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsXHJcbiAgICAgICAgICAgIEJBOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIixcclxuICAgICAgICAgICAgQlc6IFwiQm90c3dhbmFcIixcclxuICAgICAgICAgICAgQlY6IFwiQm91dmV0IElzbGFuZFwiLFxyXG4gICAgICAgICAgICBCUjogXCJCcmF6aWxcIixcclxuICAgICAgICAgICAgSU86IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsXHJcbiAgICAgICAgICAgIEJOOiBcIkJydW5laSBEYXJ1c3NhbGFtXCIsXHJcbiAgICAgICAgICAgIEJHOiBcIkJ1bGdhcmlhXCIsXHJcbiAgICAgICAgICAgIEJGOiBcIkJ1cmtpbmEgRmFzb1wiLFxyXG4gICAgICAgICAgICBCSTogXCJCdXJ1bmRpXCIsXHJcbiAgICAgICAgICAgIEtIOiBcIkNhbWJvZGlhXCIsXHJcbiAgICAgICAgICAgIENNOiBcIkNhbWVyb29uXCIsXHJcbiAgICAgICAgICAgIENBOiBcIkNhbmFkYVwiLFxyXG4gICAgICAgICAgICBDVjogXCJDYXBlIFZlcmRlXCIsXHJcbiAgICAgICAgICAgIEtZOiBcIkNheW1hbiBJc2xhbmRzXCIsXHJcbiAgICAgICAgICAgIENGOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLFxyXG4gICAgICAgICAgICBURDogXCJDaGFkXCIsXHJcbiAgICAgICAgICAgIENMOiBcIkNoaWxlXCIsXHJcbiAgICAgICAgICAgIENOOiBcIkNoaW5hXCIsXHJcbiAgICAgICAgICAgIENYOiBcIkNocmlzdG1hcyBJc2xhbmRcIixcclxuICAgICAgICAgICAgQ0M6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIixcclxuICAgICAgICAgICAgQ086IFwiQ29sb21iaWFcIixcclxuICAgICAgICAgICAgS006IFwiQ29tb3Jvc1wiLFxyXG4gICAgICAgICAgICBDRzogXCJDb25nb1wiLFxyXG4gICAgICAgICAgICBDRDogXCJDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsXHJcbiAgICAgICAgICAgIENLOiBcIkNvb2sgSXNsYW5kc1wiLFxyXG4gICAgICAgICAgICBDUjogXCJDb3N0YSBSaWNhXCIsXHJcbiAgICAgICAgICAgIENJOiBcIkPDtHRlIGQnSXZvaXJlXCIsXHJcbiAgICAgICAgICAgIEhSOiBcIkNyb2F0aWFcIixcclxuICAgICAgICAgICAgQ1U6IFwiQ3ViYVwiLFxyXG4gICAgICAgICAgICBDVzogXCJDdXJhw6dhb1wiLFxyXG4gICAgICAgICAgICBDWTogXCJDeXBydXNcIixcclxuICAgICAgICAgICAgQ1o6IFwiQ3plY2ggUmVwdWJsaWNcIixcclxuICAgICAgICAgICAgREs6IFwiRGVubWFya1wiLFxyXG4gICAgICAgICAgICBESjogXCJEamlib3V0aVwiLFxyXG4gICAgICAgICAgICBETTogXCJEb21pbmljYVwiLFxyXG4gICAgICAgICAgICBETzogXCJEb21pbmljYW4gUmVwdWJsaWNcIixcclxuICAgICAgICAgICAgRUM6IFwiRWN1YWRvclwiLFxyXG4gICAgICAgICAgICBFRzogXCJFZ3lwdFwiLFxyXG4gICAgICAgICAgICBTVjogXCJFbCBTYWx2YWRvclwiLFxyXG4gICAgICAgICAgICBHUTogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLFxyXG4gICAgICAgICAgICBFUjogXCJFcml0cmVhXCIsXHJcbiAgICAgICAgICAgIEVFOiBcIkVzdG9uaWFcIixcclxuICAgICAgICAgICAgRVQ6IFwiRXRoaW9waWFcIixcclxuICAgICAgICAgICAgRks6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCIsXHJcbiAgICAgICAgICAgIEZPOiBcIkZhcm9lIElzbGFuZHNcIixcclxuICAgICAgICAgICAgRko6IFwiRmlqaVwiLFxyXG4gICAgICAgICAgICBGSTogXCJGaW5sYW5kXCIsXHJcbiAgICAgICAgICAgIEZSOiBcIkZyYW5jZVwiLFxyXG4gICAgICAgICAgICBHRjogXCJGcmVuY2ggR3VpYW5hXCIsXHJcbiAgICAgICAgICAgIFBGOiBcIkZyZW5jaCBQb2x5bmVzaWFcIixcclxuICAgICAgICAgICAgVEY6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCIsXHJcbiAgICAgICAgICAgIEdBOiBcIkdhYm9uXCIsXHJcbiAgICAgICAgICAgIEdNOiBcIkdhbWJpYVwiLFxyXG4gICAgICAgICAgICBHRTogXCJHZW9yZ2lhXCIsXHJcbiAgICAgICAgICAgIERFOiBcIkdlcm1hbnlcIixcclxuICAgICAgICAgICAgR0g6IFwiR2hhbmFcIixcclxuICAgICAgICAgICAgR0k6IFwiR2licmFsdGFyXCIsXHJcbiAgICAgICAgICAgIEdSOiBcIkdyZWVjZVwiLFxyXG4gICAgICAgICAgICBHTDogXCJHcmVlbmxhbmRcIixcclxuICAgICAgICAgICAgR0Q6IFwiR3JlbmFkYVwiLFxyXG4gICAgICAgICAgICBHUDogXCJHdWFkZWxvdXBlXCIsXHJcbiAgICAgICAgICAgIEdVOiBcIkd1YW1cIixcclxuICAgICAgICAgICAgR1Q6IFwiR3VhdGVtYWxhXCIsXHJcbiAgICAgICAgICAgIEdHOiBcIkd1ZXJuc2V5XCIsXHJcbiAgICAgICAgICAgIEdOOiBcIkd1aW5lYVwiLFxyXG4gICAgICAgICAgICBHVzogXCJHdWluZWEtQmlzc2F1XCIsXHJcbiAgICAgICAgICAgIEdZOiBcIkd1eWFuYVwiLFxyXG4gICAgICAgICAgICBIVDogXCJIYWl0aVwiLFxyXG4gICAgICAgICAgICBITTogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIE1jZG9uYWxkIElzbGFuZHNcIixcclxuICAgICAgICAgICAgVkE6IFwiSG9seSBTZWUgKFZhdGljYW4gQ2l0eSBTdGF0ZSlcIixcclxuICAgICAgICAgICAgSE46IFwiSG9uZHVyYXNcIixcclxuICAgICAgICAgICAgSEs6IFwiSG9uZyBLb25nXCIsXHJcbiAgICAgICAgICAgIEhVOiBcIkh1bmdhcnlcIixcclxuICAgICAgICAgICAgSVM6IFwiSWNlbGFuZFwiLFxyXG4gICAgICAgICAgICBJTjogXCJJbmRpYVwiLFxyXG4gICAgICAgICAgICBJRDogXCJJbmRvbmVzaWFcIixcclxuICAgICAgICAgICAgSVI6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLFxyXG4gICAgICAgICAgICBJUTogXCJJcmFxXCIsXHJcbiAgICAgICAgICAgIElFOiBcIklyZWxhbmRcIixcclxuICAgICAgICAgICAgSU06IFwiSXNsZSBvZiBNYW5cIixcclxuICAgICAgICAgICAgSUw6IFwiSXNyYWVsXCIsXHJcbiAgICAgICAgICAgIElUOiBcIkl0YWx5XCIsXHJcbiAgICAgICAgICAgIEpNOiBcIkphbWFpY2FcIixcclxuICAgICAgICAgICAgSlA6IFwiSmFwYW5cIixcclxuICAgICAgICAgICAgSkU6IFwiSmVyc2V5XCIsXHJcbiAgICAgICAgICAgIEpPOiBcIkpvcmRhblwiLFxyXG4gICAgICAgICAgICBLWjogXCJLYXpha2hzdGFuXCIsXHJcbiAgICAgICAgICAgIEtFOiBcIktlbnlhXCIsXHJcbiAgICAgICAgICAgIEtJOiBcIktpcmliYXRpXCIsXHJcbiAgICAgICAgICAgIEtQOiBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsXHJcbiAgICAgICAgICAgIEtSOiBcIktvcmVhLCBSZXB1YmxpYyBvZlwiLFxyXG4gICAgICAgICAgICBLVzogXCJLdXdhaXRcIixcclxuICAgICAgICAgICAgS0c6IFwiS3lyZ3l6c3RhblwiLFxyXG4gICAgICAgICAgICBMQTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLFxyXG4gICAgICAgICAgICBMVjogXCJMYXR2aWFcIixcclxuICAgICAgICAgICAgTEI6IFwiTGViYW5vblwiLFxyXG4gICAgICAgICAgICBMUzogXCJMZXNvdGhvXCIsXHJcbiAgICAgICAgICAgIExSOiBcIkxpYmVyaWFcIixcclxuICAgICAgICAgICAgTFk6IFwiTGlieWFcIixcclxuICAgICAgICAgICAgTEk6IFwiTGllY2h0ZW5zdGVpblwiLFxyXG4gICAgICAgICAgICBMVDogXCJMaXRodWFuaWFcIixcclxuICAgICAgICAgICAgTFU6IFwiTHV4ZW1ib3VyZ1wiLFxyXG4gICAgICAgICAgICBNTzogXCJNYWNhb1wiLFxyXG4gICAgICAgICAgICBNSzogXCJNYWNlZG9uaWEsIHRoZSBGb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2ZcIixcclxuICAgICAgICAgICAgTUc6IFwiTWFkYWdhc2NhclwiLFxyXG4gICAgICAgICAgICBNVzogXCJNYWxhd2lcIixcclxuICAgICAgICAgICAgTVk6IFwiTWFsYXlzaWFcIixcclxuICAgICAgICAgICAgTVY6IFwiTWFsZGl2ZXNcIixcclxuICAgICAgICAgICAgTUw6IFwiTWFsaVwiLFxyXG4gICAgICAgICAgICBNVDogXCJNYWx0YVwiLFxyXG4gICAgICAgICAgICBNSDogXCJNYXJzaGFsbCBJc2xhbmRzXCIsXHJcbiAgICAgICAgICAgIE1ROiBcIk1hcnRpbmlxdWVcIixcclxuICAgICAgICAgICAgTVI6IFwiTWF1cml0YW5pYVwiLFxyXG4gICAgICAgICAgICBNVTogXCJNYXVyaXRpdXNcIixcclxuICAgICAgICAgICAgWVQ6IFwiTWF5b3R0ZVwiLFxyXG4gICAgICAgICAgICBNWDogXCJNZXhpY29cIixcclxuICAgICAgICAgICAgRk06IFwiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZlwiLFxyXG4gICAgICAgICAgICBNRDogXCJNb2xkb3ZhLCBSZXB1YmxpYyBvZlwiLFxyXG4gICAgICAgICAgICBNQzogXCJNb25hY29cIixcclxuICAgICAgICAgICAgTU46IFwiTW9uZ29saWFcIixcclxuICAgICAgICAgICAgTUU6IFwiTW9udGVuZWdyb1wiLFxyXG4gICAgICAgICAgICBNUzogXCJNb250c2VycmF0XCIsXHJcbiAgICAgICAgICAgIE1BOiBcIk1vcm9jY29cIixcclxuICAgICAgICAgICAgTVo6IFwiTW96YW1iaXF1ZVwiLFxyXG4gICAgICAgICAgICBNTTogXCJNeWFubWFyXCIsXHJcbiAgICAgICAgICAgIE5BOiBcIk5hbWliaWFcIixcclxuICAgICAgICAgICAgTlI6IFwiTmF1cnVcIixcclxuICAgICAgICAgICAgTlA6IFwiTmVwYWxcIixcclxuICAgICAgICAgICAgTkw6IFwiTmV0aGVybGFuZHNcIixcclxuICAgICAgICAgICAgTkM6IFwiTmV3IENhbGVkb25pYVwiLFxyXG4gICAgICAgICAgICBOWjogXCJOZXcgWmVhbGFuZFwiLFxyXG4gICAgICAgICAgICBOSTogXCJOaWNhcmFndWFcIixcclxuICAgICAgICAgICAgTkU6IFwiTmlnZXJcIixcclxuICAgICAgICAgICAgTkc6IFwiTmlnZXJpYVwiLFxyXG4gICAgICAgICAgICBOVTogXCJOaXVlXCIsXHJcbiAgICAgICAgICAgIE5GOiBcIk5vcmZvbGsgSXNsYW5kXCIsXHJcbiAgICAgICAgICAgIE1QOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLFxyXG4gICAgICAgICAgICBOTzogXCJOb3J3YXlcIixcclxuICAgICAgICAgICAgT006IFwiT21hblwiLFxyXG4gICAgICAgICAgICBQSzogXCJQYWtpc3RhblwiLFxyXG4gICAgICAgICAgICBQVzogXCJQYWxhdVwiLFxyXG4gICAgICAgICAgICBQUzogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsXHJcbiAgICAgICAgICAgIFBBOiBcIlBhbmFtYVwiLFxyXG4gICAgICAgICAgICBQRzogXCJQYXB1YSBOZXcgR3VpbmVhXCIsXHJcbiAgICAgICAgICAgIFBZOiBcIlBhcmFndWF5XCIsXHJcbiAgICAgICAgICAgIFBFOiBcIlBlcnVcIixcclxuICAgICAgICAgICAgUEg6IFwiUGhpbGlwcGluZXNcIixcclxuICAgICAgICAgICAgUE46IFwiUGl0Y2Fpcm5cIixcclxuICAgICAgICAgICAgUEw6IFwiUG9sYW5kXCIsXHJcbiAgICAgICAgICAgIFBUOiBcIlBvcnR1Z2FsXCIsXHJcbiAgICAgICAgICAgIFBSOiBcIlB1ZXJ0byBSaWNvXCIsXHJcbiAgICAgICAgICAgIFFBOiBcIlFhdGFyXCIsXHJcbiAgICAgICAgICAgIFJFOiBcIlLDqXVuaW9uXCIsXHJcbiAgICAgICAgICAgIFJPOiBcIlJvbWFuaWFcIixcclxuICAgICAgICAgICAgUlU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsXHJcbiAgICAgICAgICAgIFJXOiBcIlJ3YW5kYVwiLFxyXG4gICAgICAgICAgICBCTDogXCJTYWludCBCYXJ0aMOpbGVteVwiLFxyXG4gICAgICAgICAgICBTSDogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLFxyXG4gICAgICAgICAgICBLTjogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIixcclxuICAgICAgICAgICAgTEM6IFwiU2FpbnQgTHVjaWFcIixcclxuICAgICAgICAgICAgTUY6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIixcclxuICAgICAgICAgICAgUE06IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLFxyXG4gICAgICAgICAgICBWQzogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLFxyXG4gICAgICAgICAgICBXUzogXCJTYW1vYVwiLFxyXG4gICAgICAgICAgICBTTTogXCJTYW4gTWFyaW5vXCIsXHJcbiAgICAgICAgICAgIFNUOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLFxyXG4gICAgICAgICAgICBTQTogXCJTYXVkaSBBcmFiaWFcIixcclxuICAgICAgICAgICAgU046IFwiU2VuZWdhbFwiLFxyXG4gICAgICAgICAgICBSUzogXCJTZXJiaWFcIixcclxuICAgICAgICAgICAgU0M6IFwiU2V5Y2hlbGxlc1wiLFxyXG4gICAgICAgICAgICBTTDogXCJTaWVycmEgTGVvbmVcIixcclxuICAgICAgICAgICAgU0c6IFwiU2luZ2Fwb3JlXCIsXHJcbiAgICAgICAgICAgIFNYOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIixcclxuICAgICAgICAgICAgU0s6IFwiU2xvdmFraWFcIixcclxuICAgICAgICAgICAgU0k6IFwiU2xvdmVuaWFcIixcclxuICAgICAgICAgICAgU0I6IFwiU29sb21vbiBJc2xhbmRzXCIsXHJcbiAgICAgICAgICAgIFNPOiBcIlNvbWFsaWFcIixcclxuICAgICAgICAgICAgWkE6IFwiU291dGggQWZyaWNhXCIsXHJcbiAgICAgICAgICAgIEdTOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsXHJcbiAgICAgICAgICAgIFNTOiBcIlNvdXRoIFN1ZGFuXCIsXHJcbiAgICAgICAgICAgIEVTOiBcIlNwYWluXCIsXHJcbiAgICAgICAgICAgIExLOiBcIlNyaSBMYW5rYVwiLFxyXG4gICAgICAgICAgICBTRDogXCJTdWRhblwiLFxyXG4gICAgICAgICAgICBTUjogXCJTdXJpbmFtZVwiLFxyXG4gICAgICAgICAgICBTSjogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsXHJcbiAgICAgICAgICAgIFNaOiBcIlN3YXppbGFuZFwiLFxyXG4gICAgICAgICAgICBTRTogXCJTd2VkZW5cIixcclxuICAgICAgICAgICAgQ0g6IFwiU3dpdHplcmxhbmRcIixcclxuICAgICAgICAgICAgU1k6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIixcclxuICAgICAgICAgICAgVFc6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwiLFxyXG4gICAgICAgICAgICBUSjogXCJUYWppa2lzdGFuXCIsXHJcbiAgICAgICAgICAgIFRaOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIixcclxuICAgICAgICAgICAgVEg6IFwiVGhhaWxhbmRcIixcclxuICAgICAgICAgICAgVEw6IFwiVGltb3ItTGVzdGVcIixcclxuICAgICAgICAgICAgVEc6IFwiVG9nb1wiLFxyXG4gICAgICAgICAgICBUSzogXCJUb2tlbGF1XCIsXHJcbiAgICAgICAgICAgIFRPOiBcIlRvbmdhXCIsXHJcbiAgICAgICAgICAgIFRUOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIixcclxuICAgICAgICAgICAgVE46IFwiVHVuaXNpYVwiLFxyXG4gICAgICAgICAgICBUUjogXCJUdXJrZXlcIixcclxuICAgICAgICAgICAgVE06IFwiVHVya21lbmlzdGFuXCIsXHJcbiAgICAgICAgICAgIFRDOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLFxyXG4gICAgICAgICAgICBUVjogXCJUdXZhbHVcIixcclxuICAgICAgICAgICAgVUc6IFwiVWdhbmRhXCIsXHJcbiAgICAgICAgICAgIFVBOiBcIlVrcmFpbmVcIixcclxuICAgICAgICAgICAgQUU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIixcclxuICAgICAgICAgICAgR0I6IFwiVW5pdGVkIEtpbmdkb21cIixcclxuICAgICAgICAgICAgVVM6IFwiVW5pdGVkIFN0YXRlc1wiLFxyXG4gICAgICAgICAgICBVTTogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIixcclxuICAgICAgICAgICAgVVk6IFwiVXJ1Z3VheVwiLFxyXG4gICAgICAgICAgICBVWjogXCJVemJla2lzdGFuXCIsXHJcbiAgICAgICAgICAgIFZVOiBcIlZhbnVhdHVcIixcclxuICAgICAgICAgICAgVkU6IFwiVmVuZXp1ZWxhLCBCb2xpdmFyaWFuIFJlcHVibGljIG9mXCIsXHJcbiAgICAgICAgICAgIFZOOiBcIlZpZXQgTmFtXCIsXHJcbiAgICAgICAgICAgIFZHOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsXHJcbiAgICAgICAgICAgIFZJOiBcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsXHJcbiAgICAgICAgICAgIFdGOiBcIldhbGxpcyBhbmQgRnV0dW5hXCIsXHJcbiAgICAgICAgICAgIEVIOiBcIldlc3Rlcm4gU2FoYXJhXCIsXHJcbiAgICAgICAgICAgIFlFOiBcIlllbWVuXCIsXHJcbiAgICAgICAgICAgIFpNOiBcIlphbWJpYVwiLFxyXG4gICAgICAgICAgICBaVzogXCJaaW1iYWJ3ZVwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIElzbzMxNjYxYTI7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICBzaW5nbGV0b24gPSBudWxsO1xyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBzaW5nbGV0b24gIT0gbnVsbCA/IHNpbmdsZXRvbiA6IHNpbmdsZXRvbiA9IG5ldyBJc28zMTY2MWEyKCk7XHJcbiAgICB9KSgpO1xyXG5cclxufSkuY2FsbCh0aGlzKTtcclxuIiwiY29uc3QgTEFOR1VBR0VTX1pIX05BTUVTID0ge1xuICBhYTogJ+mYv+azleWwlOivrScsXG4gIGFiOiAn6Zi/5biD5ZOI5YW56K+tJyxcbiAgYWU6ICfpmL/nu7Tmlq/pmYDor60nLFxuICBhZjogJ+WNl+mdnuiNt+WFsOivrScsXG4gIGFrOiAn6Zi/5Z2O6K+tJyxcbiAgYW06ICfpmL/lp4blk4jmi4nor60nLFxuICBhbjogJ+mYv+aLiei0oeivrScsXG4gIGFyOiAn6Zi/5ouJ5Lyv6K+tJyxcbiAgYXM6ICfpmL/okKjlp4bor60nLFxuICBhdjogJ+mYv+eTpuWwlOivrScsXG4gIGF5OiAn6Im+6ams5ouJ6K+tJyxcbiAgYXo6ICfpmL/loZ7mi5znlobor60nLFxuICBiYTogJ+W3tOS7gOWfuuWwlOivrScsXG4gIGJlOiAn55m95L+E572X5pav6K+tJyxcbiAgYmc6ICfkv53liqDliKnkupror60nLFxuICBiaDogJ+avlOWTiOWwlOivrScsXG4gIGJpOiAn5q+U5pav5ouJ6ams6K+tJyxcbiAgYm06ICfnj63lt7Tmi4nor60nLFxuICBibjogJ+Wtn+WKoOaLieivrScsXG4gIGJvOiAn6JeP6K+tJyxcbiAgYnI6ICfluIPliJfloZTlsLzor60nLFxuICBiczogJ+azouaWr+WwvOS6muivrScsXG4gIGNhOiAn5Yqg5rOw572X5bC85Lqa6K+tJyxcbiAgY2U6ICfovaboh6Por60nLFxuICBjaDogJ+afpeiOq+a0m+ivrScsXG4gIGNvOiAn56eR6KW/5ZiJ6K+tJyxcbiAgY3I6ICflhYvph4zor60nLFxuICBjczogJ+aNt+WFi+ivrScsXG4gIGN1OiAn5Y+k5pWZ5Lya5pav5ouJ5aSr6K+tJyxcbiAgY3Y6ICfmpZrnk6bku4Dor60nLFxuICBjeTogJ+WogeWwlOWjq+ivrScsXG4gIGRhOiAn5Li56bqm6K+tJyxcbiAgZGU6ICflvrfor60nLFxuICBkdjogJ+i/que7tOW4jOivrScsXG4gIGR6OiAn5LiN5Li56K+tJyxcbiAgZWU6ICfln4Pnu7Tor60nLFxuICBlbDogJ+W4jOiFiuivrScsXG4gIGVuOiAn6Iux6K+tJyxcbiAgZW86ICfkuJbnlYzor60nLFxuICBlczogJ+ilv+ePreeJmeivrScsXG4gIGV0OiAn54ix5rKZ5bC85Lqa6K+tJyxcbiAgZXU6ICflt7Tmlq/lhYvor60nLFxuICBmYTogJ+azouaWr+ivrScsXG4gIGZmOiAn5a+M5ouJ6K+tJyxcbiAgZmk6ICfoiqzlhbDor60nLFxuICBmajogJ+aWkOa1juivrScsXG4gIGZvOiAn5rOV572X6K+tJyxcbiAgZnI6ICfms5Xor60nLFxuICBmeTogJ+ilv+W8l+mHjOilv+S6muivrScsXG4gIGdhOiAn54ix5bCU5YWw6K+tJyxcbiAgZ2Q6ICfoi4/moLzlhbDnm5blsJTor60nLFxuICBnbDogJ+WKoOWIqeilv+S6muivrScsXG4gIGduOiAn55Oc5ouJ5bC86K+tJyxcbiAgZ3U6ICflj6TlkInmi4nnibnor60nLFxuICBndjogJ+mprOaBqeWym+ivrScsXG4gIGhhOiAn6LGq6JCo6K+tJyxcbiAgaGU6ICfluIzkvK/mnaXor60nLFxuICBoaTogJ+WNsOWcsOivrScsXG4gIGhvOiAn6I6r5Zu+6K+tJyxcbiAgaHI6ICflhYvnvZflnLDkupror60nLFxuICBodDogJ+a1t+WcsOaWhycsXG4gIGh1OiAn5YyI54mZ5Yip6K+tJyxcbiAgaHk6ICfkuprnvo7lsLzkupror60nLFxuICBoejogJ+i1q+WLkuWohOivrScsXG4gIGlhOiAn5Zu96ZmF6K+tJyxcbiAgaWQ6ICfljbDlsLzor60nLFxuICBpZTogJ+WbvemZheivrScsXG4gIGlnOiAn5LyK5Y2a6K+tJyxcbiAgaWk6ICfor7roi4/or60nLFxuICBpazogJ+S+neWltOearue7tOWFi+aWhycsXG4gIGlvOiAn5LyK5aSa5paHJyxcbiAgaXM6ICflhrDlspvor60nLFxuICBpdDogJ+aEj+Wkp+WIqeivrScsXG4gIGl1OiAn5Zug57q954m56K+tJyxcbiAgamE6ICfml6Xor60nLFxuICBqdjogJ+eIquWTh+ivrScsXG4gIGthOiAn5qC86bKB5ZCJ5Lqa6K+tJyxcbiAga2c6ICfliJrmnpzor60nLFxuICBraTogJ+WfuuW6k+WwpOivrScsXG4gIGtqOiAn5a695Lqa6ams6K+tJyxcbiAga2s6ICflk4jokKjlhYvor60nLFxuICBrbDogJ+agvOmZteWFsOivrScsXG4gIGttOiAn6auY5qOJ6K+tJyxcbiAga246ICfljaHnurPovr7or60nLFxuICBrbzogJ+mfqeivrScsXG4gIGtyOiAn5Y2h5Yqq6YeM6K+tJyxcbiAga3M6ICflhYvku4DnsbPlsJTor60nLFxuICBrdTogJ+W6k+WwlOW+t+ivrScsXG4gIGt2OiAn56eR57Gz6K+tJyxcbiAga3c6ICfnp5HlsLzku4Dor60nLFxuICBreTogJ+WQieWwlOWQieaWr+ivrScsXG4gIGxhOiAn5ouJ5LiB6K+tJyxcbiAgbGI6ICfljaLmo67loKHor60nLFxuICBsZzogJ+eUmOi+vuivrScsXG4gIGxpOiAn5p6X5aCh6K+tJyxcbiAgbG46ICfmnpfliqDmi4nor60nLFxuICBsbzogJ+iAgeaMneivrScsXG4gIGx0OiAn56uL6Zm25a6b6K+tJyxcbiAgbHU6ICfljaLlt7TliqDkuLnliqDor60nLFxuICBsdjogJ+aLieiEsee7tOS6muivrScsXG4gIG1nOiAn6ams5bCU5Yqg5LuA6K+tJyxcbiAgbWg6ICfpqaznu43lsJTor60nLFxuICBtaTogJ+avm+WIqeivrScsXG4gIG1rOiAn6ams5YW26aG/6K+tJyxcbiAgbWw6ICfpqazmi4npm4Xmi4nlp4bor60nLFxuICBtbjogJ+iSmeWPpOaWhycsXG4gIG1yOiAn6ams5ouJ5Zyw6K+tJyxcbiAgbXM6ICfpqazmnaXor60nLFxuICBtdDogJ+mprOiAs+S7luivrScsXG4gIG15OiAn57yF55S46K+tJyxcbiAgbmE6ICfnkZnpsoHor60nLFxuICBuYjogJ+aMquWogeWNmuWFi+mprOWwlOivrScsXG4gIG5kOiAn5YyX5oGp5b636LSd5YuS6K+tJyxcbiAgbmU6ICflsLzms4rlsJTor60nLFxuICBuZzogJ+WwvOaXpeWwlOWImuaenOivrScsXG4gIG5sOiAn6I235YWw6K+tJyxcbiAgbm46ICfmjKrlqIHlsLzor7rmlq/lhYvor60nLFxuICBubzogJ+aMquWogeivrScsXG4gIG5yOiAn5Y2X5oGp5b636LSd5YuS6K+tJyxcbiAgbnY6ICfnurPnk6bpnI3or60nLFxuICBueTogJ+m9kOWIh+eTpuivrScsXG4gIG9jOiAn5aWl5YWL6KW/5ZSQ6K+tJyxcbiAgb2o6ICfmrKflj4rluIPlqIHor60nLFxuICBvbTogJ+Wlpee9l+iOq+ivrScsXG4gIG9yOiAn5aWl6YeM5Lqa6K+tJyxcbiAgb3M6ICflpaXloZ7moq/or60nLFxuICBwYTogJ+aXgemBruaZruivrScsXG4gIHBpOiAn5be05Yip6K+tJyxcbiAgcGw6ICfms6LlhbDor60nLFxuICBwczogJ+aZruS7gOWbvuivrScsXG4gIHB0OiAn6JGh6JCE54mZ6K+tJyxcbiAgcXU6ICflhYvkuJjkupror60nLFxuICBybTogJ+e9l+abvOaWr+ivrScsXG4gIHJuOiAn5Z+66ZqG6L+q6K+tJyxcbiAgcm86ICfnvZfpqazlsLzkupror60nLFxuICBydTogJ+S/hOivrScsXG4gIHJ3OiAn5Y2i5pe66L6+6K+tJyxcbiAgc2E6ICfmorXmlocnLFxuICBzYzogJ+aSkuS4geWym+ivrScsXG4gIHNkOiAn5L+h5b636K+tJyxcbiAgc2U6ICfljJfokKjnsbPmlocnLFxuICBzZzogJ+ahkeaIiOivrScsXG4gIHNpOiAn5YOn5Ly9572X6K+tJyxcbiAgc2s6ICfmlq/mtJvkvJDlhYvor60nLFxuICBzbDogJ+aWr+a0m+aWh+WwvOS6muivrScsXG4gIHNtOiAn6JCo5pGp5Lqa6K+tJyxcbiAgc246ICfnu43nurPor60nLFxuICBzbzogJ+e0oumprOmHjOivrScsXG4gIHNxOiAn6Zi/5bCU5be05bC85Lqa6K+tJyxcbiAgc3I6ICfloZ7lsJTnu7Tkupror60nLFxuICBzczogJ+aWr+eTpuiSguivrScsXG4gIHN0OiAn5Y2X57Si5omY6K+tJyxcbiAgc3U6ICflt73ku5bor60nLFxuICBzdjogJ+eRnuWFuOivrScsXG4gIHN3OiAn5pav55Om5biM6YeM6K+tJyxcbiAgdGE6ICfms7DnsbPlsJTor60nLFxuICB0ZTogJ+azsOWNouWbuuivrScsXG4gIHRnOiAn5aGU5ZCJ5YWL6K+tJyxcbiAgdGg6ICfms7Dor60nLFxuICB0aTogJ+aPkOagvOmbt+ivrScsXG4gIHRrOiAn5Zyf5bqT5pu86K+tJyxcbiAgdGw6ICfoj7Llvovlrr7or60nLFxuICB0bjogJ+iMqOeTpue6s+ivrScsXG4gIHRvOiAn5rGk5Yqg6K+tJyxcbiAgdHI6ICflnJ/ogLPlhbbor60nLFxuICB0czogJ+eJueadvuWKoOivrScsXG4gIHR0OiAn5aGU5aGU5bCU6K+tJyxcbiAgdHc6ICflpZHnu7Tor60nLFxuICB0eTogJ+WhlOW4jOaPkOivrScsXG4gIHVnOiAn57u05ZC+5bCU6K+tJyxcbiAgdWs6ICfkuYzlhYvlhbDor60nLFxuICB1cjogJ+S5jOWwlOmDveivrScsXG4gIHV6OiAn5LmM5YW55Yir5YWL6K+tJyxcbiAgdmU6ICfmlofovr7or60nLFxuICB2aTogJ+i2iuWNl+ivrScsXG4gIHZvOiAn5rKD5ouJ5pmu5YWL6K+tJyxcbiAgd2E6ICfljY7pmobor60nLFxuICB3bzogJ+ayg+a0m+Wkq+ivrScsXG4gIHhoOiAn56eR6JCo6K+tJyxcbiAgeWk6ICfmhI/nrKznu6ror60nLFxuICB5bzogJ+e6pumygeW3tOivrScsXG4gIHphOiAn5aOu6K+tJyxcbiAgemg6ICfkuK3mlocnLFxuICB6dTogJ+ellumygeivrScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMQU5HVUFHRVNfWkhfTkFNRVM7XG4iLCJpbXBvcnQgSVNPNjM5MSBmcm9tICdpc28tNjM5LTEnO1xuaW1wb3J0IExBTkdVQUdFU19aSF9OQU1FUyBmcm9tICcuL2RhdGEuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJU082MzkxWkggZXh0ZW5kcyBJU082MzkxIHtcbiAgc3RhdGljIGdldExhbmd1YWdlcyhjb2Rlcykge1xuICAgIHJldHVybiBzdXBlci5nZXRMYW5ndWFnZXMoY29kZXMpLm1hcChsYW5ndWFnZSA9PiB7XG4gICAgICBPYmplY3QuYXNzaWduKGxhbmd1YWdlLCB7XG4gICAgICAgIHpoTmFtZTogSVNPNjM5MVpILmdldFpoTmFtZShsYW5ndWFnZS5jb2RlKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGxhbmd1YWdlO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldFpoTmFtZShjb2RlKSB7XG4gICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKGNvZGUpID8gTEFOR1VBR0VTX1pIX05BTUVTW2NvZGVdIDogJyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0QWxsWmhOYW1lcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhMQU5HVUFHRVNfWkhfTkFNRVMpO1xuICB9XG59XG4iLCJjb25zdCBMQU5HVUFHRVNfTElTVCA9IHtcbiAgYWE6IHtcbiAgICBuYW1lOiAnQWZhcicsXG4gICAgbmF0aXZlTmFtZTogJ0FmYXJhZicsXG4gIH0sXG4gIGFiOiB7XG4gICAgbmFtZTogJ0Fia2hheicsXG4gICAgbmF0aXZlTmFtZTogJ9Cw0qfRgdGD0LAg0LHRi9C30YjTmdCwJyxcbiAgfSxcbiAgYWU6IHtcbiAgICBuYW1lOiAnQXZlc3RhbicsXG4gICAgbmF0aXZlTmFtZTogJ2F2ZXN0YScsXG4gIH0sXG4gIGFmOiB7XG4gICAgbmFtZTogJ0FmcmlrYWFucycsXG4gICAgbmF0aXZlTmFtZTogJ0FmcmlrYWFucycsXG4gIH0sXG4gIGFrOiB7XG4gICAgbmFtZTogJ0FrYW4nLFxuICAgIG5hdGl2ZU5hbWU6ICdBa2FuJyxcbiAgfSxcbiAgYW06IHtcbiAgICBuYW1lOiAnQW1oYXJpYycsXG4gICAgbmF0aXZlTmFtZTogJ+GKoOGIm+GIreGKmycsXG4gIH0sXG4gIGFuOiB7XG4gICAgbmFtZTogJ0FyYWdvbmVzZScsXG4gICAgbmF0aXZlTmFtZTogJ2FyYWdvbsOpcycsXG4gIH0sXG4gIGFyOiB7XG4gICAgbmFtZTogJ0FyYWJpYycsXG4gICAgbmF0aXZlTmFtZTogJ9in2YTZhNi62Kkg2KfZhNi52LHYqNmK2KknLFxuICB9LFxuICBhczoge1xuICAgIG5hbWU6ICdBc3NhbWVzZScsXG4gICAgbmF0aXZlTmFtZTogJ+CmheCmuOCmruCngOCmr+CmvOCmvicsXG4gIH0sXG4gIGF2OiB7XG4gICAgbmFtZTogJ0F2YXJpYycsXG4gICAgbmF0aXZlTmFtZTogJ9Cw0LLQsNGAINC80LDRhtOAJyxcbiAgfSxcbiAgYXk6IHtcbiAgICBuYW1lOiAnQXltYXJhJyxcbiAgICBuYXRpdmVOYW1lOiAnYXltYXIgYXJ1JyxcbiAgfSxcbiAgYXo6IHtcbiAgICBuYW1lOiAnQXplcmJhaWphbmknLFxuICAgIG5hdGl2ZU5hbWU6ICdhesmZcmJheWNhbiBkaWxpJyxcbiAgfSxcbiAgYmE6IHtcbiAgICBuYW1lOiAnQmFzaGtpcicsXG4gICAgbmF0aXZlTmFtZTogJ9Cx0LDRiNKh0L7RgNGCINGC0LXQu9C1JyxcbiAgfSxcbiAgYmU6IHtcbiAgICBuYW1lOiAnQmVsYXJ1c2lhbicsXG4gICAgbmF0aXZlTmFtZTogJ9Cx0LXQu9Cw0YDRg9GB0LrQsNGPINC80L7QstCwJyxcbiAgfSxcbiAgYmc6IHtcbiAgICBuYW1lOiAnQnVsZ2FyaWFuJyxcbiAgICBuYXRpdmVOYW1lOiAn0LHRitC70LPQsNGA0YHQutC4INC10LfQuNC6JyxcbiAgfSxcbiAgYmg6IHtcbiAgICBuYW1lOiAnQmloYXJpJyxcbiAgICBuYXRpdmVOYW1lOiAn4KSt4KWL4KSc4KSq4KWB4KSw4KWAJyxcbiAgfSxcbiAgYmk6IHtcbiAgICBuYW1lOiAnQmlzbGFtYScsXG4gICAgbmF0aXZlTmFtZTogJ0Jpc2xhbWEnLFxuICB9LFxuICBibToge1xuICAgIG5hbWU6ICdCYW1iYXJhJyxcbiAgICBuYXRpdmVOYW1lOiAnYmFtYW5hbmthbicsXG4gIH0sXG4gIGJuOiB7XG4gICAgbmFtZTogJ0JlbmdhbGknLFxuICAgIG5hdGl2ZU5hbWU6ICfgpqzgpr7gpoLgprLgpr4nLFxuICB9LFxuICBibzoge1xuICAgIG5hbWU6ICdUaWJldGFuJyxcbiAgICBuYXRpdmVOYW1lOiAn4L2W4L284L2R4LyL4L2h4L2y4L2CJyxcbiAgfSxcbiAgYnI6IHtcbiAgICBuYW1lOiAnQnJldG9uJyxcbiAgICBuYXRpdmVOYW1lOiAnYnJlemhvbmVnJyxcbiAgfSxcbiAgYnM6IHtcbiAgICBuYW1lOiAnQm9zbmlhbicsXG4gICAgbmF0aXZlTmFtZTogJ2Jvc2Fuc2tpIGplemlrJyxcbiAgfSxcbiAgY2E6IHtcbiAgICBuYW1lOiAnQ2F0YWxhbicsXG4gICAgbmF0aXZlTmFtZTogJ0NhdGFsw6AnLFxuICB9LFxuICBjZToge1xuICAgIG5hbWU6ICdDaGVjaGVuJyxcbiAgICBuYXRpdmVOYW1lOiAn0L3QvtGF0YfQuNC50L0g0LzQvtGC0YInLFxuICB9LFxuICBjaDoge1xuICAgIG5hbWU6ICdDaGFtb3JybycsXG4gICAgbmF0aXZlTmFtZTogJ0NoYW1vcnUnLFxuICB9LFxuICBjbzoge1xuICAgIG5hbWU6ICdDb3JzaWNhbicsXG4gICAgbmF0aXZlTmFtZTogJ2NvcnN1JyxcbiAgfSxcbiAgY3I6IHtcbiAgICBuYW1lOiAnQ3JlZScsXG4gICAgbmF0aXZlTmFtZTogJ+GTgOGQpuGQg+GUreGQjeGQj+GQoycsXG4gIH0sXG4gIGNzOiB7XG4gICAgbmFtZTogJ0N6ZWNoJyxcbiAgICBuYXRpdmVOYW1lOiAnxI1lxaF0aW5hJyxcbiAgfSxcbiAgY3U6IHtcbiAgICBuYW1lOiAnT2xkIENodXJjaCBTbGF2b25pYycsXG4gICAgbmF0aXZlTmFtZTogJ9Gp0LfRi9C60Yog0YHQu9C+0LLRo9C90YzRgdC60YonLFxuICB9LFxuICBjdjoge1xuICAgIG5hbWU6ICdDaHV2YXNoJyxcbiAgICBuYXRpdmVOYW1lOiAn0YfTkdCy0LDRiCDRh9OX0LvRhdC4JyxcbiAgfSxcbiAgY3k6IHtcbiAgICBuYW1lOiAnV2Vsc2gnLFxuICAgIG5hdGl2ZU5hbWU6ICdDeW1yYWVnJyxcbiAgfSxcbiAgZGE6IHtcbiAgICBuYW1lOiAnRGFuaXNoJyxcbiAgICBuYXRpdmVOYW1lOiAnZGFuc2snLFxuICB9LFxuICBkZToge1xuICAgIG5hbWU6ICdHZXJtYW4nLFxuICAgIG5hdGl2ZU5hbWU6ICdEZXV0c2NoJyxcbiAgfSxcbiAgZHY6IHtcbiAgICBuYW1lOiAnRGl2ZWhpJyxcbiAgICBuYXRpdmVOYW1lOiAnRGhpdmVoaScsXG4gIH0sXG4gIGR6OiB7XG4gICAgbmFtZTogJ0R6b25na2hhJyxcbiAgICBuYXRpdmVOYW1lOiAn4L2i4L6r4L284L2E4LyL4L2BJyxcbiAgfSxcbiAgZWU6IHtcbiAgICBuYW1lOiAnRXdlJyxcbiAgICBuYXRpdmVOYW1lOiAnRcqLZWdiZScsXG4gIH0sXG4gIGVsOiB7XG4gICAgbmFtZTogJ0dyZWVrJyxcbiAgICBuYXRpdmVOYW1lOiAnzpXOu867zrfOvc65zrrOrCcsXG4gIH0sXG4gIGVuOiB7XG4gICAgbmFtZTogJ0VuZ2xpc2gnLFxuICAgIG5hdGl2ZU5hbWU6ICdFbmdsaXNoJyxcbiAgfSxcbiAgZW86IHtcbiAgICBuYW1lOiAnRXNwZXJhbnRvJyxcbiAgICBuYXRpdmVOYW1lOiAnRXNwZXJhbnRvJyxcbiAgfSxcbiAgZXM6IHtcbiAgICBuYW1lOiAnU3BhbmlzaCcsXG4gICAgbmF0aXZlTmFtZTogJ0VzcGHDsW9sJyxcbiAgfSxcbiAgZXQ6IHtcbiAgICBuYW1lOiAnRXN0b25pYW4nLFxuICAgIG5hdGl2ZU5hbWU6ICdlZXN0aScsXG4gIH0sXG4gIGV1OiB7XG4gICAgbmFtZTogJ0Jhc3F1ZScsXG4gICAgbmF0aXZlTmFtZTogJ2V1c2thcmEnLFxuICB9LFxuICBmYToge1xuICAgIG5hbWU6ICdQZXJzaWFuJyxcbiAgICBuYXRpdmVOYW1lOiAn2YHYp9ix2LPbjCcsXG4gIH0sXG4gIGZmOiB7XG4gICAgbmFtZTogJ0Z1bGEnLFxuICAgIG5hdGl2ZU5hbWU6ICdGdWxmdWxkZScsXG4gIH0sXG4gIGZpOiB7XG4gICAgbmFtZTogJ0Zpbm5pc2gnLFxuICAgIG5hdGl2ZU5hbWU6ICdzdW9taScsXG4gIH0sXG4gIGZqOiB7XG4gICAgbmFtZTogJ0ZpamlhbicsXG4gICAgbmF0aXZlTmFtZTogJ1Zha2F2aXRpJyxcbiAgfSxcbiAgZm86IHtcbiAgICBuYW1lOiAnRmFyb2VzZScsXG4gICAgbmF0aXZlTmFtZTogJ2bDuHJveXNrdCcsXG4gIH0sXG4gIGZyOiB7XG4gICAgbmFtZTogJ0ZyZW5jaCcsXG4gICAgbmF0aXZlTmFtZTogJ0ZyYW7Dp2FpcycsXG4gIH0sXG4gIGZ5OiB7XG4gICAgbmFtZTogJ1dlc3Rlcm4gRnJpc2lhbicsXG4gICAgbmF0aXZlTmFtZTogJ0ZyeXNrJyxcbiAgfSxcbiAgZ2E6IHtcbiAgICBuYW1lOiAnSXJpc2gnLFxuICAgIG5hdGl2ZU5hbWU6ICdHYWVpbGdlJyxcbiAgfSxcbiAgZ2Q6IHtcbiAgICBuYW1lOiAnU2NvdHRpc2ggR2FlbGljJyxcbiAgICBuYXRpdmVOYW1lOiAnR8OgaWRobGlnJyxcbiAgfSxcbiAgZ2w6IHtcbiAgICBuYW1lOiAnR2FsaWNpYW4nLFxuICAgIG5hdGl2ZU5hbWU6ICdnYWxlZ28nLFxuICB9LFxuICBnbjoge1xuICAgIG5hbWU6ICdHdWFyYW7DrScsXG4gICAgbmF0aXZlTmFtZTogXCJBdmHDsWUn4bq9XCIsXG4gIH0sXG4gIGd1OiB7XG4gICAgbmFtZTogJ0d1amFyYXRpJyxcbiAgICBuYXRpdmVOYW1lOiAn4KqX4KuB4Kqc4Kqw4Kq+4Kqk4KuAJyxcbiAgfSxcbiAgZ3Y6IHtcbiAgICBuYW1lOiAnTWFueCcsXG4gICAgbmF0aXZlTmFtZTogJ0dhZWxnJyxcbiAgfSxcbiAgaGE6IHtcbiAgICBuYW1lOiAnSGF1c2EnLFxuICAgIG5hdGl2ZU5hbWU6ICfZh9mO2YjZj9iz2Y4nLFxuICB9LFxuICBoZToge1xuICAgIG5hbWU6ICdIZWJyZXcnLFxuICAgIG5hdGl2ZU5hbWU6ICfXoteR16jXmdeqJyxcbiAgfSxcbiAgaGk6IHtcbiAgICBuYW1lOiAnSGluZGknLFxuICAgIG5hdGl2ZU5hbWU6ICfgpLngpL/gpKjgpY3gpKbgpYAnLFxuICB9LFxuICBobzoge1xuICAgIG5hbWU6ICdIaXJpIE1vdHUnLFxuICAgIG5hdGl2ZU5hbWU6ICdIaXJpIE1vdHUnLFxuICB9LFxuICBocjoge1xuICAgIG5hbWU6ICdDcm9hdGlhbicsXG4gICAgbmF0aXZlTmFtZTogJ0hydmF0c2tpJyxcbiAgfSxcbiAgaHQ6IHtcbiAgICBuYW1lOiAnSGFpdGlhbicsXG4gICAgbmF0aXZlTmFtZTogJ0tyZXnDsmwgYXlpc3llbicsXG4gIH0sXG4gIGh1OiB7XG4gICAgbmFtZTogJ0h1bmdhcmlhbicsXG4gICAgbmF0aXZlTmFtZTogJ21hZ3lhcicsXG4gIH0sXG4gIGh5OiB7XG4gICAgbmFtZTogJ0FybWVuaWFuJyxcbiAgICBuYXRpdmVOYW1lOiAn1YDVodW11aXWgNWl1bYnLFxuICB9LFxuICBoejoge1xuICAgIG5hbWU6ICdIZXJlcm8nLFxuICAgIG5hdGl2ZU5hbWU6ICdPdGppaGVyZXJvJyxcbiAgfSxcbiAgaWE6IHtcbiAgICBuYW1lOiAnSW50ZXJsaW5ndWEnLFxuICAgIG5hdGl2ZU5hbWU6ICdJbnRlcmxpbmd1YScsXG4gIH0sXG4gIGlkOiB7XG4gICAgbmFtZTogJ0luZG9uZXNpYW4nLFxuICAgIG5hdGl2ZU5hbWU6ICdCYWhhc2EgSW5kb25lc2lhJyxcbiAgfSxcbiAgaWU6IHtcbiAgICBuYW1lOiAnSW50ZXJsaW5ndWUnLFxuICAgIG5hdGl2ZU5hbWU6ICdJbnRlcmxpbmd1ZScsXG4gIH0sXG4gIGlnOiB7XG4gICAgbmFtZTogJ0lnYm8nLFxuICAgIG5hdGl2ZU5hbWU6ICdBc+G7pXPhu6UgSWdibycsXG4gIH0sXG4gIGlpOiB7XG4gICAgbmFtZTogJ051b3N1JyxcbiAgICBuYXRpdmVOYW1lOiAn6oaI6oyg6pK/IE51b3N1aHhvcCcsXG4gIH0sXG4gIGlrOiB7XG4gICAgbmFtZTogJ0ludXBpYXEnLFxuICAgIG5hdGl2ZU5hbWU6ICdJw7F1cGlhcScsXG4gIH0sXG4gIGlvOiB7XG4gICAgbmFtZTogJ0lkbycsXG4gICAgbmF0aXZlTmFtZTogJ0lkbycsXG4gIH0sXG4gIGlzOiB7XG4gICAgbmFtZTogJ0ljZWxhbmRpYycsXG4gICAgbmF0aXZlTmFtZTogJ8ONc2xlbnNrYScsXG4gIH0sXG4gIGl0OiB7XG4gICAgbmFtZTogJ0l0YWxpYW4nLFxuICAgIG5hdGl2ZU5hbWU6ICdJdGFsaWFubycsXG4gIH0sXG4gIGl1OiB7XG4gICAgbmFtZTogJ0ludWt0aXR1dCcsXG4gICAgbmF0aXZlTmFtZTogJ+GQg+GThOGSg+GRjuGRkOGRpicsXG4gIH0sXG4gIGphOiB7XG4gICAgbmFtZTogJ0phcGFuZXNlJyxcbiAgICBuYXRpdmVOYW1lOiAn5pel5pys6KqeJyxcbiAgfSxcbiAganY6IHtcbiAgICBuYW1lOiAnSmF2YW5lc2UnLFxuICAgIG5hdGl2ZU5hbWU6ICdiYXNhIEphd2EnLFxuICB9LFxuICBrYToge1xuICAgIG5hbWU6ICdHZW9yZ2lhbicsXG4gICAgbmF0aXZlTmFtZTogJ+GDpeGDkOGDoOGDl+GDo+GDmuGDmCcsXG4gIH0sXG4gIGtnOiB7XG4gICAgbmFtZTogJ0tvbmdvJyxcbiAgICBuYXRpdmVOYW1lOiAnS2lrb25nbycsXG4gIH0sXG4gIGtpOiB7XG4gICAgbmFtZTogJ0tpa3V5dScsXG4gICAgbmF0aXZlTmFtZTogJ0fEqWvFqXnFqScsXG4gIH0sXG4gIGtqOiB7XG4gICAgbmFtZTogJ0t3YW55YW1hJyxcbiAgICBuYXRpdmVOYW1lOiAnS3VhbnlhbWEnLFxuICB9LFxuICBrazoge1xuICAgIG5hbWU6ICdLYXpha2gnLFxuICAgIG5hdGl2ZU5hbWU6ICfSm9Cw0LfQsNKbINGC0ZbQu9GWJyxcbiAgfSxcbiAga2w6IHtcbiAgICBuYW1lOiAnS2FsYWFsbGlzdXQnLFxuICAgIG5hdGl2ZU5hbWU6ICdrYWxhYWxsaXN1dCcsXG4gIH0sXG4gIGttOiB7XG4gICAgbmFtZTogJ0tobWVyJyxcbiAgICBuYXRpdmVOYW1lOiAn4Z6B4Z+B4Z6Y4Z6a4Z6X4Z624Z6f4Z62JyxcbiAgfSxcbiAga246IHtcbiAgICBuYW1lOiAnS2FubmFkYScsXG4gICAgbmF0aXZlTmFtZTogJ+CyleCyqOCzjeCyqOCyoScsXG4gIH0sXG4gIGtvOiB7XG4gICAgbmFtZTogJ0tvcmVhbicsXG4gICAgbmF0aXZlTmFtZTogJ+2VnOq1reyWtCcsXG4gIH0sXG4gIGtyOiB7XG4gICAgbmFtZTogJ0thbnVyaScsXG4gICAgbmF0aXZlTmFtZTogJ0thbnVyaScsXG4gIH0sXG4gIGtzOiB7XG4gICAgbmFtZTogJ0thc2htaXJpJyxcbiAgICBuYXRpdmVOYW1lOiAn4KSV4KS24KWN4KSu4KWA4KSw4KWAJyxcbiAgfSxcbiAga3U6IHtcbiAgICBuYW1lOiAnS3VyZGlzaCcsXG4gICAgbmF0aXZlTmFtZTogJ0t1cmTDricsXG4gIH0sXG4gIGt2OiB7XG4gICAgbmFtZTogJ0tvbWknLFxuICAgIG5hdGl2ZU5hbWU6ICfQutC+0LzQuCDQutGL0LInLFxuICB9LFxuICBrdzoge1xuICAgIG5hbWU6ICdDb3JuaXNoJyxcbiAgICBuYXRpdmVOYW1lOiAnS2VybmV3ZWsnLFxuICB9LFxuICBreToge1xuICAgIG5hbWU6ICdLeXJneXonLFxuICAgIG5hdGl2ZU5hbWU6ICfQmtGL0YDQs9GL0LfRh9CwJyxcbiAgfSxcbiAgbGE6IHtcbiAgICBuYW1lOiAnTGF0aW4nLFxuICAgIG5hdGl2ZU5hbWU6ICdsYXRpbmUnLFxuICB9LFxuICBsYjoge1xuICAgIG5hbWU6ICdMdXhlbWJvdXJnaXNoJyxcbiAgICBuYXRpdmVOYW1lOiAnTMOrdHplYnVlcmdlc2NoJyxcbiAgfSxcbiAgbGc6IHtcbiAgICBuYW1lOiAnR2FuZGEnLFxuICAgIG5hdGl2ZU5hbWU6ICdMdWdhbmRhJyxcbiAgfSxcbiAgbGk6IHtcbiAgICBuYW1lOiAnTGltYnVyZ2lzaCcsXG4gICAgbmF0aXZlTmFtZTogJ0xpbWJ1cmdzJyxcbiAgfSxcbiAgbG46IHtcbiAgICBuYW1lOiAnTGluZ2FsYScsXG4gICAgbmF0aXZlTmFtZTogJ0xpbmfDoWxhJyxcbiAgfSxcbiAgbG86IHtcbiAgICBuYW1lOiAnTGFvJyxcbiAgICBuYXRpdmVOYW1lOiAn4Lqe4Lqy4Lqq4LqyJyxcbiAgfSxcbiAgbHQ6IHtcbiAgICBuYW1lOiAnTGl0aHVhbmlhbicsXG4gICAgbmF0aXZlTmFtZTogJ2xpZXR1dmnFsyBrYWxiYScsXG4gIH0sXG4gIGx1OiB7XG4gICAgbmFtZTogJ0x1YmEtS2F0YW5nYScsXG4gICAgbmF0aXZlTmFtZTogJ1RzaGlsdWJhJyxcbiAgfSxcbiAgbHY6IHtcbiAgICBuYW1lOiAnTGF0dmlhbicsXG4gICAgbmF0aXZlTmFtZTogJ2xhdHZpZcWhdSB2YWxvZGEnLFxuICB9LFxuICBtZzoge1xuICAgIG5hbWU6ICdNYWxhZ2FzeScsXG4gICAgbmF0aXZlTmFtZTogJ2ZpdGVueSBtYWxhZ2FzeScsXG4gIH0sXG4gIG1oOiB7XG4gICAgbmFtZTogJ01hcnNoYWxsZXNlJyxcbiAgICBuYXRpdmVOYW1lOiAnS2FqaW4gTcynYWplxLwnLFxuICB9LFxuICBtaToge1xuICAgIG5hbWU6ICdNxIFvcmknLFxuICAgIG5hdGl2ZU5hbWU6ICd0ZSByZW8gTcSBb3JpJyxcbiAgfSxcbiAgbWs6IHtcbiAgICBuYW1lOiAnTWFjZWRvbmlhbicsXG4gICAgbmF0aXZlTmFtZTogJ9C80LDQutC10LTQvtC90YHQutC4INGY0LDQt9C40LonLFxuICB9LFxuICBtbDoge1xuICAgIG5hbWU6ICdNYWxheWFsYW0nLFxuICAgIG5hdGl2ZU5hbWU6ICfgtK7gtLLgtK/gtL7gtLPgtIInLFxuICB9LFxuICBtbjoge1xuICAgIG5hbWU6ICdNb25nb2xpYW4nLFxuICAgIG5hdGl2ZU5hbWU6ICfQnNC+0L3Qs9C+0Lsg0YXRjdC7JyxcbiAgfSxcbiAgbXI6IHtcbiAgICBuYW1lOiAnTWFyYXRoaScsXG4gICAgbmF0aXZlTmFtZTogJ+CkruCksOCkvuCkoOClgCcsXG4gIH0sXG4gIG1zOiB7XG4gICAgbmFtZTogJ01hbGF5JyxcbiAgICBuYXRpdmVOYW1lOiAnQmFoYXNhIE1hbGF5c2lhJyxcbiAgfSxcbiAgbXQ6IHtcbiAgICBuYW1lOiAnTWFsdGVzZScsXG4gICAgbmF0aXZlTmFtZTogJ01hbHRpJyxcbiAgfSxcbiAgbXk6IHtcbiAgICBuYW1lOiAnQnVybWVzZScsXG4gICAgbmF0aXZlTmFtZTogJ+GAl+GAmeGArOGAheGArCcsXG4gIH0sXG4gIG5hOiB7XG4gICAgbmFtZTogJ05hdXJ1JyxcbiAgICBuYXRpdmVOYW1lOiAnRWtha2FpcsWpIE5hb2VybycsXG4gIH0sXG4gIG5iOiB7XG4gICAgbmFtZTogJ05vcndlZ2lhbiBCb2ttw6VsJyxcbiAgICBuYXRpdmVOYW1lOiAnTm9yc2sgYm9rbcOlbCcsXG4gIH0sXG4gIG5kOiB7XG4gICAgbmFtZTogJ05vcnRoZXJuIE5kZWJlbGUnLFxuICAgIG5hdGl2ZU5hbWU6ICdpc2lOZGViZWxlJyxcbiAgfSxcbiAgbmU6IHtcbiAgICBuYW1lOiAnTmVwYWxpJyxcbiAgICBuYXRpdmVOYW1lOiAn4KSo4KWH4KSq4KS+4KSy4KWAJyxcbiAgfSxcbiAgbmc6IHtcbiAgICBuYW1lOiAnTmRvbmdhJyxcbiAgICBuYXRpdmVOYW1lOiAnT3dhbWJvJyxcbiAgfSxcbiAgbmw6IHtcbiAgICBuYW1lOiAnRHV0Y2gnLFxuICAgIG5hdGl2ZU5hbWU6ICdOZWRlcmxhbmRzJyxcbiAgfSxcbiAgbm46IHtcbiAgICBuYW1lOiAnTm9yd2VnaWFuIE55bm9yc2snLFxuICAgIG5hdGl2ZU5hbWU6ICdOb3JzayBueW5vcnNrJyxcbiAgfSxcbiAgbm86IHtcbiAgICBuYW1lOiAnTm9yd2VnaWFuJyxcbiAgICBuYXRpdmVOYW1lOiAnTm9yc2snLFxuICB9LFxuICBucjoge1xuICAgIG5hbWU6ICdTb3V0aGVybiBOZGViZWxlJyxcbiAgICBuYXRpdmVOYW1lOiAnaXNpTmRlYmVsZScsXG4gIH0sXG4gIG52OiB7XG4gICAgbmFtZTogJ05hdmFqbycsXG4gICAgbmF0aXZlTmFtZTogJ0RpbsOpIGJpemFhZCcsXG4gIH0sXG4gIG55OiB7XG4gICAgbmFtZTogJ0NoaWNoZXdhJyxcbiAgICBuYXRpdmVOYW1lOiAnY2hpQ2hlxbVhJyxcbiAgfSxcbiAgb2M6IHtcbiAgICBuYW1lOiAnT2NjaXRhbicsXG4gICAgbmF0aXZlTmFtZTogJ29jY2l0YW4nLFxuICB9LFxuICBvajoge1xuICAgIG5hbWU6ICdPamlid2UnLFxuICAgIG5hdGl2ZU5hbWU6ICfhkIrhk4LhlJHhk4jhkK/hkqfhkI7hk5AnLFxuICB9LFxuICBvbToge1xuICAgIG5hbWU6ICdPcm9tbycsXG4gICAgbmF0aXZlTmFtZTogJ0FmYWFuIE9yb21vbycsXG4gIH0sXG4gIG9yOiB7XG4gICAgbmFtZTogJ09yaXlhJyxcbiAgICBuYXRpdmVOYW1lOiAn4KyT4Kyh4Ky84Ky/4KyGJyxcbiAgfSxcbiAgb3M6IHtcbiAgICBuYW1lOiAnT3NzZXRpYW4nLFxuICAgIG5hdGl2ZU5hbWU6ICfQuNGA0L7QvSDDptCy0LfQsNCzJyxcbiAgfSxcbiAgcGE6IHtcbiAgICBuYW1lOiAnUGFuamFiaScsXG4gICAgbmF0aXZlTmFtZTogJ+CoquCpsOConOCovuCorOCpgCcsXG4gIH0sXG4gIHBpOiB7XG4gICAgbmFtZTogJ1DEgWxpJyxcbiAgICBuYXRpdmVOYW1lOiAn4KSq4KS+4KS04KS/JyxcbiAgfSxcbiAgcGw6IHtcbiAgICBuYW1lOiAnUG9saXNoJyxcbiAgICBuYXRpdmVOYW1lOiAnUG9sc2tpJyxcbiAgfSxcbiAgcHM6IHtcbiAgICBuYW1lOiAnUGFzaHRvJyxcbiAgICBuYXRpdmVOYW1lOiAn2b7amtiq2YgnLFxuICB9LFxuICBwdDoge1xuICAgIG5hbWU6ICdQb3J0dWd1ZXNlJyxcbiAgICBuYXRpdmVOYW1lOiAnUG9ydHVndcOqcycsXG4gIH0sXG4gIHF1OiB7XG4gICAgbmFtZTogJ1F1ZWNodWEnLFxuICAgIG5hdGl2ZU5hbWU6ICdSdW5hIFNpbWknLFxuICB9LFxuICBybToge1xuICAgIG5hbWU6ICdSb21hbnNoJyxcbiAgICBuYXRpdmVOYW1lOiAncnVtYW50c2NoIGdyaXNjaHVuJyxcbiAgfSxcbiAgcm46IHtcbiAgICBuYW1lOiAnS2lydW5kaScsXG4gICAgbmF0aXZlTmFtZTogJ0lraXJ1bmRpJyxcbiAgfSxcbiAgcm86IHtcbiAgICBuYW1lOiAnUm9tYW5pYW4nLFxuICAgIG5hdGl2ZU5hbWU6ICdSb23Dom7EgycsXG4gIH0sXG4gIHJ1OiB7XG4gICAgbmFtZTogJ1J1c3NpYW4nLFxuICAgIG5hdGl2ZU5hbWU6ICfQoNGD0YHRgdC60LjQuScsXG4gIH0sXG4gIHJ3OiB7XG4gICAgbmFtZTogJ0tpbnlhcndhbmRhJyxcbiAgICBuYXRpdmVOYW1lOiAnSWtpbnlhcndhbmRhJyxcbiAgfSxcbiAgc2E6IHtcbiAgICBuYW1lOiAnU2Fuc2tyaXQnLFxuICAgIG5hdGl2ZU5hbWU6ICfgpLjgpILgpLjgpY3gpJXgpYPgpKTgpK7gpY0nLFxuICB9LFxuICBzYzoge1xuICAgIG5hbWU6ICdTYXJkaW5pYW4nLFxuICAgIG5hdGl2ZU5hbWU6ICdzYXJkdScsXG4gIH0sXG4gIHNkOiB7XG4gICAgbmFtZTogJ1NpbmRoaScsXG4gICAgbmF0aXZlTmFtZTogJ+CkuOCkv+CkqOCljeCkp+ClgCcsXG4gIH0sXG4gIHNlOiB7XG4gICAgbmFtZTogJ05vcnRoZXJuIFNhbWknLFxuICAgIG5hdGl2ZU5hbWU6ICdEYXZ2aXPDoW1lZ2llbGxhJyxcbiAgfSxcbiAgc2c6IHtcbiAgICBuYW1lOiAnU2FuZ28nLFxuICAgIG5hdGl2ZU5hbWU6ICd5w6JuZ8OiIHTDriBzw6RuZ8O2JyxcbiAgfSxcbiAgc2k6IHtcbiAgICBuYW1lOiAnU2luaGFsYScsXG4gICAgbmF0aXZlTmFtZTogJ+C3g+C3kuC2guC3hOC2vScsXG4gIH0sXG4gIHNrOiB7XG4gICAgbmFtZTogJ1Nsb3ZhaycsXG4gICAgbmF0aXZlTmFtZTogJ3Nsb3ZlbsSNaW5hJyxcbiAgfSxcbiAgc2w6IHtcbiAgICBuYW1lOiAnU2xvdmVuaWFuJyxcbiAgICBuYXRpdmVOYW1lOiAnc2xvdmVuxaHEjWluYScsXG4gIH0sXG4gIHNtOiB7XG4gICAgbmFtZTogJ1NhbW9hbicsXG4gICAgbmF0aXZlTmFtZTogXCJnYWdhbmEgZmEnYSBTYW1vYVwiLFxuICB9LFxuICBzbjoge1xuICAgIG5hbWU6ICdTaG9uYScsXG4gICAgbmF0aXZlTmFtZTogJ2NoaVNob25hJyxcbiAgfSxcbiAgc286IHtcbiAgICBuYW1lOiAnU29tYWxpJyxcbiAgICBuYXRpdmVOYW1lOiAnU29vbWFhbGlnYScsXG4gIH0sXG4gIHNxOiB7XG4gICAgbmFtZTogJ0FsYmFuaWFuJyxcbiAgICBuYXRpdmVOYW1lOiAnU2hxaXAnLFxuICB9LFxuICBzcjoge1xuICAgIG5hbWU6ICdTZXJiaWFuJyxcbiAgICBuYXRpdmVOYW1lOiAn0YHRgNC/0YHQutC4INGY0LXQt9C40LonLFxuICB9LFxuICBzczoge1xuICAgIG5hbWU6ICdTd2F0aScsXG4gICAgbmF0aXZlTmFtZTogJ1NpU3dhdGknLFxuICB9LFxuICBzdDoge1xuICAgIG5hbWU6ICdTb3V0aGVybiBTb3RobycsXG4gICAgbmF0aXZlTmFtZTogJ1Nlc290aG8nLFxuICB9LFxuICBzdToge1xuICAgIG5hbWU6ICdTdW5kYW5lc2UnLFxuICAgIG5hdGl2ZU5hbWU6ICdCYXNhIFN1bmRhJyxcbiAgfSxcbiAgc3Y6IHtcbiAgICBuYW1lOiAnU3dlZGlzaCcsXG4gICAgbmF0aXZlTmFtZTogJ1N2ZW5za2EnLFxuICB9LFxuICBzdzoge1xuICAgIG5hbWU6ICdTd2FoaWxpJyxcbiAgICBuYXRpdmVOYW1lOiAnS2lzd2FoaWxpJyxcbiAgfSxcbiAgdGE6IHtcbiAgICBuYW1lOiAnVGFtaWwnLFxuICAgIG5hdGl2ZU5hbWU6ICfgrqTgrq7grr/grrTgr40nLFxuICB9LFxuICB0ZToge1xuICAgIG5hbWU6ICdUZWx1Z3UnLFxuICAgIG5hdGl2ZU5hbWU6ICfgsKTgsYbgsLLgsYHgsJfgsYEnLFxuICB9LFxuICB0Zzoge1xuICAgIG5hbWU6ICdUYWppaycsXG4gICAgbmF0aXZlTmFtZTogJ9GC0L7St9C40LrToycsXG4gIH0sXG4gIHRoOiB7XG4gICAgbmFtZTogJ1RoYWknLFxuICAgIG5hdGl2ZU5hbWU6ICfguYTguJfguKInLFxuICB9LFxuICB0aToge1xuICAgIG5hbWU6ICdUaWdyaW55YScsXG4gICAgbmF0aXZlTmFtZTogJ+GJteGMjeGIreGKmycsXG4gIH0sXG4gIHRrOiB7XG4gICAgbmFtZTogJ1R1cmttZW4nLFxuICAgIG5hdGl2ZU5hbWU6ICdUw7xya21lbicsXG4gIH0sXG4gIHRsOiB7XG4gICAgbmFtZTogJ1RhZ2Fsb2cnLFxuICAgIG5hdGl2ZU5hbWU6ICdXaWthbmcgVGFnYWxvZycsXG4gIH0sXG4gIHRuOiB7XG4gICAgbmFtZTogJ1Rzd2FuYScsXG4gICAgbmF0aXZlTmFtZTogJ1NldHN3YW5hJyxcbiAgfSxcbiAgdG86IHtcbiAgICBuYW1lOiAnVG9uZ2EnLFxuICAgIG5hdGl2ZU5hbWU6ICdmYWthIFRvbmdhJyxcbiAgfSxcbiAgdHI6IHtcbiAgICBuYW1lOiAnVHVya2lzaCcsXG4gICAgbmF0aXZlTmFtZTogJ1TDvHJrw6dlJyxcbiAgfSxcbiAgdHM6IHtcbiAgICBuYW1lOiAnVHNvbmdhJyxcbiAgICBuYXRpdmVOYW1lOiAnWGl0c29uZ2EnLFxuICB9LFxuICB0dDoge1xuICAgIG5hbWU6ICdUYXRhcicsXG4gICAgbmF0aXZlTmFtZTogJ9GC0LDRgtCw0YAg0YLQtdC70LUnLFxuICB9LFxuICB0dzoge1xuICAgIG5hbWU6ICdUd2knLFxuICAgIG5hdGl2ZU5hbWU6ICdUd2knLFxuICB9LFxuICB0eToge1xuICAgIG5hbWU6ICdUYWhpdGlhbicsXG4gICAgbmF0aXZlTmFtZTogJ1JlbyBUYWhpdGknLFxuICB9LFxuICB1Zzoge1xuICAgIG5hbWU6ICdVeWdodXInLFxuICAgIG5hdGl2ZU5hbWU6ICfYptuH2YrYutuH2LHahtuV4oCOJyxcbiAgfSxcbiAgdWs6IHtcbiAgICBuYW1lOiAnVWtyYWluaWFuJyxcbiAgICBuYXRpdmVOYW1lOiAn0KPQutGA0LDRl9C90YHRjNC60LAnLFxuICB9LFxuICB1cjoge1xuICAgIG5hbWU6ICdVcmR1JyxcbiAgICBuYXRpdmVOYW1lOiAn2KfYsdiv2YgnLFxuICB9LFxuICB1ejoge1xuICAgIG5hbWU6ICdVemJlaycsXG4gICAgbmF0aXZlTmFtZTogJ9CO0LfQsdC10LonLFxuICB9LFxuICB2ZToge1xuICAgIG5hbWU6ICdWZW5kYScsXG4gICAgbmF0aXZlTmFtZTogJ1RzaGl2ZW7huJNhJyxcbiAgfSxcbiAgdmk6IHtcbiAgICBuYW1lOiAnVmlldG5hbWVzZScsXG4gICAgbmF0aXZlTmFtZTogJ1Rp4bq/bmcgVmnhu4d0JyxcbiAgfSxcbiAgdm86IHtcbiAgICBuYW1lOiAnVm9sYXDDvGsnLFxuICAgIG5hdGl2ZU5hbWU6ICdWb2xhcMO8aycsXG4gIH0sXG4gIHdhOiB7XG4gICAgbmFtZTogJ1dhbGxvb24nLFxuICAgIG5hdGl2ZU5hbWU6ICd3YWxvbicsXG4gIH0sXG4gIHdvOiB7XG4gICAgbmFtZTogJ1dvbG9mJyxcbiAgICBuYXRpdmVOYW1lOiAnV29sbG9mJyxcbiAgfSxcbiAgeGg6IHtcbiAgICBuYW1lOiAnWGhvc2EnLFxuICAgIG5hdGl2ZU5hbWU6ICdpc2lYaG9zYScsXG4gIH0sXG4gIHlpOiB7XG4gICAgbmFtZTogJ1lpZGRpc2gnLFxuICAgIG5hdGl2ZU5hbWU6ICfXmdeZ1rTXk9eZ16knLFxuICB9LFxuICB5bzoge1xuICAgIG5hbWU6ICdZb3J1YmEnLFxuICAgIG5hdGl2ZU5hbWU6ICdZb3LDuWLDoScsXG4gIH0sXG4gIHphOiB7XG4gICAgbmFtZTogJ1podWFuZycsXG4gICAgbmF0aXZlTmFtZTogJ1Nhya8gY3VlxYvGhScsXG4gIH0sXG4gIHpoOiB7XG4gICAgbmFtZTogJ0NoaW5lc2UnLFxuICAgIG5hdGl2ZU5hbWU6ICfkuK3mlocnLFxuICB9LFxuICB6dToge1xuICAgIG5hbWU6ICdadWx1JyxcbiAgICBuYXRpdmVOYW1lOiAnaXNpWnVsdScsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMQU5HVUFHRVNfTElTVDtcbiIsImltcG9ydCBMQU5HVUFHRVNfTElTVCBmcm9tICcuL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJU082MzkxIHtcbiAgc3RhdGljIGdldExhbmd1YWdlcyhjb2RlcyA9IFtdKSB7XG4gICAgcmV0dXJuIGNvZGVzLm1hcChjb2RlID0+ICh7XG4gICAgICBjb2RlLFxuICAgICAgbmFtZTogSVNPNjM5MS5nZXROYW1lKGNvZGUpLFxuICAgICAgbmF0aXZlTmFtZTogSVNPNjM5MS5nZXROYXRpdmVOYW1lKGNvZGUpLFxuICAgIH0pKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXROYW1lKGNvZGUpIHtcbiAgICByZXR1cm4gSVNPNjM5MS52YWxpZGF0ZShjb2RlKSA/IExBTkdVQUdFU19MSVNUW2NvZGVdLm5hbWUgOiAnJztcbiAgfVxuXG4gIHN0YXRpYyBnZXRBbGxOYW1lcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhMQU5HVUFHRVNfTElTVCkubWFwKGwgPT4gbC5uYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXROYXRpdmVOYW1lKGNvZGUpIHtcbiAgICByZXR1cm4gSVNPNjM5MS52YWxpZGF0ZShjb2RlKSA/IExBTkdVQUdFU19MSVNUW2NvZGVdLm5hdGl2ZU5hbWUgOiAnJztcbiAgfVxuXG4gIHN0YXRpYyBnZXRBbGxOYXRpdmVOYW1lcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhMQU5HVUFHRVNfTElTVCkubWFwKGwgPT4gbC5uYXRpdmVOYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRDb2RlKG5hbWUpIHtcbiAgICBjb25zdCBjb2RlID0gT2JqZWN0LmtleXMoTEFOR1VBR0VTX0xJU1QpLmZpbmQoY29kZSA9PiB7XG4gICAgICBjb25zdCBsYW5ndWFnZSA9IExBTkdVQUdFU19MSVNUW2NvZGVdO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBsYW5ndWFnZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKSB8fFxuICAgICAgICBsYW5ndWFnZS5uYXRpdmVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29kZSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBnZXRBbGxDb2RlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoTEFOR1VBR0VTX0xJU1QpO1xuICB9XG5cbiAgc3RhdGljIHZhbGlkYXRlKGNvZGUpIHtcbiAgICByZXR1cm4gTEFOR1VBR0VTX0xJU1QuaGFzT3duUHJvcGVydHkoY29kZSk7XG4gIH1cbn1cbiIsImltcG9ydCBMYW5ndWFnZUNvZGUgZnJvbSAnaXNvLTYzOS0xLXpoJ1xuaW1wb3J0IENvdW50cnlDb2RlIGZyb20gJ2lzby0zMTY2LTEtYWxwaGEtMidcblxuY29uc3QgUkVHID0gL14oW2Etel17Mn0pLShbQS1aXXsyfSkkL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbGVDb2RlIHtcbiAgLyogbGFuZ3VhZ2UgaXNvLTYzOS0xICovXG4gIHN0YXRpYyBnZXRMYW5ndWFnZUNvZGUoY29kZSkge1xuICAgIHZhciBtYXRjaCA9IGNvZGUubWF0Y2goUkVHKVxuICAgIGlmKCFtYXRjaCB8fCBtYXRjaC5sZW5ndGggPCAxKSByZXR1cm4gJydcbiAgICByZXR1cm4gbWF0Y2hbMV1cbiAgfVxuXG4gIHN0YXRpYyBnZXRMYW5ndWFnZU5hbWUoY29kZSkge1xuICAgIHZhciBsYW5ndWFnZUNvZGUgPSBMb2NhbGVDb2RlLmdldExhbmd1YWdlQ29kZShjb2RlKVxuICAgIHJldHVybiBMYW5ndWFnZUNvZGUuZ2V0TmFtZShsYW5ndWFnZUNvZGUpXG4gIH1cblxuICBzdGF0aWMgZ2V0TGFuZ3VhZ2VOYXRpdmVOYW1lKGNvZGUpIHtcbiAgICB2YXIgbGFuZ3VhZ2VDb2RlID0gTG9jYWxlQ29kZS5nZXRMYW5ndWFnZUNvZGUoY29kZSlcbiAgICByZXR1cm4gTGFuZ3VhZ2VDb2RlLmdldE5hdGl2ZU5hbWUobGFuZ3VhZ2VDb2RlKVxuICB9XG5cbiAgc3RhdGljIGdldExhbmd1YWdlWmhOYW1lKGNvZGUpIHtcbiAgICB2YXIgbGFuZ3VhZ2VDb2RlID0gTG9jYWxlQ29kZS5nZXRMYW5ndWFnZUNvZGUoY29kZSlcbiAgICByZXR1cm4gTGFuZ3VhZ2VDb2RlLmdldFpoTmFtZShsYW5ndWFnZUNvZGUpXG4gIH1cblxuICBzdGF0aWMgdmFsaWRhdGVMYW5ndWFnZUNvZGUoY29kZSkge1xuICAgIHZhciBsYW5ndWFnZUNvZGUgPSBMb2NhbGVDb2RlLmdldExhbmd1YWdlQ29kZShjb2RlKVxuICAgIHJldHVybiBMYW5ndWFnZUNvZGUudmFsaWRhdGUobGFuZ3VhZ2VDb2RlKVxuICB9XG5cbiAgc3RhdGljIGdldExhbmd1YWdlcyhjb2Rlcykge1xuICAgIHZhciBsaXN0ID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0LnB1c2goe1xuICAgICAgICBjb2RlOmNvZGVzW2ldLCBcbiAgICAgICAgbmFtZTogTG9jYWxlQ29kZS5nZXRMYW5ndWFnZU5hbWUoY29kZXNbaV0pLFxuICAgICAgICBuYXRpdmVOYW1lOiBMb2NhbGVDb2RlLmdldExhbmd1YWdlTmF0aXZlTmFtZShjb2Rlc1tpXSksXG4gICAgICAgIHpoTmFtZTogTG9jYWxlQ29kZS5nZXRMYW5ndWFnZVpoTmFtZShjb2Rlc1tpXSlcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBsaXN0XG4gIH1cblxuICAvKiBjb3VudHJ5IGlzby0zMTY2LTEtYWxwaGEtMiAqL1xuICBzdGF0aWMgZ2V0Q291bnRyeUNvZGUoY29kZSkge1xuICAgIHZhciBtYXRjaCA9IGNvZGUubWF0Y2goUkVHKVxuICAgIGlmKCFtYXRjaCB8fCBtYXRjaC5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgICByZXR1cm4gbWF0Y2hbMl1cbiAgfVxuICBzdGF0aWMgZ2V0Q291bnRyeU5hbWUoY29kZSkge1xuICAgIHZhciBjb3VudHJ5Q29kZSA9IExvY2FsZUNvZGUuZ2V0Q291bnRyeUNvZGUoY29kZSlcbiAgICByZXR1cm4gQ291bnRyeUNvZGUuZ2V0Q291bnRyeShjb3VudHJ5Q29kZSlcbiAgfVxuICBzdGF0aWMgdmFsaWRhdGVDb3VudHJ5Q29kZShjb2RlKSB7XG4gICAgY29kZSA9IExvY2FsZUNvZGUuZ2V0Q291bnRyeUNvZGUoY29kZSlcbiAgICBpZihDb3VudHJ5Q29kZS5nZXRDb2RlcygpLmluZGV4T2YoY29kZSkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICAvKiB2YWxpZGF0ZSAqL1xuICBzdGF0aWMgdmFsaWRhdGUoY29kZSkge1xuICAgIHZhciBtYXRjaCA9IGNvZGUubWF0Y2goUkVHKVxuICAgIGlmKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA9PT0gMyAmJiBcbiAgICAgIExvY2FsZUNvZGUudmFsaWRhdGVMYW5ndWFnZUNvZGUoY29kZSkgJiZcbiAgICAgIExvY2FsZUNvZGUudmFsaWRhdGVDb3VudHJ5Q29kZShjb2RlKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG59IiwidmFyIGluZGV4T2YgPSByZXF1aXJlKCcuL2luZGV4T2YnKTtcblxuICAgIC8qKlxuICAgICAqIElmIGFycmF5IGNvbnRhaW5zIHZhbHVlcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb250YWlucyhhcnIsIHZhbCkge1xuICAgICAgICByZXR1cm4gaW5kZXhPZihhcnIsIHZhbCkgIT09IC0xO1xuICAgIH1cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5zO1xuXG4iLCJcblxuICAgIC8qKlxuICAgICAqIEFycmF5IGZvckVhY2hcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmb3JFYWNoKGFyciwgY2FsbGJhY2ssIHRoaXNPYmopIHtcbiAgICAgICAgaWYgKGFyciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICAgIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgICAgICAgIC8vIHdlIGl0ZXJhdGUgb3ZlciBzcGFyc2UgaXRlbXMgc2luY2UgdGhlcmUgaXMgbm8gd2F5IHRvIG1ha2UgaXRcbiAgICAgICAgICAgIC8vIHdvcmsgcHJvcGVybHkgb24gSUUgNy04LiBzZWUgIzY0XG4gICAgICAgICAgICBpZiAoIGNhbGxiYWNrLmNhbGwodGhpc09iaiwgYXJyW2ldLCBpLCBhcnIpID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZm9yRWFjaDtcblxuXG4iLCJcblxuICAgIC8qKlxuICAgICAqIEFycmF5LmluZGV4T2ZcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbmRleE9mKGFyciwgaXRlbSwgZnJvbUluZGV4KSB7XG4gICAgICAgIGZyb21JbmRleCA9IGZyb21JbmRleCB8fCAwO1xuICAgICAgICBpZiAoYXJyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoLFxuICAgICAgICAgICAgaSA9IGZyb21JbmRleCA8IDAgPyBsZW4gKyBmcm9tSW5kZXggOiBmcm9tSW5kZXg7XG4gICAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgICAgICAvLyB3ZSBpdGVyYXRlIG92ZXIgc3BhcnNlIGl0ZW1zIHNpbmNlIHRoZXJlIGlzIG5vIHdheSB0byBtYWtlIGl0XG4gICAgICAgICAgICAvLyB3b3JrIHByb3Blcmx5IG9uIElFIDctOC4gc2VlICM2NFxuICAgICAgICAgICAgaWYgKGFycltpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBpbmRleE9mO1xuXG4iLCJ2YXIgbWFrZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vZnVuY3Rpb24vbWFrZUl0ZXJhdG9yXycpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1heGltdW0gdmFsdWUgaW5zaWRlIGFycmF5XG4gICAgICovXG4gICAgZnVuY3Rpb24gbWF4KGFyciwgaXRlcmF0b3IsIHRoaXNPYmope1xuICAgICAgICBpZiAoYXJyID09IG51bGwgfHwgIWFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBJbmZpbml0eTtcbiAgICAgICAgfSBlbHNlIGlmIChhcnIubGVuZ3RoICYmICFpdGVyYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVyYXRvciA9IG1ha2VJdGVyYXRvcihpdGVyYXRvciwgdGhpc09iaik7XG4gICAgICAgICAgICB2YXIgcmVzdWx0LFxuICAgICAgICAgICAgICAgIGNvbXBhcmUgPSAtSW5maW5pdHksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgdGVtcDtcblxuICAgICAgICAgICAgdmFyIGkgPSAtMSwgbGVuID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFycltpXTtcbiAgICAgICAgICAgICAgICB0ZW1wID0gaXRlcmF0b3IodmFsdWUsIGksIGFycik7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXAgPiBjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmUgPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IG1heDtcblxuXG4iLCJ2YXIgbWFrZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vZnVuY3Rpb24vbWFrZUl0ZXJhdG9yXycpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIG1pbmltdW0gdmFsdWUgaW5zaWRlIGFycmF5XG4gICAgICovXG4gICAgZnVuY3Rpb24gbWluKGFyciwgaXRlcmF0b3IsIHRoaXNPYmope1xuICAgICAgICBpZiAoYXJyID09IG51bGwgfHwgIWFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAtSW5maW5pdHk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJyLmxlbmd0aCAmJiAhaXRlcmF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShNYXRoLCBhcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlcmF0b3IgPSBtYWtlSXRlcmF0b3IoaXRlcmF0b3IsIHRoaXNPYmopO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCxcbiAgICAgICAgICAgICAgICBjb21wYXJlID0gSW5maW5pdHksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgdGVtcDtcblxuICAgICAgICAgICAgdmFyIGkgPSAtMSwgbGVuID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFycltpXTtcbiAgICAgICAgICAgICAgICB0ZW1wID0gaXRlcmF0b3IodmFsdWUsIGksIGFycik7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXAgPCBjb21wYXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmUgPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IG1pbjtcblxuXG4iLCJcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBzbGljZSBvZiBzb3VyY2UgYXJyYXkgb3IgYXJyYXktbGlrZSBvYmplY3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzbGljZShhcnIsIHN0YXJ0LCBlbmQpe1xuICAgICAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcblxuICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhcnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLm1heChsZW4gKyBzdGFydCwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydCA9IE1hdGgubWluKHN0YXJ0LCBsZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZCA9PSBudWxsKSB7XG4gICAgICAgICAgICBlbmQgPSBsZW47XG4gICAgICAgIH0gZWxzZSBpZiAoZW5kIDwgMCkge1xuICAgICAgICAgICAgZW5kID0gTWF0aC5tYXgobGVuICsgZW5kLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZCA9IE1hdGgubWluKGVuZCwgbGVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgd2hpbGUgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChhcnJbc3RhcnQrK10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHNsaWNlO1xuXG5cbiIsInZhciBzbGljZSA9IHJlcXVpcmUoJy4uL2FycmF5L3NsaWNlJyk7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgZXhlY3V0ZSBpbiB0aGUgZ2l2ZW4gY29udGV4dCwgb3B0aW9uYWxseSBhZGRpbmcgYW55IGFkZGl0aW9uYWwgc3VwcGxpZWQgcGFyYW1ldGVycyB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcmd1bWVudHMgY29sbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAgRnVuY3Rpb24uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgICBFeGVjdXRpb24gY29udGV4dC5cbiAgICAgKiBAcGFyYW0ge3Jlc3R9IGFyZ3MgICAgQXJndW1lbnRzICgwLi4ubiBhcmd1bWVudHMpLlxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBXcmFwcGVkIEZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGJpbmQoZm4sIGNvbnRleHQsIGFyZ3Mpe1xuICAgICAgICB2YXIgYXJnc0FyciA9IHNsaWNlKGFyZ3VtZW50cywgMik7IC8vY3VycmllZCBhcmdzXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3NBcnIuY29uY2F0KHNsaWNlKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGJpbmQ7XG5cblxuIiwiXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBwcm92aWRlZCB0byBpdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpZGVudGl0eSh2YWwpe1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cblxuIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xudmFyIHByb3AgPSByZXF1aXJlKCcuL3Byb3AnKTtcbnZhciBkZWVwTWF0Y2hlcyA9IHJlcXVpcmUoJy4uL29iamVjdC9kZWVwTWF0Y2hlcycpO1xuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYXJndW1lbnQgaW50byBhIHZhbGlkIGl0ZXJhdG9yLlxuICAgICAqIFVzZWQgaW50ZXJuYWxseSBvbiBtb3N0IGFycmF5L29iamVjdC9jb2xsZWN0aW9uIG1ldGhvZHMgdGhhdCByZWNlaXZlcyBhXG4gICAgICogY2FsbGJhY2svaXRlcmF0b3IgcHJvdmlkaW5nIGEgc2hvcnRjdXQgc3ludGF4LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1ha2VJdGVyYXRvcihzcmMsIHRoaXNPYmope1xuICAgICAgICBpZiAoc3JjID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpZGVudGl0eTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2godHlwZW9mIHNyYykge1xuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uIGlzIHRoZSBmaXJzdCB0byBpbXByb3ZlIHBlcmYgKG1vc3QgY29tbW9uIGNhc2UpXG4gICAgICAgICAgICAgICAgLy8gYWxzbyBhdm9pZCB1c2luZyBgRnVuY3Rpb24jY2FsbGAgaWYgbm90IG5lZWRlZCwgd2hpY2ggYm9vc3RzXG4gICAgICAgICAgICAgICAgLy8gcGVyZiBhIGxvdCBpbiBzb21lIGNhc2VzXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgdGhpc09iaiAhPT0gJ3VuZGVmaW5lZCcpPyBmdW5jdGlvbih2YWwsIGksIGFycil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzcmMuY2FsbCh0aGlzT2JqLCB2YWwsIGksIGFycik7XG4gICAgICAgICAgICAgICAgfSA6IHNyYztcbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWVwTWF0Y2hlcyh2YWwsIHNyYyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wKHNyYyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IG1ha2VJdGVyYXRvcjtcblxuXG4iLCJcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGdldHMgYSBwcm9wZXJ0eSBvZiB0aGUgcGFzc2VkIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByb3AobmFtZSl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihvYmope1xuICAgICAgICAgICAgcmV0dXJuIG9ialtuYW1lXTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHByb3A7XG5cblxuIiwidmFyIGtpbmRPZiA9IHJlcXVpcmUoJy4va2luZE9mJyk7XG52YXIgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJy4vaXNQbGFpbk9iamVjdCcpO1xudmFyIG1peEluID0gcmVxdWlyZSgnLi4vb2JqZWN0L21peEluJyk7XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZSBuYXRpdmUgdHlwZXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY2xvbmUodmFsKXtcbiAgICAgICAgc3dpdGNoIChraW5kT2YodmFsKSkge1xuICAgICAgICAgICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVPYmplY3QodmFsKTtcbiAgICAgICAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVBcnJheSh2YWwpO1xuICAgICAgICAgICAgY2FzZSAnUmVnRXhwJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVSZWdFeHAodmFsKTtcbiAgICAgICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZURhdGUodmFsKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb25lT2JqZWN0KHNvdXJjZSkge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gbWl4SW4oe30sIHNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvbmVSZWdFeHAocikge1xuICAgICAgICB2YXIgZmxhZ3MgPSAnJztcbiAgICAgICAgZmxhZ3MgKz0gci5tdWx0aWxpbmUgPyAnbScgOiAnJztcbiAgICAgICAgZmxhZ3MgKz0gci5nbG9iYWwgPyAnZycgOiAnJztcbiAgICAgICAgZmxhZ3MgKz0gci5pZ25vcmVDYXNlID8gJ2knIDogJyc7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHIuc291cmNlLCBmbGFncyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvbmVEYXRlKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCtkYXRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9uZUFycmF5KGFycikge1xuICAgICAgICByZXR1cm4gYXJyLnNsaWNlKCk7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcblxuXG4iLCJ2YXIgY2xvbmUgPSByZXF1aXJlKCcuL2Nsb25lJyk7XG52YXIgZm9yT3duID0gcmVxdWlyZSgnLi4vb2JqZWN0L2Zvck93bicpO1xudmFyIGtpbmRPZiA9IHJlcXVpcmUoJy4va2luZE9mJyk7XG52YXIgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJy4vaXNQbGFpbk9iamVjdCcpO1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgY2xvbmUgbmF0aXZlIHR5cGVzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRlZXBDbG9uZSh2YWwsIGluc3RhbmNlQ2xvbmUpIHtcbiAgICAgICAgc3dpdGNoICgga2luZE9mKHZhbCkgKSB7XG4gICAgICAgICAgICBjYXNlICdPYmplY3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZU9iamVjdCh2YWwsIGluc3RhbmNlQ2xvbmUpO1xuICAgICAgICAgICAgY2FzZSAnQXJyYXknOlxuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZUFycmF5KHZhbCwgaW5zdGFuY2VDbG9uZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZSh2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvbmVPYmplY3Qoc291cmNlLCBpbnN0YW5jZUNsb25lKSB7XG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgICAgICAgIHZhciBvdXQgPSB7fTtcbiAgICAgICAgICAgIGZvck93bihzb3VyY2UsIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gZGVlcENsb25lKHZhbCwgaW5zdGFuY2VDbG9uZSk7XG4gICAgICAgICAgICB9LCBvdXQpO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfSBlbHNlIGlmIChpbnN0YW5jZUNsb25lKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VDbG9uZShzb3VyY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb25lQXJyYXkoYXJyLCBpbnN0YW5jZUNsb25lKSB7XG4gICAgICAgIHZhciBvdXQgPSBbXSxcbiAgICAgICAgICAgIGkgPSAtMSxcbiAgICAgICAgICAgIG4gPSBhcnIubGVuZ3RoLFxuICAgICAgICAgICAgdmFsO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgICAgb3V0W2ldID0gZGVlcENsb25lKGFycltpXSwgaW5zdGFuY2VDbG9uZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRlZXBDbG9uZTtcblxuXG5cbiIsIlxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYm90aCBhcmd1bWVudHMgYXJlIGVnYWwuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXMoeCwgeSl7XG4gICAgICAgIC8vIGltcGxlbWVudGF0aW9uIGJvcnJvd2VkIGZyb20gaGFybW9ueTplZ2FsIHNwZWNcbiAgICAgICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgICAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWxcbiAgICAgICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOYU4gIT09IE5hTiwgYnV0IHRoZXkgYXJlIGlkZW50aWNhbC5cbiAgICAgICAgLy8gTmFOcyBhcmUgdGhlIG9ubHkgbm9uLXJlZmxleGl2ZSB2YWx1ZSwgaS5lLiwgaWYgeCAhPT0geCxcbiAgICAgICAgLy8gdGhlbiB4IGlzIGEgTmFOLlxuICAgICAgICAvLyBpc05hTiBpcyBicm9rZW46IGl0IGNvbnZlcnRzIGl0cyBhcmd1bWVudCB0byBudW1iZXIsIHNvXG4gICAgICAgIC8vIGlzTmFOKFwiZm9vXCIpID0+IHRydWVcbiAgICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGlzO1xuXG5cbiIsInZhciBpc0tpbmQgPSByZXF1aXJlKCcuL2lzS2luZCcpO1xuICAgIC8qKlxuICAgICAqL1xuICAgIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiBpc0tpbmQodmFsLCAnQXJyYXknKTtcbiAgICB9O1xuICAgIG1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuIiwidmFyIGlzS2luZCA9IHJlcXVpcmUoJy4vaXNLaW5kJyk7XG4gICAgLyoqXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIGlzS2luZCh2YWwsICdGdW5jdGlvbicpO1xuICAgIH1cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cbiIsInZhciBraW5kT2YgPSByZXF1aXJlKCcuL2tpbmRPZicpO1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHZhbHVlIGlzIGZyb20gYSBzcGVjaWZpYyBcImtpbmRcIi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc0tpbmQodmFsLCBraW5kKXtcbiAgICAgICAgcmV0dXJuIGtpbmRPZih2YWwpID09PSBraW5kO1xuICAgIH1cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGlzS2luZDtcblxuIiwidmFyIGlzS2luZCA9IHJlcXVpcmUoJy4vaXNLaW5kJyk7XG4gICAgLyoqXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gICAgICAgIHJldHVybiBpc0tpbmQodmFsLCAnT2JqZWN0Jyk7XG4gICAgfVxuICAgIG1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cbiIsIlxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSB2YWx1ZSBpcyBjcmVhdGVkIGJ5IHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG5cblxuIiwiXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG9iamVjdCBpcyBhIHByaW1pdGl2ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlKSB7XG4gICAgICAgIC8vIFVzaW5nIHN3aXRjaCBmYWxsdGhyb3VnaCBiZWNhdXNlIGl0J3Mgc2ltcGxlIHRvIHJlYWQgYW5kIGlzXG4gICAgICAgIC8vIGdlbmVyYWxseSBmYXN0OiBodHRwOi8vanNwZXJmLmNvbS90ZXN0aW5nLXZhbHVlLWlzLXByaW1pdGl2ZS81XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlID09IG51bGw7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBpc1ByaW1pdGl2ZTtcblxuXG4iLCJcblxuICAgIHZhciBfcktpbmQgPSAvXlxcW29iamVjdCAoLiopXFxdJC8sXG4gICAgICAgIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgICAgIFVOREVGO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgXCJraW5kXCIgb2YgdmFsdWUuIChlLmcuIFwiU3RyaW5nXCIsIFwiTnVtYmVyXCIsIGV0YylcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gICAgICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnTnVsbCc7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsID09PSBVTkRFRikge1xuICAgICAgICAgICAgcmV0dXJuICdVbmRlZmluZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9yS2luZC5leGVjKCBfdG9TdHJpbmcuY2FsbCh2YWwpIClbMV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBraW5kT2Y7XG5cbiIsIlxuXG4vL2F1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLCBkbyBub3QgZWRpdCFcbi8vcnVuIGBub2RlIGJ1aWxkYCBpbnN0ZWFkXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnYmluZEFsbCcgOiByZXF1aXJlKCcuL29iamVjdC9iaW5kQWxsJyksXG4gICAgJ2NvbnRhaW5zJyA6IHJlcXVpcmUoJy4vb2JqZWN0L2NvbnRhaW5zJyksXG4gICAgJ2RlZXBGaWxsSW4nIDogcmVxdWlyZSgnLi9vYmplY3QvZGVlcEZpbGxJbicpLFxuICAgICdkZWVwTWF0Y2hlcycgOiByZXF1aXJlKCcuL29iamVjdC9kZWVwTWF0Y2hlcycpLFxuICAgICdkZWVwTWl4SW4nIDogcmVxdWlyZSgnLi9vYmplY3QvZGVlcE1peEluJyksXG4gICAgJ2VxdWFscycgOiByZXF1aXJlKCcuL29iamVjdC9lcXVhbHMnKSxcbiAgICAnZXZlcnknIDogcmVxdWlyZSgnLi9vYmplY3QvZXZlcnknKSxcbiAgICAnZmlsbEluJyA6IHJlcXVpcmUoJy4vb2JqZWN0L2ZpbGxJbicpLFxuICAgICdmaWx0ZXInIDogcmVxdWlyZSgnLi9vYmplY3QvZmlsdGVyJyksXG4gICAgJ2ZpbmQnIDogcmVxdWlyZSgnLi9vYmplY3QvZmluZCcpLFxuICAgICdmbGF0dGVuJyA6IHJlcXVpcmUoJy4vb2JqZWN0L2ZsYXR0ZW4nKSxcbiAgICAnZm9ySW4nIDogcmVxdWlyZSgnLi9vYmplY3QvZm9ySW4nKSxcbiAgICAnZm9yT3duJyA6IHJlcXVpcmUoJy4vb2JqZWN0L2Zvck93bicpLFxuICAgICdmdW5jdGlvbnMnIDogcmVxdWlyZSgnLi9vYmplY3QvZnVuY3Rpb25zJyksXG4gICAgJ2dldCcgOiByZXF1aXJlKCcuL29iamVjdC9nZXQnKSxcbiAgICAnaGFzJyA6IHJlcXVpcmUoJy4vb2JqZWN0L2hhcycpLFxuICAgICdoYXNPd24nIDogcmVxdWlyZSgnLi9vYmplY3QvaGFzT3duJyksXG4gICAgJ2tleXMnIDogcmVxdWlyZSgnLi9vYmplY3Qva2V5cycpLFxuICAgICdtYXAnIDogcmVxdWlyZSgnLi9vYmplY3QvbWFwJyksXG4gICAgJ21hdGNoZXMnIDogcmVxdWlyZSgnLi9vYmplY3QvbWF0Y2hlcycpLFxuICAgICdtYXgnIDogcmVxdWlyZSgnLi9vYmplY3QvbWF4JyksXG4gICAgJ21lcmdlJyA6IHJlcXVpcmUoJy4vb2JqZWN0L21lcmdlJyksXG4gICAgJ21pbicgOiByZXF1aXJlKCcuL29iamVjdC9taW4nKSxcbiAgICAnbWl4SW4nIDogcmVxdWlyZSgnLi9vYmplY3QvbWl4SW4nKSxcbiAgICAnbmFtZXNwYWNlJyA6IHJlcXVpcmUoJy4vb2JqZWN0L25hbWVzcGFjZScpLFxuICAgICdvbWl0JyA6IHJlcXVpcmUoJy4vb2JqZWN0L29taXQnKSxcbiAgICAncGljaycgOiByZXF1aXJlKCcuL29iamVjdC9waWNrJyksXG4gICAgJ3BsdWNrJyA6IHJlcXVpcmUoJy4vb2JqZWN0L3BsdWNrJyksXG4gICAgJ3JlZHVjZScgOiByZXF1aXJlKCcuL29iamVjdC9yZWR1Y2UnKSxcbiAgICAncmVqZWN0JyA6IHJlcXVpcmUoJy4vb2JqZWN0L3JlamVjdCcpLFxuICAgICdyZXN1bHQnIDogcmVxdWlyZSgnLi9vYmplY3QvcmVzdWx0JyksXG4gICAgJ3NldCcgOiByZXF1aXJlKCcuL29iamVjdC9zZXQnKSxcbiAgICAnc2l6ZScgOiByZXF1aXJlKCcuL29iamVjdC9zaXplJyksXG4gICAgJ3NvbWUnIDogcmVxdWlyZSgnLi9vYmplY3Qvc29tZScpLFxuICAgICd1bnNldCcgOiByZXF1aXJlKCcuL29iamVjdC91bnNldCcpLFxuICAgICd2YWx1ZXMnIDogcmVxdWlyZSgnLi9vYmplY3QvdmFsdWVzJylcbn07XG5cblxuIiwidmFyIGZ1bmN0aW9ucyA9IHJlcXVpcmUoJy4vZnVuY3Rpb25zJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9uL2JpbmQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vYXJyYXkvZm9yRWFjaCcpO1xudmFyIHNsaWNlID0gcmVxdWlyZSgnLi4vYXJyYXkvc2xpY2UnKTtcblxuICAgIC8qKlxuICAgICAqIEJpbmRzIG1ldGhvZHMgb2YgdGhlIG9iamVjdCB0byBiZSBydW4gaW4gaXQncyBvd24gY29udGV4dC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBiaW5kQWxsKG9iaiwgcmVzdF9tZXRob2ROYW1lcyl7XG4gICAgICAgIHZhciBrZXlzID0gYXJndW1lbnRzLmxlbmd0aCA+IDE/XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlKGFyZ3VtZW50cywgMSkgOiBmdW5jdGlvbnMob2JqKTtcbiAgICAgICAgZm9yRWFjaChrZXlzLCBmdW5jdGlvbihrZXkpe1xuICAgICAgICAgICAgb2JqW2tleV0gPSBiaW5kKG9ialtrZXldLCBvYmopO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGJpbmRBbGw7XG5cblxuIiwidmFyIHNvbWUgPSByZXF1aXJlKCcuL3NvbWUnKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIG9iamVjdCBjb250YWlucyB2YWx1ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKG9iaiwgbmVlZGxlKSB7XG4gICAgICAgIHJldHVybiBzb21lKG9iaiwgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbCA9PT0gbmVlZGxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGFpbnM7XG5cblxuIiwidmFyIGZvck93biA9IHJlcXVpcmUoJy4vZm9yT3duJyk7XG52YXIgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNQbGFpbk9iamVjdCcpO1xuXG4gICAgLyoqXG4gICAgICogRGVlcGx5IGNvcHkgbWlzc2luZyBwcm9wZXJ0aWVzIGluIHRoZSB0YXJnZXQgZnJvbSB0aGUgZGVmYXVsdHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGVlcEZpbGxJbih0YXJnZXQsIGRlZmF1bHRzKXtcbiAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBvYmo7XG5cbiAgICAgICAgd2hpbGUoKytpIDwgbikge1xuICAgICAgICAgICAgb2JqID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgICAgIC8vIGpzaGludCBsb29wZnVuYzogdHJ1ZVxuICAgICAgICAgICAgICAgIGZvck93bihvYmosIGZ1bmN0aW9uKG5ld1ZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1clZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoY3VyVmFsdWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNQbGFpbk9iamVjdChuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZXBGaWxsSW4oY3VyVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRlZXBGaWxsSW47XG5cblxuIiwidmFyIGZvck93biA9IHJlcXVpcmUoJy4vZm9yT3duJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpO1xuXG4gICAgZnVuY3Rpb24gY29udGFpbnNNYXRjaChhcnJheSwgcGF0dGVybikge1xuICAgICAgICB2YXIgaSA9IC0xLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgrK2kgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChkZWVwTWF0Y2hlcyhhcnJheVtpXSwgcGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaEFycmF5KHRhcmdldCwgcGF0dGVybikge1xuICAgICAgICB2YXIgaSA9IC0xLCBwYXR0ZXJuTGVuZ3RoID0gcGF0dGVybi5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgrK2kgPCBwYXR0ZXJuTGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5zTWF0Y2godGFyZ2V0LCBwYXR0ZXJuW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoT2JqZWN0KHRhcmdldCwgcGF0dGVybikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgZm9yT3duKHBhdHRlcm4sIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgICAgICBpZiAoIWRlZXBNYXRjaGVzKHRhcmdldFtrZXldLCB2YWwpKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIHRvIGJyZWFrIG91dCBvZiBmb3JPd24gZWFybHlcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlc3VsdCA9IGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSBjaGVjayBpZiB0aGUgb2JqZWN0cyBtYXRjaC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkZWVwTWF0Y2hlcyh0YXJnZXQsIHBhdHRlcm4pe1xuICAgICAgICBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmIGlzQXJyYXkocGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hBcnJheSh0YXJnZXQsIHBhdHRlcm4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hPYmplY3QodGFyZ2V0LCBwYXR0ZXJuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IHBhdHRlcm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRlZXBNYXRjaGVzO1xuXG5cbiIsInZhciBmb3JPd24gPSByZXF1aXJlKCcuL2Zvck93bicpO1xudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzUGxhaW5PYmplY3QnKTtcblxuICAgIC8qKlxuICAgICAqIE1peGVzIG9iamVjdHMgaW50byB0aGUgdGFyZ2V0IG9iamVjdCwgcmVjdXJzaXZlbHkgbWl4aW5nIGV4aXN0aW5nIGNoaWxkXG4gICAgICogb2JqZWN0cy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkZWVwTWl4SW4odGFyZ2V0LCBvYmplY3RzKSB7XG4gICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgIG4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgb2JqO1xuXG4gICAgICAgIHdoaWxlKCsraSA8IG4pe1xuICAgICAgICAgICAgb2JqID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgICAgIGZvck93bihvYmosIGNvcHlQcm9wLCB0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3B5UHJvcCh2YWwsIGtleSkge1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSB0aGlzW2tleV07XG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KHZhbCkgJiYgaXNQbGFpbk9iamVjdChleGlzdGluZykpIHtcbiAgICAgICAgICAgIGRlZXBNaXhJbihleGlzdGluZywgdmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZGVlcE1peEluO1xuXG5cbiIsInZhciBoYXNPd24gPSByZXF1aXJlKCcuL2hhc093bicpO1xudmFyIGV2ZXJ5ID0gcmVxdWlyZSgnLi9ldmVyeScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xudmFyIGlzID0gcmVxdWlyZSgnLi4vbGFuZy9pcycpO1xuXG4gICAgLy8gTWFrZXMgYSBmdW5jdGlvbiB0byBjb21wYXJlIHRoZSBvYmplY3QgdmFsdWVzIGZyb20gdGhlIHNwZWNpZmllZCBjb21wYXJlXG4gICAgLy8gb3BlcmF0aW9uIGNhbGxiYWNrLlxuICAgIGZ1bmN0aW9uIG1ha2VDb21wYXJlKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gaGFzT3duKHRoaXMsIGtleSkgJiYgY2FsbGJhY2sodmFsdWUsIHRoaXNba2V5XSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tQcm9wZXJ0aWVzKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGhhc093bih0aGlzLCBrZXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0d28gb2JqZWN0cyBoYXZlIHRoZSBzYW1lIGtleXMgYW5kIHZhbHVlcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlcXVhbHMoYSwgYiwgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBpcztcblxuICAgICAgICBpZiAoIWlzT2JqZWN0KGEpIHx8ICFpc09iamVjdChiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGEsIGIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChldmVyeShhLCBtYWtlQ29tcGFyZShjYWxsYmFjayksIGIpICYmXG4gICAgICAgICAgICAgICAgZXZlcnkoYiwgY2hlY2tQcm9wZXJ0aWVzLCBhKSk7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBlcXVhbHM7XG5cbiIsInZhciBmb3JPd24gPSByZXF1aXJlKCcuL2Zvck93bicpO1xudmFyIG1ha2VJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9uL21ha2VJdGVyYXRvcl8nKTtcblxuICAgIC8qKlxuICAgICAqIE9iamVjdCBldmVyeVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGV2ZXJ5KG9iaiwgY2FsbGJhY2ssIHRoaXNPYmopIHtcbiAgICAgICAgY2FsbGJhY2sgPSBtYWtlSXRlcmF0b3IoY2FsbGJhY2ssIHRoaXNPYmopO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgZm9yT3duKG9iaiwgZnVuY3Rpb24odmFsLCBrZXkpIHtcbiAgICAgICAgICAgIC8vIHdlIGNvbnNpZGVyIGFueSBmYWxzeSB2YWx1ZXMgYXMgXCJmYWxzZVwiIG9uIHB1cnBvc2Ugc28gc2hvcnRoYW5kXG4gICAgICAgICAgICAvLyBzeW50YXggY2FuIGJlIHVzZWQgdG8gY2hlY2sgcHJvcGVydHkgZXhpc3RlbmNlXG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrKHZhbCwga2V5LCBvYmopKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGV2ZXJ5O1xuXG5cbiIsInZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vYXJyYXkvZm9yRWFjaCcpO1xudmFyIHNsaWNlID0gcmVxdWlyZSgnLi4vYXJyYXkvc2xpY2UnKTtcbnZhciBmb3JPd24gPSByZXF1aXJlKCcuL2Zvck93bicpO1xuXG4gICAgLyoqXG4gICAgICogQ29weSBtaXNzaW5nIHByb3BlcnRpZXMgaW4gdGhlIG9iaiBmcm9tIHRoZSBkZWZhdWx0cy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmaWxsSW4ob2JqLCB2YXJfZGVmYXVsdHMpe1xuICAgICAgICBmb3JFYWNoKHNsaWNlKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uKGJhc2Upe1xuICAgICAgICAgICAgZm9yT3duKGJhc2UsIGZ1bmN0aW9uKHZhbCwga2V5KXtcbiAgICAgICAgICAgICAgICBpZiAob2JqW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmaWxsSW47XG5cblxuIiwidmFyIGZvck93biA9IHJlcXVpcmUoJy4vZm9yT3duJyk7XG52YXIgbWFrZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vZnVuY3Rpb24vbWFrZUl0ZXJhdG9yXycpO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3Qgd2l0aCBhbGwgdGhlIHByb3BlcnRpZXMgd2hlcmUgdGhlIGNhbGxiYWNrIHJldHVybnNcbiAgICAgKiB0cnVlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZpbHRlclZhbHVlcyhvYmosIGNhbGxiYWNrLCB0aGlzT2JqKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbWFrZUl0ZXJhdG9yKGNhbGxiYWNrLCB0aGlzT2JqKTtcbiAgICAgICAgdmFyIG91dHB1dCA9IHt9O1xuICAgICAgICBmb3JPd24ob2JqLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmopIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayh2YWx1ZSwga2V5LCBvYmopKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmaWx0ZXJWYWx1ZXM7XG5cbiIsInZhciBzb21lID0gcmVxdWlyZSgnLi9zb21lJyk7XG52YXIgbWFrZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vZnVuY3Rpb24vbWFrZUl0ZXJhdG9yXycpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBmaXJzdCBpdGVtIHRoYXQgbWF0Y2hlcyBjcml0ZXJpYVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZpbmQob2JqLCBjYWxsYmFjaywgdGhpc09iaikge1xuICAgICAgICBjYWxsYmFjayA9IG1ha2VJdGVyYXRvcihjYWxsYmFjaywgdGhpc09iaik7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHNvbWUob2JqLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmopIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayh2YWx1ZSwga2V5LCBvYmopKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmaW5kO1xuXG5cbiIsInZhciBmb3JPd24gPSByZXF1aXJlKCcuL2Zvck93bicpO1xudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzUGxhaW5PYmplY3QnKTtcblxuICAgIC8qXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGZsYXR0ZW4gdG8gYSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gICAgICogVXNlZCB0byByZW1vdmUgdGhlIG5lZWQgdG8gY3JlYXRlIGludGVybWVkaWF0ZSBvYmplY3RzIHdoaWxlIGZsYXR0ZW5pbmcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZmxhdHRlblRvKG9iaiwgcmVzdWx0LCBwcmVmaXgsIGxldmVsKSB7XG4gICAgICAgIGZvck93bihvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgbmVzdGVkUHJlZml4ID0gcHJlZml4ID8gcHJlZml4ICsgJy4nICsga2V5IDoga2V5O1xuXG4gICAgICAgICAgICBpZiAobGV2ZWwgIT09IDAgJiYgaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBmbGF0dGVuVG8odmFsdWUsIHJlc3VsdCwgbmVzdGVkUHJlZml4LCBsZXZlbCAtIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbbmVzdGVkUHJlZml4XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IGZsYXR0ZW5zIGFuIG9iamVjdC5cbiAgICAgKiBBIG5ldyBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGVsZW1lbnRzIGlzIHJldHVybmVkLlxuICAgICAqIElmIGxldmVsIGlzIHNwZWNpZmllZCwgaXQgd2lsbCBvbmx5IGZsYXR0ZW4gdXAgdG8gdGhhdCBsZXZlbC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmbGF0dGVuKG9iaiwgbGV2ZWwpIHtcbiAgICAgICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cblxuICAgICAgICBsZXZlbCA9IGxldmVsID09IG51bGwgPyAtMSA6IGxldmVsO1xuICAgICAgICByZXR1cm4gZmxhdHRlblRvKG9iaiwge30sICcnLCBsZXZlbCk7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmbGF0dGVuO1xuXG5cbiIsInZhciBoYXNPd24gPSByZXF1aXJlKCcuL2hhc093bicpO1xuXG4gICAgdmFyIF9oYXNEb250RW51bUJ1ZyxcbiAgICAgICAgX2RvbnRFbnVtcztcblxuICAgIGZ1bmN0aW9uIGNoZWNrRG9udEVudW0oKXtcbiAgICAgICAgX2RvbnRFbnVtcyA9IFtcbiAgICAgICAgICAgICAgICAndG9TdHJpbmcnLFxuICAgICAgICAgICAgICAgICd0b0xvY2FsZVN0cmluZycsXG4gICAgICAgICAgICAgICAgJ3ZhbHVlT2YnLFxuICAgICAgICAgICAgICAgICdoYXNPd25Qcm9wZXJ0eScsXG4gICAgICAgICAgICAgICAgJ2lzUHJvdG90eXBlT2YnLFxuICAgICAgICAgICAgICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICAgICAgICAgICAgICAgJ2NvbnN0cnVjdG9yJ1xuICAgICAgICAgICAgXTtcblxuICAgICAgICBfaGFzRG9udEVudW1CdWcgPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB7J3RvU3RyaW5nJzogbnVsbH0pIHtcbiAgICAgICAgICAgIF9oYXNEb250RW51bUJ1ZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2ltaWxhciB0byBBcnJheS9mb3JFYWNoIGJ1dCB3b3JrcyBvdmVyIG9iamVjdCBwcm9wZXJ0aWVzIGFuZCBmaXhlcyBEb24ndFxuICAgICAqIEVudW0gYnVnIG9uIElFLlxuICAgICAqIGJhc2VkIG9uOiBodHRwOi8vd2hhdHRoZWhlYWRzYWlkLmNvbS8yMDEwLzEwL2Etc2FmZXItb2JqZWN0LWtleXMtY29tcGF0aWJpbGl0eS1pbXBsZW1lbnRhdGlvblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZvckluKG9iaiwgZm4sIHRoaXNPYmope1xuICAgICAgICB2YXIga2V5LCBpID0gMDtcbiAgICAgICAgLy8gbm8gbmVlZCB0byBjaGVjayBpZiBhcmd1bWVudCBpcyBhIHJlYWwgb2JqZWN0IHRoYXQgd2F5IHdlIGNhbiB1c2VcbiAgICAgICAgLy8gaXQgZm9yIGFycmF5cywgZnVuY3Rpb25zLCBkYXRlLCBldGMuXG5cbiAgICAgICAgLy9wb3N0LXBvbmUgY2hlY2sgdGlsbCBuZWVkZWRcbiAgICAgICAgaWYgKF9oYXNEb250RW51bUJ1ZyA9PSBudWxsKSBjaGVja0RvbnRFbnVtKCk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoZXhlYyhmbiwgb2JqLCBrZXksIHRoaXNPYmopID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoX2hhc0RvbnRFbnVtQnVnKSB7XG4gICAgICAgICAgICB2YXIgY3RvciA9IG9iai5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgICAgICBpc1Byb3RvID0gISFjdG9yICYmIG9iaiA9PT0gY3Rvci5wcm90b3R5cGU7XG5cbiAgICAgICAgICAgIHdoaWxlIChrZXkgPSBfZG9udEVudW1zW2krK10pIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgY29uc3RydWN0b3IsIGlmIGl0IGlzIGEgcHJvdG90eXBlIG9iamVjdCB0aGUgY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAvLyBpcyBhbHdheXMgbm9uLWVudW1lcmFibGUgdW5sZXNzIGRlZmluZWQgb3RoZXJ3aXNlIChhbmRcbiAgICAgICAgICAgICAgICAvLyBlbnVtZXJhdGVkIGFib3ZlKS4gIEZvciBub24tcHJvdG90eXBlIG9iamVjdHMsIGl0IHdpbGwgaGF2ZVxuICAgICAgICAgICAgICAgIC8vIHRvIGJlIGRlZmluZWQgb24gdGhpcyBvYmplY3QsIHNpbmNlIGl0IGNhbm5vdCBiZSBkZWZpbmVkIG9uXG4gICAgICAgICAgICAgICAgLy8gYW55IHByb3RvdHlwZSBvYmplY3RzLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gRm9yIG90aGVyIFtbRG9udEVudW1dXSBwcm9wZXJ0aWVzLCBjaGVjayBpZiB0aGUgdmFsdWUgaXNcbiAgICAgICAgICAgICAgICAvLyBkaWZmZXJlbnQgdGhhbiBPYmplY3QgcHJvdG90eXBlIHZhbHVlLlxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKGtleSAhPT0gJ2NvbnN0cnVjdG9yJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKCFpc1Byb3RvICYmIGhhc093bihvYmosIGtleSkpKSAmJlxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSAhPT0gT2JqZWN0LnByb3RvdHlwZVtrZXldXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGVjKGZuLCBvYmosIGtleSwgdGhpc09iaikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWMoZm4sIG9iaiwga2V5LCB0aGlzT2JqKXtcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpc09iaiwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZvckluO1xuXG5cbiIsInZhciBoYXNPd24gPSByZXF1aXJlKCcuL2hhc093bicpO1xudmFyIGZvckluID0gcmVxdWlyZSgnLi9mb3JJbicpO1xuXG4gICAgLyoqXG4gICAgICogU2ltaWxhciB0byBBcnJheS9mb3JFYWNoIGJ1dCB3b3JrcyBvdmVyIG9iamVjdCBwcm9wZXJ0aWVzIGFuZCBmaXhlcyBEb24ndFxuICAgICAqIEVudW0gYnVnIG9uIElFLlxuICAgICAqIGJhc2VkIG9uOiBodHRwOi8vd2hhdHRoZWhlYWRzYWlkLmNvbS8yMDEwLzEwL2Etc2FmZXItb2JqZWN0LWtleXMtY29tcGF0aWJpbGl0eS1pbXBsZW1lbnRhdGlvblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZvck93bihvYmosIGZuLCB0aGlzT2JqKXtcbiAgICAgICAgZm9ySW4ob2JqLCBmdW5jdGlvbih2YWwsIGtleSl7XG4gICAgICAgICAgICBpZiAoaGFzT3duKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXNPYmosIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZm9yT3duO1xuXG5cbiIsInZhciBmb3JJbiA9IHJlcXVpcmUoJy4vZm9ySW4nKTtcblxuICAgIC8qKlxuICAgICAqIHJldHVybiBhIGxpc3Qgb2YgYWxsIGVudW1lcmFibGUgcHJvcGVydGllcyB0aGF0IGhhdmUgZnVuY3Rpb24gdmFsdWVzXG4gICAgICovXG4gICAgZnVuY3Rpb24gZnVuY3Rpb25zKG9iail7XG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvckluKG9iaiwgZnVuY3Rpb24odmFsLCBrZXkpe1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGtleXMuc29ydCgpO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb25zO1xuXG5cbiIsInZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNQcmltaXRpdmUnKTtcblxuICAgIC8qKlxuICAgICAqIGdldCBcIm5lc3RlZFwiIG9iamVjdCBwcm9wZXJ0eVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldChvYmosIHByb3Ape1xuICAgICAgICB2YXIgcGFydHMgPSBwcm9wLnNwbGl0KCcuJyksXG4gICAgICAgICAgICBsYXN0ID0gcGFydHMucG9wKCk7XG5cbiAgICAgICAgd2hpbGUgKHByb3AgPSBwYXJ0cy5zaGlmdCgpKSB7XG4gICAgICAgICAgICBvYmogPSBvYmpbcHJvcF07XG4gICAgICAgICAgICBpZiAob2JqID09IG51bGwpIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmpbbGFzdF07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG5cblxuIiwidmFyIGdldCA9IHJlcXVpcmUoJy4vZ2V0Jyk7XG5cbiAgICB2YXIgVU5ERUY7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBvYmplY3QgaGFzIG5lc3RlZCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYXMob2JqLCBwcm9wKXtcbiAgICAgICAgcmV0dXJuIGdldChvYmosIHByb3ApICE9PSBVTkRFRjtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGhhcztcblxuXG5cbiIsIlxuXG4gICAgLyoqXG4gICAgICogU2FmZXIgT2JqZWN0Lmhhc093blByb3BlcnR5XG4gICAgICovXG4gICAgIGZ1bmN0aW9uIGhhc093bihvYmosIHByb3Ape1xuICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xuICAgICB9XG5cbiAgICAgbW9kdWxlLmV4cG9ydHMgPSBoYXNPd247XG5cblxuIiwidmFyIGZvck93biA9IHJlcXVpcmUoJy4vZm9yT3duJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgb2JqZWN0IGtleXNcbiAgICAgKi9cbiAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICAgICAgZm9yT3duKG9iaiwgZnVuY3Rpb24odmFsLCBrZXkpe1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG4iLCJ2YXIgZm9yT3duID0gcmVxdWlyZSgnLi9mb3JPd24nKTtcbnZhciBtYWtlSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9mdW5jdGlvbi9tYWtlSXRlcmF0b3JfJyk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB3aGVyZSBhbGwgdGhlIHZhbHVlcyBhcmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nXG4gICAgICogYGNhbGxiYWNrYC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYXBWYWx1ZXMob2JqLCBjYWxsYmFjaywgdGhpc09iaikge1xuICAgICAgICBjYWxsYmFjayA9IG1ha2VJdGVyYXRvcihjYWxsYmFjaywgdGhpc09iaik7XG4gICAgICAgIHZhciBvdXRwdXQgPSB7fTtcbiAgICAgICAgZm9yT3duKG9iaiwgZnVuY3Rpb24odmFsLCBrZXksIG9iaikge1xuICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBjYWxsYmFjayh2YWwsIGtleSwgb2JqKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBtYXBWYWx1ZXM7XG5cbiIsInZhciBmb3JPd24gPSByZXF1aXJlKCcuL2Zvck93bicpO1xuXG4gICAgLyoqXG4gICAgICogY2hlY2tzIGlmIGEgb2JqZWN0IGNvbnRhaW5zIGFsbCBnaXZlbiBwcm9wZXJ0aWVzL3ZhbHVlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1hdGNoZXModGFyZ2V0LCBwcm9wcyl7XG4gICAgICAgIC8vIGNhbid0IHVzZSBcIm9iamVjdC9ldmVyeVwiIGJlY2F1c2Ugb2YgY2lyY3VsYXIgZGVwZW5kZW5jeVxuICAgICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgZm9yT3duKHByb3BzLCBmdW5jdGlvbih2YWwsIGtleSl7XG4gICAgICAgICAgICBpZiAodGFyZ2V0W2tleV0gIT09IHZhbCkge1xuICAgICAgICAgICAgICAgIC8vIGJyZWFrIGxvb3AgYXQgZmlyc3QgZGlmZmVyZW5jZVxuICAgICAgICAgICAgICAgIHJldHVybiAocmVzdWx0ID0gZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IG1hdGNoZXM7XG5cblxuIiwidmFyIGFyck1heCA9IHJlcXVpcmUoJy4uL2FycmF5L21heCcpO1xudmFyIHZhbHVlcyA9IHJlcXVpcmUoJy4vdmFsdWVzJyk7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1heGltdW0gdmFsdWUgaW5zaWRlIG9iamVjdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYXgob2JqLCBjb21wYXJlRm4pIHtcbiAgICAgICAgcmV0dXJuIGFyck1heCh2YWx1ZXMob2JqKSwgY29tcGFyZUZuKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IG1heDtcblxuIiwidmFyIGhhc093biA9IHJlcXVpcmUoJy4vaGFzT3duJyk7XG52YXIgZGVlcENsb25lID0gcmVxdWlyZSgnLi4vbGFuZy9kZWVwQ2xvbmUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuICAgIC8qKlxuICAgICAqIERlZXAgbWVyZ2Ugb2JqZWN0cy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgICAgICAgdmFyIGkgPSAxLFxuICAgICAgICAgICAga2V5LCB2YWwsIG9iaiwgdGFyZ2V0O1xuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBtb2RpZnkgc291cmNlIGVsZW1lbnQgYW5kIGl0J3MgcHJvcGVydGllc1xuICAgICAgICAvLyBvYmplY3RzIGFyZSBwYXNzZWQgYnkgcmVmZXJlbmNlXG4gICAgICAgIHRhcmdldCA9IGRlZXBDbG9uZSggYXJndW1lbnRzWzBdICk7XG5cbiAgICAgICAgd2hpbGUgKG9iaiA9IGFyZ3VtZW50c1tpKytdKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAoICEgaGFzT3duKG9iaiwga2V5KSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsID0gb2JqW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGlzT2JqZWN0KHZhbCkgJiYgaXNPYmplY3QodGFyZ2V0W2tleV0pICl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY2VwdGlvbiwgZGVlcCBtZXJnZSBvYmplY3RzXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gbWVyZ2UodGFyZ2V0W2tleV0sIHZhbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGFycmF5cywgcmVnZXhwLCBkYXRlLCBvYmplY3RzIGFyZSBjbG9uZWRcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBkZWVwQ2xvbmUodmFsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBtZXJnZTtcblxuXG4iLCJ2YXIgYXJyTWluID0gcmVxdWlyZSgnLi4vYXJyYXkvbWluJyk7XG52YXIgdmFsdWVzID0gcmVxdWlyZSgnLi92YWx1ZXMnKTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWluaW11bSB2YWx1ZSBpbnNpZGUgb2JqZWN0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1pbihvYmosIGl0ZXJhdG9yKSB7XG4gICAgICAgIHJldHVybiBhcnJNaW4odmFsdWVzKG9iaiksIGl0ZXJhdG9yKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IG1pbjtcblxuIiwidmFyIGZvck93biA9IHJlcXVpcmUoJy4vZm9yT3duJyk7XG5cbiAgICAvKipcbiAgICAqIENvbWJpbmUgcHJvcGVydGllcyBmcm9tIGFsbCB0aGUgb2JqZWN0cyBpbnRvIGZpcnN0IG9uZS5cbiAgICAqIC0gVGhpcyBtZXRob2QgYWZmZWN0cyB0YXJnZXQgb2JqZWN0IGluIHBsYWNlLCBpZiB5b3Ugd2FudCB0byBjcmVhdGUgYSBuZXcgT2JqZWN0IHBhc3MgYW4gZW1wdHkgb2JqZWN0IGFzIGZpcnN0IHBhcmFtLlxuICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAgICBUYXJnZXQgT2JqZWN0XG4gICAgKiBAcGFyYW0gey4uLm9iamVjdH0gb2JqZWN0cyAgICBPYmplY3RzIHRvIGJlIGNvbWJpbmVkICgwLi4ubiBvYmplY3RzKS5cbiAgICAqIEByZXR1cm4ge29iamVjdH0gVGFyZ2V0IE9iamVjdC5cbiAgICAqL1xuICAgIGZ1bmN0aW9uIG1peEluKHRhcmdldCwgb2JqZWN0cyl7XG4gICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgIG4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgb2JqO1xuICAgICAgICB3aGlsZSgrK2kgPCBuKXtcbiAgICAgICAgICAgIG9iaiA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvck93bihvYmosIGNvcHlQcm9wLCB0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29weVByb3AodmFsLCBrZXkpe1xuICAgICAgICB0aGlzW2tleV0gPSB2YWw7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBtaXhJbjtcblxuIiwidmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9hcnJheS9mb3JFYWNoJyk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbmVzdGVkIG9iamVjdCBpZiBub24tZXhpc3RlbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBuYW1lc3BhY2Uob2JqLCBwYXRoKXtcbiAgICAgICAgaWYgKCFwYXRoKSByZXR1cm4gb2JqO1xuICAgICAgICBmb3JFYWNoKHBhdGguc3BsaXQoJy4nKSwgZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgIGlmICghb2JqW2tleV0pIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqID0gb2JqW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gbmFtZXNwYWNlO1xuXG5cbiIsInZhciBzbGljZSA9IHJlcXVpcmUoJy4uL2FycmF5L3NsaWNlJyk7XG52YXIgY29udGFpbnMgPSByZXF1aXJlKCcuLi9hcnJheS9jb250YWlucycpO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgY29weSBvZiB0aGUgb2JqZWN0LCBmaWx0ZXJlZCB0byBvbmx5IGNvbnRhaW4gcHJvcGVydGllcyBleGNlcHQgdGhlIGJsYWNrbGlzdGVkIGtleXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gb21pdChvYmosIHZhcl9rZXlzKXtcbiAgICAgICAgdmFyIGtleXMgPSB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAnc3RyaW5nJz8gYXJndW1lbnRzWzFdIDogc2xpY2UoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIG91dCA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgIWNvbnRhaW5zKGtleXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIG91dFtwcm9wZXJ0eV0gPSBvYmpbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBvbWl0O1xuXG5cbiIsInZhciBzbGljZSA9IHJlcXVpcmUoJy4uL2FycmF5L3NsaWNlJyk7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBvYmplY3QsIGZpbHRlcmVkIHRvIG9ubHkgaGF2ZSB2YWx1ZXMgZm9yIHRoZSB3aGl0ZWxpc3RlZCBrZXlzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHBpY2sob2JqLCB2YXJfa2V5cyl7XG4gICAgICAgIHZhciBrZXlzID0gdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3N0cmluZyc/IGFyZ3VtZW50c1sxXSA6IHNsaWNlKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBvdXQgPSB7fSxcbiAgICAgICAgICAgIGkgPSAwLCBrZXk7XG4gICAgICAgIHdoaWxlIChrZXkgPSBrZXlzW2krK10pIHtcbiAgICAgICAgICAgIG91dFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHBpY2s7XG5cblxuIiwidmFyIG1hcCA9IHJlcXVpcmUoJy4vbWFwJyk7XG52YXIgcHJvcCA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9uL3Byb3AnKTtcblxuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgYSBsaXN0IG9mIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwbHVjayhvYmosIHByb3BOYW1lKXtcbiAgICAgICAgcmV0dXJuIG1hcChvYmosIHByb3AocHJvcE5hbWUpKTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHBsdWNrO1xuXG5cbiIsInZhciBmb3JPd24gPSByZXF1aXJlKCcuL2Zvck93bicpO1xudmFyIHNpemUgPSByZXF1aXJlKCcuL3NpemUnKTtcblxuICAgIC8qKlxuICAgICAqIE9iamVjdCByZWR1Y2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZWR1Y2Uob2JqLCBjYWxsYmFjaywgbWVtbywgdGhpc09iaikge1xuICAgICAgICB2YXIgaW5pdGlhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuXG4gICAgICAgIGlmICghc2l6ZShvYmopICYmICFpbml0aWFsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlZHVjZSBvZiBlbXB0eSBvYmplY3Qgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JPd24ob2JqLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBsaXN0KSB7XG4gICAgICAgICAgICBpZiAoIWluaXRpYWwpIHtcbiAgICAgICAgICAgICAgICBtZW1vID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaW5pdGlhbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZW1vID0gY2FsbGJhY2suY2FsbCh0aGlzT2JqLCBtZW1vLCB2YWx1ZSwga2V5LCBsaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1lbW87XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZWR1Y2U7XG5cblxuIiwidmFyIGZpbHRlciA9IHJlcXVpcmUoJy4vZmlsdGVyJyk7XG52YXIgbWFrZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vZnVuY3Rpb24vbWFrZUl0ZXJhdG9yXycpO1xuXG4gICAgLyoqXG4gICAgICogT2JqZWN0IHJlamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlamVjdChvYmosIGNhbGxiYWNrLCB0aGlzT2JqKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbWFrZUl0ZXJhdG9yKGNhbGxiYWNrLCB0aGlzT2JqKTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcihvYmosIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgb2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gIWNhbGxiYWNrKHZhbHVlLCBpbmRleCwgb2JqKTtcbiAgICAgICAgfSwgdGhpc09iaik7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZWplY3Q7XG5cblxuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9sYW5nL2lzRnVuY3Rpb24nKTtcblxuICAgIGZ1bmN0aW9uIHJlc3VsdChvYmosIHByb3ApIHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gb2JqW3Byb3BdO1xuXG4gICAgICAgIGlmKHByb3BlcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKHByb3BlcnR5KSA/IHByb3BlcnR5LmNhbGwob2JqKSA6IHByb3BlcnR5O1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuXG4iLCJ2YXIgbmFtZXNwYWNlID0gcmVxdWlyZSgnLi9uYW1lc3BhY2UnKTtcblxuICAgIC8qKlxuICAgICAqIHNldCBcIm5lc3RlZFwiIG9iamVjdCBwcm9wZXJ0eVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldChvYmosIHByb3AsIHZhbCl7XG4gICAgICAgIHZhciBwYXJ0cyA9ICgvXiguKylcXC4oLispJC8pLmV4ZWMocHJvcCk7XG4gICAgICAgIGlmIChwYXJ0cyl7XG4gICAgICAgICAgICBuYW1lc3BhY2Uob2JqLCBwYXJ0c1sxXSlbcGFydHNbMl1dID0gdmFsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBzZXQ7XG5cblxuIiwidmFyIGZvck93biA9IHJlcXVpcmUoJy4vZm9yT3duJyk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgb2JqZWN0IHNpemVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzaXplKG9iaikge1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICBmb3JPd24ob2JqLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHNpemU7XG5cblxuIiwidmFyIGZvck93biA9IHJlcXVpcmUoJy4vZm9yT3duJyk7XG52YXIgbWFrZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vZnVuY3Rpb24vbWFrZUl0ZXJhdG9yXycpO1xuXG4gICAgLyoqXG4gICAgICogT2JqZWN0IHNvbWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzb21lKG9iaiwgY2FsbGJhY2ssIHRoaXNPYmopIHtcbiAgICAgICAgY2FsbGJhY2sgPSBtYWtlSXRlcmF0b3IoY2FsbGJhY2ssIHRoaXNPYmopO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGZvck93bihvYmosIGZ1bmN0aW9uKHZhbCwga2V5KSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sodmFsLCBrZXksIG9iaikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBzb21lO1xuXG5cbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL2hhcycpO1xuXG4gICAgLyoqXG4gICAgICogVW5zZXQgb2JqZWN0IHByb3BlcnR5LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVuc2V0KG9iaiwgcHJvcCl7XG4gICAgICAgIGlmIChoYXMob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gcHJvcC5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgIGxhc3QgPSBwYXJ0cy5wb3AoKTtcbiAgICAgICAgICAgIHdoaWxlIChwcm9wID0gcGFydHMuc2hpZnQoKSkge1xuICAgICAgICAgICAgICAgIG9iaiA9IG9ialtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoZGVsZXRlIG9ialtsYXN0XSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHByb3BlcnR5IGRvZXNuJ3QgZXhpc3QgdHJlYXQgYXMgZGVsZXRlZFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHVuc2V0O1xuXG5cbiIsInZhciBmb3JPd24gPSByZXF1aXJlKCcuL2Zvck93bicpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IG9iamVjdCB2YWx1ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB2YWx1ZXMob2JqKSB7XG4gICAgICAgIHZhciB2YWxzID0gW107XG4gICAgICAgIGZvck93bihvYmosIGZ1bmN0aW9uKHZhbCwga2V5KXtcbiAgICAgICAgICAgIHZhbHMucHVzaCh2YWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB2YWx1ZXM7XG5cblxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB2MSB9IGZyb20gJy4vdjEuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2MyB9IGZyb20gJy4vdjMuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NCB9IGZyb20gJy4vdjQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2NSB9IGZyb20gJy4vdjUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOSUwgfSBmcm9tICcuL25pbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlcnNpb24gfSBmcm9tICcuL3ZlcnNpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2YWxpZGF0ZSB9IGZyb20gJy4vdmFsaWRhdGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcnNlIH0gZnJvbSAnLi9wYXJzZS5qcyc7IiwiLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgdmFyIGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIHZhciBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgdmFyIHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIHZhciBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIHZhciBhID0gMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWQ1OyIsImV4cG9ydCBkZWZhdWx0ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHZhciB2O1xuICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIHZhciBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIHZhciBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBOOyArK19pKSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW19pICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW19pXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgTjsgKytfaTIpIHtcbiAgICB2YXIgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW19pMl1bdF07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX3QgPSAxNjsgX3QgPCA4MDsgKytfdCkge1xuICAgICAgV1tfdF0gPSBST1RMKFdbX3QgLSAzXSBeIFdbX3QgLSA4XSBeIFdbX3QgLSAxNF0gXiBXW190IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IEhbMF07XG4gICAgdmFyIGIgPSBIWzFdO1xuICAgIHZhciBjID0gSFsyXTtcbiAgICB2YXIgZCA9IEhbM107XG4gICAgdmFyIGUgPSBIWzRdO1xuXG4gICAgZm9yICh2YXIgX3QyID0gMDsgX3QyIDwgODA7ICsrX3QyKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoX3QyIC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1tfdDJdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoYTE7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJzsgLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcblxudmFyIF9jbG9ja3NlcTsgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG5cblxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICB2YXIgZHQgPSBtc2VjcyAtIF9sYXN0TVNlY3MgKyAobnNlY3MgLSBfbGFzdE5TZWNzKSAvIDEwMDAwOyAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG5cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfSAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG5cblxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfSAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG5cblxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTsgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG5cbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7IC8vIGB0aW1lX2xvd2BcblxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgdmFyIHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgc3RyaW5naWZ5KGIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2MTsiLCJpbXBvcnQgdjM1IGZyb20gJy4vdjM1LmpzJztcbmltcG9ydCBtZDUgZnJvbSAnLi9tZDUuanMnO1xudmFyIHYzID0gdjM1KCd2MycsIDB4MzAsIG1kNSk7XG5leHBvcnQgZGVmYXVsdCB2MzsiLCJpbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmltcG9ydCBwYXJzZSBmcm9tICcuL3BhcnNlLmpzJztcblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIHZhciBieXRlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgYnl0ZXMucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG4gIH1cblxuICByZXR1cm4gYnl0ZXM7XG59XG5cbmV4cG9ydCB2YXIgRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnQgdmFyIFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZXNwYWNlID0gcGFyc2UobmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZXNwYWNlLmxlbmd0aCAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZ2lmeShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IHYzNSBmcm9tICcuL3YzNS5qcyc7XG5pbXBvcnQgc2hhMSBmcm9tICcuL3NoYTEuanMnO1xudmFyIHY1ID0gdjM1KCd2NScsIDB4NTAsIHNoYTEpO1xuZXhwb3J0IGRlZmF1bHQgdjU7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuXG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VJbnQodXVpZC5zdWJzdHIoMTQsIDEpLCAxNik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnNpb247Il0sInNvdXJjZVJvb3QiOiIifQ==