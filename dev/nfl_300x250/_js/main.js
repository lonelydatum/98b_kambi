import { read, olg } from "../../_common/js/common.js";

function init_nfl() {
  // document.getElementById("legalContent").innerHTML =
  //   "Individuals must be 19+, a resident of Ontario, and located in the province to participate in online PROLINE+ sports betting. Product is not exactly as shown.";
  const tl = new TimelineMax({
    onComplete: () => {
      if (document.getElementById("legalBtn")) {
        TweenLite.set("#legalBtn", { display: "block" });
      }
    },
  });

  tl.set(".frame1", { opacity: 1 });

  tl.from(".phone_1", { opacity: 0, y: "+=80", duration: 0.4 }, "+=.2");
  tl.from(".t1", { opacity: 0, duration: 0.3 }, "+=.3");

  tl.from(".arrows", { opacity: 0, duration: 0.3, y: "+=20" }, `+=${read.t1}`);

  tl.from(".phone_2", { opacity: 0, y: "+=80", duration: 0.5 }, "+=.3");
  tl.from(".t2", { opacity: 0, duration: 0.3 }, "+=.5");

  tl.to(".t2", { opacity: 0, duration: 0.3 }, `+=${read.t2}`);
  tl.from(".t3", { opacity: 0, duration: 0.3 }, "+=.3");

  tl.from(".end_bg", { opacity: 0, duration: 0.3, y: "+=20" }, `+=${read.t3}`);
  tl.from(".phone_3", { opacity: 0, duration: 0.5, y: "+=80" }, "+=.3");
  tl.from(".end_cta", { opacity: 0, duration: 0.3, x: "+=50" });

  tl.from([".end_sb", ".playsmart", ".legal"], { opacity: 0, duration: 0.3 });
  tl.add(olg());
}

init_nfl();
