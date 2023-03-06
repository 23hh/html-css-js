// for (let i = 0; i < document.querySelectorAll(".tab-button").length; i++) {
document
  .querySelectorAll(".tab-button")[0]
  .addEventListener("click", function () {
    document.querySelectorAll(".tab-button")[0].classList.remove("orange");
    document.querySelectorAll(".tab-button")[1].classList.remove("orange");
    document.querySelectorAll(".tab-button")[2].classList.remove("orange");
    document.querySelectorAll(".tab-button")[0].classList.add("orange");
    document.querySelectorAll(".tab-content")[0].classList.add("show");
  });
// }

// document
//   .querySelectorAll(".tab-button")[0]
//   .addEventListener("click", function () {
//     const { className } = document.querySelector("orange");
//     alert(className);
//   });
// // }

// const list = document.querySelectorAll(".tab-button");

// for (let i = 0; i < document.querySelectorAll(".tab-button").length; i++) {
//   .addEventListener("click", function () {
//     const { className } = document.querySelector("orange");
//     alert(className);
//   });
// }

// queryselector 반복문 돌면서 click Evnet 할당
// 해당 click event 가 일어나면 orange 인지 찾아라.
// 오렌지가 없으면 그대로 오렌지가 있으면 remove 해라

// 반복문
// orange 찾기
// 오렌지가 있으면 => Remove
// 오렌지가 없으면 => 그대로
//
