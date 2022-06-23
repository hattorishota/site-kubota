
$(function () {
  // 続きを見る
  $('.btn1').on('click', function () {
    $('.btn1').addClass('slide-down')
    $('.hidden1').addClass('h-auto')
  });
  $('.btn2').on('click', function () {
    $('.btn2').addClass('slide-down')
    $('.hidden2').addClass('h-auto')
  });
  $('.btn3').on('click', function () {
    $('.btn3').addClass('slide-down')
    $('.hidden3').addClass('h-auto')
  });

  //ページ内スクロール
  $('a[href^="#"]').on('click', function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  // Q&Aアコーディオン
  $('.accordion_one .ac_header').click(function(){
    $(this).next('.ac_inner').slideToggle();
    $(this).toggleClass("open");
  });

  //Inview
  $('.fadein').on('inview', function (event, isInView) {
    // 要素が画面に表示された時に実行する処理を記述
    $(this).addClass('scrollin');
  });

});

//画像の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
        { src: './img/top/mv_1.jpg' },
        { src: './img/top/mv_2.jpg' }
			];
		} else {
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: './img/top/mv_1.jpg' },
        { src: './img/top/mv_2.jpg' }
			];
		}

//Vegas全体の設定
$('#slider').vegas({
  //http://vegas.jaysalvat.com/documentation/transitions/ 参照
	overlay: true,
	transition: 'fade',
	transitionDuration: 2000,
	delay: 10000,
	animationDuration: 20000,
	animation: 'kenburnsUp',
	slides: responsiveImage,
	timer: false,
});