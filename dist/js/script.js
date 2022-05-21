$(document).ready(function(){
      $('ul.works__tabs').on('click', 'li:not(.works__tab_active)', function() {
            $(this)
              .addClass('works__tab_active').siblings().removeClass('works__tab_active')
              .closest('div.container').find('div.works__catalog').removeClass('works__catalog_active').eq($(this).index()).addClass('works__catalog_active');
          });
          var slider = tns({
            container: '.carousel_inner',
            items: 3,
            slideBy: 'page',
            autoplay: false,
            speed: 50,
            mouseDrag: true,
            autoHeight: true,
            speed: 500,
      });
});
     