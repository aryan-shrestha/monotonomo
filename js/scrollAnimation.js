gsap.registerPlugin(ScrollTrigger);

const heroTextAnimation = () => {
  const heroSection = document.querySelector(".headline-txt");
  const headings = document.querySelectorAll(".heading");
  headings.forEach((heading) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: heroSection,
        start: "top 60%",
        end: "bottom 10%",
        toggleActions: "play play reverse reverse",
        scrub: true,
      },
    });
    tl.to(heading, { marginLeft: 150 });
  });

  const headings2 = document.querySelectorAll(".heading-2");
  headings2.forEach((heading) => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: heroSection,
        start: "top 60%",
        end: "bottom 10%",
        toggleActions: "play play reverse reverse",
        scrub: true,
      },
    });
    tl2.to(heading, { marginLeft: -100 });
  });
};

heroTextAnimation();

const smileyAnimation = () => {
  const smiley = document.querySelector(".smiley");
  const tl = gsap.timeline({
    scrollTrigger: {
      markers: false,
      trigger: smiley,
      start: "top 95%",
      end: "top 10%",
      toggleActions: "play play reverse reverse",
      scrub: true,
    },
  });
  tl.to(smiley, { rotate: 0 });
};

smileyAnimation();
