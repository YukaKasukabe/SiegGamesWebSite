// 全画面表示
// const setFillHeight = () => {
//   const vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// }

// // 画面のサイズ変動があった時に高さを再計算する
// window.addEventListener('resize', setFillHeight);

// // 初期化
// setFillHeight();
/* ------------------------------------------------------------------ */

//ページネーション
var current;
$.scrollify({
  section:".index-section",
  setHeights:false,//1ページの高さ設定
  easing: "swing", // swing,linear,easeOutExpo
  interstitialSection : ".footer",
	scrollSpeed: 500, // スクロール時の速度
  scrollbars:false,//スクロールバー表示・非表示設定
  before:function(i,scrollify){
      current = i
      $('.pagenation .active').removeClass('active');
      $('.pagenation').find('a').eq(i).addClass('active'); 
  },              
  afterRender:function(){
      var pagenation = '<ul class="pagenation">';
      $('.index-section').each(function(i){
          pagenation += '<li><a></a></li>';
      });
      pagenation += '</ul>';
      $('.index-section').append(pagenation);
      $('.pagenation a').each(function(i){
          $(this).on('click',function(){
              $.scrollify.move(i);
          });
      });
      $('.pagenation li:first-child').find('a').addClass('active');
  },      
});

$(window).on('resize',function(){
  if(current){
      var currentScrl = $('.index-section').eq(current).offset();
      $(window).scrollTop(currentScrl);
  }

});

// リロードしたら一番上のページに戻す
$(function() {
  $('html,body').animate({ scrollTop: 0 }, '1');
});

/* ------------------------------------------------------------------ */

// スクロールしたら背景を暗くする
$(function() {
	$(window).on('load scroll', function(){
			if ($(window).scrollTop() > 500) {
					$('.video-overlay').addClass('video-overlay-end');
			} else {
					$('.video-overlay').removeClass('video-overlay-end');
			}
	});
});
/* ------------------------------------------------------------------ */


