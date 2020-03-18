import * as components from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${components.Header(st)}
  ${components.Nav(state.Links)}
  ${components.Main(st)}
  ${components.Footer()}
`;

  router.updatePageLinks();

  // addNavEventListeners();
}

// render(state.Home);

// function addNavEventListeners() {
//   document.querySelectorAll("nav a").forEach(navLink =>
//     navLink.addEventListener("click", event => {
//       event.preventDefault(), render(state[event.target.textContent]);
//     })
//   );
// }

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
