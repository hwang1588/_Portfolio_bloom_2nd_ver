const circle = document.querySelector(".circle");
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  circle.style.left = mouseX + 'px';
  circle.style.top = mouseY + 'px';
});

window.setTimeout(function () {
  $("#loading-wrapper2").fadeOut(2000); //요소를 2000ms동안 fadeout시킴
  $(".ready").addClass("aaa bbb"); //요소에 요소를 추가함
}, 4000); //settimeout 4000ms의 딜레이를 준 다음 기능작동

window.setTimeout(function () {
  $(".drama").addClass("est"); //요소에 요소를 추가함
}, 1000); //settimeout 1000ms의 딜레이를 준다음 기능 작동

var $circle = $(".circle"); //변수 할당=특정요소를 지정
function moveCircle(e) {
  TweenLite.to($circle, 0.5, { //숫자가 높으면 커서이동후 원 반응속도 느려짐
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);

  $("a").mouseover(function () { //"test_enter"요소에 '마우스가진입'하면
    $(".circle").removeClass("circle_small").addClass("circle_big"); //"test_enter"(this)요소에 "test_active"요소와 "not"요소가 '번갈아 적용'됨
  });

$("a").mouseleave(function () { //"test_enter"요소에 '마우스가진입'하면
    $(".circle").removeClass("circle_big").addClass("circle_small"); //"test_enter"(this)요소에 "test_active"요소와 "not"요소가 '번갈아 적용'됨
  });
