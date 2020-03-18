import * as components from "./components";

import * as state from "./store";

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${components.Header(st)}
  ${components.Nav(state.Links)}
  ${components.Main(st)}
  ${components.Footer()}
`;
  addNavEventListeners();
}

render(state.Home);

function addNavEventListeners() {
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault(), render(state[event.target.textContent]);
    })
  );
}

function addPicOnFormSubmit() {
  document.querySelector("form").addEventListener("submit"),
    event => event.preventDefault();
  let inputList = event.target.elements;
  let picObject = {
    url: inputList[0].value,
    title: inputList[1].value
  };
  state.Gallery.pictures.push(picObject);
}

// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
