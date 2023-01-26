// フッターが表示されたら消える
$(function() {
  var footer = $('.footer').innerHeight(); // footerの高さを取得
  
  window.onscroll = function () {
    var point = window.pageYOffset; // 現在のスクロール地点 
    var docHeight = $(document).height(); // ドキュメントの高さ
    var dispHeight = $(window).height(); // 表示領域の高さ
  
    if(point > docHeight-dispHeight-footer){ // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
      $('.header,.scroller').addClass('fadeOut'); //footerより下にスクロールしたらis-hiddenを追加
    }else{
      $('.header,.scroller').removeClass('fadeOut'); //footerより上にスクロールしたらis-hiddenを削除
    }
  };
  });
/* ------------------------------------------------------------------ */

// ページトップリンク
$('.scroll-top').click(function () {
	$('body,html').animate({
			scrollTop: 0//ページトップまでスクロール
	}, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
	return false;//リンク自体の無効化
});
/* ------------------------------------------------------------------ */

/*  フェードインアニメーション */
function delayScrollAnime() {
	var time = 0.5;//遅延時間を増やす秒数の値
	var value = time;
	$('.fadeInAnime').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得
		
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {
				
				if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
					
					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("fadeUp");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる
					
					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
		}
	})
}

/* ------------------------------------------------------------------ */

// メニューボタン
$(".menu-button").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".menu-content,.menu-inview").toggleClass('panelactive');//panelactiveクラスを付与
});

$(".menu-nav-inview a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".menu-button").removeClass('active');//ボタンの activeクラスを除去し
    $(".menu-content,.menu-inview").removeClass('panelactive');//panelactiveクラスも除去
});
/* ------------------------------------------------------------------ */


  
// 見出しテキスト背景アニメーション
// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

	// 背景色が左から右に伸びて出現
$('.bg-LRextend-trigger').each(function(){ //クラス名が
	var elemPos = $(this).offset().top-50;//要素より、50px上の
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
		$(this).addClass('bg-LRextend');// 画面内に入ったらクラス名を追記
	}else{
		$(this).removeClass('bg-LRextend');// 画面外に出たらクラス名を外す
	}
});	

 // 文字列を囲う子要素
$('.bg-appear-trigger').each(function(){ //bgappearTriggerというクラス名が
	var elemPos = $(this).offset().top-50;//要素より、50px上の
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
		$(this).addClass('bg-appear');// 画面内に入ったらクラス名を追記
	}else{
		$(this).removeClass('bg-appear');// 画面外に出たらクラス名を外す
	}
});		
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
	BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
	BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
/* ------------------------------------------------------------------ */

