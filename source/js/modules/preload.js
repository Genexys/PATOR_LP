const preload = () => {
  window.addEventListener(`load`, function () {
    let preloaderEl = document.getElementById(`preloader`);
    preloaderEl.classList.add(`hidden`);
  });

};

export {preload};
