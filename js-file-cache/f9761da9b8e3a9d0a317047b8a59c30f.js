/*
Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/
"undefined" !== typeof document.addEventListener && document.addEventListener("DOMContentLoaded", function () {
  "undefined" !== typeof Chart && [].forEach.call(document.querySelectorAll("div.chartjs"), function (a) {
    var e, f;
    e = cc11001100_hook("e", "undefined" !== typeof chartjs_colors ? chartjs_colors : "undefined" !== typeof chartjs_colors_json ? JSON.parse(chartjs_colors_json) : {
      fillColor: cc11001100_hook("fillColor", "rgba(151,187,205,0.5)", "object-key-init"),
      strokeColor: cc11001100_hook("strokeColor", "rgba(151,187,205,0.8)", "object-key-init"),
      highlightFill: cc11001100_hook("highlightFill", "rgba(151,187,205,0.75)", "object-key-init"),
      highlightStroke: cc11001100_hook("highlightStroke", "rgba(151,187,205,1)", "object-key-init"),
      data: cc11001100_hook("data", "#B33131 #B66F2D #B6B330 #71B232 #33B22D #31B272 #2DB5B5 #3172B6 #3232B6 #6E31B2 #B434AF #B53071".split(" "), "object-key-init")
    }, "assign");
    f = cc11001100_hook("f", "undefined" !== typeof chartjs_config ? chartjs_config : "undefined" !== typeof chartjs_config_json ? JSON.parse(chartjs_config_json) : {
      Bar: {
        animation: cc11001100_hook("animation", !1, "object-key-init")
      },
      Doughnut: {
        animateRotate: cc11001100_hook("animateRotate", !1, "object-key-init")
      },
      Line: {
        animation: cc11001100_hook("animation", !1, "object-key-init")
      },
      Pie: {
        animateRotate: cc11001100_hook("animateRotate", !1, "object-key-init")
      },
      PolarArea: {
        animateRotate: cc11001100_hook("animateRotate", !1, "object-key-init")
      }
    }, "assign");
    var d = cc11001100_hook("d", a.getAttribute("data-chart"), "var-init"),
      b = cc11001100_hook("b", JSON.parse(a.getAttribute("data-chart-value")), "var-init");
    if (b && b.length && d) {
      a.innerHTML = cc11001100_hook("a.innerHTML", "", "assign");
      var c = cc11001100_hook("c", document.createElement("canvas"), "var-init");
      c.height = cc11001100_hook("c.height", a.getAttribute("data-chart-height"), "assign");
      a.appendChild(c);
      var g = cc11001100_hook("g", document.createElement("div"), "var-init");
      g.setAttribute("class", "chartjs-legend");
      a.appendChild(g);
      a = cc11001100_hook("a", c.getContext("2d"), "assign");
      c = cc11001100_hook("c", new Chart(a), "assign");
      if ("bar" != d) for (a = cc11001100_hook("a", 0, "assign"); a < b.length; a++) b[a].color = cc11001100_hook("b[a].color", e.data[a], "assign"), b[a].highlight = cc11001100_hook("b[a].highlight", e.data[a], "assign");
      if ("bar" == d || "line" == d) {
        var h = cc11001100_hook("h", {
          datasets: cc11001100_hook("datasets", [{
            label: cc11001100_hook("label", "", "object-key-init"),
            fillColor: cc11001100_hook("fillColor", e.fillColor, "object-key-init"),
            strokeColor: cc11001100_hook("strokeColor", e.strokeColor, "object-key-init"),
            highlightFill: cc11001100_hook("highlightFill", e.highlightFill, "object-key-init"),
            highlightStroke: cc11001100_hook("highlightStroke", e.highlightStroke, "object-key-init"),
            data: cc11001100_hook("data", [], "object-key-init")
          }], "object-key-init"),
          labels: cc11001100_hook("labels", [], "object-key-init")
        }, "var-init");
        for (a = cc11001100_hook("a", 0, "assign"); a < b.length; a++) b[a].value && (h.labels.push(b[a].label), h.datasets[0].data.push(b[a].value));
        g.innerHTML = cc11001100_hook("g.innerHTML", "", "assign");
      }
      "bar" == d ? c.Bar(h, f.Bar) : "line" == d ? c.Line(h, f.Line) : g.innerHTML = cc11001100_hook("g.innerHTML", "polar" == d ? c.PolarArea(b, f.PolarArea).generateLegend() : "pie" == d ? c.Pie(b, f.Pie).generateLegend() : c.Doughnut(b, f.Doughnut).generateLegend(), "assign");
    }
  });
});