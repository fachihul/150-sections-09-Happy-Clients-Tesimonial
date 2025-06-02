$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    items: 3,
    margin: 30,
    nav: false,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
