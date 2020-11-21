var teamModuleInit = false;

function lateralEye() {
  (old_x = 0),
    (old_y = 0),
    (teamSize = $(".team-grid li").length),
    (imgSize = $(".team-grid li figure").width()),
    (dir = []),
    (keys = new Array()),
    (keys.up = 5),
    (keys.down = 1),
    (keys.right = 7),
    (keys.left = 3),
    (keys["enter,space"] = 0),
    (keys.a = 10),
    (keys.s = 3),
    (keys.d = 4),
    (keys.f = 5),
    (keys.g = 6),
    (keys.h = 7),
    (keys.j = 8),
    (keys.k = 9),
    (keys.l = 2),
    (keys[";"] = 2),
    (img_base = "http://s3.amazonaws.com/lateralmedia1/"),
    $(document).ready(function () {
      (resetDirs = function () {
        dir = [
          0,
          8 * -imgSize,
          9 * -imgSize,
          10 * -imgSize,
          6 * -imgSize,
          5 * -imgSize,
          4 * -imgSize,
          3 * -imgSize,
          7 * -imgSize,
          8 * -imgSize,
          0,
          1 * -imgSize,
        ];
      }),
        resetDirs(),
        $("#wait").hide(),
        $("#cont").show();
      for (key in keys)
        eval(
          "$(window).jkey('" +
            key +
            "', true, function(){changeAll(" +
            keys[key] +
            ");})"
        );
      $("#allfun").click(function () {
        changeAll(10);
      }),
        $("#down").click(function () {
          changeAll(1);
        }),
        $("#rup").click(function () {
          forFun();
        }),
        (reverseActions = function () {
          return (
            changeAll(1),
            (dir = [
              0,
              5 * -imgSize,
              4 * -imgSize,
              3 * -imgSize,
              7 * -imgSize,
              8 * -imgSize,
              9 * -imgSize,
              10 * -imgSize,
              6 * -imgSize,
              5 * -imgSize,
              0,
              1 * -imgSize,
            ]),
            $("#reverse").hide(),
            $("#straighten,#rev").show(),
            !1
          );
        }),
        (straightenActions = function () {
          return (
            resetDirs(),
            $("#rev,#straighten").hide(),
            $("#reverse").show(),
            changeAll(0),
            !1
          );
        }),
        $("#reverse").click(reverseActions),
        $("#straighten").click(straightenActions),
        (changeOne = function (e, i) {
          e.attr(
            "style",
            "background-position:" +
              dir[i] +
              "px " +
              (teamSize - e.parents("li").index()) * imgSize +
              "px;"
          );
        }),
        (changeAll = function (e) {
          return (
            $(".eye").each(function () {
              changeOne($(this), e);
            }),
            !1
          );
        }),
        $(".eye").mouseover(function () {
          changeOne($(this), 11);
        }),
        (setupMouse = function () {
          $(document).mousemove(function (e) {
            ($("body").is(".about-us-body") || $("body").is(".home-body")) &&
              ((m_x = e.pageX),
              (m_y = e.pageY),
              (r_x = m_x - old_x),
              (r_y = m_y - old_y),
              (dist = Math.sqrt(r_x * r_x + r_y * r_y)),
              dist > 15 &&
                ((old_x = m_x),
                (old_y = m_y),
                $(".eye").each(function () {
                  redraw($(this), m_x, m_y);
                })));
          });
        }),
        (redraw = function (e, i, n) {
          (pos = e.offset()),
            (half_width = e.width() / 2),
            (half_height = e.height() / 2),
            (i_x = pos.left + half_width),
            (i_y = pos.top + half_height),
            (rel_x = i - i_x),
            (rel_y = n - i_y),
            (dist = Math.sqrt(rel_x * rel_x + rel_y * rel_y)),
            dist > half_width || dist > half_height
              ? ((angle = 57.3248 * Math.acos(-rel_y / dist)),
                (sign = rel_x > 0 ? 1 : -1),
                (angle *= sign),
                (p = Math.round(angle / 45) + 5),
                changeOne(e, p))
              : changeOne(e, 11);
        }),
        setupMouse(),
        $(".eye").click(function () {
          changeAll(1), changeOne($(this), 10);
        });
    });
}

function randomFromTo(e, i) {
  return Math.floor(Math.random() * (i - e + 1) + e);
}

function moveRandom(e) {
  var i = $(".team-grid").offset(),
    n = $(".team-grid").height(),
    t = $(".team-grid").width(),
    r = parseInt($(".team-grid").css("padding-top").replace("px", "")),
    o = e.height(),
    a = e.width();
  (maxY = i.top + n - o - r),
    (maxX = i.left + t - a - r),
    (minY = -i.top),
    (minX = -i.left),
    (newY = randomFromTo(minY, maxY)),
    (newX = randomFromTo(minX, maxX)),
    e.animate(
      {
        top: newY,
        left: newX,
      },
      0,
      function () {}
    );
}
function placeGuidelinesOnImage() {
  $(".guidelines .guideline").each(function (a) {
    var b = $(this),
      c = b.find(".item"),
      d = b.find(".line"),
      e = b.find(".point"),
      f = 35,
      g = 25;
    d.addClass("active"),
      0 == a
        ? (e
            .css("left", d.offset().left - d.width() - e.width() - 1)
            .css("top", parseInt(d.css("top")) - e.width() / 2 - 1),
          c
            .css("left", d.offset().left - c.width() - d.width() - g)
            .css(
              "top",
              parseInt(d.css("top")) - c.height() / 2 - e.width() / 2
            ))
        : 1 == a
        ? (e
            .css(
              "left",
              d.offset().left + d.width() / Math.sqrt(2) - e.width() / 2 + 2
            )
            .css(
              "top",
              parseInt(d.css("top")) - d.width() / Math.sqrt(2) - e.width()
            ),
          c
            .css("left", d.offset().left + d.width() / Math.sqrt(2) + g)
            .css(
              "top",
              parseInt(d.css("top")) -
                d.width() / Math.sqrt(2) -
                c.height() / 2 -
                1
            ))
        : 2 == a
        ? (e
            .css(
              "left",
              d.offset().left + d.width() / Math.sqrt(2) - e.width() / 2 + 1
            )
            .css(
              "top",
              parseInt(d.css("top")) +
                d.width() / Math.sqrt(2) -
                e.width() / 2 +
                1
            ),
          c
            .css("left", d.offset().left + d.width() / Math.sqrt(2) + g)
            .css(
              "top",
              parseInt(d.css("top")) +
                d.width() / Math.sqrt(2) -
                c.height() / 2 +
                2
            ))
        : 3 == a
        ? (e
            .css("left", d.offset().left - 3)
            .css("top", parseInt(d.css("top")) - f),
          c
            .css("left", d.offset().left - c.width() / 2)
            .css(
              "top",
              parseInt(d.css("top")) - d.width() - g - c.height() / 2
            ))
        : 4 == a
        ? (e
            .css("left", d.offset().left - 3)
            .css("top", parseInt(d.css("top")) + f - e.width() - 2),
          c
            .css("left", d.offset().left - c.width() / 2)
            .css(
              "top",
              parseInt(d.css("top")) + d.width() + g - c.height() / 2
            ))
        : 5 == a
        ? (e
            .css("left", d.offset().left + d.width())
            .css("top", parseInt(d.css("top")) - e.width() / 2),
          c
            .css("left", d.offset().left + d.width() + g)
            .css(
              "top",
              parseInt(d.css("top")) - c.height() / 2 - e.width() / 2
            ))
        : 6 == a
        ? (e
            .css(
              "left",
              d.offset().left + d.width() / Math.sqrt(2) - e.width() / 2 + 2
            )
            .css(
              "top",
              parseInt(d.css("top")) - d.width() / Math.sqrt(2) - e.width()
            ),
          c
            .css("left", d.offset().left + d.width() / Math.sqrt(2) + g)
            .css(
              "top",
              parseInt(d.css("top")) -
                d.width() / Math.sqrt(2) -
                c.height() / 2 -
                1
            ))
        : 7 == a
        ? (e
            .css(
              "left",
              d.offset().left + d.width() / Math.sqrt(2) - e.width() / 2 + 1
            )
            .css(
              "top",
              parseInt(d.css("top")) +
                d.width() / Math.sqrt(2) -
                e.width() / 2 +
                1
            ),
          c
            .css("left", d.offset().left + d.width() / Math.sqrt(2) + g)
            .css(
              "top",
              parseInt(d.css("top")) +
                d.width() / Math.sqrt(2) -
                c.height() / 2 +
                2
            ))
        : 8 == a &&
          (e
            .css(
              "left",
              d.offset().left + d.width() / Math.sqrt(2) - e.width() / 2 + 2
            )
            .css(
              "top",
              parseInt(d.css("top")) - d.width() / Math.sqrt(2) - e.width()
            ),
          c
            .css("left", d.offset().left + d.width() / Math.sqrt(2) + g)
            .css(
              "top",
              parseInt(d.css("top")) -
                d.width() / Math.sqrt(2) -
                c.height() / 2 -
                1
            )),
      setTimeout(function () {
        e.show(),
          c.addClass("visible"),
          0 == a
            ? c.addClass("bounceInLeft")
            : 1 == a
            ? c.addClass("bounceInDown")
            : 2 == a
            ? c.addClass("bounceInUp")
            : 3 == a
            ? c.addClass("bounceIn")
            : 4 == a
            ? c.addClass("bounceIn")
            : 5 == a
            ? c.addClass("bounceInRight")
            : 6 == a
            ? c.addClass("bounceInDown")
            : 7 == a
            ? c.addClass("bounceInUp")
            : 8 == a && c.addClass("bounceIn");
      }, 650);
  });
}

function setHeightOnHomePortfolio() {
  $("body").is(".home-body") &&
    ($(".row.no-gutter.overflow.last").height("auto"),
    $(".thumbnail .inner-thumbnail .inner-img").each(function () {
      var a = $(this).closest(".thumbnail").width(),
        b = a;
      $(this).is(".half") && (b /= 2),
        $(this)
          .width(a + 2)
          .height(b + 2);
    }),
    $(".row.no-gutter.overflow.last").height(
      $(window).width() > 767
        ? $(".row.no-gutter.overflow.last").height() - 10
        : "auto"
    ));
}

function initPoster() {
  if ($("#poster").length) {
    if (
      ($("#poster").empty(),
      $(".spinner-gif").parent().height($(window).height()),
      $(window).width() < 992 && $(window).width() > 767)
    )
      var a = 2,
        b = 22,
        c = 2200;
    else if ($(window).width() <= 767)
      var a = 3,
        b = 35,
        c = 2200;
    else
      var a = 1,
        b = 16,
        c = 1200;
    if (
      $(window).height() > 700 &&
      $(window).width() < 1200 &&
      $(window).width() > 780
    )
      var a = 1.5;
    (viewer = OpenSeadragon({
      id: "poster",
      prefixUrl: "/assets/img/poster_v2_files/images/",
      tileSources: "/assets/img/poster_v2.xml",
      overlays: [
        {
          id: "left-overlay",
          x: 0.607,
          y: 0.105,
          width: 0.004,
          height: 0.004,
          className: "highlight-overlay",
        },
        {
          id: "right-overlay",
          x: 0.611,
          y: 0.1025,
          width: 0.004,
          height: 0.004,
          className: "highlight-overlay",
        },
      ],
      defaultZoomLevel: a,
      minZoomLevel: a,
      maxZoomLevel: b,
      autoResize: !0,
      visibilityRatio: 1,
      zoomInButton: "zoom-in",
      zoomOutButton: "zoom-out",
      homeButton: "reset",
      showNavigator: !1,
      constrainDuringPan: !0,
      animationTime: 0.8,
      zoomPerClick: 1.5,
    })),
      $(window).width() > 767
        ? $(".poster-overlay img").attr("src", "/assets/img/poster-bottom.png")
        : $(".poster-overlay img").attr(
            "src",
            "/assets/img/poster-bottom-mobile.png"
          ),
      setTimeout(function () {
        $(".spinner-gif").addClass("hide"),
          $("#poster, .buttons, .poster-overlay").fadeIn("slow"),
          $(window).width() < 767
            ? $(".buttons.bottom.middle").removeClass("hide")
            : $(".buttons.bottom.middle").addClass("hide");
      }, c),
      viewer.addHandler("canvas-drag", function () {
        $("#poster").addClass("drag");
      }),
      viewer.addHandler("canvas-drag-end", function () {
        $("#poster").removeClass("drag");
      }),
      viewer.addHandler("tile-loaded", function () {
        isPopupInit ||
          ((isPopupInit = !0),
          $(".highlight-overlay").on("click touchstart", function () {
            $.magnificPopup.open({
              modal: !0,
              items: {
                src: "#share-overlay",
              },
              type: "inline",
              callbacks: {
                open: function () {
                  $("#share-overlay").height() > $(window).height() - 20 &&
                    ($("#share-overlay")
                      .height($(window).height() - 20)
                      .css("overflow", "auto"),
                    $(".mfp-container").height($(window).height())),
                    $(".overlay-section:first-child").removeClass("hide"),
                    $(".overlay-section:last-child").addClass("hide"),
                    $(".btn-popup").on("click", function () {
                      var a = 575,
                        b = 400,
                        c = ($("html").width() - a) / 2,
                        d = ($("html").height() - b) / 2,
                        e = this.href,
                        f =
                          "status=1,width=" +
                          a +
                          ",height=" +
                          b +
                          ",top=" +
                          d +
                          ",left=" +
                          c;
                      return window.open(e, "twitter", f), !1;
                    });
                  var a = $(".btn.btn-facebook").attr("href");
                  (a = a.replace("[URL]", window.location.href)),
                    $(".btn.btn-facebook").attr("href", a);
                },
              },
            });
          }));
      }),
      $(".next-form").on("click", function (a) {
        a.preventDefault(),
          (_this = $(this)),
          (_thisButton = $(this)),
          (_thisForm = _this.closest("form")),
          (_thisInput = _thisForm.find('input[type="text"]:visible')),
          "" != _thisInput.val() && IsEmail(_thisInput.val())
            ? (_this
                .closest(".form-wrapper")
                .hide()
                .siblings(".form-wrapper")
                .show()
                .end(),
              _thisForm
                .next("div")
                .find(".error-message")
                .addClass("invisible"))
            : (_thisForm
                .next("div")
                .find(".error-message")
                .removeClass("invisible"),
              _thisInput.addClass("has-error")),
          _thisInput.keypress(function () {
            _thisInput.removeClass("has-error"),
              _thisForm.next().find(".error-message").addClass("invisible");
          });
      }),
      (_thisInput1 = $(".overlay-content form").find(
        ".t-shirt-size-newsletter"
      )),
      _thisInput1.keypress(function (a) {
        var b = a.keyCode ? a.keyCode : a.which;
        "13" == b && (a.preventDefault(), $(".submit-form").trigger("click"));
      }),
      $(".submit-form").on("click", function (a) {
        a.preventDefault(),
          (_this = $(this)),
          (_thisButton = $(this)),
          (_thisForm = _this.closest("form")),
          (_thisInput1 = _thisForm.find(".t-shirt-size-newsletter")),
          (_thisInput2 = _thisForm.find(".mailing-address-newsletter")),
          "" == _thisInput1.val() || "" == _thisInput2.val()
            ? (_thisForm
                .next("div")
                .find(".error-message-empty")
                .removeClass("invisible"),
              "" == _thisInput1.val() && _thisInput1.addClass("has-error"),
              "" == _thisInput2.val() && _thisInput2.addClass("has-error"))
            : (_thisButton
                .width(_thisButton.width())
                .height(_thisButton.height())
                .html('<span class="icon icon-spinner fa-spin"></span>'),
              $.ajax({
                type: "GET",
                url: _thisForm.attr("action"),
                data: _thisForm.serialize(),
                dataType: "jsonp",
                jsonp: "c",
                contentType: "application/json; charset=utf-8",
                error: function () {},
                success: function () {
                  $(".overlay-section:first-child").addClass("hide"),
                    $(".overlay-section:last-child").removeClass("hide");
                },
              })),
          _thisInput1.keypress(function () {
            _thisInput1.removeClass("has-error"),
              "" != _thisInput1.val() &&
                "" != _thisInput2.val() &&
                _thisForm
                  .next()
                  .find(".error-message-empty")
                  .addClass("invisible");
          }),
          _thisInput2.keypress(function () {
            _thisInput2.removeClass("has-error"),
              "" != _thisInput1.val() &&
                "" != _thisInput2.val() &&
                _thisForm
                  .next()
                  .find(".error-message-empty")
                  .addClass("invisible");
          });
      });
  }
}

function setPosterHeight() {
  $("#poster").length && $("#poster").height($(window).height());
}
function showBottomArrow() {
  var a = $(".bottom-arrow");
  a.is(".inline")
    ? a.fadeIn()
    : (a.parent().height("auto"),
      a.parent().outerHeight() > $(window).height() &&
        a.parent().outerHeight($(window).height()),
      a.prev().is(".city-info-wrapper") || a.fadeIn()),
    $(".main-content > div:first-child").outerHeight() > $(window).height() &&
      !$(".main-content > div:first-child").is(".container-gray") &&
      $(".main-content > div:first-child").outerHeight($(window).height()),
    $(".main-content .animate-image").length &&
      $(".main-content > div:first-child").outerHeight($(window).height());
}
function setHeightOnThumbnails() {
  $(".row.smaller").find("> div .thumbnail img").height("auto"),
    $(window).width() > 767
      ? $(".row.smaller").each(function () {
          var a = 0;
          $(this)
            .find("> div .thumbnail")
            .each(function () {
              $(this).height() > a && (a = $(this).height());
            }),
            $(this).find("> div .thumbnail img").height(a);
        })
      : $(".row.smaller").find("> div .thumbnail img").height("auto");
}
function initBoxAnimation() {
  $(".inner-thumbnail.animate").each(function () {
    var a = $(this);
    a.is(":in-viewport") &&
      setTimeout(function () {
        a.addClass("visible");
      }, 600);
  });
}
function setHeightOnProductsBox() {
  $(".box-wrapper").each(function () {
    var a = 0;
    $(this).find(".box").height("auto"),
      $(this)
        .find(".box")
        .each(function () {
          $(this).height() > a && (a = $(this).height());
        }),
      $(this)
        .find(".box")
        .height($(window).width() > 767 ? a : "auto");
  });
}

function initTeamModule() {
  $(".team-grid.the-team li").each(function () {
    moveRandom($(this));
  });

  var a = $(".team-grid.the-team li.visible-member").length;
  var b = 300,
    c = 100;

  $.each($(".team-grid.the-team li"), function (d, e) {
    setTimeout(function () {
      $(e)
        .find("figure")
        .attr("style", "background-position: 0px " + 60 * (a - d) + "px;"),
        $(e).addClass("visible-member");
    }, b + d * c);
  }),
    $(".eye").mouseout(function () {
      $(".eye").next(".tooltip-title:visible").hide();
    }),
    $(".eye").mouseover(function () {
      $(this).next(".tooltip-title").show();
    }),
    lateralEye(),
    (teamModuleInit = !0);
}
!(function (e) {
  e.fn.jkey = function (i, n, t) {
    function r(e) {
      var i,
        n = {};
      for (i in e) e.hasOwnProperty(i) && (n[e[i]] = i);
      return n;
    }
    var o = {
        a: 65,
        b: 66,
        c: 67,
        d: 68,
        e: 69,
        f: 70,
        g: 71,
        h: 72,
        i: 73,
        j: 74,
        k: 75,
        l: 76,
        m: 77,
        n: 78,
        o: 79,
        p: 80,
        q: 81,
        r: 82,
        s: 83,
        t: 84,
        u: 85,
        v: 86,
        w: 87,
        x: 88,
        y: 89,
        z: 90,
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57,
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123,
        shift: 16,
        ctrl: 17,
        control: 17,
        alt: 18,
        option: 18,
        opt: 18,
        cmd: 224,
        command: 224,
        fn: 255,
        function: 255,
        backspace: 8,
        osxdelete: 8,
        enter: 13,
        return: 13,
        space: 32,
        spacebar: 32,
        esc: 27,
        escape: 27,
        tab: 9,
        capslock: 20,
        capslk: 20,
        super: 91,
        windows: 91,
        insert: 45,
        delete: 46,
        home: 36,
        end: 35,
        pgup: 33,
        pageup: 33,
        pgdn: 34,
        pagedown: 34,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        "`": 96,
        "~": 96,
        "-": 45,
        _: 45,
        "=": 187,
        "+": 187,
        "[": 219,
        "{": 219,
        "]": 221,
        "}": 221,
        "\\": 220,
        "|": 220,
        ";": 59,
        ":": 59,
        "'": 222,
        '"': 222,
        ",": 188,
        "<": 188,
        ".": 190,
        ">": 190,
        "/": 191,
        "?": 191,
      },
      a = "",
      s = "";
    if (
      ("function" == typeof n && "undefined" == typeof t && ((t = n), (n = !1)),
      i.toString().indexOf(",") > -1)
    )
      var c = i.match(/[a-zA-Z0-9]+/gi);
    else var c = [i];
    for (a in c)
      if (c.hasOwnProperty(a))
        if (c[a].toString().indexOf("+") > -1) {
          var f = [],
            l = c[a].split("+");
          for (s in l) f[s] = o[l[s]];
          c[a] = f;
        } else c[a] = o[c[a]];
    var h = r(o);
    return this.each(function () {
      $this = e(this);
      var i = [];
      $this
        .bind("keydown", function (r) {
          if (((i[r.keyCode] = r.keyCode), e.inArray(r.keyCode, c) > -1))
            "function" == typeof t &&
              (t.call(this, h[r.keyCode]), n === !1 && r.preventDefault());
          else
            for (a in c)
              if (e.inArray(r.keyCode, c[a]) > -1) {
                var o = "unchecked";
                for (s in c[a])
                  0 != o && (o = e.inArray(c[a][s], i) > -1 ? !0 : !1);
                if (o === !0 && "function" == typeof t) {
                  var f = "";
                  for (var l in i) "" != i[l] && (f += h[i[l]] + "+");
                  (f = f.substring(0, f.length - 1)),
                    t.call(this, f),
                    n === !1 && r.preventDefault();
                }
              }
        })
        .bind("keyup", function (e) {
          i[e.keyCode] = "";
        });
    });
  };
})(jQuery);
var navWrapper = $(".nav-tabs-wrapper");
$(document).ready(function () {
  if (
    ($("footer").load("/navigation/footer.html", function () {
      $(".office-title").length &&
        $(
          '<span>Weather data provided by Meteoblue <a href="https://www.meteoblue.com/" target="_blank"><img src="/assets/img/meteoblue.png" width="14" /></a>.</span><br /><br />'
        ).insertBefore($("footer .copyright span:last")),
        $(".submit-form").on("click", function (a) {
          a.preventDefault(),
            (_this = $(this)),
            (_thisButton = $(this)),
            (_thisForm = _this.closest("form")),
            (_thisInput = _thisForm.find('input[type="text"]')),
            $("footer .inner-footer .alert").addClass("hide"),
            "" != _thisInput.val() && IsEmail(_thisInput.val())
              ? (_thisButton
                  .width(_thisButton.width())
                  .height(_thisButton.height())
                  .html('<span class="icon icon-spinner fa-spin"></span>'),
                $.ajax({
                  type: "GET",
                  url: _thisForm.attr("action"),
                  data: _thisForm.serialize(),
                  dataType: "jsonp",
                  jsonp: "c",
                  contentType: "application/json; charset=utf-8",
                  error: function () {
                    $("footer .inner-footer .alert-danger").removeClass("hide");
                  },
                  success: function (a) {
                    if ("success" == a.result) var b = "alert-success";
                    else if ("error" == a.result) var b = "alert-warning";
                    $("footer .inner-footer .message-success")
                      .removeClass("hide")
                      .addClass(b)
                      .html(a.msg),
                      _thisButton.html("GO"),
                      _thisInput.val("").blur();
                  },
                }))
              : (_thisForm.next(".error-message").removeClass("hide"),
                _thisInput.addClass("has-error"),
                $("footer .inner-footer .light").addClass("has-error")),
            _thisInput.keypress(function () {
              _thisForm.next(".error-message").addClass("hide"),
                _thisInput.removeClass("has-error"),
                $("footer .inner-footer .light").removeClass("has-error");
            });
        }),
        $(".social.social-email").attr(
          "href",
          $(".social.social-email").attr("data-href")
        );
    }),
    ($("body").is(".about-us-body") ||
      ($("body").is(".home-body") && $(".team-grid").is(":in-viewport"))) &&
      initTeamModule(),
    setHeightOnHomePortfolio(),
    $("#main-nav").load("/navigation/main-nav.html", function () {
      $("#inner-nav").length
        ? $("#inner-nav").load("/navigation/inner-nav.html", function () {
            initBurgerMenu();
          })
        : initBurgerMenu();
    }),
    $("body").is(".tilt-body") && $(window).width() > 768)
  ) {
    var a = $(window).width() > 2222 ? 0 : 2;
    $(".js-tilt").tilt({
      maxTilt: a,
    });
  }
  if (
    (initPoster(),
    $(".thumbnail.absolute")
      .mouseenter(function () {
        $(this).find(".inner-thumbnail-overlay").addClass("hover");
      })
      .mouseleave(function () {
        $(this).find(".inner-thumbnail-overlay").removeClass("hover");
      }),
    "function" == typeof $().slick &&
      $(".single-carousel").slick({
        speed: 500,
        dots: !0,
        cssEase: "linear",
        prevArrow:
          '<span class="icon icon-arrow-left-light slick-prev"></span>',
        nextArrow:
          '<span class="icon icon-arrow-right-light slick-next"></span>',
      }),
    showBottomArrow(),
    $(".main-content > div:first-child").addClass("visible"),
    $(".bottom-arrow").on("click", function () {
      var a = $(this).closest(".container, .container-full").next();
      if ($("#inner-nav").length && $(window).width() < 768)
        var b = $("#inner-nav").height();
      else var b = 0;
      $("body, html").animate(
        {
          scrollTop: a.offset().top - b,
        },
        600
      );
    }),
    $(".office-title").length)
  ) {
    var b = $(".office-title").attr("data-title");
    switch (b) {
      case "New York":
        (title = "New York"),
          (lat = 40.71),
          (lon = -74.01),
          (timeZone = "America/New_York");
        break;
      case "San Francisco":
        (title = "San Francisco"),
          (lat = 37.77),
          (lon = -122.42),
          (timeZone = "America/Los_Angeles");
        break;
      case "London":
        (title = "London"),
          (lat = 51.51),
          (lon = -0.13),
          (timeZone = "Europe/London");
        break;
      case "Cluj":
        (title = "Cluj"),
          (lat = 46.77),
          (lon = 23.6),
          (timeZone = "Europe/Bucharest");
        break;
      case "Mures":
        (title = "Mures"),
          (lat = 46.54),
          (lon = 24.56),
          (timeZone = "Europe/Bucharest");
        break;
      case "Oradea":
        (title = "Oradea"),
          (lat = 47.05),
          (lon = 21.92),
          (timeZone = "Europe/Bucharest");
    }
    setTime(timeZone),
      setInterval(function () {
        setTime(timeZone);
      }, 3e3);
    var c = window.location.protocol;
    $.getJSON(
      c +
        "//my.meteoblue.com/packages/current?name=" +
        title +
        "&lat=" +
        lat +
        "&lon=" +
        lon +
        "&apikey=2402497da988&temperature=C&windspeed=ms-1&winddirection=degree&precipitationamount=mm&timeformat=iso8601&format=json&timeformat=Y-M-D",
      function (a) {
        var b = a.data_current.temperature.toString().split(".")[0],
          c = a.data_current.pictocode.toString().split(",")[0];
        switch (c) {
          case "1":
            title = "Sunny, cloudless sky";
            break;
          case "2":
            title = "Sunny and few clouds";
            break;
          case "3":
            title = "Partly cloudy";
            break;
          case "4":
            title = "Overcast";
            break;
          case "5":
            title = "Fog";
            break;
          case "6":
            title = "Overcast with rain";
            break;
          case "7":
            title = "Mixed with showers";
            break;
          case "8":
            title = "Showers, thunderstorms likely";
            break;
          case "9":
            title = "Overcast with snow";
            break;
          case "10":
            title = "Mixed with snow showers";
            break;
          case "11":
            title = "Mostly cloudy with a mixture of snow and rain";
            break;
          case "12":
            title = "Overcast with light rain";
            break;
          case "13":
            title = "Overcast with light snow";
            break;
          case "14":
            title = "Mostly cloudy with rain";
            break;
          case "15":
            title = "Mostly cloudy with snow";
            break;
          case "16":
            title = "Mostly cloudy with light rain";
            break;
          case "17":
            title = "Mostly cloudy with light snow";
        }
        parseInt(c) < 10 && (c = "0" + c.toString()),
          $(".info .temperature").html(
            '<span data-toggle="tooltip" data-placement="top" title="' +
              title +
              '" class="icon icon-' +
              c +
              '-iday"></span>' +
              b
          ),
          $('[data-toggle="tooltip"]').tooltip(),
          $(".city-info, .bottom-arrow").fadeIn("fast");
      }
    );
  }
  $(".main-content").is(".video-wrapper") &&
    (syncVideoWithMenu(),
    $(".main-content > .container-full:first")
      .height($(window).height())
      .show()),
    "function" == typeof $().videobackground &&
      ($(".mtw-puzzle").prepend('<div class="video-background"></div>'),
      $(".video-background").videobackground({
        videoSource: [
          ["/assets/video/jigsaw.mp4", "video/mp4"],
          ["/assets/video/jigsaw_falling.webm", "video/webm"],
          ["/assets/video/jigsaw.ogv", "video/ogg"],
        ],
        controlPosition: ".main-content",
        poster: "",
        loop: !1,
        autoplay: !1,
        resize: !1,
        resizeTo: $(".puzzle").parent(),
      }),
      setTimeout(function () {
        $(".video-background").videobackground("play"),
          setTimeout(function () {
            $(".video-background").videobackground("play");
          }, 0);
      }, 20)),
    "function" == typeof $().draggable &&
      $(function () {
        $(".mtw-the-character .lamp").draggable({
          axis: "y",
        }),
          $(
            ".mtw-the-character .ele, .mtw-the-character .ele-color, .mtw-the-character .erz, .mtw-the-character .ele-3"
          ).draggable();
      }),
    $(".job a").each(function () {
      if (void 0 != $(this).attr("data-city"))
        var a = $(this).attr("data-city");
      else var a = $(this).closest(".tab-pane").attr("data-city");
      var b = $(this).html();
      $(this).attr(
        "href",
        "mailto:careers@lateral-inc.com?subject=" + a + " - " + b
      );
    }),
    0 != $(".mtw-world").length &&
      ($(".baloon").jqFloat({
        width: 1e3,
        height: 600,
        speed: 7e3,
      }),
      $(".plane").jqFloat({
        width: 0,
        height: 100,
        speed: 3e3,
      }),
      $(".boat").jqFloat({
        width: 5,
        height: 5,
        speed: 1e3,
      })),
    initBoxAnimation(),
    navWrapper.length &&
      (navWrapper.find("a").on("click", function () {
        setTimeout(function () {
          animateProductsImages(), setHeightOnProductsBox();
        }, 100),
          $("html, body").animate(
            {
              scrollTop: navWrapperOffset,
            },
            600
          );
      }),
      animateProductsImages()),
    $(".map-marker.asia").on("click", function () {
      $(this).next(".map-maker-label").fadeIn();
    });
});

$(window).scroll(function () {
  navWrapper.length &&
    ($(window).scrollTop() >= navWrapperOffset
      ? (navWrapper.addClass("fixed"),
        tabWrapper.css("padding-top", $(".nav.tabs-small").height()))
      : (navWrapper.removeClass("fixed"), tabWrapper.css("padding-top", "0")),
    animateProductsImages()),
    $(".team-grid").is(":in-viewport") && !teamModuleInit && initTeamModule(),
    $(".beforeafter").prev("p").is(":in-viewport") &&
      ($(".beforeafter").stop().animate(
        {
          top: 0,
        },
        800
      ),
      mirroreffect ||
        ($("#container").stop().beforeAfter({
          imagePath: "/assets/img/",
        }),
        (mirroreffect = !0)),
      $(".beforeafter, .handledrag").mousedown(function () {
        $(".mirrorlabel").fadeOut();
      })),
    "function" == typeof $().videobackground &&
      $(".video-background").is(":in-viewport") &&
      setTimeout(function () {
        $(".video-background").hasClass("started") ||
          ($(".video-background").videobackground("play"),
          $(".video-background").addClass("started"));
      }, 1200),
    $(".mtw-the-character").length &&
      (characterLoaded ||
        ($(".mtw-the-character").is(":in-viewport") &&
          (setTimeout(function () {
            $(".mtw-the-character .ele-color").stop().animate(
              {
                right: "30%",
              },
              1e3
            );
          }, 1200),
          setTimeout(function () {
            $(".mtw-the-character .lamp").stop().animate(
              {
                top: -40,
              },
              2e3
            ),
              $(".mtw-the-character .light").show().stop().animate(
                {
                  top: -120,
                },
                2e3
              );
          }, 1200),
          (characterLoaded = !0)))),
    $(window).scrollTop() > $("#main-nav").height()
      ? $("body").addClass("scrolled")
      : $("body").removeClass("scrolled"),
    initBoxAnimation(),
    $(".extra-info").is(":in-viewport") &&
      (setTimeout(function () {
        $(".extra-info .title").addClass("zoomIn visible");
      }, 200),
      setTimeout(function () {
        $(".extra-info .i1").addClass("bounceInLeft visible");
      }, 500),
      setTimeout(function () {
        $(".extra-info .i2").addClass("bounceInRight visible");
      }, 800),
      setTimeout(function () {
        $(".extra-info .i3").addClass("bounceInLeft visible");
      }, 1100),
      setTimeout(function () {
        $(".extra-info .i4").addClass("bounceInRight visible");
      }, 1400)),
    $(".animated-section").parent().is(":in-viewport") &&
      ($(".animated-section:nth-child(1)").addClass("slideInLeft visible"),
      $(".animated-section:nth-child(2)").addClass("slideInUp visible"),
      $(".animated-section:nth-child(3)").addClass("slideInUp visible"),
      $(".animated-section:nth-child(4)").addClass("slideInRight visible")),
    $(".design-thinking").is(":in-viewport") &&
      ($(".design-thinking > .animated:nth-child(1)").addClass(
        "slideInLeft visible"
      ),
      $(".design-thinking > .animated:nth-child(2)").addClass(
        "slideInUp visible"
      ),
      $(".design-thinking > .animated:nth-child(3)").addClass(
        "slideInRight visible"
      ),
      $(".design-thinking .animate-img").each(function () {
        var a = $(this);
        setTimeout(function () {
          a.addClass("slideInDown visible");
        }, 300);
      })),
    $(".main-content").is(".page-design") &&
      $(window).scrollTop() > 0.33 * $(window).height() &&
      !$(".video-control").is(".invisible") &&
      !videoLoaded &&
      ((videoLoaded = !0), $(".btn-play").trigger("click")),
    $(".guideline-bg").is(":in-viewport") &&
      (guideLineLoaded ||
        ((guideLineLoaded = !0),
        setTimeout(function () {
          placeGuidelinesOnImage();
        }, 900)));
}),
  $(window).load(function () {
    if (
      (setPosterHeight(),
      $(".poster-overlay .trigger-home").height($(".poster-overlay").height()),
      $(".buttons").each(function () {
        if ($(this).is(".bottom")) {
          if ($(window).width() < 767)
            var a = $(".buttons.left").outerHeight(),
              b = 10;
          else
            var a = 0,
              b = 30;
          $(this).css("bottom", $(".poster-overlay").height() + b + a),
            $(this).is(".reset") &&
              $(this).css("bottom", $(".poster-overlay").height() + b + 65 + a);
        }
      }),
      setHeightOnThumbnails(),
      $(".main-content .animate-image").animate(
        {
          bottom: 0,
        },
        800
      ),
      $(".nav-tabs.styled-tabs").length)
    ) {
      navStyled = $(".nav-tabs.styled-tabs");
      var a = navStyled.parent().find(".styled-tabs li.active").width(),
        b = navStyled.parent().find(".styled-tabs li.active").position().left;
      animateNaviBorder(a, b),
        navStyled
          .find("li")
          .mouseenter(function () {
            var a = $(this).width(),
              b = $(this).position().left;
            animateNaviBorder(a, b);
          })
          .mouseleave(function () {
            if (!$(this).is(".active")) {
              var a = navStyled.parent().find(".styled-tabs li.active").width(),
                b = navStyled.parent().find(".styled-tabs li.active").position()
                  .left;
              animateNaviBorder(a, b);
            }
          });
    }
    setHeightOnProductsBox();
  }),
  $(window).resize(function () {
    setPosterHeight(),
      initPoster(),
      setHeightOnThumbnails(),
      showBottomArrow(),
      $(".main-content").is(".video-wrapper") &&
        $(".main-content > .container-full:first")
          .height($(window).height())
          .show(),
      setHeightOnProductsBox(),
      setHeightOnHomePortfolio(),
      placeGuidelinesOnImage();
  });
