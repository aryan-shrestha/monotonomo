const allElements = document.querySelectorAll(".project");

allElements.forEach((element) => {
  element.addEventListener("mousemove", (event) => {
    const distanceX = event.clientX * (10 / 100);
    const distanceY = event.clientY * (20 / 100);
    const projectThumbnail = element.querySelector(".project-thumbnail");
    gsap.to(projectThumbnail, {
      x: -distanceX,
      y: -distanceY,
      //   duration: 0.5,
    });
    allElements.forEach((otherElement) => {
      if (otherElement !== element) {
        const projectTitle = otherElement.querySelector(".project-title");
        projectTitle.style.color = "#d1c9bc8e";
      }
    });
  });

  element.addEventListener("mouseleave", () => {
    const projectThumbnail = element.querySelector(".project-thumbnail");
    projectThumbnail.style.transform = "traslateX(0)";
    allElements.forEach((otherElement) => {
      const projectTitle = otherElement.querySelector(".project-title");
      projectTitle.style.color = "#0f0f0f";
    });
  });
});
