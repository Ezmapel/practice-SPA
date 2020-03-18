export default st => `<section id="gallery">
  ${st.pictures
    .map(pictures => `<img src=${pictures.url} alt=${pictures.title}>`)
    .join("")}
</section>`;
