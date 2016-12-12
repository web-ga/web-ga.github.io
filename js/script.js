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

      $("#home-link, #about-link").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 500, function(){
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


  });
