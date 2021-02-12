$(document).ready(function(){
   $('.menu-open, .menu__close').click(function(event){
       $('.main-menu__part-left,.main-menu__part-right').toggleClass('active');
       $('body').toggleClass('lock');
   });
   $(document).ready(function() {
      $('.works').magnificPopup({
         delegate: 'a',
         type: 'image',
         tLoading: 'Loading image #%curr%...',
         mainClass: 'mfp-img-mobile',
         gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
         },
         image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            
         }
      });
   });
});



const swiper = new Swiper('.swiper-container', {
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   spaceBetween: 10,
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
     
   },
 });