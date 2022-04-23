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
    console.log("Left top.");
  };

  document.getElementById("dashboardRightTopPolygon").onclick = function () {
    console.log("Right top.");
  };
  document.getElementById("dashboardLeftBottomPolygon").onclick = function () {
    console.log("Left bottom.");
  };
  document.getElementById("dashboardRightBottomPolygon").onclick = function () {
    console.log("Right bottom.");
  };
});
