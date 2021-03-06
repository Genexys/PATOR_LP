import MobileDetect from 'mobile-detect';

const pinImage = () => {
  document.addEventListener(`DOMContentLoaded`, () => {
    var md = new MobileDetect(window.navigator.userAgent);
    let telInput = document.querySelectorAll('input[type="tel"]');

    if (window.innerWidth > 1024 && md.os() !== 'iOS') {

      const section1 = document.querySelectorAll('.section')[0];

      // init controller
      const controller = new ScrollMagic.Controller();

      const tween = new TimelineMax();
      const tween2 = new TimelineMax();
      const tween3 = new TimelineMax();
      const tween4 = new TimelineMax();

      // tween
      //   .to('.pator-front--close', 2, {autoAlpha: 0});
        // .to('.pator-front--open', 1, {autoAlpha: 1}, section1.offsetHeight + 300);

      tween2
      // .to('.pator-front--close', 1, {autoAlpha: 0}, section1.offsetHeight)
      // .to('.pator-front--open', 1, {autoAlpha: 0}, section1.offsetHeight)
      // .to('.pator-front--open-side', 1, {autoAlpha: 1}, section1.offsetHeight)
      // .to('.circle--1', 1, {autoAlpha: 0}, section1.offsetHeight)
      // .to('.circle--2', 1, {autoAlpha: 1}, section1.offsetHeight);

      tween3
        // .to('.pator-front--close', 1, {autoAlpha: 0})
        // .to('.pator-front--open-side', 1, {autoAlpha: 1})
        .to('.circle--1', 1, {autoAlpha: 0});

      // tween4
      //   .to('.pator-front', {autoAlpha: 1});

      if (true) {
        const pator1 = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          triggerHook: 0,
          offset: 200,
          duration: section1.offsetHeight + 200,
        })
          .setPin("#pin1")
          // .setTween(tween)
          .setClassToggle('.pator-front--open', 'active')
          // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
          .addTo(controller);

        const circleBlue = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          triggerHook: 0,
          offset: 200,
          duration: section1.offsetHeight * 3,
        })
          // .setTween(tween)
          .setClassToggle('.circle--brown', 'blue')
          // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
          .addTo(controller);

        const pator11 = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          triggerHook: 0,
          offset: 400,
          duration: section1.offsetHeight * 3,
        })
          // .setTween(tween)
          .setClassToggle('.pator-front--close', 'hidden')
          // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
          .addTo(controller);

      } else {
        const pator1 = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          triggerHook: 1,
          offset: -500,
          duration: section1.offsetHeight * 2,
        })
          .setPin("#pin1")
          // .setTween(tween)
          // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
          .addTo(controller);
      }

      // const pator22 = new ScrollMagic.Scene({
      //   triggerElement: "#trigger2",
      //   triggerHook: 0,
      //   offset: 0,
      //   duration: section1.offsetHeight / 2.5,
      // })
      //   .setClassToggle('.pator-front--close', 'hidden')
      //   .addTo(controller);

      const pator2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: 0,
        offset: 0,
        duration: section1.offsetHeight,
      })
        .setPin("#pin2")
        .setTween(tween2)
        // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
        .addTo(controller);
      if (true) {
        if (window.innerWidth >= 767) {
          const scene3Pin = new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            triggerHook: 1,
            offset: 100,
            duration: section1.offsetHeight,
          })
            .setPin(".circle--1")
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        } else {
          const scene3Pin = new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            triggerHook: 1,
            offset: section1.offsetHeight / 4.5,
            duration: section1.offsetHeight,
          })
            .setPin(".circle--1")
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        }
      } else {
        const scene3Pin = new ScrollMagic.Scene({
          triggerElement: "#trigger3",
          triggerHook: 1,
          // offset: -100,
          duration: section1.offsetHeight,
        })
          .setPin(".circle--1")
          // .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
      }

      if (true) {
        if (window.innerWidth >= 767) {
          const scene3Pin1 = new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            triggerHook: 1,
            offset: 100,
            duration: section1.offsetHeight,
          })
            .setPin(".circle--2")
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        } else {
          const scene3Pin1 = new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            offset: section1.offsetHeight / 4.5,
            duration: section1.offsetHeight,
          })
            .setPin(".circle--2")
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        }
      } else {
        const scene3Pin1 = new ScrollMagic.Scene({
          triggerElement: "#trigger3",
          triggerHook: 1,
          offet: -600,
          duration: section1.offsetHeight,
        })
          .setPin(".circle--2")
          // .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
      }

      const pator3 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        triggerHook: 1,
        duration: section1.offsetHeight,
        offset: 450,
      })
        .setPin("#pin3")
        .setTween(tween3)
        // .addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
        .addTo(controller);

      const circle1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0,
        duration: section1.offsetHeight * 4,
        offset: 100,
      })
        .setPin(".circle--brown")
        .addTo(controller);

      // const circle2 = new ScrollMagic.Scene({
      //   triggerElement: "#trigger2",
      //   triggerHook: 1,
      //   duration: section1.offsetHeight,
      //   offset: 0,
      // })
      //   .setPin(".circle--1")
      //   .addTo(controller);


      const scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0.2,
        duration: section1.offsetHeight / 3.2,
        offset: 100,
      })
        // .setPin(".pator-el--1")
        .setClassToggle(".pator-el--1", "active")
        // .setTween('.pator-el--1', {opacity: 1})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      const scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0.2,
        duration: section1.offsetHeight / 3.2,
        offset: 120,
      })
        // .setPin(".pator-el--2")
        .setClassToggle(".pator-el--2", "active")
        // .setTween('.pator-el--2', {opacity: 1})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      const scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0.2,
        duration: section1.offsetHeight / 3.2,
        offset: 140,
      })
        // .setPin(".pator-el--3")
        .setClassToggle(".pator-el--3", "active")
        // .setTween('.pator-el--3', {opacity: 1})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      const scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0.2,
        duration: section1.offsetHeight / 3.2,
        offset: 160,
      })
        // .setPin(".pator-el--4")
        .setClassToggle(".pator-el--4", "active")
        // .setTween('.pator-el--4', {opacity: 1})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      const scene6 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: 0.6,
        duration: section1.offsetHeight / 2,
        offset: 100,
      })
        // .setPin(".pator-el--1")
        .setClassToggle(".pator-el-open--1", "active")
        // .setTween('.pator-el-open--1', {opacity: 1})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      const scene7 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: 0.6,
        duration: section1.offsetHeight / 2,
        offset: 100,
      })
        // .setPin(".pator-el--2")
        .setClassToggle(".pator-el-open--2", "active")
        // .setTween('.pator-el-open--2', {opacity: 1})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      const scene8 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: 0.6,
        duration: section1.offsetHeight / 2,
        offset: 100,
      })
        // .setPin(".pator-el--3")
        .setClassToggle(".pator-el-open--3", "active")
        // .setTween('.pator-el-open--3', {opacity: 1})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      const sircle = new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook: 0.5, duration: section1.offsetHeight})
        // .setPin(".circle--1")
        .setClassToggle('.circle--2', "active")
        // .addIndicators({name: "circle--1"}) // add indicators (requires plugin)
        .addTo(controller);

      const patorOpenSide = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        duration: 1000,
        offset: 10,
      })
        .setPin(".pator-front--open-side")
        // .setTween('.pator-front--open-side', {autoAlpha: 1})
        .setClassToggle(".pator-front--open-side", "active")
        .addTo(controller);

      // const patorOpenHide = new ScrollMagic.Scene({
      //   triggerElement: "#trigger3",
      //   triggerHook: 1,
      //   duration: 300,
      //   offset: 100,
      // })
      //   .setClassToggle('.pator-front--open', 'hidden')
      //   .addTo(controller);
      //
      // const patorOpenClose = new ScrollMagic.Scene({
      //   triggerElement: "#trigger3",
      //   triggerHook: 1,
      //   duration: 400,
      //   offset: 300,
      // })
      //   .setClassToggle('.pator-front--close', "hidden")
      //   // .setTween('.pator-front--open', {autoAlpha: 0})
      //   .addTo(controller);

      const patorOpenVis = new ScrollMagic.Scene({
        triggerElement: ".form-block",
        triggerHook: 1,
      })
        // .setTween('.pator-front', {autoAlpha: 1})
        .setClassToggle(".pator-front--close", "active")
        // .setTween(tween4)
        .addTo(controller);

      const scene9 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        triggerHook: 0.8,
        duration: section1.offsetHeight / 2.2,
        offset: 400,
      })
        .setClassToggle(".pator-el-open-side--1", "active")
        .addTo(controller);

      const scene10 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        triggerHook: 0.8,
        duration: section1.offsetHeight / 2.2,
        offset: 400,
      })
        // .setPin(".pator-el--2")
        .setClassToggle(".pator-el-open-side--2", "active")
        // .setTween('.pator-el-open--2', {opacity: 1})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

      const scene11 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        triggerHook: 0.8,
        duration: section1.offsetHeight / 2.2,
        offset: 400,
      })
        // .setPin(".pator-el--3")
        // .setTween('.circle--2', {autoAlpha: 1})
        .setClassToggle(".pator-el-open-side--3", "active")
        // .setTween('.pator-el-open--3', {opacity: 1})
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);


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
    }

    if (window.innerWidth <= 767) {
      $(".circle").parallaxContent({
        shift: -5
      });
    }
  });
};

export {pinImage};
