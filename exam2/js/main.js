$(document).ready(function () {

  // add active class to clicked nav item
  $(".header__nav a").click(function (event) {
    event.preventDefault();
    $(".header__nav a").removeClass('active');
    $(this).addClass('active');
  });

  // add active class to clicked filter-button-group
  $(".filter-button-group button").click(function (event) {
    event.preventDefault();
    $(".filter-button-group button").removeClass('button-group--active');
    $(this).addClass('button-group--active');
  });

  // Slow scroll from nav item to current section
  $(".header__nav a, .main__btn-next, .contact-head__btn").click(function (event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    let headerHeight = $('.header').height();
    let isHeaderSticky = $('.header').hasClass('header--sticky');
    let scrollTop = isHeaderSticky ? top - headerHeight + 20 : top - headerHeight + 45;
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
      if (refElement.position().top - 60 <= scrollPos && refElement.position().top + refElement.height() + 140 > scrollPos) {
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
    arrows: false,
  });


  $('#testimonials__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $(".team__content").niceScroll({
    cursorcolor: '#19bd9a',
    cursorwidth: "4px",
    autohidemode: false,
  });

  $('.porfolio__masonry').masonry({
    itemSelector: '.porfolio__item ',
    percentPosition: true,
    horizontalOrder: true,
    transitionDuration: '0.2s'
  });


  // init Isotope
  var $grid = $('.porfolio__masonry').isotope({});

  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

});

function initMap() {

  var uluru = {
    lat: 47.818,
    lng: 35.182
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var image = 'img/map.png';
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: image
  });
};