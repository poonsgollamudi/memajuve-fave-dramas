//import * as DotenvModule from "../node_modules/dotenv/lib/main.js"

import myDramas from "./dramas.js";
//import apiKey from "../index.js";

//var divs_len = document.getElementsByClassName("empty").length;

const apiKey = "82b6f576";

export async function cards(type) {
  var divsCard = document.getElementsByClassName("empty");
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

  //console.log(divsCard.length > 0);
  if (divsCard.length > 0) {
    for (let i = 0; i < x.length; i++) {
      let apiUrl = `https://www.omdbapi.com/?i=${x[i].id}&apikey=${apiKey}`;
      const response = await fetch(apiUrl);
      const myJson = await response.json(); //extract JSON from the http response

      // console.log(myJson);

      var card = `
    <div class="card" id = ${type}>
      <img
        src=${myJson.Poster}
        class="card-img-top"
        height="400px"
        alt="Sunset Over the Sea"
      />
      <div class="card-body text-center">
        <h5 class="card-title">${myJson.Title}</h5>
        <a
          href=https://www.imdb.com/title/${x[i].id}
          target="_blank"
          class="btn btn-primary"
        >
          Learn More
        </a>
        </div>
    </div>
  `;
      var doc = document.createElement("div");
      doc.id = "id_" + i;
      doc.innerHTML = card;

      //console.log(doc);
      divsCard[i].appendChild(doc);
    }
  }
  return divsCard;
}
