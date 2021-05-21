"use strict";

const termi = document.querySelector(".termi");
let s = "[[概要]] waiting input...<br>";
let c = "white";
const keybord = document.querySelectorAll(".keybord div");
const para = document.querySelectorAll(".para div");
termi.innerHTML = s;

// ボタンをランダムに光らす
setInterval(() => {
  var j = Math.floor(Math.random() * 7);
  keybord.forEach((e) => {
    if (Math.random() > 0.5) {
      e.style.backgroundColor = c;
      e.style.boxShadow = `0px 0px 10px ${c}`;
    } else {
      e.style.boxShadow = "none";
      e.style.backgroundColor = "gray";
    }
  });

  for (var i = 0; i < para.length; i++) {
    if (i < j) {
      para[i].style.backgroundColor = "white";
      para[i].style.boxShadow = "0px 0px 10px white";
    } else {
      para[i].style.backgroundColor = "gray";
      para[i].style.boxShadow = "none";
    }
  }
}, 250);
// terminalの文章を表示
function termif() {
  termi.textContent = s;
}

function button1() {
  s += "<span></span>";
  s += "手芸同好会とは？詳しくお話する説明会を以下の日程で開きます。";
  s += "<br>";
  termi.innerHTML = s;
}
function button2() {
  s += "<span></span>";
  s +=
    "会津大生なら予約不要でご参加いただけます。また、使用したスライドは、このページで公開する予定です。";
  s += "<br>";
  termi.innerHTML = s;
}
function button3() {
  s += "<span></span>";
  s +=
    "説明会では次回からの活動・体験入部についてお話します。もし説明会に出れない方、途中から参加してみたい方などはHP > Contactから部長までご連絡ください。";
  s += "<br>";
  termi.innerHTML = s;
}
// 危険ボタンを押した後
function bom() {
  alert("エラーが発生しました");
  var i = 0;
  const titled = document.querySelector(".title div");
  const scr = document.querySelector(".screen");
  const para = document.querySelector(".para");
  const key = document.querySelector(".keybord");
  const can = document.querySelector("canvas");
  const flayer = document.querySelector(".flayer");
  const termi = document.querySelector(".termi");
  const planli = document.querySelectorAll(".plan li");
  const light = document.querySelector(".light");

  const id = setInterval(() => {
    if (i === 0) scr.style.content = "url('error.png')";
    else if (i === 1) para.style.content = "url('error.png')";
    else if (i === 2) key.style.content = "url('error.png')";
    else if (i === 3) termi.style.content = "url('error.png')";
    else clearInterval(id);
    i++;
  }, 250);
  light.classList.remove("li1");
  light.classList.add("li2");
  flayer.textContent = "テゲテゲテゲテゲテゲテゲテゲテゲテゲテゲテゲテゲテ";
  for(let plan of planli){
    plan.textContent = "テゲテゲテゲテゲテゲテゲテゲテゲテゲテゲテゲテゲテ";
  }
  titled.textContent = "reload !";
  titled.style.color = "red";
}
