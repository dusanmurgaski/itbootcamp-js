function generateImage(src) {
  let jpgs = document.createElement("img");
  jpgs.src = src;
  jpgs.alt = "The image could not be loaded";
  return jpgs;
}
export default generateImage;
