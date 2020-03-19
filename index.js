import * as components from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

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

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    console.log("response", response.data);
    response.data.forEach(post => {
      state.Blog.posts.push(post);
    });
    const params = router.lastRouteResolved().params;
    console.log("Params", params);
    if (params) {
      render(state[params.page]);
    }
  })
  .catch(err => console.log(err));

function render(st) {
  console.log("This is the current state", st);
  document.querySelector("#root").innerHTML = `
  ${components.Header(st)}
  ${components.Nav(state.Links)}
  ${components.Main(st)}
  ${components.Footer()}
`;

  router.updatePageLinks();

  // addNavEventListeners();
}

render(state.Home);

// function addNavEventListeners() {
//   document.querySelectorAll("nav a").forEach(navLink =>
//     navLink.addEventListener("click", event => {
//       event.preventDefault(), render(state[event.target.textContent]);
//     })
//   );
// }

// function addPicOnFormSubmit() {
//   document.querySelector("form").addEventListener("submit"),
//     event => event.preventDefault();
//   let inputList = event.target.elements;
//   let picObject = {
//     url: inputList[0].value,
//     title: inputList[1].value
//   };
//   state.Gallery.pictures.push(picObject);
// }

// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
