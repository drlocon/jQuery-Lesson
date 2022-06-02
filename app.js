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

// jQueryでCSSスタイルを変更する＿CSSメソッド【単数のプロパティ】
// $('セレクタ').css('background-color', '#0000FF')

// jQueryでCSSスタイルを変更する＿CSSメソッド【複数のプロパティ】
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
// $(function (){
//   $('.box1').slideDown(function (){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp();
//   });
// });

//**************************************************************//

// 6章の内容

// >>>マウスオーバー
// $('.セレクト名').イベント名(function(){
//   イベント発生時に行われる処理
// });

// box1にマウスオーバーされたときに、処理を実行してください
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
// });

// マウスアウトされたときに、背景色を赤色に変化させる処理を追加
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

// 上記＿あらかじめCSSを定義しておくパターン
// addClass()＿対象のHTML要素にclass属性を追加
// removeClass()＿要素に設定されているclass属性を解除
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// >>>マウスクリック
// $('.セレクト名').on('click',function(){
//   イベント発生時に行われる処理
// });

$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});