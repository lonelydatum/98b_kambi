import {read, olg} from '../../_common/js/common.js'





function init_728x90(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})


	
	tl.set(".frame1", {opacity:1})
	tl.from(".arrows", {opacity:0, duration:.3})
	tl.from(".phone_1a", {opacity:0, y:"+=80", duration:.3})
	tl.from(".t1", {opacity:0, duration:.3})


		tl.to([".t1", ".phone_1a"], {opacity:0, duration:.3}, `+=${read.t1}`)
		tl.add("t2")
		tl.from(".phone_1b", {opacity:0, duration:.3}, "t2")	
		tl.from(".t2", {opacity:0, duration:.3}, "t2+=1")


	

	tl.from(".hero", {opacity:0, duration:.5},`+=${read.t2}`)
	tl.from(".txt_uyg", {opacity:0, duration:.3}, "+=.3")

	tl.from(".arrow_hero", {opacity:0, duration:.6}, `+=${1.5}`)
	
	tl.from(".phone_2", {opacity:0, y:"+=80", duration:.3})	
	tl.from(".txt_dta", {opacity:0, y:"+=40", duration:.3})

	tl.from([".playsmart", ".legal"], {opacity:0,  duration:.3})

	tl.add(olg())
	
	return tl
}

init_728x90()
