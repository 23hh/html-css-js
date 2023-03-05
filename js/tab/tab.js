for (let i = 0; i < document.querySelectorAll(".tab-button").length; i++) {
  document
    .querySelectorAll(".tab-button")
    [i].addEventListener("click", function () {
      document
        .querySelectorAll(".tab-button")
        [i + 1].classList.remove("orange");
      document.querySelectorAll(".tab-button")[i].classList.add("orange");
      document.querySelectorAll(".tab-content")[i + 1].classList.remove("show");
      document.querySelectorAll(".tab-content")[i].classList.add("show");
    });
}
