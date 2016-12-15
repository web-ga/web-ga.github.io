$(document).ready(function(){
  $("nav a").css({"color" : "#fff"});
      $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
         $("nav").css({"background-color":"#fff","padding":"0", "border-bottom" : "1px solid #eee" });
         $("nav a").css({"color" : "#000"})
         $(".glyphicon-menu-hamburger").css({"color" : "#000"});
         $(".navbar-header a").css({"font-size" : "200%"});
         } else{
           $("nav").css({"background-color":"transparent", "padding":"1% 0", "border-bottom" : "none"});
           $("nav a, .glyphicon-menu-hamburger").css({"color" : "#fff"});
           $(".navbar-header a").css({"font-size" : "150%"});
         }
      });

      $("#home-link, #about-link, #team-link, #services-link").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 450, function(){
              window.location.hash = hash;
            });
          }
        });
  $('.carousel').mouseenter(function(){
      $('.glyphicon-chevron-right').addClass("animated fadeInRight");
      $('.glyphicon-chevron-left').addClass("animated fadeInLeft");
  });

  $('.about h2, .about p').css('opacity', 0);
  $('.about h2, .about p').waypoint(function() {
      $('.about h2, .about p').addClass('animated fadeInUp');
  }, { offset: '50%' });

  $('.img-carl, .img-jasper').css('opacity', 0);
  $('.img-carl, .img-jasper').waypoint(function() {
      $('.img-carl, .img-jasper').addClass('animated fadeInUp');
  }, { offset: '80%' });

  $('.about-jasper, .about-carl').css('opacity', 0);
  $('.about-jasper, .about-carl').waypoint(function() {
      $('.about-jasper, .about-carl').addClass('animated fadeInUp');
  }, { offset: '80%' });

  $('.team h2').css('opacity', 0);
  $('.team h2').waypoint(function() {
      $('.team h2').addClass('animated fadeInUp');
  }, { offset: '80%' });

  $('.services h2').css('opacity', 0);
  $('.services h2').waypoint(function() {
      $('.services h2').addClass('animated fadeInUp');
  }, { offset: '80%' });

  $('.services-icon1, .services-icon2, .services-icon3').css('opacity', 0);
  $('.services-icon1, .services-icon2, .services-icon3').waypoint(function() {
      $('.services-icon1, .services-icon2, .services-icon3').addClass('animated fadeInUp');
  }, { offset: '80%' });

  $('.about-jasper .a-toggle').click(function(){
    $('.about-jasper .p-toggle').toggle("clip", 1000);
    $('.about-jasper .a-toggle').toggleClass("fa-angle-double-up").toggleClass("fa-angle-double-down");
  });

  $('.about-carl .a-toggle').click(function(){
    $('.about-carl .p-toggle').toggle("clip", 1000);
    $('.about-carl .a-toggle').toggleClass("fa-angle-double-up").toggleClass("fa-angle-double-down");
  });

  });
