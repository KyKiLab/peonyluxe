const readMoreBtns = document.querySelectorAll(".js-read_more-btn");

readMoreBtns.length
  ? readMoreBtns.forEach((readMoreBtn) => {
      readMoreBtn.addEventListener("click", changeClass);
    })
  : null;

function changeClass(e) {
  const content = e.target
    .closest(".js-read_more-block")
    .querySelector(".js-read_more-content");

  content.classList.toggle("show");

  if (content.classList.contains("show")) {
    e.target.innerHTML = "Read Less";
  } else {
    e.target.innerHTML = "Read More";
  }
}
