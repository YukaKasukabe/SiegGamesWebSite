// ページネーション
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
$(window).on('resize',function(){
  if(current){
      var currentScrl = $('.index-section').eq(current).offset().top;
      $(window).scrollTop(currentScrl);
  }
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


