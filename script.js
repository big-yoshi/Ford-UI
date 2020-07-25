$(window).on("load", function () {
  $.ready.then(function () {
    setTimeout(function () {
      gsap.to('#preloader img',{scale:2},2);
      gsap.to('#preloader',{opacity:0},2);
      gsap.to('#preloader',{zIndex:0,display:'none'});
    }, 2000); // set the time here

    function count() {
      var counter = { var: 0 };
      TweenMax.to(counter, 3, {
        var: 30000,
        onUpdate: function () {
          $(".price span").html("$" + Math.ceil(counter.var));
        },

        ease: Circ.easeOut
      });
    }

    gsap.registerPlugin(ScrollTrigger);
    //gsap.to("#preloader img", { scale: 2, duration: 1 }, 0);
    //gsap.to("#preloader", { opacity: 0, duration: 1 }, 0);
    t1 = gsap.timeline();
    t1.from(".first-section .right", { y: 1000, duration: 1 }, 0);
    t1.from(".details", { x: 1000, opacity: 0, duration: 1 }, 2.5);

    var t2 = gsap.timeline({ scrollTrigger: { trigger: ".second-section" } });

    t2.from(
      ".second-section .left .features",
      {
        x: -1000,
        opacity: 0,
        duration: 1.5
      },
      0.5
    );

    t2.from(
      ".second-section .right img",
      {
        onEnter: () => count(),
        opacity: 0,
        duration: 1.5
      },
      0.5
    );
  });
});