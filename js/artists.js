const portrait = document.querySelectorAll(".portrait");
const infoWrap = document.querySelectorAll(".info_wrap");
const infoPrev = document.querySelectorAll(".prev");
for (let i = 0; i < portrait.length; i++) {
  portrait[i].addEventListener("click", function () {
    infoWrap[i].style.display = "flex";
  });
  portrait[i].addEventListener("mouseover", function () {
    for (let i of portrait) {
      i.classList.remove("active");
    }
    this.classList.add("active");
  });
  infoPrev[i].addEventListener("click", function () {
    this.parentNode.parentNode.style.display = "none";
  });
}
