const pinImage = () => {
  const section1 = document.querySelectorAll('.section')[0];

  // init controller
  const controller = new ScrollMagic.Controller();

  var scrollAnimation = new TimelineMax();
  controller.scrollTo(500);

  scrollAnimation
    .set('.wrapper-first-scroll', {autoAlpha: 1})
    .to('.pator-el--1', 0, {autoAlpha: 1, ease: Power1.easeInOut}, "trans1")
    .to('.pator-el--2', 0, {autoAlpha: 1, ease: Power1.easeInOut}, "trans1")
    .to('.pator-el--3', 0, {autoAlpha: 1, ease: Power1.easeInOut}, "trans1")
    .to('.pator-el--4', 0, {autoAlpha: 1, ease:Power1.easeInOut}, "trans1")
    .to('.pator-el--1', 0, {autoAlpha: 0, ease: Power1.easeInOut, delay:0.75}, "trans2")
    .to('.pator-el--2', 0, {autoAlpha: 0, ease: Power1.easeInOut, delay:0.75}, "trans2")
    .to('.pator-el--3', 0, {autoAlpha: 0, ease: Power1.easeInOut, delay:0.75}, "trans2")
    .to('.pator-el--4', 0, {autoAlpha: 0, ease:Power1.easeInOut, delay:0.75}, "trans2")
    .to('.pator-el-open--1', 0, {autoAlpha: 1, ease: Power1.easeInOut}, "trans3")
    .to('.pator-el-open--2', 0, {autoAlpha: 1, ease: Power1.easeInOut}, "trans3")
    .to('.pator-el-open--3', 0, {autoAlpha: 1, ease: Power1.easeInOut}, "trans3")
    .to('.pator-el-open--4', 0, {autoAlpha: 1, ease:Power1.easeInOut}, "trans3")
    .to('.pator-el-open--1', 0, {autoAlpha: 0, ease: Power1.easeInOut}, "trans5")
    .to('.pator-el-open--2', 0, {autoAlpha: 0, ease: Power1.easeInOut}, "trans5")
    .to('.pator-el-open--3', 0, {autoAlpha: 0, ease: Power1.easeInOut}, "trans5")
    .to('.pator-el-open--4', 0, {autoAlpha: 0, ease:Power1.easeInOut}, "trans5");

  var scene = new ScrollMagic.Scene({triggerElement: ".trigger-scroll", duration: 4000})
    .setPin(".wrapper-first-scroll")
    .addTo(controller)
    .setTween(scrollAnimation);
  scene.offset(400);
};

export {pinImage};
