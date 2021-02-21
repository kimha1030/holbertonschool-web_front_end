#!/usr/bin/node

function createElement(data) {
  let newParagraph = document.createElement("p");
  let pText = document.createTextNode(data);
  newParagraph.appendChild(pText);
  document.querySelector("body").appendChild(newParagraph);
}

let queryWikipedia = (callback) => {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*",
    true
  );
  xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      callback(JSON.parse(xhr.responseText).query.pages[21721040].extract);
    }
  };
  xhr.send();
};

queryWikipedia(createElement);
