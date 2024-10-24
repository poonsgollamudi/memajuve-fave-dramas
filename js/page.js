import { cards } from "./card.js";
import { returnList } from "./dramaList.js";
returnList("english");
cards("english");

let divsCard = document.getElementsByClassName("nav-link");

for (let m = 0; m < divsCard.length; m++) {
  document
    .getElementById(divsCard[m].innerHTML.toLowerCase())
    .addEventListener("click", function (e) {
      var elems = document.querySelectorAll(".active");
      [].forEach.call(elems, function (el) {
        el.classList.remove("active");
      });
      //console.log(this.className); // logs the className of my_element
      this.classList.add("active");
      //console.log(divsCard[m].innerHTML.toLowerCase());
      returnList(divsCard[m].innerHTML.toLowerCase());
      cards(divsCard[m].innerHTML.toLowerCase());
    });
}
