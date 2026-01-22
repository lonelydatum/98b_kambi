import { olg, read } from "../../_common/js/common.js";

function init_320x50() {
  const tl = new TimelineMax({
    onComplete: () => {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    },
  });

  tl.set(".frame1", { opacity: 1 });
  tl.from(".t0", { opacity: 0, duration: 0.3, y: "+=40" }, `+=.3`);
  tl.from(".arrows", { opacity: 0, duration: 0.3 }, `+=${read.t0}`);
  tl.from(".phone_1a", { opacity: 0, y: "+=80", duration: 0.3 });
  tl.from(".t1", { opacity: 0, duration: 0.3 });

  tl.to(".t1", { opacity: 0, duration: 0.3 }, `+=${read.t2}`);

  tl.from(".txt_dta", { opacity: 0, y: "+=40", duration: 0.3 });
  tl.from(".end_sb", { opacity: 0, y: "+=40", duration: 0.3 });

  tl.from([".playsmart", ".legal"], { opacity: 0, duration: 0.3 });

  tl.add(olg());

  return tl;
}

init_320x50();
