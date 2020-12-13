import smoothscroll from 'smoothscroll-polyfill';

const scrollToMenu = () => {
  const menuList = document.querySelectorAll('.main-menu');
  // kick off the polyfill!
  smoothscroll.polyfill();

  for (const menu of menuList) {
    const links = menu.querySelectorAll('.main-menu__link');

    for (const link of links) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const id = this.getAttribute('href');
        const target = document.querySelector(id);

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        history.pushState(null, null, id);
      });
    }
  }
};

export {scrollToMenu};
