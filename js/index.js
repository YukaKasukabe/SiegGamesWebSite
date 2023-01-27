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


//スプラッシュロゴアニメーション
$(window).on('load',function(){
  $(".splash").delay(200).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $(".splash-logo").delay(200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});
//=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
$(".splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

  $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  
  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  
  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function() { 
  //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる

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
  // standardScrollElements: '.index-partner-section', //通常スクロール要素
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

// $(".index-top-section").append(pagination);//はじめのエリアにページネーションを表示
// $(".pagination a").on("click",$.scrollify.move);
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


