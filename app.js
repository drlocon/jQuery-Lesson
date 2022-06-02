//bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい
$(document).ready(function() {
  $('body').html('<h1>Hello jQuery!!</h1>');
});

// 省略形
// $(function()
//  jQueryプログラムの内容
// });

// 基本書式
// $(セレクタ).メソッド(パラメータ);