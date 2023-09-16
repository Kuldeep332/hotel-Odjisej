var t1=gsap.timeline()
t1.to("#dd",{
	top:"0",
	stagger:2
})
// gsap.to("svg",{
// 	top:"0"
// })
t1.to("#page1 img",{
	scale:1,
	delay:0.5
})
t1.to("#nav",{
	top:"0"
})
var clutter=""
  var t1text=document.querySelector("#page2 h1").textContent
  var splited=t1text.split("")
  splited.forEach(function(elem){
    clutter+=`<span>${elem}</span>`


  })
  document.querySelector("#page2 h1").innerHTML=clutter
  gsap.from("#page2 h1 span",{
	color:"#E3E3C4",
	stagger:0.3,
	scrollTrigger:{
		scroller:"body",
		trigger:"#page2",
		scrub:1,
		start:"top 0",
		end:"top -100%",
		pin:true
	}
  })
 gsap.from("#yy",{
	// y:50000,
	x:-230,
	// repeat:-1
	duration:2,
	// delay:77,
	scrollTrigger:{
		scroller:"body",
		trigger:"#page3",
		scrub:2,
		// start:"-250%",
		// // end:"10%",
		pin:true,
		start:"0% 30%",
		end:"0% 70%",
		// markers:true
	}

 })
 var clutter=""
  var t1text=document.querySelector("#page4 h1").textContent
  var splited=t1text.split("")
  splited.forEach(function(elem){
    clutter+=`<span>${elem}</span>`


  })
  document.querySelector("#page4 h1").innerHTML=clutter
  var g=gsap.timeline({
	scrollTrigger:{
		scroller:"body",
		trigger:"#page4",
		scrub:1,
		start:"top 0",
		end:"top -100%",
		pin:true
	}
  })
  g.from("#page4 h1 span",{
	color:"#E3E3C4",
	stagger:0.3,
	
  })
  g.from("#page42 #e ",{
	y:50,
	stagger:0.3,
	opacity:0
	
	
  })
  g.from("#page42 img ",{
	y:50,
	stagger:0.3,
	opacity:0
	
	
  },"s")
  g.from("#page43 #xa",{
	y:50,
	stagger:0.3,
	opacity:0
	
  },"s")