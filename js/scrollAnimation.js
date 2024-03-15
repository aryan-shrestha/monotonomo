gsap.registerPlugin(ScrollTrigger);

const heroTextAnimation = () => {
  const heroSection = document.querySelector(".headline-txt");
  const headings = document.querySelectorAll(".heading");
  headings.forEach((heading) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: heroSection,
        start: "top center",
        end: "bottom center",
        toggleActions: "play play reverse reverse",
        scrub: true,
      },
    });
    tl.to(heading, { marginLeft: 150, marker: true });
  });

  const headings2 = document.querySelectorAll(".heading-2");
  headings2.forEach((heading) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: heroSection,
        start: "top center",
        end: "bottom center",
        toggleActions: "play play reverse reverse",
        scrub: true,
      },
    });
    tl.to(heading, { marginLeft: -150, marker: true });
  });
};

heroTextAnimation();
