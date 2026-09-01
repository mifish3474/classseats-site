(function () {
  document.addEventListener("click", function (event) {
    const menu = document.querySelector(".navMenu");
    if (!menu) return;

    if (menu.open && !menu.contains(event.target)) {
      menu.removeAttribute("open");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("y");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  });
})();
