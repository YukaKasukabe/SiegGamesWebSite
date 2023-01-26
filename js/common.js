// フッターが表示されたら消える
$(function() {
  var footer = $('.footer').innerHeight(); // footerの高さを取得
  
  window.onscroll = function () {
    var point = window.pageYOffset; // 現在のスクロール地点 
    var docHeight = $(document).height(); // ドキュメントの高さ
    var dispHeight = $(window).height(); // 表示領域の高さ
  
    if(point > docHeight-dispHeight-footer){ // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
      $('.header,.page-down').addClass('fadeOut'); //footerより下にスクロールしたらis-hiddenを追加
    }else{
      $('.header,.page-down').removeClass('fadeOut'); //footerより上にスクロールしたらis-hiddenを削除
    }
  };
  });
/* ------------------------------------------------------------------ */


// フェードアップアニメーション
function delayScrollAnime() {
	var time = 0.2;//遅延時間を増やす秒数の値
	var value = time;
	$('.fadeAnime').each(function () {
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

// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).on('load', function(){
		delayScrollAnime();/* アニメーション用の関数を呼ぶ*/
	});// ここ

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

//スクロールした際の動きを関数でまとめる
// function PageTopCheck(){
// 	var winScrollTop = $(this).scrollTop();
// 	var secondTop =  $(".footer").offset().top - 0; //#area-2の上から150pxの位置まで来たら
// 	if(winScrollTop >= secondTop){
// 	$('.page-top').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
// 	$('.page-down').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
// } else {//元に戻ったら
// 	$('.page-top').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
// 	$('.page-down').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
// }

// }

//クリックした際の動き
// $('.scroll-top').click(function () {
// var elmHash = $(this).attr('href'); //hrefの内容を取得
// if (elmHash == ".index-partner-section") {//もし、リンク先のhref の後が#area-2の場合
// 	var pos = $(elmHash).offset().top;
// 	$('body,html').animate({scrollTop: pos}, pos); //#area-2にスクロール
// }else{
// 	$('body,html').animate({scrollTop: 0}, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
// }
// 	return false;//リンク自体の無効化
// });

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
// PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
// });

// // ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function () {
// PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
// });