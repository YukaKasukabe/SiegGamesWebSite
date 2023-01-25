//company スライドショーの画像設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;

     if (windowwidth > 768){
      var responsiveImage = [//PC用の画像
        { src: 'images/hero_company_001.jpg'},
        { src: 'images/hero_company_002.jpg'},
        { src: 'images/hero_company_003.jpg'}
      ];
    } else {
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
      { src: 'images/hero_company_001.jpg'},
      { src: 'images/hero_company_002.jpg'},
      { src: 'images/hero_company_003.jpg'}
      ];
    }

//スライドショーベース設定	--------------------------------
$('.hero-image-slider').vegas({
  overlay: 'images/slider_overlays_01.png',//画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: 'fade',//切り替わりのアニメーション//fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn、blurblur2、flash、flash2が設定可能。
  transitionDuration: 3000,//切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 5000,//スライド間の遅延をミリ秒単位で。
  animationDuration: 30000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburnsUp',//スライドアニメーションの種類//kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage,//画像設定を読む
  timer:false, //プログレスバー非表示
});
// --------------------------------