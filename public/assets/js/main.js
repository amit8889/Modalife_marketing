"use strict";
!(function (p) {
  function m() {
    var e = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
        );
      },
    };
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".xs-header").addClass("sticky1");
    } else {
      $(".xs-header").removeClass("sticky1");
    }
  });
  $(".toggle-menu").click(function () {
    $(this).toggleClass("active");
    $("#menu").toggleClass("open");
  });
  //Filter team
  $("select#sort-recruiters").change(function () {
    var filter = $(this).val();
    filterList(filter);
  });

  // filter function
  function filterList(value) {
    var list = $(".recruiter .recruiter-info");
    $(list).hide();
    if (value == "All") {
      $(".recruiter")
        .find("article")
        .each(function (i) {
          $(this).show();
        });
    } else {
      // *=" means that if a data-custom type contains multiple values, it will find them
      $(".recruiter")
        .find("article[data-custom-type*=" + value + "]")
        .each(function (i) {
          $(this).show();
        });
    }
  }
  //end filter
  function h() {
    var i = p(".nav-sticky"),
      e = i.outerHeight(),
      a = p(document).scrollTop();
    p(window).on("load", function () {
      p(document).scrollTop() > e &&
        (i.hasClass("sticky-header")
          ? i.removeClass("sticky-header")
          : i.addClass("sticky-header"));
    }),
      p(window).on("scroll", function () {
        var e = p(document).scrollTop(),
          t = p(".sticky-header");
        a < e ? t.addClass("sticky") : t.removeClass("sticky"),
          "top" === t.attr("data-scroll-to") &&
            (e < a ? t.addClass("sticky") : t.removeClass("sticky")),
          0 === e
            ? (i.removeClass("sticky-header"), t.removeClass("sticky"))
            : i.addClass("sticky-header"),
          (a = p(document).scrollTop());
      });
  }

  function v() {
    p(".xs-logo").each(function () {
      var e = p(this).children().clone(),
        t = p(".nav-brand");
      991 < p(window).width()
        ? 0 < t.children().length && t.children().remove()
        : 0 === t.children().length && t.append(e);
    });
  }
  $(function () {
    $(".portfolio-slider")
      .slick({
        swipeToSlide: true,
        touchThreshold: 100,
        cssEase: "linear",
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: true,
        prevArrow: $(".test_prev"),
        nextArrow: $(".test_nxt"),
        speed: 1500,
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      })
      .on("afterChange", function (event, slick, currentSlide) {
        // Hide/show captions
        var thisSlide = slick.$slides[currentSlide];
        $(thisSlide).addClass("slick-current-active");
      })
      .on("beforeChange", function (event, slick, currentSlide) {
        // Hide/show captions
        var thisSlide = slick.$slides[currentSlide];
        $(".slick-cloned").removeClass("slick-current-active");
        $(thisSlide).removeClass("slick-current-active");
      });
    // best list
    $(".best-list").owlCarousel({
      dots: false,
      items: 1,
      nav: true,
      loop: true,
      navigationText: [
        "<i class='icon-chevron-left icon-white'><</i>",
        "<i class='icon-chevron-right icon-white'>></i>",
      ],
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><g><path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480     C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"></path> <path d="M219.2,116.8l-22.56,22.56L313.44,256L196.8,372.8l22.56,22.56l127.84-128c6.204-6.241,6.204-16.319,0-22.56L219.2,116.8  z"></path> </g></g></g></svg>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
    // rp-inner
    $(".rp-inner")
      .slick({
        cssEase: "linear",
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        focusOnSelect: true,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $(".Capa_video_left"),
        nextArrow: $(".Capa_video_right"),
        speed: 1000,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      })
      .on("afterChange", function (event, slick, currentSlide) {
        // Hide/show captions
        var thisSlide = slick.$slides[currentSlide];
        $(thisSlide).addClass("slick-current-active");
      })
      .on("beforeChange", function (event, slick, currentSlide) {
        // Hide/show captions
        var thisSlide = slick.$slides[currentSlide];
        $(".slick-cloned").removeClass("slick-current-active");
        $(thisSlide).removeClass("slick-current-active");
      });
  });
  function g() {
    var e = p(".bouble-slider-privew").outerHeight(!0),
      t = p(".bouble-slider-thumb .owl-stage-outer"),
      i = p(".bouble-slider-thumb .owl-stage-outer").outerWidth(!0),
      a = p(".bouble-slider-thumb .owl-stage");
    991 < p(window).width() &&
      (t.css("height", e), a.css("width", i), a.css("height", e));
  }
  var y = function () {
    var e = p(".xs-header");
    p(".xs-inner-banner .inner-banner").css("marginTop", e.outerHeight() / 2);
  };
  if (
    (p(window).on("load", function () {
      0 < p(".rp-inner").length && p(".rp-inner").myOwl({});
    }),
    // $('.nextBtn').click(function () {
    // 	owl.trigger('next.owl.carousel');
    // }),
    p(document).ready(function () {
      var e, t;
      m(),
        y(),
        (e = p(".timeline").children()),
        (t = (e.length - 1) * e.outerHeight()),
        p(".timeline").append(
          "<style>.timeline::before{height: " + t + "px}</style>"
        ),
        e.last().css("paddingBottom", "0"),
        h(),
        v(),
        g(),
        0 < p(".xs-menus").length &&
          p(".xs-menus").xs_nav({
            mobileBreakpoint: 992,
          }),
        0 < p(".xs-hidden-menus").length &&
          (p(".xs-hidden-menus").xs_nav({
            hidden: !0,
            offCanvasSide: "right",
          }),
          p(".offsetmenu-btn").on("click", function () {
            p(".xs-hidden-menus").data("xs_nav").toggleOffcanvas();
          })),
        0 < p(".xs-video-popup").length &&
          p(".xs-video-popup").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
          }),
        0 < p(".close-side-widget").length &&
          p(".close-side-widget").on("click", function (e) {
            e.preventDefault(), p(".cart-group").removeClass("isActive");
          }),
        0 < p(".navSidebar-button").length &&
          p(".navSidebar-button").on("click", function (e) {
            e.preventDefault(),
              e.stopPropagation(),
              p(".info-group").addClass("isActive");
          }),
        0 < p(".close-side-widget").length &&
          p(".close-side-widget").on("click", function (e) {
            e.preventDefault(), p(".info-group").removeClass("isActive");
          }),
        p("body").on("click", function (e) {
          p(".info-group").removeClass("isActive"),
            p(".cart-group").removeClass("isActive");
        }),
        p(".xs-sidebar-widget").on("click", function (e) {
          e.stopPropagation();
        });
      var a = window.location.pathname,
        o = a.substr(a.lastIndexOf("/") + 1);
      if (
        p(".nav-menu li a").each(function (e, t) {
          var i = this.href.substr(this.href.lastIndexOf("/") + 1);
          o == i &&
            (p([t]).addClass("active"),
            p([t]).parents().closest(".nav-submenu").parent("li") &&
              p([t])
                .parents()
                .closest(".nav-submenu")
                .parent("li")
                .addClass("active"),
            p([t]).parent().addClass("active"));
        })
      );
      if (
        (p("body").on("click", ".fullscreen_menu_tigger", function (e) {
          e.preventDefault(),
            p(this).toggleClass("open"),
            p(".offcanvas-menu-wraper").toggleClass("active"),
            p(".off-canvas-menu-area").toggleClass("nav-is-open");
        }),
        p(".off-canvas-menu-area").append('<div class="menu-overlay"></div>'),
        0 < p(".portfolio-testimonial-slider").length)
      ) {
        var f = p(".portfolio-testimonial-slider");
      }
    }),
    p(window).on("resize", function () {
      y(), v(), g();
    }),
    0 < p("#xs-map").length)
  ) {
  }
})(jQuery);
