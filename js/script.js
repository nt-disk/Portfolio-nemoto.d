document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");
  const openTrigger = document.querySelector(".btn__open-trigger");
  const closeTrigger = document.querySelector(".btn__close-trigger");

  openTrigger.addEventListener("click", function (event) {
    this.classList.toggle("active");
    nav.classList.toggle("open");

    // nav の表示・非表示を制御
    if (nav.classList.contains("open")) {
      nav.style.display = "flex";
      setTimeout(() => {
        nav.style.opacity = "1";
      }, 10); // 少し遅延を入れて opacity を適用
    } else {
      nav.style.opacity = "0";
      setTimeout(() => {
        if (!nav.classList.contains("open")) {
          nav.style.display = "none";
        }
      }, 500); // アニメーション時間後に display を none にする
    }
    event.preventDefault();
  });

  // .btn__close-trigger のクリックで .open を削除する
  closeTrigger.addEventListener("click", function (event) {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      nav.style.opacity = "0";
      setTimeout(() => {
        if (!nav.classList.contains("open")) {
          nav.style.display = "none";
        }
      }, 500); // アニメーション後に非表示にする
    }

    event.preventDefault();
  });
});

// じわっ
$(".blurTrigger").each(function () {
  //blurTriggerというクラス名が
  var elemPos = $(this).offset().top - 50; //要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    $(this).addClass("blur"); // 画面内に入ったらblurというクラス名を追記
  } else {
    $(this).removeClass("blur"); // 画面外に出たらblurというクラス名を外す
  }
});

function fadeAnime() {
  document.querySelectorAll(".fadeUpTrigger").forEach((element) => {
    const el = element;

    // すでにアニメーションが適用されている場合は処理をスキップ（再発火を防ぐ）
    if (
      el.classList.contains("fadeUp") ||
      el.classList.contains("fadeUp-late")
    ) {
      return;
    }

    const elemPos = el.getBoundingClientRect().top + window.scrollY - 50;
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scroll >= elemPos - windowHeight) {
      if (el.classList.contains("late")) {
        el.classList.add("fadeUp-late"); // 遅いアニメーションを追加
      } else {
        el.classList.add("fadeUp"); // 通常のアニメーションを追加
      }
    }
  });
}

// スクロール時に `fadeAnime` を実行
window.addEventListener("scroll", fadeAnime);

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

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

const acToggle = function () {
  const qa = this;
  qa.classList.toggle("is-open");
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
};

for (let i = 0; i < qaElements.length; i++) {
  qaElements[i].addEventListener("click", acToggle);
}
