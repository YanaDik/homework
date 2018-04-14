$(document).ready(function () {

  // add active class to clicked nav item
  $(".header__nav a").click(function (event) {
    event.preventDefault();
    $(".header__nav a").removeClass('active');
    $(this).addClass('active');
  });

  // Slow scroll from nav item to current section
  $(".header__nav a, .home__btn-next, .contact-head__btn").click(function (event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    let headerHeight = $('.header').height();
    let isHeaderSticky = $('.header').hasClass('header--sticky');
    let scrollTop = isHeaderSticky ? top - headerHeight : top - headerHeight + 40;
    $("body, html").animate({
      scrollTop
    }, 700);
  });

  // sticky header
  if ($('.header').length) {
    let renderHeader = function () {
      const HEADER = $('.header');
      let headerHeight = HEADER.height();
      let scrollTop = $(window).scrollTop();
      if (scrollTop > headerHeight) {
        HEADER.addClass("header--sticky");
      } else {
        HEADER.removeClass("header--sticky");
      }
    }
    renderHeader();
    $(window).scroll(function () {
      renderHeader();
    })
  }

  // show media header navigation
  $('.header__nav-btn').click(function () {
    $('.header__nav').toggleClass('header__nav--show');
    $(this).toggleClass('is-active');
  });

  // change navigation active class oncroll
  function onScroll(event) {
    let scrollPos = $(document).scrollTop();
    $('.header__nav a').each(function () {
      let currLink = $(this);
      let refElement = $(currLink.attr("href"));
      if (refElement.position().top - 60 <= scrollPos && refElement.position().top + refElement.height() + 170 > scrollPos) {
        $('.header__nav a').removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
  $(document).on("scroll", onScroll);

  $('#teamslider').slick({
    dots: true,
    arrows: true,
    // nextArrow: '<button type="button" class="slick-next"> <span></span> </button>',
    // prevArrow: '<button type="button" class="slick-prev"> <span></span> </button>'
  });

  // $('#testimonials__slider').slick({
  //   dots: true,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  // });

  $('#testimonials__slider').slick({
    dots: false,
    arrows: true,
  });





});