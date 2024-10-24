//import jsonData from "./cartoons" with { type: "json" };
import myDramas from "./dramas.js";

var doc2 = document.getElementsByClassName("dramalist");

var repeatCards = `
<div class="row pt-5">
  <div class="py-4">
    <!-- Single item -->
    <div class="container">
      <div class="row">
        <div class="col-lg-4 d-md-block col-md-4">
          <div class="empty"></div>
        </div>

        <div class="col-lg-4 d-md-block col-md-4">
          <div class="empty"></div>
        </div>

        <div class="col-lg-4 d-md-block col-md-4">
          <div class="empty"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

export async function returnList(type) {
  //var ele = document.getElementById(type);
  //ele.classList.add("active");
  const myNode = document.getElementById("dramalist");

  myNode.innerHTML = "";

  let x =
    type === "english"
      ? myDramas.english
      : "" || type === "movies"
      ? myDramas.movies
      : "" || type === "korean"
      ? myDramas.korean
      : "" || type === "chinese"
      ? myDramas.chinese
      : "" || type === "japanese"
      ? myDramas.japanese
      : "";
  for (let i = 0; i < x.length / 3; i++) {
    var z = document.createElement("div");
    z.innerHTML = repeatCards;
    doc2.item(0).appendChild(z);
  }
  return doc2;
}
