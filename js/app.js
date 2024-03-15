const centerHeroText = () => {
  const headings = document.querySelectorAll(".heading");
  headings.forEach((heading) => {
    const txtGold = heading.querySelector(".txt-gold");
    if (txtGold) {
      const txtGoldWidth = txtGold.offsetWidth;

      heading.style.transform = `translateX(-${
        txtGoldWidth - (18 / 100) * txtGoldWidth
      }px)`;
    }
  });
};

centerHeroText();

const centerHeroText2 = () => {
  const headings = document.querySelectorAll(".heading-2");
  headings.forEach((heading) => {
    const txtGold = heading.querySelector(".txt-gold");
    if (txtGold) {
      const txtGoldWidth = txtGold.offsetWidth;

      heading.style.transform = `translateX(-${txtGoldWidth - 100}px)`;
    }
  });
};

centerHeroText2();
