import { olg, read } from "../../_common/js/common.js";

function init_728x90() {
  const tl = new TimelineMax({
    onComplete: () => {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    },
  });

  tl.set(".frame1", { opacity: 1 });
  tl.from(".t1", { opacity: 0, duration: 0.3 });
  tl.from(".arrows", { opacity: 0, duration: 0.3 }, "+=2.6");

  tl.from(".phone_1a", { opacity: 0, y: "+=80", duration: 0.3 });

  tl.from(".t2", { opacity: 0, duration: 0.3 }, "+=.3");

  tl.to([".phone_1a", ".t2"], { opacity: 0, duration: 0.3 }, `+=2`);
  tl.from(".phone_1b", { opacity: 0, y: "+=80", duration: 0.3 }, "+=.3");
  tl.from(".t3", { opacity: 0, duration: 0.3 }, "+=.3");

  //   tl.to(".t3", { opacity: 0, duration: 0.3 }, "+=3");

  tl.from(".end_arrows", { opacity: 0, duration: 0.3 }, "+=3");
  tl.from(".phone_2", { opacity: 0, y: "+=80", duration: 0.3 }, "+=.3");

  tl.from(".txt_dta", { opacity: 0, x: "-=40", duration: 0.3 });

  tl.from([".playsmart", ".legal"], { opacity: 0, duration: 0.3 });

  tl.add(olg());

  return tl;
}

init_728x90();
