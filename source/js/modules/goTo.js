import smoothscroll from 'smoothscroll-polyfill';

const goTo = () => {
  const btn = document.querySelector(`.rotate-btn`);
  const block = document.querySelector(`.section--front-open-side`);

  const goToBtn = document.querySelector(`.go-to-form`);
  const form = document.querySelector(`.form-block`);

  // kick off the polyfill!
  smoothscroll.polyfill();

  // btn.addEventListener(`click`, function () {
  //   block.scrollIntoView({behavior: `smooth`});
  // });

  goToBtn.addEventListener(`click`, function () {
    form.scrollIntoView({behavior: `smooth`});
  });

};

export {goTo};
