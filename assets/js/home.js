window.addEventListener('load', function() {
  $(document).ready(function(){
    $('.container__slider').slick({
        slidesToShow: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
  
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
  });  
})

if ( $(window).width() < 740) {     
    $(document).ready(function(){
      $('.container__category-list').slick({
          slidesToShow: 1.080,
          // autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
      });
    });  


    $(document).ready(function(){
      $('.container__option').slick({
          slidesToShow: 1.1,
          // autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
      });
    });  

}


