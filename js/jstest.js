//ハンバーガーメニューで開閉
window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".toggle-menu-button");
  const menu = document.querySelector(".header-site-menu");

  button.addEventListener("click", () => {
    menu.classList.toggle("is-show");
  });
});

//コンテンツの書き換え
document.querySelector("#my-btn1").addEventListener("click", () => {
  document.querySelector("#message").innerHTMl = //textContentをinnerHTMLに変更した
    "<strong>こんにちは！</strong>";
});

//クラスの追加
document.querySelector("#my-btn2").addEventListener("click", () => {
  document.querySelector("#message").classList.add("is-bold");
});

//練習：クラスの削除
document.querySelector("#my-btn3").addEventListener("click", () => {
  document.querySelector("#message").classList.remove("is-bold");
});

//イベントの阻止右クリックできないようにする
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

//イベントの詳細取得
document.querySelector("#my-btn4").addEventListener("click", function (event) {
  console.log(event.target); // イベントの詳細情報が入っている
});

//スタイルの直接書き換え
document.querySelector("#my-btn3").addEventListener("click", () => {
  document.querySelector("#message").style.fontWeight = "900";
});

//属性の設定
document.querySelector("#my-btn4").addEventListener("click", () => {
  document
    .querySelector("#sislink")
    .setAttribute("href", "https://www.sis.otsuma.ac.jp/i-design/");
});

//属性の削除
document.querySelector("#my-btn5").addEventListener("click", () => {
  document.querySelector("#sislink").removeAttribute("href");
});

//属性の読み込みと表示
document.querySelector("#my-btn6").addEventListener("click", () => {
  console.log(document.querySelector("#sislink").getAttribute("href"));
});

//応用：ボタンを押すと、メッセージの内容がこんにちは！に書き換わる

// すべての制作実績カードを取得（NodeListとして取得される）
const cards = document.querySelectorAll(".works-card");

// すべてのタグ要素（ウエブデザイン、グラフィックデザインなど）を取得
const tags = document.querySelectorAll(".tag");

// 「すべて表示」ボタンを取得（IDで指定）
const showAllBtn = document.querySelector("#my-btnAll");

// 各タグ（span.tag）にクリックイベントを設定する
tags.forEach((tag) => {
  // 各タグがクリックされたときの処理
  tag.addEventListener("click", () => {
    // クリックされたタグのテキスト内容を取得（前後の空白を除く）
    const selectedTag = tag.textContent.trim();

    // すべてのカードをチェックして、それぞれのタグと比較する
    cards.forEach((card) => {
      // カード内にあるタグのテキスト（例: "ウエブデザイン"）を取得
      const cardTag = card.querySelector(".tag").textContent.trim();

      // カードのタグと選択されたタグが一致していれば表示、そうでなければ非表示
      if (cardTag === selectedTag) {
        // 表示用のクラスを追加、非表示用のクラスを削除
        card.classList.add("is-show");
        card.classList.remove("is-hide");
      } else {
        // 表示用のクラスを削除、非表示用のクラスを追加
        card.classList.add("is-hide");
        card.classList.remove("is-show");
      }
    });
  });
});

// 「すべて表示」ボタンがクリックされたときの処理
showAllBtn.addEventListener("click", () => {
  // すべてのカードをループして表示状態にする
  cards.forEach((card) => {
    // 表示クラスを追加し、非表示クラスを外す
    card.classList.add("is-show");
    card.classList.remove("is-hide");
  });
});
