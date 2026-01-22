import { olg } from "./proline";
import { origin } from "./helpers/helpers.js";

gsap.defaults({
  ease: "power2.out",
});

const READ_PLAY_IN_STORE = { t0: 2.8, t1: 2, t2: 3.2 };
const READ_PLUS_BETTING_EASIER = { t0: 3, t1: 2, t2: 3.2 };
const EARLY_PAYOUT = { t1: 2, t2: 2.2 };
const PARLAY = { t1: 2, t2: 3.5 };

const READ_ALL = {
  parlay: PARLAY,
  plusEarlyPayout: EARLY_PAYOUT,
  playInStore: READ_PLAY_IN_STORE,
  plusBettingEasier: READ_PLUS_BETTING_EASIER,
  nfl: { t0: 2.5, t1: 3.2, t2: 2, t3: 1.8 },
};

const read = READ_ALL[universalBanner.name];
const uyg = 1.5;
const banner = document.getElementById("banner");
console.log(banner);

const bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };
const { w, h } = bannerSize;

function init() {
  const tl = new TimelineMax({
    onComplete: () => {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    },
  });

  tl.set(".frame1", { opacity: 1 });

  tl.from(".t0", { opacity: 0, duration: 0.3 }, "+=.3");
  tl.from(".arrows", { opacity: 0, duration: 0.3 }, `+=${read.t0}`);
  tl.from(".phone_1a", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.from(".t1", { opacity: 0, duration: 0.3 });
  tl.to([".phone_1a", ".t1"], { opacity: 0, duration: 0.3 }, `+=${read.t1}`);
  tl.from(".phone_1b", { opacity: 0, duration: 0.3 }, "+=.2");

  tl.from(".t2", { opacity: 0, duration: 0.3 }, "+=.3");

  tl.add("end", `+=${read.t2}`);
  tl.add(olg(), "end");
  tl.from(".arrows_2", { opacity: 0, duration: 0.6 }, "end");
  tl.from(".phone_2", { opacity: 0, y: "+=80", duration: 0.3 }, "end+=.1");
  tl.from(".txt_dta", { opacity: 0, x: "+=40", duration: 0.3 }, "end+=.7");
  tl.from([".playsmart", ".legal"], { opacity: 0, duration: 0.3 }, "end");
  return tl;
}

function init_728x90() {
  const tl = new TimelineMax({
    onComplete: () => {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    },
  });

  tl.set(".frame1", { opacity: 1 });
  tl.from(".arrows", { opacity: 0, duration: 0.3 });
  tl.from(".phone_1a", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.from(".t1", { opacity: 0, duration: 0.3 });

  if (universalBanner.name === "playInStore") {
    // tl.to([".t1"], {opacity:0, duration:.3}, `+=${read.t1}`)
    // tl.from(".t2", {opacity:0, duration:.3}, "+=.3")

    tl.to([".t1", ".phone_1a"], { opacity: 0, duration: 0.3 }, `+=${read.t1}`);
    tl.add("t2");
    tl.from(".phone_1b", { opacity: 0, duration: 0.3 }, "t2");
    tl.from(".t2", { opacity: 0, duration: 0.3 }, "t2+=1");
  } else {
    tl.to(".t1", { opacity: 0, duration: 0.3 }, `+=${read.t1}`);
    tl.from([".phone_1b", ".t2"], { opacity: 0, duration: 0.3 });
  }

  tl.from(".hero", { opacity: 0, duration: 0.5 }, `+=${read.t2}`);
  tl.from(".txt_uyg", { opacity: 0, duration: 0.3 }, "+=.3");

  tl.from(".arrow_hero", { opacity: 0, duration: 0.6 }, `+=${uyg}`);

  tl.from(".phone_2", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.from(".txt_dta", { opacity: 0, y: "+=40", duration: 0.3 });

  tl.from([".playsmart", ".legal"], { opacity: 0, duration: 0.3 });

  tl.add(olg());

  return tl;
}

function init_320x50() {
  const tl = new TimelineMax({
    onComplete: () => {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    },
  });

  tl.set(".frame1", { opacity: 1 });
  tl.from(".t0", { opacity: 0, duration: 0.3 }, `+=.3`);
  tl.from(".arrows", { opacity: 0, duration: 0.3 }, `+=${read.t0}`);
  tl.from(".phone_1a", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.from(".t1", { opacity: 0, duration: 0.3 });
  tl.from(".t2", { opacity: 0, duration: 0.3 }, `+=${read.t1}`);
  tl.from(".arrows_2", { opacity: 0, y: "+=80", duration: 0.3 }, `+=${read.t2}`);
  tl.from(".phone_2", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.from(".txt_dta", { opacity: 0, y: "+=40", duration: 0.3 });

  tl.from([".playsmart", ".legal"], { opacity: 0, duration: 0.3 });

  tl.add(olg());

  return tl;
}

function init_160x600() {
  const tl = new TimelineMax({
    onComplete: () => {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    },
  });

  tl.set(".frame1", { opacity: 1 });

  tl.from(".t0", { opacity: 0, duration: 0.3 }, "+=.3");
  tl.from(".phone_1a", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.to([".phone_1a", ".t0"], { opacity: 0, duration: 0.3 }, `+=${read.t0}`);

  tl.from(".arrows", { opacity: 0, duration: 0.3 });
  tl.from([".t1"], { opacity: 0, duration: 0.3 }, "+=.3");
  tl.from([".phone_1b"], { opacity: 0, duration: 0.3 }, "+=.3");
  // tl.from(".t1", { opacity: 0, duration: 0.3 });
  tl.to(".t1", { opacity: 0, duration: 0.3 }, `+=${read.t1}`);
  tl.add("t2");
  tl.from(".t2", { opacity: 0, duration: 0.3 });
  tl.to(".t2", { opacity: 0, duration: 0.3 }, `+=${read.t2}`);

  tl.add("end");

  tl.from(".phone_2", { opacity: 0, duration: 0.3 }, "end+=.1");
  tl.from(".txt_dta", { opacity: 0, duration: 0.3 }, "end+=.7");
  tl.from([".playsmart", ".legal"], { opacity: 0, duration: 0.3 }, "end");
  tl.add(olg());
  return tl;
}

export { init, olg, bannerSize, read, init_320x50, init_728x90, init_160x600 };
