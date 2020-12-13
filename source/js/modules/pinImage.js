const pinImage = () => {
  const section1 = document.querySelectorAll('.section')[0];

  // init controller
  const controller = new ScrollMagic.Controller();

  const tween = new TimelineMax();
  const tween2 = new TimelineMax();
  const tween3 = new TimelineMax();

  tween
    // .to('.pator-front--close', 2, {opacity: 0}, section1.offsetHeight)
    .to('.pator-front--open', 2, {autoAlpha: 1}, section1.offsetHeight);

  tween2
    .to('.pator-front--close', 3, {autoAlpha: 0}, section1.offsetHeight)
    .to('.pator-front--open', 3, {autoAlpha: 0}, section1.offsetHeight)
    .to('.pator-front--open-side', 3, {autoAlpha: 1}, section1.offsetHeight)
    .to('.circle--1', 2, {autoAlpha: 0}, section1.offsetHeight)
    .to('.circle--2', 2, {autoAlpha: 1}, section1.offsetHeight);

  tween3
    .to('.pator-front--open', 2, {autoAlpha: 0}, section1.offsetHeight / 7)
    .to('.pator-front--close', 3, {autoAlpha: 0}, section1.offsetHeight / 7)
    .to('.pator-front--open-side', 2, {autoAlpha: 1}, section1.offsetHeight / 7)
    // .to('.circle--1', 2, {autoAlpha: 0}, section1.offsetHeight / 1.5)
    // .to('.circle--2', 2, {autoAlpha: 1}, section1.offsetHeight / 1.5);

  if (window.innerHeight >= 810) {
    const pator1 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, offset: -500, duration: section1.offsetHeight * 1.6})
      // .setPin("#pin1")
      .setTween(tween)
      // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
      .addTo(controller);
  } else {
    const pator1 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, offset: -500, duration: section1.offsetHeight * 2})
      .setPin("#pin1")
      .setTween(tween)
      // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
      .addTo(controller);
  }

  const pator2 = new ScrollMagic.Scene({triggerElement: "#trigger2", triggerHook: 0, offset: 0, duration: section1.offsetHeight})
    .setPin("#pin2")
    .setTween(tween2)
    // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
    .addTo(controller);

  const pator3 = new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook: 1, duration: section1.offsetHeight / 2, offset: 550})
    .setPin("#pin3")
    .setTween(tween3)
    // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
    .addTo(controller);


  const scene2 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, duration: section1.offsetHeight, offset: 100})
    // .setPin(".pator-el--1")
    .on("enter leave")
    .setClassToggle(".pator-el--1", "active")
    // .setTween('.pator-el--1', {opacity: 1})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // const scene2Pin = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, duration: section1.offsetHeight * 2, offset: -200})
  //   .setPin(".pator-el--1")
  //   // .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);

  const scene3 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, duration: section1.offsetHeight, offset: 120})
    // .setPin(".pator-el--2")
    .setClassToggle(".pator-el--2", "active")
    // .setTween('.pator-el--2', {opacity: 1})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // const scene3Pin = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, duration: section1.offsetHeight * 2, offset: -200})
  //   .setPin(".pator-el--2")
  //   // .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);


  const scene4 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, duration: section1.offsetHeight - 200, offset: 140})
    // .setPin(".pator-el--3")
    .setClassToggle(".pator-el--3", "active")
    // .setTween('.pator-el--3', {opacity: 1})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // const scene4Pin = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, duration: section1.offsetHeight * 2, offset: 550})
  //   .setPin(".pator-el--3")
  //   .setClassToggle(".pator-el--3", "active")
  //   // .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller)

  const scene5 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, duration: section1.offsetHeight - 300, offset: 160})
    // .setPin(".pator-el--4")
    .setClassToggle(".pator-el--4", "active")
    // .setTween('.pator-el--4', {opacity: 1})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  //
  //
  const scene6 = new ScrollMagic.Scene({triggerElement: "#trigger2", triggerHook: 1, duration: section1.offsetHeight - 200, offset: 400})
    // .setPin(".pator-el--1")
    .setClassToggle(".pator-el-open--1", "active")
    // .setTween('.pator-el-open--1', {opacity: 1})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  const scene7 = new ScrollMagic.Scene({triggerElement: "#trigger2", triggerHook: 1, duration: section1.offsetHeight - 200, offset: 450})
    // .setPin(".pator-el--2")
    .setClassToggle(".pator-el-open--2", "active")
    // .setTween('.pator-el-open--2', {opacity: 1})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  const scene8 = new ScrollMagic.Scene({triggerElement: "#trigger2", triggerHook: 1, duration: section1.offsetHeight - 300, offset: 550})
    // .setPin(".pator-el--3")
    .setClassToggle(".pator-el-open--3", "active")
    // .setTween('.pator-el-open--3', {opacity: 1})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  const sircle = new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook: 1, duration: section1.offsetHeight})
    .setPin(".circle--1")
    .setTween(tween3)
    // .addIndicators ({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
    .addTo(controller);

  const scene9 = new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook: 1, duration: section1.offsetHeight / 2, offset: 300})
    // .setPin(".pator-el--1")
    .setClassToggle(".pator-el-open-side--1", "active")
    // .setTween('.pator-el-open--1', {opacity: 1})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  const scene10 = new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook: 1, duration: section1.offsetHeight / 2, offset: 400})
    // .setPin(".pator-el--2")
    .setClassToggle(".pator-el-open-side--2", "active")
    // .setTween('.pator-el-open--2', {opacity: 1})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  const scene11 = new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook: 1, duration: section1.offsetHeight / 2, offset: 500})
    // .setPin(".pator-el--3")
    .setClassToggle(".pator-el-open-side--3", "active")
    // .setTween('.pator-el-open--3', {opacity: 1})
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
};

export {pinImage};
