$(document).ready(function(){
   $('.menu-open, .menu__close').click(function(event){
       $('.main-menu__part-left,.main-menu__part-right').toggleClass('active');
       $('body').toggleClass('lock');
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