const centerHeroText = () => {
  const headings = document.querySelectorAll(".heading");
  headings.forEach((heading) => {
    const txtGold = heading.querySelector(".txt-gold");
    const txtGoldDark = heading.querySelector(".txt-gold-dark");

    if (txtGold) {
      const txtGoldWidth = txtGold.offsetWidth;
      heading.style.transform = `translateX(-${
        txtGoldWidth - (18 / 100) * txtGoldWidth
      }px)`;
    } else if (txtGoldDark) {
      const txtGoldDarkWidth = txtGoldDark.offsetWidth;
      heading.style.transform = `translateX(-${
        txtGoldDarkWidth - (18 / 100) * txtGoldDarkWidth
      }px)`;
    }
  });
};

centerHeroText();

const centerHeroText2 = () => {
  const headings = document.querySelectorAll(".heading-2");
  headings.forEach((heading) => {
    const txtGold = heading.querySelector(".txt-gold");
    const txtGoldDark = heading.querySelector(".txt-gold-dark");
    if (txtGold) {
      const txtGoldWidth = txtGold.offsetWidth;

      heading.style.transform = `translateX(-${txtGoldWidth - 100}px)`;
    } else if (txtGoldDark) {
      const txtGoldDarkWidth = txtGoldDark.offsetWidth;
      heading.style.transform = `translateX(-${
        txtGoldDarkWidth - (18 / 100) * txtGoldDarkWidth
      }px)`;
    }
  });
};

centerHeroText2();
