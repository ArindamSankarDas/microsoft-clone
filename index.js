const nav = document.getElementsByClassName("navbar");
const toggler = document.getElementById("toggler");

toggler.addEventListener("click", () => {
  let [classNames] = nav;
  classNames.classList.toggle("-left-full");
});
