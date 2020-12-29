const modal = () => {
  $('[data-fancybox]').fancybox({
    smallBtn : true,
    toolbar  : false,
    touch: false,

    btnTpl   : {
      smallBtn : '<button data-fancybox-close class="fancybox-button fancybox-button--close" aria-label="Close" title="Close"><svg width="32" height="32"><use xlink:href="#icon-arrow-button"></use></svg></button>'
    }
  });



  const btns = document.querySelectorAll('.order-btn');

  // for (const btn of btns) {
  //
  //   btn.addEventListener('click', function () {
  //     console.log('run')
  //
  //     const nameProduct = btn.dataset.productName;
  //
  //     $.fancybox.open({
  //       src  : '#form-required',
  //       type : 'inline',
  //       opts : {
  //
  //         afterShow : function( instance, current, slide ) {
  //           this.$content.find('.name-product').text(nameProduct);
  //           this.$content.find('#name-product').val(nameProduct);
  //           console.log(this.$content.find('.feedback-form'))
  //         },
  //
  //         // afterShow : function( instance, current ) {
  //         //   console.info( 'done!', current);
  //         //
  //         // }
  //       }
  //     });
  //   });
  // }


};

export {modal};
