(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _proline = require("./proline");

var _helpersHelpersJs = require("./helpers/helpers.js");

var banner = document.getElementById("banner");
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
  ease: "power2.out"
});

var READ_PLAY_IN_STORE = { t0: 2.8, t1: 2, t2: 3.2 };
var READ_PLUS_BETTING_EASIER = { t0: 3, t1: 2, t2: 3.2 };
var EARLY_PAYOUT = { t1: 2, t2: 2.2 };
var PARLAY = { t1: 2, t2: 3.5 };

var READ_ALL = {
  parlay: PARLAY,
  plusEarlyPayout: EARLY_PAYOUT,
  playInStore: READ_PLAY_IN_STORE,
  plusBettingEasier: READ_PLUS_BETTING_EASIER,
  nfl: { t0: 2.5, t1: 3.2, t2: 2, t3: 1.8 }
};

var read = READ_ALL[universalBanner.name];
var uyg = 1.5;
var w = bannerSize.w;
var h = bannerSize.h;

function init() {
  var tl = new TimelineMax({
    onComplete: function onComplete() {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    }
  });

  tl.set(".frame1", { opacity: 1 });

  tl.from(".t0", { opacity: 0, duration: 0.3 }, "+=.3");
  tl.from(".arrows", { opacity: 0, duration: 0.3 }, "+=" + read.t0);
  tl.from(".phone_1a", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.from(".t1", { opacity: 0, duration: 0.3 });
  tl.to([".phone_1a", ".t1"], { opacity: 0, duration: 0.3 }, "+=" + read.t1);
  tl.from(".phone_1b", { opacity: 0, duration: 0.3 }, "+=.2");

  tl.from(".t2", { opacity: 0, duration: 0.3 }, "+=.3");

  tl.add("end", "+=" + read.t2);
  tl.add((0, _proline.olg)(), "end");
  tl.from(".arrows_2", { opacity: 0, duration: 0.6 }, "end");
  tl.from(".phone_2", { opacity: 0, y: "+=80", duration: 0.3 }, "end+=.1");
  tl.from(".txt_dta", { opacity: 0, x: "+=40", duration: 0.3 }, "end+=.7");
  tl.from([".playsmart", ".legal"], { opacity: 0, duration: 0.3 }, "end");
  return tl;
}

function init_728x90() {
  var tl = new TimelineMax({
    onComplete: function onComplete() {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    }
  });

  tl.set(".frame1", { opacity: 1 });
  tl.from(".arrows", { opacity: 0, duration: 0.3 });
  tl.from(".phone_1a", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.from(".t1", { opacity: 0, duration: 0.3 });

  if (universalBanner.name === "playInStore") {
    // tl.to([".t1"], {opacity:0, duration:.3}, `+=${read.t1}`)
    // tl.from(".t2", {opacity:0, duration:.3}, "+=.3")

    tl.to([".t1", ".phone_1a"], { opacity: 0, duration: 0.3 }, "+=" + read.t1);
    tl.add("t2");
    tl.from(".phone_1b", { opacity: 0, duration: 0.3 }, "t2");
    tl.from(".t2", { opacity: 0, duration: 0.3 }, "t2+=1");
  } else {
    tl.to(".t1", { opacity: 0, duration: 0.3 }, "+=" + read.t1);
    tl.from([".phone_1b", ".t2"], { opacity: 0, duration: 0.3 });
  }

  tl.from(".hero", { opacity: 0, duration: 0.5 }, "+=" + read.t2);
  tl.from(".txt_uyg", { opacity: 0, duration: 0.3 }, "+=.3");

  tl.from(".arrow_hero", { opacity: 0, duration: 0.6 }, "+=" + uyg);

  tl.from(".phone_2", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.from(".txt_dta", { opacity: 0, y: "+=40", duration: 0.3 });

  tl.from([".playsmart", ".legal"], { opacity: 0, duration: 0.3 });

  tl.add((0, _proline.olg)());

  return tl;
}

function init_320x50() {
  var tl = new TimelineMax({
    onComplete: function onComplete() {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    }
  });

  tl.set(".frame1", { opacity: 1 });
  tl.from(".t0", { opacity: 0, duration: 0.3 }, "+=.3");
  tl.from(".arrows", { opacity: 0, duration: 0.3 }, "+=" + read.t0);
  tl.from(".phone_1a", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.from(".t1", { opacity: 0, duration: 0.3 });
  tl.from(".t2", { opacity: 0, duration: 0.3 }, "+=" + read.t1);
  tl.from(".arrows_2", { opacity: 0, y: "+=80", duration: 0.3 }, "+=" + read.t2);
  tl.from(".phone_2", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.from(".txt_dta", { opacity: 0, y: "+=40", duration: 0.3 });

  tl.from([".playsmart", ".legal"], { opacity: 0, duration: 0.3 });

  tl.add((0, _proline.olg)());

  return tl;
}

function init_160x600() {
  var tl = new TimelineMax({
    onComplete: function onComplete() {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    }
  });

  tl.set(".frame1", { opacity: 1 });

  tl.from(".t0", { opacity: 0, duration: 0.3 }, "+=.3");
  tl.from(".phone_1a", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.to([".phone_1a", ".t0"], { opacity: 0, duration: 0.3 }, "+=" + read.t0);

  tl.from(".arrows", { opacity: 0, duration: 0.3 });
  tl.from([".t1"], { opacity: 0, duration: 0.3 }, "+=.3");
  tl.from([".phone_1b"], { opacity: 0, duration: 0.3 }, "+=.3");
  // tl.from(".t1", { opacity: 0, duration: 0.3 });
  tl.to(".t1", { opacity: 0, duration: 0.3 }, "+=" + read.t1);
  tl.add("t2");
  tl.from(".t2", { opacity: 0, duration: 0.3 });
  tl.to(".t2", { opacity: 0, duration: 0.3 }, "+=" + read.t2);

  tl.add("end");

  tl.from(".phone_2", { opacity: 0, duration: 0.3 }, "end+=.1");
  tl.from(".txt_dta", { opacity: 0, duration: 0.3 }, "end+=.7");
  tl.from([".playsmart", ".legal"], { opacity: 0, duration: 0.3 }, "end");
  tl.add((0, _proline.olg)());
  return tl;
}

exports.init = init;
exports.olg = _proline.olg;
exports.bannerSize = bannerSize;
exports.read = read;
exports.init_320x50 = init_320x50;
exports.init_728x90 = init_728x90;
exports.init_160x600 = init_160x600;

},{"./helpers/helpers.js":2,"./proline":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function origin(el, x, y) {
	TweenLite.set(el, { transformOrigin: x + "px " + y + "px", x: -x / 2 + "px", y: -y / 2 + "px", scale: .5 });
}

exports.origin = origin;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });

    var tl = new TimelineMax({ onStart: function onStart() {
            // TweenLite.set(".olg-static", {opacity:0}) 
        } });

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],4:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.init_728x90)();

},{"../../_common/js/common.js":1}]},{},[4])

//# sourceMappingURL=main.js.map
