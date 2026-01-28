import { init_160x600 } from "../../_common/js/common.js";

init_160x600();

// import { read, olg } from "../../_common/js/common.js";

// function init() {
//   const tl = new TimelineMax({
//     onComplete: () => {
//       if (document.getElementById("legalBtn")) {
//         TweenLite.set("#legalBtn", { display: "block" });
//       }
//     },
//   });

//   tl.set(".frame1", { opacity: 1 });

//   tl.from(".phone_1a", { opacity: 0, y: "+=80", duration: 0.3 });
//   tl.from(".t0", { opacity: 0, duration: 0.3 }, "+=.3");
//   tl.from(".arrows", { opacity: 0, duration: 0.3 }, `+=${read.t0}`);
//   tl.from(".phone_1b", { opacity: 0, duration: 0.3 });
//   tl.from(".t1", { opacity: 0, duration: 0.3 });
//   tl.to(".t1", { opacity: 0, duration: 0.3 }, `+=${read.t1}`);
//   tl.add("t2");
//   tl.from(".t2", { opacity: 0, duration: 0.3 });
//   tl.to(".t2", { opacity: 0, duration: 0.3 }, `+=${read.t2}`);

//   tl.add("end");
//   tl.add(olg(), "end");
//   tl.from(".phone_2", { opacity: 0, duration: 0.3 }, "end+=.1");
//   tl.from(".txt_dta", { opacity: 0, duration: 0.3 }, "end+=.7");
//   tl.from([".playsmart", ".legal"], { opacity: 0, duration: 0.3 }, "end");
//   return tl;
// }

// init();
