function menuToggle() {
  const profile = document.querySelector(".header__menu--profile-img ");
  const menu = document.querySelector(".header__menu--profile-options");
  menu.classList.toggle("active");
  profile.classList.toggle("active-img");
}

function carouselToggle(container_id) {
  var containers = document.querySelectorAll(".recommend__carousel--container");
  const container = document.querySelector("#" + container_id);
  containers.forEach(function hide(item) {
    if (item.id != container.id) item.classList.toggle("carousel_hide");
  });
  container.classList.toggle("carousel_extend");
}
