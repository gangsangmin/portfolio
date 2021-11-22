$(document).ready(function () {
    gsap.to(".apiacereimg .img-container", {
        scrollTrigger: {
            "trigger": ".banner",
            "start": "top top",
            "end": "bottom top",
            "scrub": true
        },
        "width": "100vw",
        "height": "100vh"
    })

    gsap.to(".con .apiacereimg", {
        scrollTrigger: {
            "trigger": ".con .wrap .apiacereimg",
            "start": "top top",
            "end": "bottom top",
            "pin": true,
            "pinSpacing": false
        }
    })

    gsap.to(".con .apiacerecopy", {
        scrollTrigger: {
            "trigger": ".con .wrap .apiacereimg",
            "start": "top top",
            "end": "bottom top",
            "scrub": true
        },
        "color": "#ffffff"
    });

    $(window).on("scroll", function () {
        var scr = $(window).scrollTop();
        var start = $(".intro").offset().top;
        if (scr >= start) {
            $(".intro").addClass("active");
        }
    })

    gsap.to(".parallax1", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
            trigger: ".wrap1",
            scrub: "0.3s"
        },
    });
    gsap.to(".parallax2", {
        yPercent: -33,
        ease: "none",
        scrollTrigger: {
            trigger: ".wrap1",
            scrub: "0.6s"
        },
    });
    gsap.to(".parallax3", {
        yPercent: -33,
        ease: "none",
        scrollTrigger: {
            trigger: ".wrap1",
            scrub: "0.3s"
        },
    });



    gsap.to(".parallax4", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: ".triggerwrap",
            scrub: "0.3s"
        },
    });
    gsap.to(".parallax5", {
        yPercent: -22,
        ease: "none",
        scrollTrigger: {
            trigger: ".triggerwrap",
            scrub: "0.6s"
        },
    });
    gsap.to(".parallax6", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
            trigger: ".triggerwrap",
            scrub: "0.9s"
        },
    });


    var lifeSwiper = new Swiper(".abil .swiper", {
        slidesPerView: "auto",
        loop: true,
        freeMode: true,
        
      });
    


    
})