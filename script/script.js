document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("menu");
  let hideMenuButton = document.getElementById("menu-toggle-button");
  let initialWidthOfTheMenu = getComputedStyle(menu).width;

  setTimeout(function () {
    menu.style.width = "0";
  }, 2000);

  hideMenuButton.onclick = function () {
    if (parseInt(getComputedStyle(menu).width, 10) > 0) {
      menu.style.width = "0";
    } else {
      menu.style.width = initialWidthOfTheMenu;
    }
  };

  document.getElementById("dashboardLeftTopPolygon").onclick = function () {
    window.location.href = "technologies.html";
  };

  document.getElementById("dashboardRightTopPolygon").onclick = function () {
    window.location.href = "skills.html";
  };

  document.getElementById("callForActionCenterImage").onclick = function () {
    window.open("mailto:info@azoweb.hu?subject=Frontend work");
  };

  document.getElementById("dashboardLeftBottomPolygon").onclick = function () {
    window.location.href = "business.html";
  };

  document.getElementById("dashboardRightBottomPolygon").onclick = function () {
    window.location.href = "contact.html";
  };
});
