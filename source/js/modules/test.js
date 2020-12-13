const test = () => {
  const section1 = document.querySelectorAll('.section')[0];

  // init controller
  var controller = new ScrollMagic.Controller();

  const tween = new TimelineMax();

  tween
    .to('.pator-front--close', 2, {opacity: 0}, 1000)
    .to('.pator-front--open', 2, {opacity: 1}, 1000);

  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, offset: -200, duration: section1.offsetHeight * 2})
    .setPin("#pin1")
    // .setTween(tween)
    // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
    .addTo(controller);

  // var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, duration: 0})
  //   // .setPin(".pator-el--1")
  //   .on("enter leave")
  //   .setClassToggle(".pator-el--1", "active")
  //   // .setTween('.pator-el--1', {opacity: 1})
  //   // .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);
  //
  // var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, duration: 450, offset: 450})
  //   // .setPin(".pator-el--2")
  //   .setClassToggle(".pator-el--2", "active")
  //   // .setTween('.pator-el--2', {opacity: 1})
  //   // .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);

  // var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, duration: 750, offset: 550})
  //   // .setPin(".pator-el--3")
  //   .setClassToggle(".pator-el--3", "active")
  //   // .setTween('.pator-el--3', {opacity: 1})
  //   // .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);
  //
  // var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 1, duration: 850, offset: 600})
  //   // .setPin(".pator-el--4")
  //   .setClassToggle(".pator-el--4", "active")
  //   // .setTween('.pator-el--4', {opacity: 1})
  //   // .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);
  //
  //
  // var scene6 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 2, duration: 350, offset: 400})
  //   // .setPin(".pator-el--1")
  //   .setTween('.pator-el-open--1', {opacity: 1})
  //   // .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);
  //
  // var scene7 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 2, duration: 450, offset: 450})
  //   // .setPin(".pator-el--2")
  //   .setTween('.pator-el-open--2', {opacity: 1})
  //   // .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);
  //
  // var scene8 = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook: 2, duration: 750, offset: 550})
  //   // .setPin(".pator-el--3")
  //   .setTween('.pator-el-open--3', {opacity: 1})
  //   // .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller);

};

export {test};
