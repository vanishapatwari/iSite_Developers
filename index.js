
      $(window).scroll(function () {
        $("nav").toggleClass("scrolled", $(this). scrollTop() > 50);
      });

      AOS.init({
        duration: 2000,
      });
    