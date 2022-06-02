const swiper14 = new Swiper(".mySwiper10", { //핸드폰 스와이퍼
  touchRatio: 0,
  slidesPerView: "auto",
   freeMode: true,
  spaceBetween: 0,
  slidesPerGroup: 1,
  autoHeight: true,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: "fade", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"
  //  autoplay: { //스와이퍼 오토플레이
  //    delay: 3000,
  //  },

});

const swiper13 = new Swiper(".mySwiper2-4", { //핸드폰 스와이퍼
  touchRatio: 0,
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: "fade", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"
  //  autoplay: { //스와이퍼 오토플레이
  //    delay: 3000,
  //  },
  navigation: { // 스크롤바 네비게이션
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper12 = new Swiper(".mySwiper2-3", { //핸드폰 스와이퍼
  touchRatio: 0,
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: "fade", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"
  //  autoplay: { //스와이퍼 오토플레이
  //    delay: 3000,
  //  },
  navigation: { // 스크롤바 네비게이션
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper11 = new Swiper(".mySwiper2-2", { //핸드폰 스와이퍼
  touchRatio: 0,
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: "flip", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"
  //  autoplay: { //스와이퍼 오토플레이
  //    delay: 3000,
  //  },
  navigation: { // 스크롤바 네비게이션
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper10 = new Swiper(".mySwiper2-1", { //첫배경 스와이퍼
  touchRatio: 0,
  slidesPerView: 3,
  spaceBetween: 100,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: "slide", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"
  //  autoplay: { //스와이퍼 오토플레이
  //    delay: 3000,
  //  },

  navigation: { // 스크롤바 네비게이션
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper9 = new Swiper(".myswiper9", {
  loop: true,

  autoplay: { //스와이퍼 오토플레이
    delay: 0,
    //    disableOnInteraction: false,
  },

  slidesPerView: 'auto',

  speed: 3000,

  touchRatio: 0, //터치 못하게

  direction: "horizontal", //horizontal or vertical

  freeMode: true,

});

const swiper8 = new Swiper(".myswiper8", {
  //spaceBetween: 10,

  touchRatio: 0,

  loop: false,

  loopPreventsSlide: true,

  rewind: false, //슬라이드를 되감는 기능(loop와 함께 사용금지)

  direction: "horizontal", //horizontal or vertical

  //spaceBetween: 100, //.swiper-slide 사이에 빈공간을 추가(body가 보이게됨)

  mousewheel: true, //마우스휠을 통한 슬라이드 제어

  autoHeight: false, //높이값을 자동으로 부모요소에 맞춤

  effect: "slide", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"

  grabCursor: false, //슬라이드화면에 마우스가 있을경우 grab커서로 변경됨

  preventInteractionOnTransition: true, //화면 전환중 버튼을 통한 작동 불가능

  roundLengths: true, //텍스트 선명도 강제 뻥튀기

  slidesOffsetBefore: 0, //컨테이너 시작지점에 공간(픽셀 단위)을 추가합니다

  slidesOffsetAfter: 0, //컨테이너 종료지점에 공간(픽셀 단위)을 추가합니다

  slidesPerView: 1, //한 슬라이드당 볼 화면 갯수

  parallax: true, //패럴랙스 효과 적용여부

  enabled: true, //패럴랙스 효과 적용여부2

});

const swiper6 = new Swiper(".myswiper6", { //3두번째 스와이퍼 안에 스와이퍼
  touchRatio: 0,

  direction: "vertical", //horizontal or vertical

  slidesPerView: "auto", //한 슬라이드당 볼 화면 갯수  

  freeMode: true,

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  mousewheel: true, //마우스휠을 통한 슬라이드 제어

});

const swiper5 = new Swiper(".myswiper5", { //두번째 스와이퍼 안에 스와이퍼
  //spaceBetween: 10,

  //Optional parameters

  //loop:false, 

  touchRatio: 0,

  loopPreventsSlide: true,

  rewind: false, //슬라이드를 되감는 기능(loop와 함께 사용금지)

  direction: "horizontal", //horizontal or vertical

  speed: 500, //화면 넘어가는 속도 (ms)

  //spaceBetween: 100, //.swiper-slide 사이에 빈공간을 추가(body가 보이게됨)

  mousewheel: false, //마우스휠을 통한 슬라이드 제어

  autoHeight: false, //높이값을 자동으로 부모요소에 맞춤

  effect: "fade", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"

  grabCursor: false, //슬라이드화면에 마우스가 있을경우 grab커서로 변경됨

  preventInteractionOnTransition: true, //화면 전환중 버튼을 통한 작동 불가능

  roundLengths: true, //텍스트 선명도 강제 뻥튀기

  slidesOffsetBefore: 0, //컨테이너 시작지점에 공간(픽셀 단위)을 추가합니다

  slidesOffsetAfter: 0, //컨테이너 종료지점에 공간(픽셀 단위)을 추가합니다

  slidesPerView: 1, //한 슬라이드당 볼 화면 갯수

  parallax: true, //패럴랙스 효과 적용여부

  enabled: true, //패럴랙스 효과 적용여부2

  //preloadImages: false,// flase=이미지가 화면에 들어올때 로드시작 true=사이트 접속시 로드시작

  //lazy: true, //이미지 화면에 들어올때 로드여부

  //slidesPerView: "auto",
  //freeMode: true,
  //scrollbar: {
  //  el: ".swiper-scrollbar",
  //},
  //mousewheel: true,
  //});

});

const swiper7 = new Swiper(".mySwiper1-2", { //핸드폰 스와이퍼
  touchRatio: 0,
  slidesPerView: 1,
  spaceBetween: 40,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: "fade", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"
  autoplay: { //스와이퍼 오토플레이
    delay: 3000,
  },

});

const swiper4 = new Swiper(".mySwiper1-1", { //첫배경 스와이퍼
  touchRatio: 0,
  slidesPerView: 9,
  spaceBetween: 80,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: "slide", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"

  autoplay: { //스와이퍼 오토플레이
    delay: 3000,
  },
});



const swiper3 = new Swiper(".mySwiper3", { //스와이퍼 안에 스와이퍼
  //spaceBetween: 10,

  //Optional parameters

  //loop:false, 

  touchRatio: 0,

  loopPreventsSlide: true,

  rewind: false, //슬라이드를 되감는 기능(loop와 함께 사용금지)

  direction: "horizontal", //horizontal or vertical

  speed: 500, //화면 넘어가는 속도 (ms)

  //spaceBetween: 100, //.swiper-slide 사이에 빈공간을 추가(body가 보이게됨)

  mousewheel: false, //마우스휠을 통한 슬라이드 제어

  autoHeight: false, //높이값을 자동으로 부모요소에 맞춤

  effect: "fade", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"

  grabCursor: false, //슬라이드화면에 마우스가 있을경우 grab커서로 변경됨

  preventInteractionOnTransition: true, //화면 전환중 버튼을 통한 작동 불가능

  roundLengths: true, //텍스트 선명도 강제 뻥튀기

  slidesOffsetBefore: 0, //컨테이너 시작지점에 공간(픽셀 단위)을 추가합니다

  slidesOffsetAfter: 0, //컨테이너 종료지점에 공간(픽셀 단위)을 추가합니다

  slidesPerView: 1, //한 슬라이드당 볼 화면 갯수

  parallax: true, //패럴랙스 효과 적용여부

  enabled: true, //패럴랙스 효과 적용여부2

  //preloadImages: false,// flase=이미지가 화면에 들어올때 로드시작 true=사이트 접속시 로드시작

  //lazy: true, //이미지 화면에 들어올때 로드여부

  //  autoplay: { //스와이퍼 오토플레이
  //    delay: 3000,
  //  },

});


const swiper2 = new Swiper(".mySwiper2", { //썸네일용 스와이퍼

  touchRatio: 0,

  spaceBetween: 20,

  slidesPerView: 4,

  freeMode: true,

  watchSlidesProgress: true,

});


const swiper = new Swiper(".mySwiper1", {
  //spaceBetween: 10,

  touchRatio: 0,

  loop: false,

  loopPreventsSlide: true,

  rewind: false, //슬라이드를 되감는 기능(loop와 함께 사용금지)

  direction: "vertical", //horizontal or vertical

  speed: 1500, //화면 넘어가는 속도 (ms)

  //spaceBetween: 100, //.swiper-slide 사이에 빈공간을 추가(body가 보이게됨)

  mousewheel: true, //마우스휠을 통한 슬라이드 제어

  autoHeight: false, //높이값을 자동으로 부모요소에 맞춤

  effect: "slide", //"slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"

  grabCursor: false, //슬라이드화면에 마우스가 있을경우 grab커서로 변경됨

  preventInteractionOnTransition: true, //화면 전환중 버튼을 통한 작동 불가능

  roundLengths: true, //텍스트 선명도 강제 뻥튀기

  slidesOffsetBefore: 0, //컨테이너 시작지점에 공간(픽셀 단위)을 추가합니다

  slidesOffsetAfter: 0, //컨테이너 종료지점에 공간(픽셀 단위)을 추가합니다

  slidesPerView: 1, //한 슬라이드당 볼 화면 갯수

  parallax: true, //패럴랙스 효과 적용여부

  enabled: true, //패럴랙스 효과 적용여부2

  //preloadImages: false,// flase=이미지가 화면에 들어올때 로드시작 true=사이트 접속시 로드시작

  //lazy: true, //이미지 화면에 들어올때 로드여부

  pagination: { //페이지네이션
    el: ".swiper-pagination",
    //type: "progressbar", //페이지네이션 형식
    clickable: true,
  },

  //swiper 마지막영역으로 넘어가면 swiper 비활성화, 마지막 영역의 속도가 0ms가 되면 비활성화로 바꿀것 
  //      on: {
  //        reachEnd: function() {
  //          swiper.mousewheel.disable();
  //        }
  //      },

  //  navigation: { // 스크롤바 네비게이션
  //    nextEl: ".swiper-button-next",
  //    prevEl: ".swiper-button-prev",
  //  },


  scrollbar: { //스크롤바
    el: ".swiper-scrollbar",
  },

  thumbs: { //썸네일 사용시
    swiper: swiper2,
  },

  on: {
    slideChangeTransitionStart: function () {
      $(".test_phone, .img_tag_set, .circle_set, .phone_btn, .flash, .headshake, .key1, .clock_test, .rotate_start").hide(0);
      $(".test_phone").removeClass('animate__animated').removeClass('animate__fadeIn');
      $(".img_tag_1").removeClass('animate__animated').removeClass('animate__bounceIn');
      $(".circle_1").removeClass('animate__animated').removeClass('animate__rotateIn');
      $(".phone_btn_1").removeClass('animate__animated').removeClass('animate__backInUp');
      $(".flash").removeClass('animate__animated').removeClass('animate__heartBeat');
      $(".headshake").removeClass('animate__animated').removeClass('animate__headShake');
      $(".key1").removeClass('animate__animated').removeClass('key_line1');
      $(".clock_test").removeClass('animate__animated').removeClass('clock_start');
      $(".rotate_start").removeClass('animate__animated').removeClass('.rotate_z');


    },
    slideChangeTransitionEnd: function () {
      $(".test_phone, .img_tag_set, .circle_set, .phone_btn, .flash, .headshake, .key1, .clock_test, .rotate_start").show(0);
      $(".test_phone").addClass('animate__animated').addClass('animate__fadeIn');
      $(".img_tag_1").addClass('animate__animated').addClass('animate__bounceIn');
      $(".circle_1").addClass('animate__animated').addClass('animate__rotateIn');
      $(".phone_btn_1").addClass('animate__animated').addClass('animate__backInUp');
      $(".flash").addClass('animate__animated').addClass('animate__heartBeat');
      $(".headshake").addClass('animate__animated').addClass('animate__headShake');
      $(".key1").addClass('animate__animated').addClass('key_line1');
      $(".clock_test").addClass('animate__animated').addClass('clock_start');
      $(".rotate_start").addClass('animate__animated').addClass('rotate_z');

    }
  }

});