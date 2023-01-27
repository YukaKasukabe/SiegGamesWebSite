
// ページネーション
// var current;
// $.scrollify({
//   section:".index-section",
//   setHeights:false,//1ページの高さ設定
//   easing: "swing", // swing,linear,easeOutExpo
//   interstitialSection : ".footer",
// 	scrollSpeed: 500, // スクロール時の速度
//   scrollbars:false,//スクロールバー表示・非表示設定
//   before:function(i,scrollify){
//       current = i
//       $('.pagenation .active').removeClass('active');
//       $('.pagenation').find('a').eq(i).addClass('active'); 
//   },              
//   afterRender:function(){
//       var pagenation = '<ul class="pagenation">';
//       $('.index-section').each(function(i){
//           pagenation += '<li><a></a></li>';
//       });
//       pagenation += '</ul>';
//       $('.index-section').append(pagenation);
//       $('.pagenation a').each(function(i){
//           $(this).on('click',function(){
//               $.scrollify.move(i);
//           });
//       });
//       $('.pagenation li:first-child').find('a').addClass('active');
//   },      
// });

// $(window).on('resize',function(){
//   if(current){
//       var currentScrl = $('.index-section').eq(current).offset();
//       $(window).scrollTop(currentScrl);
//   }

// });
/* ------------------------------------------------------------------ */
$.scrollify({
  section : ".index-section",//1ページスクロールさせたいエリアクラス名
  scrollbars:"false",//スクロールバー表示・非表示設定
  interstitialSection : ".footer",
  easing: "swing", // swing,linear,easeOutExpo
  scrollSpeed: 1000, // スクロール時の速度
  
  //以下、ページネーション設定
  before:function(i,panels) {
  var ref = panels[i].attr("data-section-name");
  $(".pagination .active").removeClass("active");
  $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
  },
  afterRender:function() {
  var pagination = "<ul class=\"pagination\">";
  var activeClass = "";
  $(".index-section").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
  activeClass = "";
  if(i===$.scrollify.currentIndex()) {
  activeClass = "active";
  }
  pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
  });
  pagination += "</ul>";
  
  $("#index-section1").append(pagination);//はじめのエリアにページネーションを表示
  $(".pagination a").on("click",$.scrollify.move);
  }
});
// $(window).on('resize',function(){
//   if(current){
//       var currentScrl = $('.index-section').eq(current).offset();
//       $(window).scrollTop(currentScrl);
//   }

// });
// リロードしたら一番上のページに戻す
// $(function() {
//   $('html,body').animate({ scrollTop: 0 }, '1');
// });

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


