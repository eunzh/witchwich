// 팝업 닫기
$(function () {
  $("#popup a").click(function () {
    $("#popup").hide();
  });
});

// 달력
$(function () {
  $("#datepicker").datepicker();
});
$.datepicker.setDefaults({
  dateFormat: 'yy-mm-dd',
  prevText: '　',
  nextText: '　',
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  showMonthAfterYear: true,
  yearSuffix: '년'
});

// 메인배너 슬라이드
var swiper = new Swiper(".mb", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// 브랜드 슬라이드 aos js
AOS.init({
  duration: 1500,
  offset: 400,
  // easing: 'ease-out-back',
});

//메뉴 사이드 음료 슬라이드
var swiper4 = new Swiper(".center", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".tab_in .swiper-button-next",
    prevEl: ".tab_in .swiper-button-prev",
  },
});
$(function () {
  $(".tab> li").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
});

// 굿즈 슬라이드
$(function () { //on DOM ready 
  $(".g_in").simplyScroll({
    speed: 0.5,
    direction: 'forwards',
  });
});


// const slide = gsap.timeline();
// slide
//   .from(".b1", {
//     y: -100,
//     opacity: 0,
//   })
//   .from(".b2", {
//     y: -100,
//     opacity: 0,
//   })
//   .from(".b3", {
//     y: -100,
//     opacity: 0,
//   })
//   .from(".b4", {
//     y: -100,
//     opacity: 0,
//   })
//   .from(".b5", {
//     y: -100,
//     opacity: 0,
//   });
// ScrollTrigger.create({
//   animation: slide,
//   trigger: ".brand",
//   start: "top 8%",
//   end: "+=2000",
//   scrub: true,
//   pin: true,
//   anticipatePin: 1, // 핀 효과를 부드럽게 줄 수 있음.
//   markers: false, //스크롤 스타트+엔드 마커
// });