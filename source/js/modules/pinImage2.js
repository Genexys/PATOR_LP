const pinImage = () => {
  document.addEventListener(`DOMContentLoaded`, () => {
    const section1 = document.querySelectorAll('.section')[0];
    const firstScreen = document.querySelector('.first-screen');

    // init controller
    const controller = new ScrollMagic.Controller();

    const timeline1 = new TimelineMax();
    const timeline2 = new TimelineMax();

    timeline1
      .to('.pator-el--1', 1, {autoAlpha: 1, pointerEvents: 'auto'}, 100)
      .to('.pator-el--2', 1, {autoAlpha: 1, pointerEvents: 'auto'}, 100)
      .to('.pator-el--3', 1, {autoAlpha: 1, pointerEvents: 'auto'}, 100)
      .to('.pator-el--4', 1, {autoAlpha: 1, pointerEvents: 'auto'}, 100);
    // .to('.pator-front--close', 2, {autoAlpha: 0}, section1.offsetHeight * 2 + 300)
    // .to('.pator-front--open', 2, {autoAlpha: 1}, section1.offsetHeight * 2);;


    // timeline2
    //   .to('.pator-el--1', .5, {autoAlpha: 0, pointerEvents: 'none'})
    //   .to('.pator-el--2', .5, {autoAlpha: 0, pointerEvents: 'none'})
    //   .to('.pator-el--3', .5, {autoAlpha: 0, pointerEvents: 'none'})
    //   .to('.pator-el--4', .5, {autoAlpha: 0, pointerEvents: 'none'});
      // .to('.pator-front--open', 2, {autoAlpha: 1, ease: Power1.easeInOut}, 0)
      // .to('.pator-front', 2, {autoAlpha: 0, ease: Power1.easeInOut}, 0)
      // .to('.pator-el-open--1', 0, {autoAlpha: 1, ease: Power1.easeInOut, pointerEvents: 'auto'}, 0)
      // .to('.pator-el-open--2', 0, {autoAlpha: 1, ease: Power1.easeInOut, pointerEvents: 'auto'}, 0)
      // .to('.pator-el-open--3', 0, {autoAlpha: 1, ease: Power1.easeInOut, pointerEvents: 'auto'}, 0);

    // TweenMax
    //   .to('.pator-el-open--1', 20, {autoAlpha: 0, ease: Power1.easeInOut, pointerEvents: 'none'})
    //   .to('.pator-el-open--2', 20, {autoAlpha: 0, ease: Power1.easeInOut, pointerEvents: 'none'})
    //   .to('.pator-el-open--3', 20, {autoAlpha: 0, ease: Power1.easeInOut, pointerEvents: 'none'})
    //   .to('.pator-front--open', 2, {autoAlpha: 0, ease: Power1.easeInOut})
    //   .to('.pator-front--open-side', 2, {autoAlpha: 1, ease: Power1.easeInOut})
    //   .to('.pator-el-open-side--1', 2, {autoAlpha: 1, ease: Power1.easeInOut, pointerEvents: 'auto'}, 700)
    //   .to('.pator-el-open-side--2', 2, {autoAlpha: 1, ease: Power1.easeInOut, pointerEvents: 'auto'}, 700)
    //   .to('.pator-el-open-side--3', 2, {autoAlpha: 1, ease: Power1.easeInOut, pointerEvents: 'auto'}, 700);

    const pator1 = new ScrollMagic.Scene({
      triggerElement: ".first-screen",
      triggerHook: 1,
      offset: 150,
      duration: firstScreen.offsetHeight * 4,
    })
      // .addIndicators('first-screen')
      .addTo(controller)
      .setTween(timeline1);

    // const firstEls = new ScrollMagic.Scene({
    //   triggerElement: '#trigger1',
    //   triggerHook: 0.3,
    //   duration: section1.offsetHeight,
    //   offset: 0,
    // })
    //   // .addIndicators('#trigger1')
    //   // .setPin('.circle--1')
    //   .setTween(timeline2)
    //   .addTo(controller);


    // const firstCircle = new ScrollMagic.Scene({
    //   triggerElement: '#trigger2',
    //   triggerHook: 0,
    //   duration: section1.offsetHeight,
    //   offset: 0,
    // })
    //   .addIndicators('#trigger2')
    //   // .setPin('.circle--1')
    //   // .setClassToggle('.circle--2', 'active')
    //   // .setPin('.circle--2')
    //   // .setTween(tweenCircle)
    //   .addTo(controller);

    // const secondCircle = new ScrollMagic.Scene({
    //   triggerElement: '#trigger3',
    //   triggerHook: 0.4,
    //   duration: section1.offsetHeight,
    //   offset: 0,
    // })
    //   .addIndicators('#trigger3')
    //   // .setClassToggle('.circle--2', 'active')
    //   // .setPin('.circle--2')
    //   // .setTween(tweenCircle)
    //   .addTo(controller);

    let patorFront = document.querySelector('.pator-front');
    let patorFrontBox = patorFront.getBoundingClientRect();

    let patorEl1 = document.querySelector('.pator-el--1');
    let patorEl1Box = patorEl1.getBoundingClientRect();

    let patorEl2 = document.querySelector('.pator-el--2');
    let patorEl2Box = patorEl2.getBoundingClientRect();

    let patorEl3 = document.querySelector('.pator-el--3');
    let patorEl3Box = patorEl3.getBoundingClientRect();

    let patorEl4 = document.querySelector('.pator-el--4');
    let patorEl4Box = patorEl4.getBoundingClientRect();

    let patorFrontOpen = document.querySelector('.pator-front--open');
    let patorFrontOpenBox = patorFrontOpen.getBoundingClientRect();

    let patorElOpen1 = document.querySelector('.pator-el-open--1');
    let patorElOpen1Box = patorElOpen1.getBoundingClientRect();

    let patorElOpen2 = document.querySelector('.pator-el-open--2');
    let patorElOpen2Box = patorElOpen2.getBoundingClientRect();

    let patorElOpen3 = document.querySelector('.pator-el-open--3');
    let patorElOpen3Box = patorElOpen3.getBoundingClientRect();


    let patorFrontOpenSide = document.querySelector('.pator-front--open-side');
    let patorFrontOpenSideBox = patorFrontOpenSide.getBoundingClientRect();

    let patorElOpenSide1 = document.querySelector('.pator-el-open-side--1');
    let patorElOpenSide1Box = patorElOpenSide1.getBoundingClientRect();

    let patorElOpenSide2 = document.querySelector('.pator-el-open-side--2');
    let patorElOpenSide2Box = patorElOpenSide2.getBoundingClientRect();

    let patorElOpenSide3 = document.querySelector('.pator-el-open-side--3');
    let patorElOpenSide3Box = patorElOpenSide3.getBoundingClientRect();

    // console.log(`x: ${patorFrontBox.x}, y: ${patorFrontBox.y}, left: ${patorFrontBox.left}, top: ${patorFrontBox.top}, ${patorFrontBox.width / 3 + patorFrontBox.x}`);
    // console.log(` right: ${patorEl1Box.right}, x: ${patorEl1Box.x}, y: ${patorEl1Box.y}, width: ${patorEl1Box.width}`);

    const svgLine1 = document.querySelector('.svg-line-1');
    const svgLine2 = document.querySelector('.svg-line-2');
    const svgLine3 = document.querySelector('.svg-line-3');
    const svgLine4 = document.querySelector('.svg-line-4');

    const svgLineOpen1 = document.querySelector('.svg-line-open-1');
    const svgLineOpen2 = document.querySelector('.svg-line-open-2');
    const svgLineOpen3 = document.querySelector('.svg-line-open-3');

    const svgLineOpenSide1 = document.querySelector('.svg-line-open-side-1');
    const svgLineOpenSide2 = document.querySelector('.svg-line-open-side-2');
    const svgLineOpenSide3 = document.querySelector('.svg-line-open-side-3');

    svgLine1.style.width = (patorFrontBox.width / 3 + patorFrontBox.x) - patorEl1Box.right / 1.2 + 'px';
    svgLine2.style.width = patorEl2Box.left - (patorFrontBox.width / 2 + patorFrontBox.x) + 'px';
    svgLine3.style.width = (patorFrontBox.width / 3 + patorFrontBox.x) - patorEl3Box.right / 2.3 + 'px';
    svgLine4.style.width = patorEl4Box.left - (patorFrontBox.width / 1.7 + patorFrontBox.x) + 'px';

    svgLineOpen1.style.width = (patorFrontOpenBox.width / 1.5 + patorFrontOpenBox.x) - patorElOpen1Box.right / 1.2 + 'px';
    svgLineOpen2.style.width = patorElOpen2Box.left - (patorFrontOpenBox.width / 1.25 + patorFrontOpenBox.x) + 'px';
    svgLineOpen3.style.width = (patorFrontOpenBox.width / 1.5 + patorFrontOpenBox.x) - patorElOpen3Box.right + 'px';

    svgLineOpenSide1.style.width = (patorFrontOpenSideBox.width / 1.5 + patorFrontOpenSideBox.x) - patorElOpenSide1Box.right / 1.2 + 'px';
    svgLineOpenSide2.style.width = patorElOpenSide2Box.left - (patorFrontOpenSideBox.width / 1.7 + patorFrontOpenBox.x) + 'px';
    svgLineOpenSide3.style.width = patorElOpenSide2Box.left - (patorFrontOpenSideBox.width / 1.7 + patorFrontOpenBox.x) + 'px';

    // console.log(svgLineOpen1)

    document.addEventListener('click', (evt) => {
      console.log(evt.clientX);
    });

    window.addEventListener(`resize`, (evt) => {
      patorFrontBox = patorFront.getBoundingClientRect();
      patorEl1Box = patorEl1.getBoundingClientRect();
      patorEl2Box = patorEl2.getBoundingClientRect();
      patorEl3Box = patorEl3.getBoundingClientRect();
      patorEl4Box = patorEl4.getBoundingClientRect();

      patorFrontOpenBox = patorFront.getBoundingClientRect();
      patorElOpen1Box = patorElOpen1.getBoundingClientRect();
      patorElOpen2Box = patorElOpen2.getBoundingClientRect();
      patorElOpen3Box = patorElOpen3.getBoundingClientRect();

      patorFrontOpenSideBox = patorFront.getBoundingClientRect();
      patorElOpenSide1Box = patorElOpenSide1.getBoundingClientRect();
      patorElOpenSide2Box = patorElOpenSide2.getBoundingClientRect();
      patorElOpenSide3Box = patorElOpenSide3.getBoundingClientRect();

      svgLine1.style.width = (patorFrontBox.width / 3 + patorFrontBox.x) - patorEl1Box.right / 1.2 + 'px';
      svgLine2.style.width = patorEl2Box.left - (patorFrontBox.width / 2 + patorFrontBox.x) + 'px';
      svgLine3.style.width = (patorFrontBox.width / 3 + patorFrontBox.x) - patorEl3Box.right / 2.3 + 'px';
      svgLine4.style.width = patorEl4Box.left - (patorFrontBox.width / 1.7 + patorFrontBox.x) + 'px';

      svgLineOpen1.style.width = (patorFrontOpenBox.width / 1.5 + patorFrontOpenBox.x) - patorElOpen1Box.right / 1.2 + 'px';
      svgLineOpen2.style.width = patorElOpen2Box.left - (patorFrontOpenBox.width / 1.25 + patorFrontOpenBox.x) + 'px';
      svgLineOpen3.style.width = (patorFrontOpenBox.width / 1.5 + patorFrontOpenBox.x) - patorElOpen3Box.right + 'px';

      svgLineOpenSide1.style.width = (patorFrontOpenSideBox.width / 1.5 + patorFrontOpenSideBox.x) - patorElOpenSide1Box.right / 1.2 + 'px';
    });
  });
};

export {pinImage};
