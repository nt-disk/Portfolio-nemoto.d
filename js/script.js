// $(function(){
//   $('.btn__open-trigger').on('click', function() {
//     $(this).toggleClass('active');
//     $('.nav').toggleClass('open');
//     return false;
//   });
// });


// $(function(){
//   $('.btn__close-trigger').on('click', function() {
//     $(this).toggleClass('active');
//     $('._nav').toggleClass('open');
//     return false;
//   });
// });

// jqueryをJSに置き換える
// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('.btn__open-trigger').addEventListener('click', function(event) {
//     this.classList.toggle('active');
//     document.querySelector('.nav').classList.toggle('open');
//     event.preventDefault(); // return false の代わり
//   });
// });

// ×ボタン(閉じる専用ボタン)
// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('.btn__close-trigger').addEventListener('click', function(event) {
//     this.classList.toggle('active');
//     document.querySelector('.nav').classList.toggle('open');
//     event.preventDefault(); // return false の代わり
//   });
// });


document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.nav');
  const openTrigger = document.querySelector('.btn__open-trigger');
  const closeTrigger = document.querySelector('.btn__close-trigger');

  openTrigger.addEventListener('click', function(event) {
    this.classList.toggle('active');
    nav.classList.toggle('open');

    // nav の表示・非表示を制御
    if (nav.classList.contains('open')) {
      nav.style.display = 'flex';
      setTimeout(() => {
        nav.style.opacity = '1';
      }, 10); // 少し遅延を入れて opacity を適用
    } else {
      nav.style.opacity = '0';
      setTimeout(() => {
        if (!nav.classList.contains('open')) {
          nav.style.display = 'none';
        }
      }, 500); // アニメーション時間後に display を none にする
    }

    event.preventDefault();
  });

  // .btn__close-trigger のクリックで .open を削除する
  closeTrigger.addEventListener('click', function(event) {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      nav.style.opacity = '0';
      setTimeout(() => {
        if (!nav.classList.contains('open')) {
          nav.style.display = 'none';
        }
      }, 500); // アニメーション後に非表示にする
    }

    event.preventDefault();
  });
});










// $('.hide-text').hide();
// $(".readmore").on("click", function() {
//     $(this).toggleClass("on-click");
//     $(this).prev().slideToggle(500);
// });




// じわっ
$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
  $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
  }else{
  $(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
  }
  });





// ********* 下からふわっ *********
// 動きのきっかけとなるアニメーションの名前を定義
// function fadeAnime(){

//   // ふわっ
//   $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
//     var elemPos = $(this).offset().top-50;//要素より、50px上の
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight){
//     $(this).addClass('fadeUp-normal');// 画面内に入ったらfadeUpというクラス名を追記
//     }else{
//     $(this).removeClass('fadeUp-normal');// 画面外に出たらfadeUpというクラス名を外す
//     }
//     });
// }

function fadeAnime() {
  $('.fadeUpTrigger').each(function() {
    var elemPos = $(this).offset().top - 50; // 要素より、50px上の位置
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      if ($(this).hasClass('late')) {
        $(this).addClass('fadeUp-late'); // 遅いアニメーションを追加
      } else {
        $(this).addClass('fadeUp'); // 通常のアニメーションを追加
      }
    } else {
      $(this).removeClass('fadeUp fadeUp-late'); // アニメーションクラスを外す
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述




// pq action
  // const qa = document.querySelector(".js-ac"); // js-ac要素を取得し変数に格納
  //   function acToggle() { // クリック時に作動する関数を作成
  //     const content = this.nextElementSibling; // js-ac要素の「次の要素」を取得し変数に￥格納
  //     content.classList.toggle("is-open"); // js-ac要素の「次の要素」
  //     const qa = this; // js-ac要素自身を変数に格納
  //     qa.classList.toggle("click", acToggle); // クリックイベントを登録、acToggle関数を作動
  //   }

//   const qa = document.querySelectorAll(".js-ac"); // js-ac要素すべて取得

//   function acToggle() { // クリック時に発火する関数を作成
//     const content = this.nextElementSibling; // js-ac要素の「次の要素」を取得し変数に格納
//     content.classList.toggle("is-open"); // js-ac要素の「次の要素」
//     const qa = this; // js-ac要素自身を変数に格納
//     qa.classList.toggle('is-open'); // js-ac要素にis-openつけ外し
//     // const grandChild = content.querySelector('.specific-class'); // 特定の孫要素を取得
// }

//   // qa.addEventListener("click", acToggle);// クリックイベントを登録、acToggle関数を発火
//   for (let i = 0; i < qa.length; i++) { // for文でjs-acメニューをループ処理
//     qa[i].addEventListener("click", acToggle);
//   }



//  上記参考コードの関数名・関数内の定数名を、判別しやすくするために変更
const qaElements = document.querySelectorAll(".js-ac");

const acToggle = function() {
  const qa = this;
  qa.classList.toggle("is-open");
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
}

for (let i = 0; i < qaElements.length; i++) {
  qaElements[i].addEventListener("click", acToggle);
  }
