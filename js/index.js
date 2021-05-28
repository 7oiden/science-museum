const slider = document.querySelector(".slider");
const leftArrow = document.querySelector("#arrow-left");
const rigthArrow = document.querySelector("#arrow-right");
const indicatorParents = document.querySelector(".preview");


let sectionIndex = 0;

document
  .querySelectorAll(".preview-image")
  .forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      sectionIndex = index;
      document.querySelector(".selected").classList.remove("selected");
      indicator.classList.add("selected");
      slider.style.transform = "translate(" + sectionIndex * -33.33 + "%)";
    });
  });

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  document.querySelector(".selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected")
  slider.style.transform = "translate(" + sectionIndex * -33.33 + "%)";
});

rigthArrow.addEventListener("click", function () {
    console.log("hiy");
  sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
  document.querySelector(".selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -33.33 + "%)";
});
