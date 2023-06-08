$navMenuItems = document.querySelectorAll(".navbar-link");

$navBarToggle = document.querySelector(".navbar-toggle");
$navBarMenu = document.querySelector(".navbar-menu");

const changeActive = () => {
  let $active = document.querySelector(".active");
  $active.classList.remove("active");
  event.target.classList.add("active");
};

document.addEventListener("DOMContentLoaded", function () {
  let currentURL = window.location.href;

  $navMenuItems.forEach(function (link) {
    if (link.href === currentURL) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

$navBarToggle.addEventListener("click", () => {
  $navBarMenu.classList.toggle("navbar-menu-visible");
});

$navMenuItems.forEach((e) => {
  e.addEventListener("click", () => {
    $navBarMenu.classList.toggle("navbar-menu-visible");
    changeActive();
  });
});

/*
Detectar quien tiene la clase active

quitar la clase active y darsela al disparador


*/
