
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });

  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

//버튼 누르면 화면이 최상단으로 올라가도록
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo:0
  });
});
//window객체는 페이지가 출력되는 화면/창 자체


const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation : {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});





const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  //gsap.to(요소 또는 css선택자, 애니메이션 동작시간, 옵션);
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      y: size,  // y축으로 얼만큼 움직이면서 애니메이션 처리 할건지
      repeat: -1,  // -1: 무한반복
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로재생시킴
      ease: Power1.easeInOut,
      delay : random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic 
    .Scene({ //scene은 scroll magic 자바스크립트 라이브러리를 통해 특정요소를 감시하는 옵션 지정
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, //뷰포트의 시작 부분이 0, 끝부분이 1 / 0.8부분에 감시하는 트리거가 걸려있기 때문에, 감시하려는 요소가 뷰포트의 0.8 지점에 걸리면 아래의 setClassToggle을 실행하도록 함.
    })
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller()); // scrollmagic에서 추가한 옵션들을 내부의 컨트롤러에 내용을 할당해 동작하게 함
})
