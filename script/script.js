document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    document.getElementById("dashboard__left-top-polygon").onclick =
      function () {
        window.location.href = "technologies.html";
      };

    document.getElementById("dashboard__right-top-polygon").onclick =
      function () {
        window.location.href = "skills.html";
      };

    document.getElementById("dashboard__call-for-action-image").onclick =
      function () {
        window.open("mailto:info@azoweb.hu?subject=Frontend work");
      };

    document.getElementById("dashboard__left-bottom-polygon").onclick =
      function () {
        window.location.href = "business.html";
      };

    document.getElementById("dashboard__right-bottom-polygon").onclick =
      function () {
        window.location.href = "contact.html";
      };
  }
});
