gsap.registerPlugin(ScrollTrigger);

const heroTextAnimation = () => {
  const heroSection = document.querySelector(".headline-txt");
  const headings = heroSection.querySelectorAll(".heading");
  headings.forEach((heading) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: heroSection,
        start: "top 40%",
        end: "bottom 0%",
        toggleActions: "play play reverse reverse",
        scrub: true,
      },
    });
    tl.to(heading, { marginLeft: 150 });
  });

  const headings2 = heroSection.querySelectorAll(".heading-2");
  headings2.forEach((heading) => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: heroSection,
        start: "top 40%",
        end: "bottom 0%",
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

const sectionHireAnimation = () => {
  const body = document.querySelector("body");
  const navLinks = document.querySelectorAll(".nav-link");
  const sectionHire = document.querySelector(".section-hire");
  const sectionHireText = sectionHire.querySelector(".heading");
  const sectionHireText2 = sectionHire.querySelector(".heading-2");

  const tl = gsap.timeline({
    scrollTrigger: {
      markers: false,
      trigger: sectionHire,
      start: "top 60%",
      end: "bottom 10%",
      toggleActions: "play play reverse reverse",
      scrub: true,
    },
  });

  const tlBody = gsap.timeline({
    scrollTrigger: {
      markers: false,
      trigger: sectionHire,
      start: "top 80%",
      end: "bottom 50%%",
      toggleActions: "play reverse play reverse",
    },
  });

  tlBody.to(body, { backgroundColor: "#0f0f0f" }, "bodyColor");
  navLinks.forEach((navLink) => {
    tlBody.to(navLink, { color: "white" }, "bodyColor");
  });
  tl.to(sectionHireText, { marginLeft: 150 }, "anim");
  tl.to(sectionHireText2, { marginLeft: -100 }, "anim");
};

sectionHireAnimation();
