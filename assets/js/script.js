var highlightedItems = document.querySelectorAll('.swiper-container');

highlightedItems.forEach(function(userItem) {
  userItem.classList.add('swiper');
});


$(document).ready(function(){
   $('.menu-open, .menu__close').click(function(event){
       $('.main-menu__part-left,.main-menu__part-right').toggleClass('active');
       $('body').toggleClass('lock');
   });
   $('.offer__button1, .offer-close1').click(function(event){
      $('.offer__more1').toggleClass('_active');
   });
   $('.offer__button2, .offer-close2').click(function(event){
      $('.offer__more2').toggleClass('_active');
   });
   $('.offer__button3, .offer-close3').click(function(event){
      $('.offer__more3').toggleClass('_active');
   });
   $('.offer__button4, .offer-close4').click(function(event){
      $('.offer__more4').toggleClass('_active');
   });
   $('.offer__button5, .offer-close5').click(function(event){
      $('.offer__more5').toggleClass('_active');
   });
   $('.offer__button6, .offer-close6').click(function(event){
      $('.offer__more6').toggleClass('_active');
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



const swiper = new Swiper('.s2-container', {
 
   // If we need pagination
   pagination: {
     el: '.s2-swiper-pagination',
     clickable: true,
   },
   spaceBetween: 10,
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
     
   },
 });

 const swiperPeop = new Swiper('.s6-container', {
 
   // If we need pagination
   pagination: {
     el: '.s6-swiper-pagination',
     clickable: true,
   },
   slidesPerView: 1,
   spaceBetween: 10,
 });

 const swiperCom = new Swiper('.s6-container-com', {
 
   // If we need pagination
   pagination: {
     el: '.s6-swiper-pagination-com',
     clickable: true,
   },
   slidesPerView: 1,
   spaceBetween: 10,
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-next',
     prevEl: '.swiper-prev',
     
   },
 });

 swiperCom.controller.control = swiperPeop;
 swiperPeop.controller.control = swiperCom;