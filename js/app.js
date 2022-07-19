$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 23,
    nav: false,
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
