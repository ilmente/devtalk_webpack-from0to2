/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TheColorAndTheShape */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NothingLeftToLose; });
/* harmony export (immutable) */ __webpack_exports__["b"] = thePretender;
/* unused harmony export bigMe */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TheColorAndTheShape = function () {
    function TheColorAndTheShape() {
        _classCallCheck(this, TheColorAndTheShape);
    }

    _createClass(TheColorAndTheShape, [{
        key: "everlong",
        value: function everlong() {
            console.log("Hello, I've waited here for you");
        }
    }]);

    return TheColorAndTheShape;
}();

var NothingLeftToLose = function () {
    function NothingLeftToLose() {
        _classCallCheck(this, NothingLeftToLose);
    }

    _createClass(NothingLeftToLose, [{
        key: "learnToFly",
        value: function learnToFly() {
            console.log("I'm looking to the sky to save me!");
        }
    }]);

    return NothingLeftToLose;
}();

function thePretender() {
    console.log("What if I say I'm not like the others?");
}

function bigMe() {
    console.log('I could stand to prove');
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BraveNewWorld; });
/* unused harmony export SeventhSonOfASeventhSon */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BraveNewWorld = function () {
    function BraveNewWorld() {
        _classCallCheck(this, BraveNewWorld);
    }

    _createClass(BraveNewWorld, [{
        key: "bloodBrothers",
        value: function bloodBrothers() {
            console.log("We're blood brothers!");
        }
    }]);

    return BraveNewWorld;
}();

var SeventhSonOfASeventhSon = function () {
    function SeventhSonOfASeventhSon() {
        _classCallCheck(this, SeventhSonOfASeventhSon);
    }

    _createClass(SeventhSonOfASeventhSon, [{
        key: "moonchild",
        value: function moonchild() {
            console.log('Moonchild hear the mandrake scream');
        }
    }]);

    return SeventhSonOfASeventhSon;
}();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterOfPuppets; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MasterOfPuppets = function () {
    function MasterOfPuppets() {
        _classCallCheck(this, MasterOfPuppets);
    }

    _createClass(MasterOfPuppets, [{
        key: 'welcomeHome',
        value: function welcomeHome() {
            console.log('No one leaves and no one will');
        }
    }, {
        key: 'masterOfPuppets',
        value: function masterOfPuppets() {
            console.log('Twisting your mind and smashing your dreams');
        }
    }]);

    return MasterOfPuppets;
}();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bohemianRhapsody;
/* unused harmony export fatBottomedGirls */
/* unused harmony export tieYourMotherDown */

function bohemianRhapsody() {
    console.log('Galileo, Galileo, Galileo Figaro! Magnificoooo!');
}

function fatBottomedGirls() {
    console.log('You make the rockin world go round!');
}

function tieYourMotherDown() {
    console.log('Give me all your love tonight!');
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var duets = {};

function somethingStupid() {
    console.log('Saying something stupid like I love you');
}

function summerWind() {
    console.log('The summer wind came blowin in');
}

duets.somethingStupid = somethingStupid;
duets.otherSong = otherSong;
exports.duets = duets;

exports.myWay = function myWay() {
    console.log('And so I face the final curtain');
};

exports.strangersInTheNight = function strangersInTheNight() {
    console.log('Up to the moment when we said our first hello');
};

function flyMeToTheMoon() {
    console.log('Fly me to the moon');
}

// module.exports = {
//     myWay: myWay,
//     singinInTheRain: singinInTheRain,
//     duets: duets
// }

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_sinatra__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_sinatra___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__music_sinatra__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__music_queen__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_metallica__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__music_iron_maiden__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__music_foo_fighters__ = __webpack_require__(0);
// import './react';






__WEBPACK_IMPORTED_MODULE_0__music_sinatra__["myWay"]();

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__music_queen__["a" /* bohemianRhapsody */])();

var mop = new __WEBPACK_IMPORTED_MODULE_2__music_metallica__["a" /* MasterOfPuppets */]();
mop.welcomeHome();

var bnw = new __WEBPACK_IMPORTED_MODULE_3__music_iron_maiden__["a" /* BraveNewWorld */]();
bnw.bloodBrothers();

var nltl = new __WEBPACK_IMPORTED_MODULE_4__music_foo_fighters__["a" /* NothingLeftToLose */]();
nltl.learnToFly();

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__music_foo_fighters__["b" /* thePretender */])();

/***/ })
/******/ ]);