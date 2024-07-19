gsap.to(".page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }

})

gsap.to(".page1 .box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:350,
    borderRadius:350,
    backgroundColor:"white"
})