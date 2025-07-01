// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close-btn").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End

// Header Scroll JS Start
$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    header.toggleClass("fixed_header", $(window).scrollTop() > 0);
  });
});
// Header Scroll JS End

// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End

// Slick Slider JS Start
$('.home_featured_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  arrow: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        centerPadding: '0',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerPadding: '0',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {

        centerPadding: '0',
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 575,
      settings: {
        dots:false,
        slidesToShow: 1,
      }
    }
  ]
});
// Slick Slider JS End

// FAQ JS Start
let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})


document.querySelector(".form-wrapper").addEventListener("submit", function(e) {
  e.preventDefault(); 
});
// FAQ JS End