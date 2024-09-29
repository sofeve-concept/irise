function hamburger() {
  var e = document.getElementById("hamburger");
  let t = e.getAttribute("aria-expanded");
  "false" === t
    ? e.setAttribute("aria-expanded", "true")
    : e.setAttribute("aria-expanded", "false");
}
function fermerMenuViaClicBody(e) {
  var t = document.querySelectorAll(".navbar button[aria-expanded]");
  if (!e.target.matches(".navbar button[aria-expanded]"))
    for (i = 0; i < t.length; i++) t[i].setAttribute("aria-expanded", "false");
}
document.body.addEventListener("click", fermerMenuViaClicBody, !1),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelectorAll("section"),
      t = document.querySelectorAll(".navbar ul li");
    window.onscroll = () => {
      document.getElementById("RetourEnHaut").className =
        window.pageYOffset > 100 ? "cVisible" : "cInvisible";
      var a = "";
      e.forEach((e) => {
        const t = e.offsetTop;
        window.pageYOffset >= t - 200 && (a = e.getAttribute("id"));
      }),
        t.forEach((e) => {
          e.classList.remove("active"),
            e.classList.contains(a) && e.classList.add("active");
        });
    };
  }),
  document.addEventListener("DOMContentLoaded", function () {
    var e,
      t = document.getElementsByClassName("courriel");
    for (e = 0; e < t.length; e++) {
      var a = t[e].getAttribute("data-courriel");
        (a = a.replace("point", ".")),
        (a = a.replace("rond", ".")),
        (a = a.replace("chez", "@")),
        t[e].setAttribute("href", "mailto:" + a),
        (t[e].innerHTML = a);
    }
  });
