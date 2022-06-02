//4章の内容

// bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい
// $(document).ready(function() {
//  $('body').html('<h1>Hello jQuery!!</h1>');
// });

// 省略形
// $(function()
//  jQueryプログラムの内容
// });

// 基本書式
// $(セレクタ).メソッド(パラメータ);

//**************************************************************//

// 5章の内容

// jQueryでCSSスタイルを変更する：CSSメソッド【単数のプロパティ】
// $('セレクタ').css('background-color', '#0000FF')

// jQueryでCSSスタイルを変更する：CSSメソッド【複数のプロパティ】
// $('セレクタ').css({
//  'プロパティ1' :'値1',
//  'プロパティ2' :'値2',
//  :
//  :
//  'プロパティn' :'値n',
// })

//複数のプロパティの例
// $(function(){
//  $('.box1').css({
//    'background-color': '#0000FF',
//    'height': '100px'
//  });
// });

// 上から下へアニメーション
// $(function(){
//   $('.box1').slideDown();
// });

// 下から上へアニメーション
// $(function(){
//   $('.box1').slideUp();
// });

//非表示の要素をjQueryで表示させる
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

//表示されている要素をjQueryで非表示にする
// $(function(){
//   $('.box1').hide();
// });

//確認問題
$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});