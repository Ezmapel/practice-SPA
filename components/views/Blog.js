import { capitalize } from "lodash";

// export default st => `<section id="blog">
// ${st.posts
//   .map(post => {
//     return `
//       <div class="blog-post">
//         <h4>${capitalize(post.title)} by User ${post.userId}</h4>
//         <p>${capitalize(post.body)}</p>
//       </div>`;
//   })
//   .join("")}
// </section>`;

// Had to remove the curly braces around formatBlogPost(post) to make it work...or explicitly return it

export default st => `<section id="blog">
${st.posts.map(post => formatBlogPost(post)).join("")}
</section>`;

function formatBlogPost(post) {
  return `
  <div class="blog-post">
    <h4>${capitalize(post.title)} by User ${post.userId}</h4>
    <p>${capitalize(post.body)}</p>
  </div>`;
}

// SAME THING AS ABOVE, JUST ARROW NOTATION
// const formatBlogPost = post => `
//   <div class="blog-post">
//     <h4>${capitalize(post.title)} by User ${post.userId}</h4>
//     <p>${capitalize(post.body)}</p>
//   </div>`;
